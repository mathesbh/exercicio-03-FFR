import React from 'react'
import { useSelector } from 'react-redux'

export const FavoriteList = () => {
    const favorites  = useSelector(state => state.favorite.favorite)

    return (
        <div className="container">
            <h2>Favorite List</h2>
            <ul>
                {favorites.map(m => (
                    <li>{m.playload}</li>
                ))}
            </ul>
        </div>
    )
}