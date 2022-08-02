import { useEffect, useState } from "react";
import { IMovie } from "../types";

type useDebounce = (
    delay: number,
    callback: (locale: string, page: number, value: string) => Promise<IMovie[]>,
    locale: string
) => {
    value: string;
    setValue: (value: string) => void;
    data: IMovie[] | null;
};

const useDebounce: useDebounce = (delay, callback, locale) => {
    const [value, setValue] = useState<string>("");
    const [data, setData] = useState<IMovie[] | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (value.length) {
                callback(locale, 1, value).then((res) => setData(res));
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
