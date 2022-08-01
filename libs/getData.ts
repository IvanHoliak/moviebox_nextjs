import { MAIN_URL } from "../constants";
import { getMovies, getActors } from "../types";

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