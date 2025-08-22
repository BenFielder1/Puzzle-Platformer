//importing libraries
// import React from 'react'
import ReactDOM from 'react-dom/client'

import App from "./app"

//importing the game
import Game1 from "./game1"
import Game2 from "./game2"

//the css used on the webpage
import "./index.css"

//Rendering the game to the webpage
// ReactDOM.render(
//   <div><App /><Game1 /><Game2 /></div>,
//   document.getElementById('root')
// )

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div><App /><Game1 /><Game2 /></div>
);