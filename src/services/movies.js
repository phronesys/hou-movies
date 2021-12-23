import getApiUrl from "../config";

/* this can be refactored into one function, 
but I thing this is enough and is more readable */

export const getMovieList = async () => {
  const url = getApiUrl(`discover/movie`);
  return await fetch(url).then(res => res.json());
}

export const getMovieGenres = async () => {
  const url = getApiUrl(`genre/movie/list`);
  return await fetch(url).then(res => res.json());
}

export const getGenreById = async (id) => {
  const url = getApiUrl(`genre/${id}`);
  return await fetch(url).then(res => res.json());
}
