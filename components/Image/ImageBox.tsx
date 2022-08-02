import Image from "next/image";
import { FC, useState } from "react";
import { MAIN_IMAGE_URL } from "../../constants";
import { IImageBox } from "../../types";

import styles from "./ImageCardBox.module.scss";

const ImageBox: FC<IImageBox> = ({src, srcError, alt, width, height, className}) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    
    const customLoader = ({src}: {src: string}) => {
        return `${MAIN_IMAGE_URL}${src}`;
    };

    return (
        <div className={isLoaded ? "" : styles.image_skeleton}>
            {src ? (
                <Image 
                    loader={customLoader}
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className={className}
                    onLoadingComplete={() => setIsLoaded(true)}
                />
            ) : (
                <Image 
                    src={srcError}
                    alt={alt}
                    layout="fill"
                    objectFit="cover"
                    className={className}
                    onLoadingComplete={() => setIsLoaded(true)}
                />
            )}
        </div>
    );
};

export default ImageBox;
