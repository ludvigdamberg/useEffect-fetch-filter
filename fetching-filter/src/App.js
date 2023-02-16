import React from "react";
import { useState, useEffect } from "react";




function App() {


const [search,setSearch] = useState('')
const [nameList, setNameList] = useState([]);
const url = 'https://pokeapi.co/api/v2/pokemon?limit=500'

  
  useState(() =>{
  fetch(url)
  .then(res => res.json())
  .then(data => setNameList(data.results))


 
}, [])
  return (
   <div>
  <input type="text" placeholder="Search for a pokemon" onChange={((e) => setSearch(e.target.value))}/>
  {nameList.filter((item) => {
      if(search === ""){
        return item
      }else if(item.name.toLowerCase().includes(search.toLowerCase())){
        return item
      }
   
  }).map((item)=>{
      return(
        <div key={item.id}>{item.name}</div>
      )
    })}
   </div>
  );
}

export default App;
