// RecipeContext.js
import React, { createContext, useState } from 'react';

const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (recipeId) => {
    if (!favorites.includes(recipeId)) {
      setFavorites([...favorites, recipeId]);
    }
  };

  return (
    <RecipeContext.Provider value={{ favorites, addFavorite }}>
      {children}
    </RecipeContext.Provider>
  );
};

export { RecipeContext, RecipeProvider };
