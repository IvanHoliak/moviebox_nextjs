import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";

import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <Layout home={pageProps.home} title={pageProps.title}>
            <Component {...pageProps} />
        </Layout>
    );
};

export default MyApp;
