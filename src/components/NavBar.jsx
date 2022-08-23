import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import image from '../assets/images/Optimus.png'
import Card from '@mui/material/Card';

function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">        
        <Toolbar>
          <Typography variant="h6" align="left" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <IconButton
            size="small"
            edge="start"
            align="right"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
function Header() {

  const optimus = image;

  return (
    <div sx={{ flexGrow: 1 }}>
      <div>
        {/* <Typography variant="h4" marginY="60px" color="white" textAlign="center"> GUARDIANES DE QUIJANO </Typography> */}
        <h1> GUARDIANES DE QUIJANO </h1>
        <Typography variant="subtitle1" color="white" textAlign="center"> DESDE EL PORTAL DE LOS ANDES </Typography>
        <img src={optimus} alt="Transformer" style={{width: '714px', marginLeft: '-170px'}} width="600px"/>
      </div>
    </div>
  )
}

function Quote() {
  return (
    <div>
    <Card> 
      <Typography variant="h2" color="grey" textAlign="left" fontFamily="Helvetica">" Hola mundo</Typography>
    </Card>
    </div>
  )
}

export default function Page(){
  return (
    <div>
      <ButtonAppBar/>
      <Header />
      <Quote />
    </div>
  )
}