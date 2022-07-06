import Layout from "../../components/Layout";
import useSWR from "swr";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";

export default function FilmDetail() {
    const router = useRouter()
    const { id } = router.query
    const fetcher = (url) => {
        if (id != undefined)
            return (
                axios.get(url).then((v) => v.data)
            )
    }

    const { data, error, isValidating } = useSWR(`https://ghibliapi.herokuapp.com/films/${id}`, fetcher)
    console.log(data)
    return (
        <>
            <Layout title={data?.title}>
                {data != undefined ?
                    <div className="mt-10 mb-20">
                        <div className="">
                            <div className="px-5">
                                <h1 className="text-4xl font-medium">{data.title}</h1>
                                <div className="mt-2">
                                    <h2 className="">Original title: {data.original_title}</h2>
                                    <h2 className="">Romanised: {data.original_title_romanised}</h2>
                                </div>
                            </div>
                            <div>
                                <div className="h-96 relative mt-4">
                                    <Image src={data.movie_banner} alt={data.title} layout="fill" />
                                    <div className="h-40 w-24 absolute -bottom-10 left-5 border-white border-2">
                                        <Image src={data.image} alt={data.title} layout="fill" quality={10} />
                                    </div>
                                    <div className=" absolute -bottom-8 right-5">
                                        <span>Release date: {data.release_date}</span>
                                    </div>
                                </div>
                                <div className="mt-12 grid grid-cols-2 gap-1">
                                    <div className="bg-gray-200 px-5 py-2 rounded-r"><p className="text-center">Duration {data.running_time} minute</p></div>
                                    <div className="bg-gray-200 px-5 py-2 rounded-r"><p className="text-center">Rating {data.rt_score}</p></div>
                                </div>
                                <div className="px-5 mt-10 text-justify">
                                    <div className="border-l-4 px-2 border-yellow-500">
                                        <h3 className="text-2xl">Storyline</h3>
                                    </div>
                                    <p className="mt-5">{data.description}</p>
                                </div>
                                <div className="px-5 mt-10 text-justify">
                                    <div className="border-l-4 px-2 border-transparent relative">
                                        <h3 className="text-2xl"></h3>
                                        <div className="absolute bg-yellow-500 w-2 h-2 bottom-0 right-0" />
                                    </div>
                                    <div className="border-r-2 border-b-2 pb-2">
                                        <h3 className="text-2xl mb-5">From</h3>
                                        <p>Producer: {data.producer}</p>
                                        <p>Director: {data.director}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : <></>
                }
            </Layout>
        </>
    )
}