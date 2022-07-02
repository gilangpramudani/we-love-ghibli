import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout({ children, title }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </>
    )
}