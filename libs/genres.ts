import { GENRES } from "../constants";

export const genres = (genres: number[] | [], locale: string): string[] | [] => {
    return genres?.map((id) => {
        const filter = GENRES.filter((genre) => genre.id === id)[0];
        if(locale === "ua") return filter.name_ua;
        return filter.name_en;
    });
};