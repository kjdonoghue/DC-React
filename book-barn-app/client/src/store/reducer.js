
const initalState = {
    cart: [],
    itemCount: 0,
    isAuthenticated: false, 

}

const reducer = (state = initalState, action) => {
    if (action.type === "ADD_TO_CART") {        
        return {...state,
            cart: [...state.cart, action.payload],
            itemCount: state.itemCount + 1
        }

    } else if (action.type === "LOGGED_IN") {
        return {...state,
            isAuthenticated: true
        }

    } else if(action.type === "LOGGED_OUT") {
        return {...state,
            isAuthenticated: false}

     }
    
    
    else {
        return state
    }
}

export default reducer