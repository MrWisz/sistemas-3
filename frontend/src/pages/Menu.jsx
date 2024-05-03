import { Grid, Paper, Avatar, Button, AppBar, Container, Toolbar, ImageList, ImageListItem } from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";

const imageData = [
{
    img:'src/assets/services/service-1.jpg',
    title:'1'
},
{
    img:'src/assets/services/service-2.png',
    title:'2'
},
{
    img:'src/assets/services/service-3.png',
    title:'3'
}
];
const botonAdmin = ({rol})=>{
    return(
        <>
        {rol==='A' && <Button variant="outlined" sx={{margin:1}} color="success"
        onClick={()=>{console.log(usuario.rol,usuario.id_usuario)}}>
        Ver Test y generar planes
        </Button>}
        </>
    );
}

const Menu = ()=>{
    let location = useLocation();
    const {correo} = location.state;
    const paperStyle = {padding:20, height:'100vh', width:1200, margin:'40px auto', backgroundColor:'white'};
    const avatarStyle = {backgroundColor:'white'};
    const navigate = useNavigate();
    const [usuario, setId] = useState({id_usuario:"", rol:''});

    const validEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
     );
    const obtenerUsuario = async()=>{
        if (validEmail.test(correo)) {
            const res = await fetch(`http://localhost:4000/usuario/${correo}`,{headers:{ "Content-Type": "application/json" }});
            const data = await res.json();
            const { id_usuario, rol } = data;
            setId({id_usuario:id_usuario, rol:rol});
        }
    }
    
    useEffect(()=>{
        obtenerUsuario();
    },[]);
    return(
        <Grid>
            
            <AppBar color="inherit">
            <Container>
                <Toolbar>
                <Avatar style={avatarStyle} alt="Logo" src="src/assets/nutrition.png" sx={{ width: 56, height: 56 }}/>

                <Button variant="outlined" sx={{margin:1}} color="success"
                onClick={()=>{navigate('/testnutricional',{state:{correo:correo}})}}>
                Test nutricional
                </Button>
                <Button variant="outlined" sx={{margin:1}} color="success"
                onClick={()=>{console.log(usuario.rol,usuario.id_usuario)}}>
                Ver plan nutricional
                </Button>
                <Button variant="outlined" sx={{margin:1}} color="success"
                onClick={()=>{navigate('/gestionarusuario',{state:{correo:correo}})}}>
                Gestionar Usuario
                </Button>
                <Button variant="outlined" sx={{margin:1}} color="success"
                onClick={()=>{console.log(usuario.rol,usuario.id_usuario)}}>
                Seguimiento de estado
                </Button>
                {botonAdmin({rol:usuario.rol})}
                <Button variant="outlined" sx={{margin:1}} color="error"
                onClick={()=>{navigate('/')}}>
                Salir
                </Button>
                </Toolbar>
            </Container>
            </AppBar>
            <Paper elevation={3} style={paperStyle}>
                <ImageList cols={3}>
                {imageData.map((item) => (
                <ImageListItem key={item.img}>
                <img
                srcSet={`${item.img}?w=100&h=100&fit=crop&auto=format&dpr=2`}
                src={`${item.img}?w=100&h=100&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                />
                </ImageListItem>
                ))}
                </ImageList>
            </Paper>
        </Grid>
    )
}
export default Menu