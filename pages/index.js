const { default: Layout } = require("../components/Layout")
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import hayaomiyazaki from '/public/images/hayaomiyazaki.webp'
import charactersicon from '/public/images/charactersicon.webp'
import Link from "next/link";

export default function Index({ carouselImage }) {
  const latest = carouselImage;
  const [latestData, setLatestData] = useState()
  const [carousel, setCarausel] = useState()

  useEffect(() => {
    if (carouselImage != undefined) {
      setLatestData(
        carouselImage.sort((a, b) => b.release_date - a.release_date)
      )
      setCarausel(carouselImage?.sort((a, b) => 0.5 - Math.random()));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carouselImage])
  console.log(latest)
  return (
    <>
      <Layout title={"Welcome to Web Studio Ghibli's Lover"}>
        <div>
          <Carousel infiniteLoop interval={5000} showArrows={false} showStatus={false} showThumbs={false} autoPlay swipeable={false} showIndicators={false} animationHandler={"fade"}>
            {carousel?.slice(0, 3)?.map((value) =>
              <div key={value.id} className="h-96 md:h-screen w-full relative">
                <div className="absolute h-[95%] w-full">
                  <div className="absolute top-4 md:top-10 right-0 bg-yellow-200 pr-5 pl-3 py-2 md:pr-14 md:pl-10 md:py-2 z-10 border border-white">
                    <span>{value.title}</span>
                  </div>
                  <Image src={value.movie_banner} alt={value.title} layout="fill" quality={50} />
                </div>
                <div className="hidden absolute bottom-0 z-10 left-5 md:flex w-full gap-5  items-center">
                  <div className="h-64 w-40 relative">
                    <Image src={value.image} alt={value.title} layout="fill" quality={20} />
                  </div>
                  <div className="w-6/12 text-white bg-black bg-opacity-50 p-2">
                    {/* <p className="text-2xl font-semibold absolute top-0">{value.original_title_romanised}</p> */}
                    <p className="text-justify font-semibold">{value.description.substring(0, 200)}...</p>
                    <p className="text-left text-xl font-semibold absolute bottom-0 text-black">Release date: {value.release_date}</p>
                  </div>
                </div>
              </div>
            )}
          </Carousel>


          <div className="md:mt-40 md:px-20 mt-20 ">
            <div className="bg-gray-200 w-full px-5 md:px-10 py-5 relative">
              <h2 className="text-3xl">
                About This Website
              </h2>
              {/* <p className="mt-4">Studio Ghibli Inc. (Japanese: 株式会社スタジオジブリ, Hepburn: Kabushiki-gaisha Sutajio Jiburi) is a Japanese animation film studio headquartered in Koganei, Tokyo. It is best known for its animated feature films, and has also produced several short subjects, television commercials, and two television films.</p> */}
              <p className="mt-2 text-justify md:text-start md:mt-4">Studio Ghibli is one of the most acclaimed anime studios in the world, it’s the home of some of the most revered and beloved animated works to have ever graced the screen. In this website I give you the chance to read summary all about of those legendary films.
                Make everyone who visits and reads this website interested in watching or repeating to see the beautifull world of Ghibli.
              </p>
              <button className="border-b-2 border-white hover:border-black ease-out transition-all duration-150 mt-2">Read more</button>
              <div className="border-2 bg-black border-black w-5 absolute right-0 bottom-0" />
              <div className="border-2 bg-black border-black h-5 absolute right-0 bottom-0" />
              <div className="border-2 bg-black border-black w-5 absolute left-0 top-0" />
              {/* <div className="border-2 border-black h-5 absolute left-0 top-0" /> */}
            </div>
          </div>
          {/* <Image src={hayaomiyazaki} alt={""} layout="fill" /> */}


          <div className="mt-20 md:mt-40">
            <div className="md:grid grid-cols-2 flex flex-col gap-5 lg:gap-10">
              <div className="relative h-80 md:h-full">
                <Image src={hayaomiyazaki} alt={"https://dribbble.com/shots/14955029-Miyazaki"} layout="fill" />
              </div>
              <div className="px-5 md:px-10 lg:px-20">
                <h3 className="text-2xl text-green-500">The Founder</h3>
                <h4 className="text-3xl font-semibold mt-1">Miyazaki won Academy Award for Spirited Away </h4>
                <p className="text-justify md:mt-5 mt-2">Hayao Miyazaki (宮崎 駿, Miyazaki Hayao, [mijaꜜzaki hajao]; born January 5, 1941) is a Japanese animator, director, producer, screenwriter, author, and manga artist. A co-founder of Studio Ghibli, he has attained international acclaim as a masterful storyteller and creator of Japanese animated feature films, and is widely regarded as one of the most accomplished filmmakers in the history of animation.</p>
              </div>
            </div>
          </div>
          <div className="mt-5 md:mt-10">
            <div className="md:grid grid-cols-2 flex flex-col-reverse gap-5 lg:gap-10">
              <div className="px-5 md:px-10 lg:px-20">
                <h3 className="text-2xl text-green-500">The Films</h3>
                <h4 className="text-3xl font-semibold mt-1">Many of their films have received Academy Award nominations </h4>
                <p className="text-justify md:mt-5 mt-2">Five of the studio films are among the ten highest-grossing anime feature films made in Japan. Spirited Away is second, grossing 31.68 billion yen in Japan and over US$380 million worldwide; and Princess Mononoke is fourth, grossing 20.18 billion yen. Many of their works have won the Animage Grand Prix award. Four have won the Japan Academy Prize for Animation of the Year. </p>
              </div>
              <div className="relative h-80 md:h-full">
                <Image src={charactersicon} alt={"https://dribbble.com/shots/9098035-Hayao-Miyazaki"} layout="fill" />
              </div>
            </div>
          </div>


          <div className="mt-20 mb-40 md:mt-20 md:mb-60">
            <h2 className="text-center text-3xl mb-5 md:mb-10">{`Studio Ghibli's Films`}</h2>
            <div className="lg:grid lg:grid-cols-3 gap-10 md:px-40 lg:px-20">
              {latestData?.slice(0, 6)?.map((value) =>
                <div key={value.id} className="h-screen w-full relative transition-all duration-300 ease-in-out  hover:-translate-y-2 hover:shadow-smoothblack/50 shadow-lg">

                  <div className="w-full h-full absolute z-20 transition-all duration-300 ease-in-out opacity-0  px-10 py-5 
                  hover:bg-black/90 hover:opacity-100
                  "
                  >
                    <div className="relative text-white w-full h-full ">
                      <h3 className="text-white text-lg">
                        {value.original_title}
                      </h3>
                      <p className="">Romanised: {value.original_title_romanised}</p>
                      <p className="mt-2">Director: {value.director}</p>
                      <div className="flex items-center justify-center w-full h-full">
                        <Link href={""}><a><button className="border-2 border-whote px-5 py-2 hover:bg-white hover:text-black rounded ease-in-out transition-all duration-150">More Information</button></a></Link>
                      </div>
                      <p className="absolute bottom-0 text-lg">{value.release_date}</p>
                    </div>
                  </div>
                  <Image src={value.image} alt={value.title} layout="fill" className="" quality={50} />
                </div>
              )}
            </div>
          </div>
        </div>


      </Layout>
    </>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get(`https://ghibliapi.herokuapp.com/films`);

  return {
    props: { carouselImage: res.data },
  };
};