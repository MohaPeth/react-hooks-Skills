import React from 'react';

const Filter = ({ titleFilter, setTitleFilter, ratingFilter, setRatingFilter }) => {
  return (
    <div>
      {/* Filtre par titre */}
      <input
        type="text"
        placeholder="Filtrer par titre"
        value={titleFilter}
        onChange={e => setTitleFilter(e.target.value)}
      />

      {/* Filtre par note (rating) */}
      <select
        value={ratingFilter}
        onChange={e => {setRatingFilter(Number(e.target.value))
        console.log('selectValue:',e.target.value);        }}
      >
        <option value={-1}>Toutes les notes</option>
        <option value={1}>1 étoile et plus</option>
        <option value={2}>2 étoiles et plus</option>
        <option value={3}>3 étoiles et plus</option>
        <option value={4}>4 étoiles et plus</option>
        <option value={5}>5 étoiles</option>
        <option value={6}>6 étoiles</option>
        <option value={7}>7 étoiles</option>
        <option value={8}>8 étoiles</option>
      </select>
    </div>
  );
};

export default Filter;
