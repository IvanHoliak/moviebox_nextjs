//Data getMovies
export interface IMovie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[] | string[];
    id: number;
    original_language: number;
    original_title: number;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    media_type?: string;
};

export interface IActor {
    adult: boolean;
    gender: number;
    id: number;
    known_for: IMovie[];
    known_for_department: string;
    name: string;
    popularity: number;
    profile_path: string;
};

export interface IGenres {
    id: number;
    name: string;
};

//Home page
export interface IHome {
    popular?: IMovie[];
    upcoming?: IMovie[];
    people?: IActor[];
};

//Header
export interface ISlideHeader {
    id: number;
    title: string;
    body: string;
    rate: {
        imdb: string;
        tomato: string;
    };
    img_src: string;
};

//Slider
export interface ISliderArrow {
    className?: string;
    style?: string;
    onClick: () => void;
};
export interface ISliderActors {
    header_title: string;
};
export interface ISliderData<T> {
    header_title: string;
    data?: T[];
};
export interface ISliderVideos {
    header_title: string;
};
//Fetch
export type getMovies = () => Promise<IMovie[]>;
export type getActors = () => Promise<IActor[]>;
