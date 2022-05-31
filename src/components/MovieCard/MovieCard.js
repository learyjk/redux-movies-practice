import React from 'react';

const MovieCard = (props) => {
  const { data } = props;
  return (
    <div className='cart-item'>
      <div className='card-innet'>
        <div className='card-top'>
          <img src={data.Poster} alt={data.Title} />
        </div>
        <div className='card-bottom'>
          <div className='card-info'>
            <h4>
              {data.Title}
            </h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;