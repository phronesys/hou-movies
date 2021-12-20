import getApiUrl from "../config";

const getMovieGenresUrl = () => getApiUrl(`genre/movie/list`); 

export default getMovieGenresUrl;