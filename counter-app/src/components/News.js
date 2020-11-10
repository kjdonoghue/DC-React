import React, {Component} from 'react'


class News extends Component {

    render() {

        const newsItems = this.props.news.map(article => {
            return <li key={article.index}>
                Title: {article.title}
            

            
            </li>
        })


        return <ul>{newsItems}</ul>
        // return<li></li>
    }
}


export default News