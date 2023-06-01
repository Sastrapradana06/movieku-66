import { useMovieContext } from "../Context/Constants"
import { nowPlaying, popularMovie, topRated, upComing } from "../Api";

export default function BtnMovie() {
    const [, dispatch] = useMovieContext()
    // console.log(state);

    function getPopular() {
        popularMovie().then((result) => {
            dispatch({
                type: 'Popular',
                payload: result
            })
        });
    }
    function getTopRated() {
        topRated().then((result) => {
            dispatch({
                type: 'TopRated',
                payload: result
            })
        });
    }
    function getUpComming() {
        upComing().then((result) => {
            dispatch({
                type: 'UpComing',
                payload: result
            })
        });
    }
    function getNowPlaying() {
        nowPlaying().then((result) => {
            dispatch({
                type: 'NowPlaying',
                payload: result
            })
        });
    }

    return (
        <div className=" w-[85%] m-auto flex justify-around items-center text-[.8rem] mt-2 lg:w-[60%]">
            <button className="border w-[70px] rounded-lg focus:bg-red-600" onClick={getPopular}>Popular</button>
            <button  className="border w-[70px] rounded-lg focus:bg-red-600" onClick={getTopRated}>Top Rated</button>
            <button  className="border w-[70px] rounded-lg focus:bg-red-600" onClick={getUpComming}>Comming</button>
            <button  className="border w-[70px] rounded-lg focus:bg-red-600" onClick={getNowPlaying}>Playing</button>
        </div>
    )
}