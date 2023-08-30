//This code is a React component ,that is designed to display a list of movies.

import React from 'react'; //-> is neccesary to create a react component.
import { isEmpty } from 'lodash' // -> is a function that checks if a given value is empty.  
import MovieCard from './MovieCard';


interface MovieListProps { //-> Typrscript interface defines the props that the 'MovieList' comp. expects to receive. 
    data: Record<string, any>[]; //-> it's an array of objects with arbitrary keys and values. 
    title: string; //-> is a prop that represents the title to be displayed above the movie list. It's expected to be a string.
}


const MovieList: React.FC<MovieListProps> = ({ data, title }) => { //-> it declares MovieList as a functional component ,tha takes in data and title as a props. 

if (isEmpty(data)) {
    return null;
}

return (
 <div className='px-4 md:px-12 mt-4 space-y-8'>
    <div>
        <p className='text-white text-md md:text-xl lg:text-2xl font-semibold mb-4'>
            {title}
        </p>
    
        <div className='grid grid-cols-4 gap-2'>
            {data.map((movie) => (
                <MovieCard key={movie.id} data={movie}/>
            ))}
        </div>
    </div>
</div>
)
 
}

export default MovieList;