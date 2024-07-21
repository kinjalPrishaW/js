// Favorites.js
import React, { useContext } from 'react';
import { RecipeContext } from '../RecipeContext';
import recipesData from '../data/recipes.json';
import { Link } from 'react-router-dom';

function Favorites() {
  const { favorites } = useContext(RecipeContext);

  // Filter favorite recipes based on favorites array
  const favoriteRecipes = recipesData.filter(recipe => favorites.includes(recipe.id));

  return (
    <div>
      <h1>Favorite Recipes</h1>
      <ul>
        {favoriteRecipes.length > 0 ? (
          favoriteRecipes.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
            </li>
          ))
        ) : (
          <p>No favorite recipes yet!</p>
        )}
      </ul>
    </div>
  );
}

export default Favorites;
