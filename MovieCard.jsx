import React from "react";

const MovieCard = ( {movie} ) =>{
    return(
            <div className='movie'>

                <div>
                       <p>{movie.Year}</p>
                </div>

                <div>
                    <p> <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https:/placeholder.com/400'} alt={movie.Title} /> </p>
                </div>

                <div>
                    <span>{movie.Type} </span>
                    <h3> {movie.Title} </h3>
                </div>

            </div>
    );
}

export default MovieCard;