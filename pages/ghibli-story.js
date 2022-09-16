import Image from "next/image";
import Layout from "../components/Layout";
import thumbnail from '/public/images/thumbnail.webp'
import hayaomiyazaki from '/public/images/hayaomiyazaki.webp'
import totoro from '/public/images/totoro.jpg'
import spiritedaway from '/public/images/spirited away.jpg'
import Loading from "../components/Loading";


export default function GhibliStory() {
    return (
        <>
            <Layout title={"Ghibli's Story"}>
                <div className="mt-10 mb-10">
                    <div className="flex px-5 md:mx-20">
                        <h1 className="text-4xl font-medium">A Legendary Story of Studio Ghibli</h1>
                    </div>
                    <div className="">
                        <div className="h-96 md:h-[90vh] relative mt-4">
                            <Image src={thumbnail} alt={"Thumbnail"} layout="fill" className="" quality={50} />
                        </div>
                    </div>
                    <div className=" px-5 mt-5 text-justify md:mx-20 lg:text-lg">
                        <p className="">
                            Studio Ghibli Inc. (Japanese: 株式会社スタジオジブリ, Hepburn: Kabushiki-gaisha Sutajio Jiburi)
                            is a Japanese animation film studio headquartered in Koganei, Tokyo.
                            It is best known for its animated feature films, and has also produced several short subjects,
                            television commercials, and two television films. Its mascot and most recognizable symbol is a character named Totoro,
                            a giant spirit inspired by raccoon dogs (tanuki) and cats from the 1988 anime film My Neighbor Totoro.
                        </p>
                        <p className="mt-5">
                            {`Among the studio's highest-grossing films are Spirited Away (2001),
                            Howl's Moving Castle (2004) and Ponyo (2008).
                            The studio was founded on June 15, 1985, by directors Hayao Miyazaki and Isao Takahata and producer Toshio Suzuki, after the successful performance of Topcraft's Nausicaä of the Valley of the Wind (1984).
                            It has also collaborated with video game studios on the visual development of several games.`}
                        </p>
                    </div>

                    <div className="mt-10 mb-10 md:mt-20">
                        <div className="flex px-5 md:mx-20">
                            <h2 className="text-3xl font-medium">Founder and Hayao Miyazaki</h2>
                        </div>
                        <div className="md:px-10 lg:px-20">
                            <div className="h-96 lg:h-[80vh] relative mt-4">
                                <Image src={hayaomiyazaki} alt={"Hayao Miyazaki"} layout="fill" className="" quality={50} />
                            </div>
                        </div>
                        <div className=" px-5 mt-5 text-justify md:mx-20 lg:text-lg">
                            <p className="mt-5">{`Studio Ghibli was founded in 1985 in Tokyo by the three men, Isao Takahata, Toshio Suzuki and the well-known film producer Hayao Miyazaki. 
                            The name Studio Ghibli was based on the Arabic name for 
                            "hot sahara wind" because the founders wanted Studio Ghibli to blow new wind through the anime industry.`} </p>
                            <p className="mt-5">{`At the same time Ghibli was also the name of an Italian war plane 
                             therefore it also represented Hayao Miyazaki's love for planes and for Italy. 
                             Before Miyazaki worked for Ghibli he had already directed a few films like Lupin the Third:
                             The Castle of Cagliostro and Future Boy Conan. 
                             The first original movie directed by Miyazaki was Nausicaa of the Valley of the Wind in 1984. `} </p>
                            <p className="mt-5">{`The studio has mainly produced films by Miyazaki,
                             with the second most prolific director being Takahata (most notably with Grave of the Fireflies).
                              Other directors who have worked with Studio Ghibli include Yoshifumi Kondō, Hiroyuki Morita, Gorō Miyazaki,
                               and Hiromasa Yonebayashi. Composer Joe Hisaishi has provided the soundtracks for most of Miyazaki's 
                               Studio Ghibli films. In their book Anime Classics Zettai!, Brian Camp and Julie Davis made note of Michiyo Yasuda as "a mainstay of Studio Ghibli's extraordinary design and production team". 
                            At one time the studio was based in Kichijōji, Musashino, Tokyo.`} </p>
                        </div>
                    </div>

                    <div className="mt-10 mb-10 md:mt-20">
                        <div className="flex px-5 md:mx-20">
                            <h2 className="text-3xl font-medium">History</h2>
                        </div>
                        <div className="md:px-10 lg:px-20">
                            <div className="h-96 lg:h-[80vh] relative mt-4">
                                <Image src={totoro} alt={"My Neighbor Totoro"} layout="fill" className="" quality={50} />
                            </div>
                        </div>
                        <div className=" px-5 mt-5 text-justify md:mx-20 lg:text-lg">

                            <p className="mt-5">{`The studio has mainly produced films
                             by Miyazaki, with the second most prolific director being Takahata 
                             (most notably with Grave of the Fireflies). Other directors who have worked with 
                             Studio Ghibli include Yoshifumi Kondō, Hiroyuki Morita, Gorō Miyazaki, and Hiromasa Yonebayashi. 
                             Composer Joe Hisaishi has provided the soundtracks for most of Miyazaki's Studio Ghibli films. In 
                             their book Anime Classics Zettai!, Brian Camp and Julie Davis made note of Michiyo Yasuda as "a mainstay 
                             of Studio Ghibli's 
                            extraordinary design and production team". At one time the studio was based in Kichijōji, Musashino, Tokyo.`} </p>
                            <p className="mt-5">{`In August 1996, The Walt Disney Company and Tokuma Shoten 
                            formed a partnership wherein Walt Disney Studios would be the sole international 
                            distributor for Tokuma Shoten's Studio Ghibli animated films. Under this agreement, 
                            Disney also agreed to finance 10% of the studio's production costs. Since then, all 
                            three aforementioned films by Miyazaki at Studio Ghibli that were previously dubbed by 
                            Streamline Pictures have been re-dubbed by Disney. On June 1, 1997, Tokuma Shoten Publishing 
                            consolidated its media operations by merging Studio Ghibli, 
                            Tokuma Shoten Intermedia software and Tokuma International under one location.`} </p>
                            <p className="mt-5">{`Over the years, there has been 
                            a close relationship between Studio Ghibli and the magazine Animage,
                             which regularly runs exclusive articles on the studio and its members in a section titled 
                             "Ghibli Notes." Artwork from Ghibli's films and other works are frequently featured on the 
                             cover of the magazine. Saeko Himuro's novel Umi ga Kikoeru was serialised in the magazine 
                             and subsequently adapted into Ocean Waves, Studio Ghibli's first 
                            animated feature-length film created for television. It was directed by Tomomi Mochizuki.`} </p>
                            <p className="mt-5">{`Between 1999 and 2005, Studio Ghibli was a 
                            subsidiary brand of Tokuma Shoten; however, that partnership ended in April 
                            2005, when Studio Ghibli was spun off
                             from Tokuma Shoten and was re-established as an independent company with relocated headquarters.`} </p>
                        </div>
                    </div>
                    <div className="mt-10 mb-20 md:mb-40 md:mt-20">
                        <div className="flex px-5 md:mx-20">
                            <h2 className="text-3xl font-medium">Award and Gross</h2>
                        </div>
                        <div className="md:px-10 lg:px-20">
                            <div className="h-96 lg:h-[80vh] relative mt-4">
                                <Image src={spiritedaway} alt={"Spirited Away"} layout="fill" className="" quality={50} />
                            </div>
                        </div>
                        <div className=" px-5 mt-5 text-justify md:mx-20 lg:text-lg">
                            <p className="mt-5">{`Five of the studio's films are among 
                            the ten highest-grossing anime feature films made in Japan. Spirited Away 
                            is second, grossing 31.68 billion yen in Japan and over US$380 million worldwide; 
                            and Princess Mononoke is fourth, grossing 20.18 billion yen. Many of their works have won 
                            the Animage Grand Prix award. Four have won the Japan Academy Prize for Animation of the Year. 
                            Five of their films have received Academy Award nominations. 
                            Spirited Away won the 2002 Golden Bear and the 2003 Academy Award for Best Animated Feature.`} </p>

                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}