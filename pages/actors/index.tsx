import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import ActorContent from "../../components/Cards/ActorContent";
import Pagination from "../../components/Pagination/Pagination";
import { getPeople } from "../../libs/getData";
import { IActor } from "../../types";
import styles from "./Actors.module.scss";

const Actors: NextPage<{data: IActor[], totalPages: number}> = ({data, totalPages}) => {
    const router = useRouter();
    const {query} = router;
    const [currentPage, setCurrentPage] = useState<string>(query.page as string || "1");
    
    return (
        <div className={styles.actors}>
            <div className="container">
                <div className="row">
                    <div className={styles.actors_box}>
                        <div className={styles.actors_box__body}>
                            {data?.map((item) => (
                                <div
                                    key={item.id}
                                    className={styles.actors_box__body__card}
                                >
                                    <ActorContent {...(item as IActor)}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Pagination 
                max={totalPages  > 500 ? "500" : `${totalPages}`} 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default Actors;

export const getServerSideProps: GetServerSideProps = async({locale, query}) => {
    const people = await getPeople(locale as string, query.page as string || "1");

    return {
        props: {
            data: people.data,
            totalPages: people.totalPages,
            title: "Movie Box | Featured Casts"
        }
    };
};
