import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipes';
import Axios from 'axios';
require('dotenv').config()


console.log(process.env)
function App() {
  
  const [search,setSearch] = useState('desserts')
  const [recipes,setRecipes] = useState([]);

  useEffect(()=>{
    getRecipes()
  },[])
  
  const APP_ID = '2cdd6c43';
  const APP_KEY = '616cfd46cd8e782cf68f148609b2fc8e';

  const getRecipes = async ()=>{
    const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    setRecipes(res.data.hits)
  }

  const onInputChange = (event) =>{
    setSearch(event.target.value)
  }

  const onSearchClick = ()=>{
    getRecipes()
  }

  return (
    <div className="App">
        <Header search={search} onInputChange={onInputChange} onSearchClick={onSearchClick}/>
        <div className="container"><Recipes recipes={recipes} /></div>
    </div>
  );
}

export default App;
