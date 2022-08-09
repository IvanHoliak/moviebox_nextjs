import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { usePagination } from "../../hooks/usePagination";
import styles from "./Pagination.module.scss";

interface IPagination {
    max: string;
    currentPage: string;
    setCurrentPage: (page: string) => void;
};

const Pagination: FC<IPagination> = ({max = "50", currentPage, setCurrentPage}) => {
    const router = useRouter();
    const {locale, pathname, query} = router;
    const [pages, setPages] = useState<string[]>([]);
    const createPagination = usePagination(20 * +max, 20, 1, +currentPage);
    
    useEffect(() => {
        setPages(createPagination);
    }, [currentPage, createPagination]);

    const onClickPageHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
        if((e.target as HTMLElement).innerText !== "..."){
            setCurrentPage((e.target as HTMLElement).innerText);
            router.push({
                pathname,
                query: {
                    ...query,
                    page: (e.target as HTMLElement).innerText
                }
            }, undefined, {locale});
        };
    };

    return (
        <div className={styles.pagination}>
            <div className="container">
                <div className="row">
                    <div className={styles.pagination_wrapper}>
                        {pages.map((page, index) => (
                            <span 
                                key={index}
                                onClick={onClickPageHandler}
                                className={page.toString() === currentPage ? styles.active : ""}
                            >
                                {page}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagination;
