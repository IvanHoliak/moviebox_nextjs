import { MAIN_URL } from "../constants";
import { GetMovies, GetActors, GetMovie, GetActor } from "../types";

const createLocale = (locale: string) => {
    if(locale === "ua") return "uk";
    return locale;
};

// Get Movie/Movies data
export const getMovies: GetMovies = async(locale = "en", page = "1", type = "popular") => {
    const response = await fetch(`${MAIN_URL}/movie/${type}?api_key=${process.env.TMDB_API_KEY}&language=${createLocale(locale)}&page=${page}`);
    const json = await response.json();

    return {
        data: json.results,
        totalPages: json.total_pages
    };
};

export const getMovieById: GetMovie = async(locale = "en", id) => {
    const response = await fetch(`${MAIN_URL}/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=${createLocale(locale)}&append_to_response=videos,credits`);
    const json = await response.json();

    return json;
};

// Get Actor/Actors data
export const getPeople: GetActors = async(locale = "en", page = "1") => {
    const response = await fetch(`${MAIN_URL}/person/popular?api_key=${process.env.TMDB_API_KEY}&language=${createLocale(locale)}&page=${page}`);
    const json = await response.json();
    
    return {
        data: json.results,
        totalPages: json.total_pages
    };
};

export const getPeopleById: GetActor = async(locale = "en", id) => {
    const response = await fetch(`${MAIN_URL}/person/${id}?api_key=${process.env.TMDB_API_KEY}&language=${createLocale(locale)}&append_to_response=images,movie_credits`);
    const json = await response.json();

    return json;
};

//Get search query data
export const getSearchData: GetMovies = async(locale = "en", page = "1", query = "") => {
    const response = await fetch("/api/search", {
        method: "POST", 
        body: JSON.stringify({
            locale,
            page,
            query
        })
    });
    const json = await response.json();

    return {
        data: json.results,
        totalPages: json.total_pages
    };
};
