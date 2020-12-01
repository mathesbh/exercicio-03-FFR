import React from 'react'
import { useDispatch } from 'react-redux'
import { favoriteMovie } from '../actions/favoriteActions'

export const FavoriteButton = ({ movie }) => {
    const dispatch = useDispatch()
    return <button onClick={() => dispatch(favoriteMovie(movie.data.title))}>Favorite Movie</button>
}