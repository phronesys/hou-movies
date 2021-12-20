import getApiUrl from "../config";

const getMovieGenres = () => getApiUrl(`genre/movie/list`); 

export default getMovieGenres;