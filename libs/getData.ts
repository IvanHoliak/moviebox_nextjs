import { MAIN_URL } from "../constants";
import { getMovies, getActors, getMovie } from "../types";

const createLocale = (locale: string) => {
    if(locale === "ua") return "uk";
    return locale;
};

export const getPopularMovies: getMovies = async(locale = "en", page = 1) => {
    const response = await fetch(`${MAIN_URL}/movie/popular?api_key=561004ed4b1ccdd989051a9e43806a89&language=${createLocale(locale)}&page=${page}`);
    const json = await response.json();

    return json.results;
};

export const getUpcomingMovies: getMovies = async(locale = "en", page = 1) => {
    const response = await fetch(`${MAIN_URL}/movie/upcoming?api_key=561004ed4b1ccdd989051a9e43806a89&language=${createLocale(locale)}&page=${page}`);
    const json = await response.json();

    return json.results;
};

export const getPeople: getActors = async(locale = "en", page = 1) => {
    const response = await fetch(`${MAIN_URL}/person/popular?api_key=561004ed4b1ccdd989051a9e43806a89&language=${createLocale(locale)}&page=${page}`);
    const json = await response.json();

    return json.results;
};

export const getSearchData: getMovies = async(locale = "en", page = 1, query = "") => {
    const response = await fetch("/api/search", {
        method: "POST", 
        body: JSON.stringify({
            locale,
            page,
            query
        })
    });
    const json = await response.json();

    return json.results;
};

export const getMovieById: getMovie = async(locale = "en", id) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=561004ed4b1ccdd989051a9e43806a89&language=${createLocale(locale)}`);
    const json = await response.json();

    return json;
};