import React, {useState} from "react"
import './App.css';
import DisplaySources from "./components/DisplaySources"
import DisplayHeadlines from "./components/DisplayHeadlines"

// 09dcb900468a40dc8bb2f61b10468a20



function App(props) {

  
  const [newsSources, setNewsSources] = useState([])

  // useEffect(() => {
  // const showHeadlines = (id) => {
  //   setNewsSources(id)
   
  // }
  // })

 
  return (
    <div >
      <DisplaySources />
    {/* <DisplaySources onSelect={showHeadlines}/> */}
    {/* <DisplayHeadlines id={newsSources} /> */}
    </div>
  );
}

export default App;
