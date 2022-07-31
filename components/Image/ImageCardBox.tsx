import Image from "next/image";
import { FC, useState } from "react";
import { IImageCardBox } from "../../types";

import styles from "./ImageCardBox.module.scss";

const ImageCardBox: FC<IImageCardBox> = ({src, srcError, alt, width, height, className}) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    
    const customLoader = ({src}: {src: string}) => {
        return `https://image.tmdb.org/t/p/w500${src}`;
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

export default ImageCardBox;
