import { createContext, useState } from 'react';

const FavoriteContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavoriteHandler: favoriteMeetup => {},
    removeFavoriteHandler: meetupId => {},
    isItemFavoriteHandler: meetupId => {}
}); 


export function FavoriteContextProvider(props){
    const [userFavorites,setUserFavorites] = useState([]);
    function addFavoriteHandler(favoriteMeetup){
        setUserFavorites((prevUserFavorites) =>{
            return prevUserFavorites.concat(favoriteMeetup);
        });}
    
    function removeFavoriteHandler(meetupId){
        setUserFavorites((prevUserFavorites)=>{
            return prevUserFavorites.filter((meetup)=>meetup.id !== meetupId);
        });
    }

    function isItemFavoriteHandler(meetupId){
        return userFavorites.some(meetup => meetup.id === meetupId);
    }
    
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavoriteHandler: addFavoriteHandler,
        removeFavoriteHandler: removeFavoriteHandler,
        isItemFavoriteHandler: isItemFavoriteHandler
    };
    


    return <FavoriteContext.Provider value={context}>{props.children}</FavoriteContext.Provider>
}

export default FavoriteContext; 