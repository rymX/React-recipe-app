import React , {useEffect,useState} from 'react';
import Recipe from './recipe'

import './App.css';



const App = ()=>
{
  const APP_ID='7781727e';
  const APP_KEY='0479edd4de6de7cab4f29478bbe5d5c4';


  const [recipes, setRecipes]= useState([]);
  const [search, setSearch]= useState('');
  const [query , setQuery]= useState('limon');

  useEffect( ()=>{
    getrecipe(); 
  },[query] )

   const getrecipe = async ()=>{
    const responces = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await responces.json();

    setRecipes(data.hits);
    if (!Object.label(data).length){console.log('empty')}

    console.log(data.hits);
  }

  const upDateSearch = e => {
    setSearch(e.target.value);

    

  }
const getQuery = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
}


  return(
  <div className="App">
    <form className="forme" onSubmit={getQuery} >
      <input className="input" type="text" value={search} onChange={upDateSearch} ></input>
      <button className="btn" type="submit"> search</button>
    
    </form>
    <div className="liste">
    {
    recipes.map(recipe => (
      <Recipe  key={recipe.recipe.label}
       title={recipe.recipe.label}
       calories={recipe.recipe.calories} 
       image={recipe.recipe.image} 
       ingredients ={recipe.recipe.ingredients}/>

    ))}</div>
  </div>
  );
};
export default App;
