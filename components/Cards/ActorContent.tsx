import { FC } from "react";
import { IActor } from "../../types";
import ImageCardBox from "../Image/ImageCardBox";

import styles from "./Cards.module.scss";

const ActorContent: FC<IActor> = ({name, profile_path}) => {
    return (
        <>
            <div className={styles.card_wrapper__image_box}>
                <ImageCardBox
                    src={profile_path || ""}
                    srcError="/assets/img/no_image.png"
                    alt="Actor image"
                    width="250"
                    height="370"
                    className={styles.card_wrapper__image_box__image}
                />
            </div>
            <div className={styles.card_wrapper__body}>
                <h3 className={styles.card_wrapper__body_name}>
                    {name}
                </h3>
            </div>
        </>
    );
};

export default ActorContent;