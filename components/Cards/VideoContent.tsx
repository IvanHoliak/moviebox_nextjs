import { FC, useState } from "react";
import Image from "next/image";
import { IVideo } from "../../types";

import styles from "./Cards.module.scss";
import Modal from "../Modal/Modal";

const VideoContent: FC<IVideo> = ({name, key_src}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    return (
        <>
            <div className={styles.card_wrapper__image_video_box}>
                <Image
                    loader={() => `https://i.ytimg.com/vi/${key_src}/hqdefault.jpg`}
                    src={key_src || ""}
                    alt="Video image"
                    width="250"
                    height="200"
                    className={styles.card_wrapper__image_video_box__image}
                    onClick={() => setIsOpen(true)}
                />
            </div>
            <div className={styles.card_wrapper__body}>
                <h3 className={styles.card_wrapper__body_name}>
                    {name}
                </h3>
            </div>
            {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} src={key_src || ""}/>}
        </>
    );
};

export default VideoContent;
