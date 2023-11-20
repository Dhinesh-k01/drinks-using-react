import React, { useContext, useEffect, useState } from 'react';
import { useCallback } from 'react';

// API
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [cocktail, setCocktail] = useState([]);

  // fetching an API
  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktail(newCocktails);
      } else {
        setCocktail([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  // set useEffect for fetchDrinks because each time we render the page we need to control the rendering

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);

  return (
    <AppContext.Provider value={{ loading, cocktail, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

// make sure to use "use" for naming functions
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
