import * as actionTypes from "./actionTypes"

export const addToCart = (books) => {
    return {
        type: actionTypes.ADD_TO_CART, 
        payload: books
    }
}

export const loggedIn = () => {
    return {type: "LOGGED_IN"}
}

export const addToFavorites = (favorite) => {
    return {
        type: actionTypes.ADD_TO_FAVORITES, 
        payload: favorite
    }
}