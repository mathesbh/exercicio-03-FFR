import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { MoviesService } from '../api/MoviesService'
import { FavoriteButton } from './FavoriteButton'
import { FavoriteAdded } from './FavoriteAdded'


export const MovieDetails = (props) => {
    const [movie, setMovie] = useState({ data: [] })

    const reqMovie = async () => {
        const movieResult = await MoviesService.getDetails(props.match.params.id)
        setMovie(movieResult)
    }
    useEffect(() => {
        reqMovie()
    }, [])
 
    const favorites = useSelector(state => state.favorite.favorite)

    const hasFavorite = favorites.filter(m => m.playload === movie.data.title).length !== 0

    return (
        <div className="container">
            <h1>Movie Details</h1>
            <h2>{movie.data.title} | { movie.data.release_date}</h2>
            <h3>Overview:  { movie.data.overview }</h3>
            <p>Votes: { movie.data.vote_average }</p>  
            <span>
                { hasFavorite ? <FavoriteAdded /> : <FavoriteButton movie={movie}/> }
            </span>
        </div>
    )
}
