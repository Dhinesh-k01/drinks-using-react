import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h3>
          "OOPS!"it's a <i>Dead End</i> :(
        </h3>
        <Link to='/' className='btn btn-primary'>
          back to Home :)
        </Link>
      </div>
    </section>
  );
};

export default Error;
