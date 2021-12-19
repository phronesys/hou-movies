const env = import.meta.env;
const API_KEY = env['VITE_APY_KEY'];
const getApiUrl = path => `https://api.themoviedb.org/3/${path}?api_key=${API_KEY}`

export default getApiUrl;