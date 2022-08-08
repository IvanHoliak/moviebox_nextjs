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
};

const useDebounce: useDebounce = (delay, callback, locale) => {
    const [value, setValue] = useState<string>("");
    const [data, setData] = useState<{
        data: IMovie[],
        totalPages: number
    } | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (value.length) {
                callback(locale, "1", value).then((res) => {setData(res)});
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
        data
    };
};

export default useDebounce;
