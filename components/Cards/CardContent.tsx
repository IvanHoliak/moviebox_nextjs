import { FC } from "react";
import { IActor, ICardContent, IMovie, IVideo } from "../../types";
import ActorContent from "./ActorContent";
import styles from "./Cards.module.scss";
import MovieContent from "./MovieContent";
import VideoContent from "./VideoContent";

const CardContent: FC<ICardContent<IMovie, IActor, IVideo>> = ({ data, type }) => {
    if((data as IVideo).hasOwnProperty("key")){
        (data as IVideo).key_src = (data as IVideo).key;
    };

    return (
        <div className={styles.card}>
            <div className={styles.card_wrapper}>
                {type === "movies" && <MovieContent {...(data as IMovie)}/>}
                {type === "actors" && <ActorContent {...(data as IActor)}/>}
                {type === "videos" && <VideoContent {...(data as IVideo)}/>}
            </div>
        </div>
    );
};

export default CardContent;
