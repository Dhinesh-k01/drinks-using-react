import React, { useRef, useEffect } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  // props for "setSearchItem" from context.js
  const { setSearchTerm } = useGlobalContext();

  // creating useRef for uncontrolled input
  const searchValueName = useRef('');

  // it will focus the search bar
  useEffect(() => {
    searchValueName.current.focus();
  }, []);

  // searchCocktail function
  const searchCocktail = () => {
    setSearchTerm(searchValueName.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            id='name'
            name='name'
            ref={searchValueName}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
