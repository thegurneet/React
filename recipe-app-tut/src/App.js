import React,{useEffect, useState} from 'react';
import Recipe from './Recipe/Recipe';
import './App.css';

function App() {



  const [recipes, setRecipes] = useState([]);
  const [search,setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  const APP_ID = "b0f6d6df";
  const APP_KEY= "b261117b85bb69f00116e64c99b1a916";
  const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

   useEffect( () => {
      getRecipes();
    },[query]);


    const getRecipes = async () =>{
      const response = await fetch(exampleReq);
      const data = await response.json();
      console.log(response);
      console.log(data.hits)
      setRecipes(data.hits)
      console.log(query)
    }

    const updateSearch = event => {
      setSearch(event.target.value)
      console.log(search)
    };

    const getSearch = event =>{
      event.preventDefault();
      setQuery(search);
      setSearch(' ')
    }

  return (
    <div className="App">

      <form onSubmit={getSearch} className="search-form"> 
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit"> Search </button>  
      </form>

      
      {recipes.map(r =>(
       <div className="recipes"> 
         <Recipe
          key = {r.recipe.label}
          title={r.recipe.label} 
          calories={r.recipe.calories} 
          image={r.recipe.image}
          ingredients={r.recipe.ingredients}/>
       </div>
       
  
      ))}
      


    </div>
  );



}

export default App;
