import getApiUrl from "../config";

const getMovieListUrl = (type) => getApiUrl(`movie/${type}`);

export default getMovieListUrl;

