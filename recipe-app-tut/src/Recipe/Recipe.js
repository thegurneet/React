import React from 'react';
import style from './Recipe.module.css'

const Recipe = ({title,calories,image,ingredients}) => {
    return(
        <div className={style.recipe}> 
            <h1>  {title} </h1>
            <img src={image} alt=""/> 
            <p> Calories: {calories} </p>
            <ol>
                {ingredients.map(ingredient =>(
                    <li> {ingredient.text}</li>
                ))}
            </ol>
        </div> 
    )
}

export default Recipe;