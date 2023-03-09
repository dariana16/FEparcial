import React from 'react'



const Card = ({nombre, appFavorita}) => {
  return (
    <div className='card' >
      <h3>Hola! {nombre} Gracias por contarnos que tu app favorita es </h3>
      <h4>{appFavorita}</h4>
    </div>
  );
}

export default Card;
