import Layout from "../components/Layout";

export default function About() {
    return (
        <>
            <Layout title={"About Page"}>
                <div className="mt-10 mb-10">
                    <div className="flex px-5 md:mx-20">
                        <h1 className="text-4xl font-medium">About Page</h1>
                    </div>
                    <div className=" px-5 mt-5 text-justify md:mx-20">
                        <p className="">
                            Yup, Studio Ghibli is a home that can embody such an amazing world.
                            Studio Ghibli is one of the most acclaimed anime studios in the world, it’s the home of some of the most revered and beloved animated works
                            to have ever graced the screen. Well, maybe most of us must have heard between Studio Ghibli, Spirited Away, or Totoro.
                        </p>
                        <p className="mt-5">
                            In this website I give you the chance to read summary all about of those legendary films. Make everyone who visits and reads this website interested in watching or repeating to see the beautifull world of Ghibli.
                            This might sound pointless due to a not so convincing domain, but look inside.
                            I do this with all my heart and because I really like it.
                        </p>
                    </div>
                </div>
                <div className="mt-10 mb-20 md:mb-40 md:mt-20">
                    <div className="flex px-5 md:mx-20">
                        <h2 className="text-3xl font-medium">Me</h2>
                    </div>
                    <div className=" px-5 mt-5 text-justify md:mx-20">
                        <p className="mt-5">Did anyone ask about me?</p>
                        <p className="mt-5">{`
                            I will tell you, I was a young man whose life was too ordinary with ordinary problems.
                            Nothing "amazing" has happened in my life, it's just flat.`}</p>
                        <p className="mt-5">{`
                            No life, no girlfriend, no talent, and nothing that makes me someone special.
                            I only like what I like, and hate what I hate. Thanks You!`}</p>
                    </div>
                </div>
            </Layout>
        </>
    )
}