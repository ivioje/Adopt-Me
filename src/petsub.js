import React from 'react';

const Petsub = ({name,color,breed}) => {
  return (
    <div>
      <h2>Name:{name}</h2>
      <h3>Color:{color}</h3>
      <h3>Breed:{breed}</h3>
    </div>
  )
}
export default Petsub;
