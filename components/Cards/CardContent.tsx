import { FC } from "react";
import { IActor, ICardContent, IMovie } from "../../types";
import ActorContent from "./ActorContent";
import styles from "./Cards.module.scss";
import MovieContent from "./MovieContent";

const CardContent: FC<ICardContent<IMovie, IActor>> = ({ data, type }) => {
    const typeContent = () => {
        switch(type){
            case "movies": 
                const moviesData = (data as IMovie);
                return <MovieContent {...moviesData}/>
            case "actors":
                const actorData = (data as IActor);
                return <ActorContent {...actorData}/>
            default:
                return null;
        };
    };
    return (
        <div className={styles.card}>
            <div className={styles.card_wrapper}>
                {typeContent()}
            </div>
        </div>
    );
};

export default CardContent;
