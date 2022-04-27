import { Favorite } from '@mui/icons-material';
import React from 'react';
import { Card } from '../Card';
import './index.css';

export const List = ({ list , basket, setBasket,favorite, setFavorite}) => {
    
    return (
        <div className="cards">
            {list?.map((item, i) => (
                <Card 
                key={item._id} 
                itemFood={item} 
                isInBasket={basket.includes(item._id)} 
                isInFavorite={favorite.includes(item._id)} 
                setBasket={setBasket}
                setFavorite = {setFavorite}  />
            ))}
        </div>
    );
};
