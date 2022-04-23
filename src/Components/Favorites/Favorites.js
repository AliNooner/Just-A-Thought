import React from 'react';
import './Favorites.css';
import FavoriteCard from '../FavoriteCard/FavoriteCard';


const Favorites = ({favorites}) => {
  const favoriteCards = favorites.map(fave => {
    return (
        <FavoriteCard fave={fave.singleAdvice}/>
    )
  })
  return <div className='favorite-cards'>
    {!favorites.length && <h3 className='no-saved'>You have no favorites</h3>}
    {favoriteCards}
  </div>
}




export default Favorites;
