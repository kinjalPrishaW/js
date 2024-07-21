// RecipeList.js
import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import recipesData from '../data/recipes.json';
import SearchBar from './SearchBar';
import { RecipeContext } from '../RecipeContext';
import '../index.css'; // Correct path to index.css

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);
  const { addFavorite } = useContext(RecipeContext);

  useEffect(() => {
    setRecipes(recipesData);
    searchInputRef.current.focus();
  }, []);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  const handleAddFavorite = (recipeId) => {
    addFavorite(recipeId); // Add recipeId to favorites
  };

  return (
    <div>
      <h1>Recipe List</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} searchInputRef={searchInputRef} />
      <ul className="recipe-list">
        {filteredRecipes.map(recipe => (
          <li key={recipe.id} className="recipe-item">
            <div className="recipe-info">
              <Link to={`/recipe/${recipe.id}`} className="recipe-name">{recipe.name}</Link>
            </div>
            <button className="add-to-favorites" onClick={() => handleAddFavorite(recipe.id)}>Add to Favorites</button>
          </li>
        ))}
      </ul>
      <Link to="/Favorites">View All Favorite Recipes</Link>
    </div>
  );
}

export default RecipeList;
