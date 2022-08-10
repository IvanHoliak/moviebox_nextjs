import type { GetStaticProps, NextPage } from "next";
import SliderHeader from "../components/SliderHeader/SliderHeader";

import SliderContent from "../components/Sliders/SliderContent";
import { getMovies, getPeople } from "../libs/getData";
import { IActor, IHome, IMovie, TypeContent } from "../types";

const Home: NextPage<IHome> = ({popular, upcoming, people}) => {
    return (
        <>
            <SliderHeader />
            <SliderContent
                header_title="Popular Movies"
                data={popular}
                next="/movies?type=popular&page=1"
                type="movies"
            /> 
            <SliderContent 
                header_title="Upcoming Movies"
                data={upcoming}
                next="/movies?type=upcoming&page=1"
                type="movies"
            />
            <SliderContent 
                header_title="Featured Casts"
                data={people}
                next="/actors?page=1"
                type="actors"
            />
        </>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async({locale}) => {
    const popular = await getMovies(locale as string, "1", TypeContent.popular);
    const upcoming = await getMovies(locale as string, "1", TypeContent.upcoming);
    const people = await getPeople(locale as string, "1");

    return {
        props: {
            popular: (popular.data as IMovie[]),
            upcoming: (upcoming.data as IMovie[]),
            people: (people.data as IActor[]),
            home: true,
            title: "Movie Box"
        }
    };
};
