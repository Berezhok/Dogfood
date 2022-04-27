import React from 'react';
import {Card as CardMui, linkClasses} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import api from '../../utils/api';

const theme = createTheme({
  palette: {
    primary: {
      main: "#fed700",
    },
    secondary: {
      main: "#ff0000"
    }
}
});



export const Card = ({ itemFood, isInBasket, setBasket, isInFavorite, setFavorite }) => {

    const writeLS = (key,value) => {
      const storage = JSON.parse(localStorage.getItem(key)) || []
      storage.push(value)
      localStorage.setItem(key,JSON.stringify(storage))
    }

    const removeLS = (key,value) => {
      const storage = JSON.parse(localStorage.getItem(key))
      const removeStorage = storage.filter((itemID) => value !== itemID )
      localStorage.setItem(key,JSON.stringify(removeStorage))
    }


  const addItem = () => {
    writeLS("basket",itemFood._id)
    setBasket((prevState) => [...prevState,itemFood._id])
  }
    

  const removeItem = () => {
    removeLS("basket",itemFood._id)
    setBasket((prevState) => prevState.filter((itemID) => itemFood._id !== itemID ))
  }
    

  const addFavorite = () => {
    writeLS("favorite",itemFood._id)
    setFavorite((prevState) => [...prevState,itemFood._id])
    api.addLike(itemFood._id).then((addedItem)=>
      alert(`${addedItem.name} в избранном`))
      .catch(()=>
        alert(`не добавлен`)
      )
  };

  const removeFavorite = () => {
    removeLS("favorite",itemFood._id)
    setFavorite((prevState) => prevState.filter((itemID) => itemFood._id !== itemID ))
    api.deleteLike(itemFood._id).then((removedItem)=>
    alert(`${removedItem.name} удален из избранного`))
    .catch((err)=>
      alert(` не удален`)
    )
};
  
  
    return( 
        <ThemeProvider theme={theme}>
    <CardMui sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      
      image={itemFood.pictures}
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
      {isInBasket ? (<Button onClick={removeItem} size="small" variant="contained" color="secondary">
        Удалить из корзины
        </Button>)
      :
      (<Button onClick={addItem} size="small" variant="contained" color="primary">
        В корзину
        </Button>)
    }
    <div style={{displat:"flex"}}>
      <div>
      {isInFavorite ? 
      ( <IconButton aria-label="add to favorites" onClick={removeFavorite}>
         <FavoriteIcon />
        </IconButton>
        ):
        ( 
        <IconButton aria-label="add to favorites" onClick={addFavorite}>
          <FavoriteBorderOutlined />
        </IconButton>)}
      </div>
      <div>{likes.length}</div>

    </div>
    </CardActions>
  </CardMui>
  </ThemeProvider>
    )
};

