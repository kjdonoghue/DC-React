import React from "react"
import {connect} from "react-redux"

function ShoppingCart(props) {

    console.log(props)

    let bookItem = props.booksInCart.map(book => {
        return <li key={book.id}>{book.title} </li>
    })

    return (
        <div>
            <h1>Cart</h1>
            <ul>{bookItem}</ul>

        </div>

    )

}    

const mapStateToProps = (state) => {
    return {
       booksInCart: state.cart 
    }
}

export default connect(mapStateToProps)(ShoppingCart)