import { useEffect, useState } from "react";
import { IMovie } from "../types";

type useDebounce = (
    delay: number,
    callback: (locale: string, page: string, value: string) => Promise<{data: IMovie[], totalPages: number}>,
    locale: string
) => {
    value: string;
    setValue: (value: string) => void;
    data: {
        data: IMovie[],
        totalPages: number
    } | null;
    isLoaded: boolean;
};

const useDebounce: useDebounce = (delay, callback, locale) => {
    const [value, setValue] = useState<string>("");
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [data, setData] = useState<{
        data: IMovie[],
        totalPages: number
    } | null>(null);

    useEffect(() => {
        if(value.length){
            setIsLoaded(true);
        }else{
            setIsLoaded(false);
        };

        const timer = setTimeout(() => {
            if (value.length) {
                callback(locale, "1", value).then((res) => {
                    setData(res);
                    setIsLoaded(false);
                });
            };
        }, delay);

        return () => {
            clearTimeout(timer);
            setData(null);
        };
    }, [value, locale, delay, callback]);

    return {
        value,
        setValue,
        data,
        isLoaded
    };
};

export default useDebounce;
