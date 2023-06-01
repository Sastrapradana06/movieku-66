import { Link } from "react-router-dom";
import { useMovieContext } from "../Context/Constants";

export default function DetailMovie() {
    const [state] = useMovieContext()
    const movieDetail = state.movieDetail
    return (
        <div className="w-[100%] lg:w-[80%] lg:m-auto lg:mb-8 relative mb-5">
            <Link to="/">
                <button className="ml-4 mt-2 px-4 bg-red-500 rounded-xl">Home</button>
            </Link>
            {movieDetail ? (
                <div className="">
                <div className="mt-2 ">
                    <img src={`https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path}`} alt="" className="w-[100%] h-[150px] lg:h-[300px] lg:object-center  lg:w-[80%] lg:m-auto object-cover"/>
                </div>
                <div className="flex justify-around items-end p-2 w-[100%] h-[200px] line bg-linear relative z-10 -mt-14">
                    <div className="w-[50%] flex flex-col gap-2 mt-2">
                        <h1 className="text-[1.9rem] font-title lg:text-[2.2rem]">{movieDetail.original_title}</h1>
                        <p>{movieDetail.release_date}</p>
                        <p>{movieDetail.runtime} mins</p>
                    </div>
                    <div className="mt-2">
                        <img src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`} alt="" className="w-[120px] h-[150px] object-cover rounded-lg"/>
                    </div>
                </div>
                <div className="w-[100%] mt-2 h-max p-2 text-[.9rem] text-gray-400  leading-7">
                    <p>{movieDetail.overview}</p>
                </div>
                <div className=" w-[100%]  p-2 text-gray-400">
                    <div className="flex flex-col gap-1">
                        <p>Genre :</p>
                        <div className="flex gap-2 text-white text-[.8rem] ml-4 pt-1 flex-wrap">
                        {movieDetail.genres.map((item, i) => {
                            return (
                                <p className="bg-gray-600 px-3 rounded-sm" key={i}>{item.name}</p> 
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className=" w-[100%]  p-2 text-gray-400">
                    <div className="flex flex-col gap-1">
                        <p>Original Language :</p>
                        <div className="flex gap-2 text-white text-[.8rem] pt-1 ml-4">
                            <p className="bg-gray-600 px-3 rounded-sm">{movieDetail.original_language}</p> 
                        </div>
                    </div>
                </div>
                <div className=" w-[100%]  p-2 text-gray-400">
                    <div className="flex flex-col gap-1">
                        <p>Spoken Language :</p>
                        <div className="flex gap-2 text-white text-[.8rem] pt-1 flex-wrap ml-4">
                        {movieDetail.spoken_languages.map((item, i) => {
                            return (
                                    <p className="bg-gray-600 px-3 rounded-sm" key={i}>{item.name}</p>
                                    )
                                })}
                        </div>
                    </div>
                </div>
            </div>
            ): <p className="text-center mt-10">Tidak ada data film yang Ditampilkan</p>}
        </div>
    )
}