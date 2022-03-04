import React from 'react'
import {useState} from 'react'

import '../styles/App.css';







const App = () => {
const [data,setData]= useState();
const searchArray = ["Newton", "School", "Newton School", "React", "Preact", "Node", "Mongoose", "Angular", "Vue", "Apple", "Microsoft", "Netflix", "Meta"]
const search = (e) =>{
  setData(e.target.value)
}
  
  return (
    <div id="main">
    <h4>{searchArray}</h4>
    <h4>{data}</h4>
    <h3>search bar</h3>
      <input type="input" value={search} />
    </div>
  )
}


export default App;
