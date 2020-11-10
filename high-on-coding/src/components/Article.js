import React, {Component} from 'react'
import "./Article.css"

class Article extends Component {
    render() {
        let articleItems = this.props.listOfArticles.map((article, index) => {
            return ( 
                <div key={index} className = "articleDiv">
                    <h2>{article.title}</h2>
                    <p>{article.text}</p>
                    <div className="commentDiv">
                        <label>{article.comments} comments</label>
                        <label>{article.likes} likes</label>
                    </div>
                </div>
        )})
        return ( 
            articleItems
        )
    }
}

export default Article