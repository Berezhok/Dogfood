import React from 'react'

export const Info = ({basket,favorite,user}) => {
    console.log(user);
  return (
    <div>
        <div>Лайки {favorite.length}</div>
        <div>корзина {basket.length}</div>
        <div>Пользователь {user?.name}</div>
    </div>
  )
}
