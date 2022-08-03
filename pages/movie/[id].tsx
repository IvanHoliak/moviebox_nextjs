import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import ImageBox from "../../components/Image/ImageBox";
import Modal from "../../components/Modal/Modal";
import SliderContent from "../../components/Sliders/SliderContent";
import { MAIN_IMAGE_URL } from "../../constants";
import { getMovieById } from "../../libs/getData";
import { IMovieDetails } from "../../types";

import styles from "./Movie.module.scss";

const Movie: NextPage<{movie: IMovieDetails}> = ({movie}) => {
    const {locale} = useRouter();
    return (
        <div className={styles.movie_details}>
            <div className="container">
                <div className="row">
                    <div className={styles.movie_details__main}>
                        <div
                            className={styles.movie_details__main_image_box}
                        >
                            <ImageBox 
                                src={movie?.poster_path || ""}
                                alt="Movie Image"
                                width="250"
                                height="370"
                                srcError="/assets/img/no_image.png"
                                className={styles.movie_details__main_image_box__image}
                            />
                        </div>
                        <div className={styles.movie_details__main_desc}>
                            {movie.homepage ? (
                                <Link 
                                    href={movie.homepage}
                                >
                                    <a 
                                        target="_blank"
                                        className={styles.movie_details__main_desc_title}
                                    >
                                        {movie.title}
                                    </a>
                                </Link>
                            ) : (
                                <h2
                                    className={styles.movie_details__main_desc_title}
                                >
                                    {movie.title}
                                </h2>
                            )}
                            <p
                                className={styles.movie_details__main_desc_subtitle}
                            >
                                {movie.genres.map(genre => genre.name).join(", ")} | {movie.release_date} | {movie.production_countries.map(country => country.name).join(", ") || "N/A"}
                            </p>
                            <p className={styles.movie_details__main_desc_rate}>
                                <Image
                                    priority
                                    src="/assets/img/imdb.svg"
                                    alt="IMDB"
                                    width="35"
                                    height="17"
                                />
                                {movie.vote_average.toFixed(1)} / 10
                            </p>
                            <div
                                className={styles.movie_details__main_desc_money}
                            >
                                <p>
                                    <Image 
                                        src="/assets/img/arrow_up.svg"
                                        alt="Budget"
                                        width="20"
                                        height="20"
                                    />
                                    {movie.budget.toLocaleString(locale, {
                                        style: "currency",
                                        currency: "USD",
                                        minimumFractionDigits: 0
                                    })}
                                </p>
                                <p>
                                    <Image 
                                        src="/assets/img/arrow_down.svg"
                                        alt="Budget"
                                        width="20"
                                        height="20"
                                    />
                                    {movie.revenue.toLocaleString(locale, {
                                        style: "currency",
                                        currency: "USD",
                                        minimumFractionDigits: 0
                                    })}
                                </p>
                            </div>
                            <p
                                className={styles.movie_details__main_desc_runtime}
                            >
                                <Image 
                                    src="/assets/img/clock.svg"
                                    alt="Runtime"
                                    width="20"
                                    height="20"
                                />
                                {movie.runtime} {locale === "ua" ? "хв." : "min."}
                            </p>
                            <div className="line"></div>
                            <p
                                className={styles.movie_details__main_desc_tagline}
                            >
                                {movie.tagline}
                            </p>
                            <p
                                className={styles.movie_details__main_desc_overview}
                            >
                                {movie.overview}
                            </p>
                            <div className="line"></div>
                            <div
                                className={styles.movie_details__main_desc_companies}
                            >
                                {movie.production_companies.map(company => (
                                    <div
                                        key={company.id}
                                        className={styles.movie_details__main_desc_companies_company}
                                        title={company.name}
                                    >
                                        {company.logo_path ? (
                                            <div
                                                className={styles.movie_details__main_desc_companies_company__image}
                                            >
                                                <Image
                                                    loader={() => `${MAIN_IMAGE_URL}${company.logo_path}`}
                                                    src={company.logo_path}
                                                    alt="Company Logo"
                                                    layout="fill"
                                                    objectFit="contain"
                                                />
                                            </div>
                                        ) : (
                                            <div
                                                className={styles.movie_details__main_desc_companies_company__no_image}
                                            ></div>
                                        )}
                                        <span
                                            className={styles.movie_details__main_desc_companies_company__name}
                                        >
                                            {company.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SliderContent 
                header_title="Videos"
                data={movie.videos.results}
                type="videos"
            />
            <SliderContent 
                header_title="Cast"
                data={movie.credits.cast}
                type="actors"
            />
        </div>
    );
};

export default Movie;

export const getServerSideProps: GetServerSideProps = async({locale, params}) => {
    const movie = await getMovieById(locale, (params?.id as string));
    
    return {
        props: {
            movie
        }
    }
};



