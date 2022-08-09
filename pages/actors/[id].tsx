import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import ImageBox from "../../components/Image/ImageBox";
import SliderContent from "../../components/Sliders/SliderContent";
import { getPeopleById } from "../../libs/getData";
import { IActorDetails } from "../../types";

import styles from "./ActorId.module.scss";

const Actor: NextPage<{actor: IActorDetails, home: boolean}> = ({actor, home}) => {
    return (
        <div className={styles.actor_details}>
            <div className="container">
                <div className="row">
                    <div className={styles.actor_details__main}>
                        <div className={styles.actor_details__main__person}>
                            <ImageBox 
                                src={actor?.profile_path || ""}
                                alt="Movie Image"
                                width="250"
                                height="370"
                                srcError="/assets/img/no_image.png"
                                className={styles.actor_details__main__person_image}
                            />
                            <div
                                className={styles.actor_details__main__person_known_as}
                            >
                                {actor.also_known_as?.map(name => (
                                    <p key={name}>
                                        {name}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className={styles.actor_details__main__desc}>
                            <Link href={actor?.homepage ? `${actor.homepage}` : `https://www.imdb.com/name/${actor?.imdb_id}/`}>
                                <a target="_black">
                                    <h3 className={styles.actor_details__main__desc_name}>
                                        {actor.name}, <span>{actor.known_for_department}</span>
                                    </h3>
                                </a>
                            </Link>
                            <p className={styles.actor_details__main__desc_subtitle}>
                                {`${actor?.place_of_birth ? actor.place_of_birth + " | " : ""}`}{`${actor?.birthday || ""}`}{`${actor?.deathday ? " | " + actor.deathday : ""}`}
                            </p> 
                            <p className={styles.actor_details__main__desc_biography}>
                                {actor?.biography || "Біографія відсутня !"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <SliderContent 
                header_title="Cast"
                data={actor.movie_credits.cast}
                type="movies"
            />
        </div>
    );
};

export default Actor;

export const getServerSideProps: GetServerSideProps = async({locale, params}) => {
    const actor = await getPeopleById(locale as string, (params?.id as string));
    
    return {
        props: {
            actor,
            home: false,
            title: `Movie Box | ${actor?.name || ""}`
        }
    };
};