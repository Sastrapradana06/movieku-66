
import { useMovieContext } from "../Context/Constants";
import { seacrhMovie } from "../Api"
export default function SearchMovie() {
    const [, dispatch] = useMovieContext()

    const search = async (q) => {
        if(q.length > 3) {
            const query = await seacrhMovie(q)
            const dataSearch = query.results.filter(e => e.backdrop_path !== null)
            dispatch({
                type: 'Search',
                payload: dataSearch
            })
        }
    }

    return (
        <div className="mt-4 mb-4 flex justify-center">
            <input 
                type="text"
                className="w-[300px] lg:w-[700px] bg-transparent border rounded-lg p-1 text-[.8rem]"
                placeholder="Cari movie anda"
                onChange={({target}) => search(target.value)}
            />
        </div>
    )
}