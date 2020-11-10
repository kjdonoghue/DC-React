import React, {Component} from 'react'
import Menu from './components/Menu'
import Lead from './components/Lead'
import Article from './components/Article'

let watchKitText = "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch."
let swiftText = "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started."

let articleList = [
  {title:"Hello WatchKit", text: watchKitText, comments: 12, likes: 124}, 
  {title:"Introduction to Swift", text: swiftText, comments: 15, likes: 45} 
]

class App extends Component {
  render() {
    return (
    <div>
      <Menu/>
      <Lead/>
      <Article listOfArticles = {articleList} />
  </div>
  )
  } 
}


export default App;
