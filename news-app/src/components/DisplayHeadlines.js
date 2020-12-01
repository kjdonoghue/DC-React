import React, { useState, useEffect } from "react"


function DisplayHeadlines(props) {

    console.log(props)

    let url = "https://newsapi.org/v2/top-headlines?sources=" + props.id + "&apiKey=09dcb900468a40dc8bb2f61b10468a20"

    const[headlines, setHeadlines] = useState([])


    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(result => {
            setHeadlines(result.articles)
        })
    }, [])

    // const article = headlines.map(news => {
    // return <li key={news.index}>{news.title}</li>
    // })
  

    return (
        <div>
            <h1>Headlines</h1>
            {/* <ul>{article}</ul> */}
        </div>
    )
}

export default DisplayHeadlines