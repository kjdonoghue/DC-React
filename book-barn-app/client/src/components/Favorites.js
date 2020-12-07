import React from "react"
import {connect} from "react-redux"


function Favorites(props) {

    let bookItem = props.booksInFavorites.map(book => {
        return <li key ={book.index}>{book.title}</li>
    })

    return(
        <div>
            <h1>Favorite Books</h1>
            <ul>{bookItem}</ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        booksInFavorites: state.favoritesReducer.favorites
    }
}

export default connect(mapStateToProps)(Favorites)