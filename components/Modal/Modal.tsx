import { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import YouTube, { YouTubeProps } from 'react-youtube';

import styles from "./Modal.module.scss";

interface IModal {
    isOpen: boolean;
    setIsOpen: (val: boolean) => void;
    src: string;
};

const Modal: FC<IModal> = ({isOpen, setIsOpen, src}) => {
    const [width, setWidth] = useState<number>(window.innerWidth * 0.9);
    const [height, setHeight] = useState<number>(window.innerHeight * 0.9);

    const onResizeHandler = (e: Event) => {
        const target = e.target as Window;

        setWidth(target.innerWidth * 0.9);
        setHeight(target.innerHeight * 0.9);
    };

    const opts: YouTubeProps['opts'] = {
        width: width,
        height: height,
        playerVars: {
            autoplay: 0,
        },
    };

    const onPlayerReady: YouTubeProps['onReady'] = (e) => {
        e.target.pauseVideo();
    };
    
    useEffect(() => {
        window.addEventListener("resize", (e) => onResizeHandler(e));

        return () => window.removeEventListener("resize", (e) => onResizeHandler(e));
    }, []);

    useEffect(() => {
        if(isOpen){
            document.body.classList.add("modal-open");
        };
    }, [isOpen]);

    const onClickRemoveModal = (e: React.MouseEvent<HTMLDivElement>) => {
        if((e.target as HTMLDivElement).classList.contains(`${styles.modal}`)) setIsOpen(false);
        document.body.classList.remove("modal-open");
    };


    const ModalContent = (
        <div 
            className={styles.modal}
            onClick={(e) => onClickRemoveModal(e)}
        >
            <div className={styles.modal__box}>
                <YouTube videoId={src} opts={opts} onReady={onPlayerReady} />
            </div>
        </div>
    );

    if(isOpen){
        return createPortal(
            ModalContent,
            document.getElementById("modal-root") as Element
        );
    };

    return null;
};

export default Modal;
