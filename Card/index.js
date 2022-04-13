import React from 'react';
import {Card as CardMui} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: "#fed700",
    },
}
});



export const Card = ({ itemFood }) => {
    return( 
        <ThemeProvider theme={theme}>
    <CardMui sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      
      image={itemFood.picture}
      alt={itemFood.name}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {itemFood.price} р
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {itemFood.name}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" variant="contained" color="primary">В корзину</Button>
      
    </CardActions>
  </CardMui>
  </ThemeProvider>
    )
};
