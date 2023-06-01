
// const baseUrl = process.env.REACT_APP_BASEURL


export async function popularMovie() {
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=4a6bc38820f783b70303a7c69bb7ccc7')
    if(!res.ok) return console.log('gagal bg...');
    const movieList = await res.json()
    const dataMovieList = movieList.results
    return dataMovieList;
}

export async function seacrhMovie(q) {
    const movieSearch = await fetch(`https://api.themoviedb.org/3/search/movie?query=${q}&api_key=4a6bc38820f783b70303a7c69bb7ccc7`)
    return movieSearch.json()

}

export async function topRated() {
    const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=4a6bc38820f783b70303a7c69bb7ccc7')
    const topRated = await res.json()
    const dataTopRated = topRated.results
    return dataTopRated
}

export async function upComing() {
    const res = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=4a6bc38820f783b70303a7c69bb7ccc7')
    const upComing = await res.json()
    const dataUpComming = upComing.results
    return dataUpComming

}

export async function nowPlaying() {
    const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=4a6bc38820f783b70303a7c69bb7ccc7')
    const nowPlaying = await res.json()
    const dataNowPlaying = nowPlaying.results
    return dataNowPlaying
}

export async function movieDetails(id) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4a6bc38820f783b70303a7c69bb7ccc7`)
    const movieDetails = await res.json()
    console.log(movieDetails);
    return movieDetails
}