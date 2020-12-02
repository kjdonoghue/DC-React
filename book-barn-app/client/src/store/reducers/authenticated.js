const initalState = {
    isAuthenticated: false, 
}

const reducer = (state = initalState, action) => {
    if (action.type === "LOGGED_IN") {
        return {...state,
            isAuthenticated: true
        }

    } else if(action.type === "LOGGED_OUT") {
        return {...state,
            isAuthenticated: false
        }
      
     } else {
        return state
    }
}

export default reducer