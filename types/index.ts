//Data getMovies
export interface IMovie {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: number[] | string[];
    id?: number;
    original_language?: number;
    original_title?: number;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    release_date?: string;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
    media_type?: string;
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
};

export interface IGenres {
    id: number;
    name: string;
};

//Home page
export interface IHome {
    popular: IMovie[];
    upcoming: IMovie[];
    people: IActor[];
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
    src: string;
    alt: string;
    customClass: string;
};
export interface ISliderData<T1, T2> {
    header_title: string;
    data?: T1[] | T2[];
    next: string;
    type: string;
};
export interface ICardContent<T1, T2> {
    data: T1 | T2;
    type: string;
};
export interface IImageCardBox {
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
export type getMovies = () => Promise<IMovie[]>;
export type getActors = () => Promise<IActor[]>;
