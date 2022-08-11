import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC, useCallback, useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import { getSearchData } from "../../libs/getData";
import Loader from "../Loader/Loader";

import styles from "./Search.module.scss";
import SearchList from "./SearchList";

interface ISearch {
    fixed: boolean;
};

const Search: FC<ISearch> = ({fixed}) => {
    const [showSearchData, setShowSearchData] = useState<boolean>(false);
    const { locale } = useRouter();
    const {value, setValue, data, isLoaded} = useDebounce(1000, getSearchData, locale || "en");
    
    const onChangeSearchValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setValue(e.target.value);
    };

    const outsideClickHandler = useCallback((e: MouseEvent) => {
        const contain = (e.target as HTMLElement).classList.contains(styles.search__input);
        if(showSearchData && !contain){
            setShowSearchData(false);
        }else if(contain){
            setShowSearchData(true);
        };
    }, [showSearchData]);  

    useEffect(() => {
        document.addEventListener("click", (e) => outsideClickHandler(e));

        return () => document.removeEventListener("click", (e) => outsideClickHandler(e));
    }, [showSearchData, outsideClickHandler]);

    return (
        <div
            className={[styles.search, fixed ? styles.fixed : ""].join(" ")}
        >
            <input 
                type="text" 
                className={styles.search__input}
                placeholder="What do you want to watch?"
                value={value}
                onChange={e => onChangeSearchValueHandler(e)}
            />
            <Image 
                priority
                src="/assets/img/search.svg"
                alt="Search"
                width="16"
                height="16"
                className={styles.search__image}
            />
            {isLoaded && (
                <div
                    className={styles.search__data_box}
                >
                    <div className={styles.search__data_box__loader}>
                        <Loader />
                    </div>
                </div>
            )}
            {!isLoaded && data && data.data.length && showSearchData && (
                <div
                    className={styles.search__data_box}
                >
                    {data.data.map(item => (
                        <SearchList 
                            key={item.id}
                            {...item}
                            locale={locale || "en"}
                            onClick={() => setShowSearchData(false)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;
