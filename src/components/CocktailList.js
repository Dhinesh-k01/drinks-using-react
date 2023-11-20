import React from 'react';
import Cocktails from './Cocktails';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const CocktailList = () => {
  // import props name "cocktail,loading" from context.js
  const { cocktail, loading } = useGlobalContext();
  // if condition for loading page, during app loading
  if (loading) {
    return <Loading />;
  }
  // checking the cocktail list length
  if (cocktail.length < 1) {
    return (
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>
    );
  }

  return (
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {cocktail.map((item) => {
          return <Cocktails key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
