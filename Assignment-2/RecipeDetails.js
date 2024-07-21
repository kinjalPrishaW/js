import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import recipesData from '../data/recipes.json';
import { RecipeContext } from '../RecipeContext';

function RecipeDetails() {
  const { id } = useParams();
  const recipe = recipesData.find((recipe) => recipe.id === parseInt(id));
  const { favorites, toggleFavorite } = useContext(RecipeContext);

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div>
      <h1>{recipe.name}</h1>
      <p>{recipe.details}</p>
      <p>{recipe.instructions}</p>
      <p>{recipe.ingredients}</p>
      <p>{recipe.prepTime}</p>
      <p>{recipe.cookTime}</p>
      <p>{recipe.servings}</p>
      <p></p>
      <button onClick={() => toggleFavorite(recipe.id)}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
}

export default RecipeDetails;

