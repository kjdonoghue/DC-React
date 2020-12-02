import * as actionTypes from "../actions/actionTypes"

const initalState = {
    cart: [],
    itemCount: 0,
}

const reducer = (state = initalState, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            return {...state,
                cart: [...state.cart, action.payload],
                itemCount: state.itemCount + 1
            }
        default: 
            return state
    }
}

export default reducer