import React, {useState, useEffect} from "react"

function DisplaySources(props) {

    const [newsSources, setNewsSources] = useState([])

    useEffect(() => {
      fetch("https://newsapi.org/v2/sources?apiKey=09dcb900468a40dc8bb2f61b10468a20")
      .then(response => response.json())
      .then(result => {
        setNewsSources(result.sources)
      })
  }, [])

  // const showHeadlines = (id) => {
  //       props.onSelect(id)
  // }
  
  
    const newsItem = newsSources.map(source => {
          // return <li key={source.id} onClick={()=>showHeadlines(source.id)}>
          return <li key={source.id}>
            {source.name}
          </li>
      })
  
    return (
      <div className="App">
        <h1>News Sources</h1>
        <ul>{newsItem}</ul>
      </div>
    );
  }

export default DisplaySources