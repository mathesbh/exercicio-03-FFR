import { ADD_FAVORITE } from '../actions/favoriteActions'

const initialState = {
    favorite: []
}

export const favorite = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAVORITE:
            return {
                ...state,
                favorite: state.favorite.concat(action)
            }
        default:
            return state
    }
}   