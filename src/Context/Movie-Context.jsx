import { useReducer } from "react";
import { MovieContext } from "./Constants";


function reducer(state, action) {
    switch(action.type) {
        case 'Popular':
            return {...state, movieTampil: action.payload}
        case 'TopRated':
            return {...state, movieTampil: action.payload}
        case 'UpComing':
            return {...state, movieTampil: action.payload}
        case 'NowPlaying':
            return {...state, movieTampil: action.payload}
        case 'Search':
            return {...state, movieTampil: action.payload}
        default:
            throw new Error()
    }
}



const initialState = {
    movieTampil : [],
}

export const MovieProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const movieContextValue = [state, dispatch]

    return (
        <MovieContext.Provider value={movieContextValue}>
            {children}
        </MovieContext.Provider>
    )
}


