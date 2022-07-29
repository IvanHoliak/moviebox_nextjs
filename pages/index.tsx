import type { GetStaticProps, NextPage } from "next";
import Footer from "../components/Footer/Footer";

import Navbar from "../components/Navbar/Navbar";
import SliderHeader from "../components/SliderHeader/SliderHeader";
import SliderActors from "../components/Sliders/SliderActors";
import SliderMovies from "../components/Sliders/SliderMovies";
import SliderVideos from "../components/Sliders/SliderVideos";
import { getPeople, getPopularMovies, getUpcomingMovies } from "../libs/getData";
import { IActor, IHome, IMovie } from "../types";

const Home: NextPage<IHome> = ({popular, upcoming, people}) => {
    return (
        <header>
            <Navbar />
            <SliderHeader />
            <SliderMovies 
                header_title="Popular Movies"
                data={popular}
            /> 
            <SliderMovies 
                header_title="Upcoming Movies"
                data={upcoming}
            /> 
            <SliderVideos 
                header_title="Exclusive Videos"
            />
            <SliderActors 
                header_title="Featured Casts"
                data={people}
            />
            <Footer />
        </header>
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
