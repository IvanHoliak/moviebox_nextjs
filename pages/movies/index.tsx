import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import MovieContent from "../../components/Cards/MovieContent";
import Pagination from "../../components/Pagination/Pagination";
import { getMovies } from "../../libs/getData";
import { IMovie, TypeContent } from "../../types";

import styles from "./Movies.module.scss";

const Movies: NextPage<{data: IMovie[], totalPages: number, type_value: string, home: boolean}> = ({data, totalPages, type_value}) => {
    const [typeValue, setTypeValue] = useState<string>(type_value);
    const router = useRouter();
    const {locale, pathname, query} = router;
    const [currentPage, setCurrentPage] = useState<string>(query.page as string || "1");

    const onChangeContentTypeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const content_type = e.target.value;
        router.push(
            { 
                pathname, 
                query: {
                    ...query,
                    page: "1",
                    type: content_type
                } 
            }, undefined, {locale}
        );
        setTypeValue(content_type);
        setCurrentPage("1");
    };

    return (
        <div className={styles.movies}>
            <div className="container">
                <div className="row">
                    <div className={styles.movies_box}>
                        <div className={styles.movies_box__type}>
                            <select 
                                name="content_type" 
                                id="content_type"
                                onChange={onChangeContentTypeHandler}
                                defaultValue={typeValue}
                            >
                                <option value="popular">Popular</option>
                                <option value="upcoming">Upcoming</option>
                            </select>
                        </div>
                        <div className={styles.movies_box__body}>
                            {data?.map((item) => (
                                <div 
                                    key={item.id}
                                    className={styles.movies_box__body__card}
                                >
                                    <MovieContent {...(item as IMovie)}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Pagination 
                max={type_value === "popular" ? "500" : `${totalPages}`} 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default Movies;

export const getServerSideProps: GetServerSideProps = async({query, locale}) => {
    const {page, type} = query;

    const movies = await getMovies(locale as string, page as string, type as string);

    return {
        props: {
            data: movies.data,
            totalPages: movies.totalPages,
            type_value: query.type,
            home: false,
            title: `Movie Box | ${query.type}`
        }
    };
};