import { getMovies, getActors } from "../types";

export const getPopularMovies: getMovies = async() => {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=561004ed4b1ccdd989051a9e43806a89&language=en-EN&page=1");
    const json = await response.json();

    return json.results;
};

export const getUpcomingMovies: getMovies = async() => {
    const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=561004ed4b1ccdd989051a9e43806a89&language=en-US&page=1");
    const json = await response.json();

    return json.results;
};

export const getPeople: getActors = async() => {
    const response = await fetch("https://api.themoviedb.org/3/person/popular?api_key=561004ed4b1ccdd989051a9e43806a89&language=en-US&page=1");
    const json = await response.json();

    return json.results;
};