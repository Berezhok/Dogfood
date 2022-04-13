import React, { useEffect, useState } from 'react';

import mockedData from '../data.json';
import Logo from './components/Logo';
import { Search } from './components/Search';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { List } from './components/List';
import './index.css';
import { PracticeContainer } from './practice/PracticeContainer';


export const App = () => {
    const [foodList, setFoodList] = useState(mockedData);
    const [inputValue, setIntputValue] = useState('');
    
     const handleChange = (event) => {
         const {
             target: { value }
         } = event;
         setIntputValue(value);
        }
        const filterFoodList =(inputValue) =>{
        const filterList = mockedData.filter(({ name }) => name.includes(inputValue));
        setFoodList(filterList);
    }
    useEffect(()=>{
         filterFoodList(inputValue);
    },[inputValue]);  
     
    
    return (
        <div className='appContainer'>
                <Header >
                    <Logo/>
                    <Search handleChange={handleChange}/>
                </Header >
            <div className='content container'>
                <div className='content__cards'>
                    <List list={foodList} />
                </div>
            </div>
            <Footer />
            {/* <PracticeContainer /> */}
        </div>
    );
};
