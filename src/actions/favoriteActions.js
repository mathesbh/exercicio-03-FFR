export const ADD_FAVORITE = 'ADD_FAVORITE'

export const favoriteMovie = (favorite) => ({
    type: ADD_FAVORITE,
    playload: favorite
})