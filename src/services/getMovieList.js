import getApiUrl from "../config";

const getMovieList = (type) => getApiUrl(`movie/${type}`);

export default getMovieList;

