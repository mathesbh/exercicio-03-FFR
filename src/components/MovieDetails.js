import React, { useEffect, useState } from 'react'
import { MoviesService } from '../api/MoviesService'
import { favoriteMovie } from '../actions/favoriteActions'
import { useDispatch } from 'react-redux'


export const MovieDetails = (props) => {
    const [movie, setMovie] = useState({ data: [] })

    const reqMovie = async () => {
        const movieResult = await MoviesService.getDetails(props.match.params.id)
        setMovie(movieResult)
    }
    useEffect(() => {
        reqMovie()
    }, [])

    const dispatch = useDispatch()

    return (
        <div className="container">
            <h1>Movie Details</h1>
            <h2>{movie.data.title} | { movie.data.release_date}</h2>
            <h3>Overview:  { movie.data.overview }</h3>
            <p>Votes: { movie.data.vote_average }</p>
            <button onClick={() => dispatch(favoriteMovie(movie.data.title))}>Favorite Movie</button>
        </div>
    )
}
