import React from 'react';
import style from './recipe.modele.css'


const Recipe= ({title,calories,image,ingredients})=> {
    return (
        <div className={style.Recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingrediente => (
                <li> {ingrediente.text} </li>
                ))}
             </ol>
            <h2>{calories}</h2>
            <img src={image} alt=""/>
        </div>
    )

}
export default Recipe