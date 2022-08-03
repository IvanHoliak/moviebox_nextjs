//Data getMovies
export interface IMovie {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: number[] | string[];
    id?: number;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    release_date?: string;
    title?: string;
    video?: boolean;
    vote_average: number;
    vote_count?: number;
    media_type?: string;
};

export interface IVideo {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    key_src?: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
};

export interface IMovieDetails extends IMovie {
    belongs_to_collection: {
        id: number;
        name: string;
        poster_path: string;
        backdrop_path: string;
    };
    budget: number;
    genres: {id: number, name: string}[];
    homepage: string;
    imdb_id: string;
    production_companies: {
        id: number;
        logo_path: string;
        name: string;
        origin_country: string;
    }[];
    production_countries: {iso_3166_1: string; name: string}[];
    revenue: number;
    runtime: number;
    spoken_languages: {
        english_name: string; 
        iso_639_1: string; 
        name: string;
    }[];
    status: string;
    tagline: string;
    videos: {
        results: IVideo[]
    };
    credits: {
        cast: IActor[];
    };
};
//Data getPeople
export interface IActor {
    adult?: boolean;
    gender?: number;
    id?: number;
    known_for?: IMovie[];
    known_for_department?: string;
    name?: string;
    popularity?: number;
    profile_path?: string;
    character?: string;
};

export interface IGenres {
    id: number;
    "name_en": string;
    "name_ua": string;
};

//Home page
export interface IHome {
    popular: IMovie[];
    upcoming: IMovie[];
    people: IActor[];
    home: boolean;
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
    link: string;
};

//Slider
export interface ISliderArrow {
    className?: string;
    style?: string;
    onClick: () => void;
    src: string;
    alt: string;
    customClass: string;
};
export interface ISliderData<T1, T2, T3> {
    header_title: string;
    data?: T1[] | T2[] | T3[];
    next?: string;
    type: string;
};
export interface ICardContent<T1, T2, T3> {
    data: T1 | T2 | T3;
    type: string;
};
export interface IImageBox {
    src: string;
    srcError: string;
    alt: string;
    width: string;
    height: string;
    className: string;
};
export interface ISliderVideos {
    header_title: string;
};
//Fetch
export type getMovies = (locale?: string, page?: number, query?: string) => Promise<IMovie[]>;
export type getMovie = (locale?: string, id?: string) => Promise<IMovieDetails>;
export type getActors = (locale?: string, page?: number) => Promise<IActor[]>;
