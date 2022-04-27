import React, { useEffect, useState } from 'react';

import mockedData from '../data.json';
import api from './utils/api';

import Logo from './components/Logo';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { List } from './components/List';
import { Search } from './components/Search';
import { PracticeContainer } from './practice/PracticeContainer';
import { Info } from './components/info';

import './index.css';

export const App = () => {
    const [foodList, setFoodList] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [basket,setBasket] = useState(JSON.parse(localStorage.getItem("basket")) || [])
    const [favorite,setFavorite] = useState(JSON.parse(localStorage.getItem("favorite")) || [])
    const [user, setUser] = useState(null)
    console.log(user);
    const handleChangeSearchInput = (value) => {
        setSearchQuery(value);
    };
 
    useEffect(()=>{
        api.getCurentUser()
        .then((user)=>setUser(user))
    },[])

    useEffect(() => {
       api.search(searchQuery).then((list) => setFoodList(list))
    }, [searchQuery]);

    return (
        <div className='appContainer'>
            <Header>
                <Logo />
                <Search setQuery={handleChangeSearchInput} />
                <Info basket={basket} favorite={favorite} user={user}/>
            </Header>
            <div className='content container'>
                <div className='content__cards'>
                    <List 
                    list={foodList} 
                    basket={basket} 
                    setBasket={setBasket} 
                    favorite={favorite} 
                    setFavorite={setFavorite}/>
                </div>
            </div>
            <Footer />
            {/* <PracticeContainer /> */}
        </div>
    );
};

// const filterFoodList = (searchQuery) => {
//     const filteredList = foodList?.filter(({ name }) => name.includes(searchQuery));
//     setFoodList(filteredList);
// };

// useEffect(() => {
//     api.getProducts()
//         .then(({ products }) => setFoodList(products))
//         .catch((err) => err.message);
// }, []);