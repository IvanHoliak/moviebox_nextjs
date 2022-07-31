import type { GetStaticProps, NextPage } from "next";
import { useEffect, useRef } from "react";
import Footer from "../components/Footer/Footer";

import Navbar from "../components/Navbar/Navbar";
import SliderHeader from "../components/SliderHeader/SliderHeader";
import SliderContent from "../components/Sliders/SliderContent";
import SliderVideos from "../components/Sliders/SliderVideos";
import { getPeople, getPopularMovies, getUpcomingMovies } from "../libs/getData";
import { IActor, IHome, IMovie } from "../types";

const Home: NextPage<IHome> = ({popular, upcoming, people}) => {
    return (
        <>
            <SliderContent
                header_title="Popular Movies"
                data={popular}
                next="/movies/popular"
                type="movies"
            /> 
            <SliderContent 
                header_title="Upcoming Movies"
                data={upcoming}
                next="/movies/upcoming"
                type="movies"
            /> 
            {/* <SliderVideos 
                header_title="Exclusive Videos"
            /> */}
            <SliderContent 
                header_title="Featured Casts"
                data={people}
                next="/actors"
                type="actors"
            />
        </>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async() => {
    const popular = await getPopularMovies();
    const upcoming = await getUpcomingMovies();
    const people = await getPeople();

    return {
        props: {
            popular: (popular as IMovie[]),
            upcoming: (upcoming as IMovie[]),
            people: (people as IActor[])
        }
    };
};
