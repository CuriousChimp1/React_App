import React, {useEffect , useState} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
//27520220

const API_URL = 'https://omdbapi.com?apikey=27520220';
/*
const movie1 = {
        "Title": "Italian Spiderman",
        "Year": "2007",
        "imdbID": "tt2705436",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
}
*/


const App = () =>{

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() =>{
        searchMovies('Batman');
    }, []);


    return(
        <div className='app'> 
        <h1> Movie Search</h1>

            <div className='search'> 
                <input placeholder = "Let's Search some movie.." 
                value = {searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <img 
                src = {SearchIcon}
                alt = 'search'
                onClick={() => searchMovies(searchTerm)}
            />
            </div>

            {
                movies?.length > 0
                ? (
                    <div className ="container">
                        {movies.map((movie) =>( 
                        <MovieCard movie={movie}/>
                        ))}
                        
                    </div>
                ) :(
                    <div className='empty'>
                        <h2> No movie found</h2>
                    </div>
                )

            }

        </div>
    );
};

export default App;