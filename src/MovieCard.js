import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <div className="card card-side bg-base-100 shadow-xl" style={{  width: "30rem", margin: "10px" }}>
                <figure style={{ maxHeight: '300px', overflow: 'hidden' }}> {/* Limitez la hauteur de l'image et faire tout pour déborde pas*/}
                    <img src={movie.posterURL} alt={movie.title} style={{ width: '100%', height: 'auto' }} /> {/* Remplir le conteneur */}
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{movie.title}</h2>
                    <p>{movie.description}</p> 
                    <div className="card-actions justify-end">
                        <p>Rating: {movie.rating}/10</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
