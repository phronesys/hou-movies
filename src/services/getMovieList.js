import getApiUrl from "../config";

const getMovieList = (type) => {
  const apiUrl = getApiUrl(`movie/${type}`);
  console.log(apiUrl);
  return apiUrl;
}

export default getMovieList;

