import { Route, Routes } from "react-router-dom";
import DetailMovie from "./Components/Detail-Movie";
import { App } from "./App";
import { MovieContext } from "./Context/Constants";
import { useReducer } from "react";


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
        case 'GetMovieDetail':
            return {...state, movieDetail: action.payload}
        default:
            throw new Error()
    }
}

const initialState = {
    movieTampil : [],
    movieDetail : ''
}
export default function Index() {
    const [state, dispatch] = useReducer(reducer, initialState)

    const movieContextValue = [state, dispatch]
    return (
      <MovieContext.Provider value={movieContextValue}>
        <div>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="movie-detail" element={<DetailMovie />} />
            </Routes>
        </div>
    </MovieContext.Provider>    
    )
}