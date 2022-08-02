import { NextApiRequest, NextApiResponse } from "next";
import { MAIN_URL } from "../constants";

const createLocale = (locale: string) => {
    if(locale === "ua") return "uk";
    return locale;
};

export const searchController = async(req: NextApiRequest, res: NextApiResponse) => {
        try{
            const { locale, page, query } = JSON.parse(req.body);
            const response = await fetch(`${MAIN_URL}/search/movie?api_key=561004ed4b1ccdd989051a9e43806a89&language=${createLocale(locale)}&page=${page}&query=${query}`);
            const json = await response.json();
            res.status(200).json(json);
        }catch(e){
            console.log((e as Error).message);
        };
};