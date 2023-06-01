import { useEffect } from "react";
import { movieDetails, popularMovie } from "../Api";
import { useMovieContext } from "../Context/Constants";
import { Link } from "react-router-dom";

export default function CardMovie() {
  const [state, dispatch] = useMovieContext()
  const dataTampil = state.movieTampil;
  
  useEffect(() => {
    popularMovie().then((result) => {
      dispatch({
        type: 'Popular',
        payload: result
      })
    });
  }, []);

  async function movieDetail(id) {
    const dataMovieDetail = await movieDetails(id)
    dispatch({
      type: 'GetMovieDetail',
      payload: dataMovieDetail
    })
  }

  return (
    <div className="flex justify-center gap-3 lg:justify-around lg:gap-8 items-center w-[100%] lg:w-[80%] m-auto h-max  p-2 mt-6 flex-wrap mb-10">
      {dataTampil.length === 0 ? (
        <p>film tidak ada</p>
      ) : (
        dataTampil.map((movie, i) => {
          return (
            <div className="card border rounded-lg w-[150px] lg:w-[200px] h-[350px] flex gap-1 p-1 flex-col justify-center items-center" key={i}>
              <div className="text-[.8rem] lg:text-[.9rem] text-center">
                <p>{movie.title}</p>
              </div>
              <div className="w-full">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" className="w-[100%] h-[200px] border m-auto object-cover" />
              </div>
              <div className=" text-[.8rem]">
                <p>{movie.release_date}</p>
              </div>
              <div className="">
                <p>{movie.vote_average}</p>
              </div>
              <div className="">
                <Link to="movie-detail">
                  <button className="bg-red-500 w-[80px] h-[25px] rounded-lg text-[.9rem] font-button hover:bg-red-800 duration-200" onClick={movieDetail.bind(this, movie.id)}>Detail</button>
                </Link>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
