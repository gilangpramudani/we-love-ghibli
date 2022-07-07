import Layout from "../../components/Layout";
import useSWR from "swr";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function FilmDetail() {
    const [data, setData] = useState({})

    const router = useRouter()
    const { id } = router.query

    const fetcher = (url) => {
        if (id != undefined)
            return (
                axios.get(url).then((v) => v.data)
            )
    }


    const { data: film, error: eFilm, isValidating: iFilm } = useSWR(`https://ghibliapi.herokuapp.com/films/${id}`, fetcher)
    const { data: people, error: ePeople, isValidating: iPeople, mutate } = useSWR(`https://ghibliapi.herokuapp.com/people`, fetcher)


    useEffect(() => {
        if (film != undefined) {
            setData({ ...data, film: film })
        }

        if (people != undefined) {
            const peopleFilter = people.map((v) => {
                return v.films.filter((b) => {
                    return b == "https://ghibliapi.herokuapp.com/films/" + id
                }).map((g) => v)
            })
            const mergedPeople = [].concat.apply([], peopleFilter);
            setData({ ...data, people: mergedPeople })
            console.log("90990999090")
        } else {
            mutate()
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [film, id, people])
    console.log(data)
    return (
        <>
            <Layout title={data?.film?.title}>
                {data?.film != undefined ?
                    <div className="mt-10 mb-20">
                        <div className="">
                            <div className="px-5">
                                <h1 className="text-4xl font-medium">{data.film.title}</h1>
                                <div className="mt-2">
                                    <h2 className="">Origin   al title: {data.film.original_title}</h2>
                                    <h2 className="">Romanised: {data.film.original_title_romanised}</h2>
                                </div>
                            </div>
                            <div>
                                <div className="h-96 relative mt-4">
                                    <Image src={data.film.movie_banner} alt={data.film.title} layout="fill" />
                                    <div className="h-40 w-24 absolute -bottom-10 left-5 border-white border-2">
                                        <Image src={data.film.image} alt={data.film.title} layout="fill" quality={10} />
                                    </div>
                                    <div className=" absolute -bottom-8 right-5">
                                        <span>Release date: {data.film.release_date}</span>
                                    </div>
                                </div>
                                <div className="mt-12 grid grid-cols-2 gap-1">
                                    <div className="bg-gray-200 px-5 py-2 rounded-r"><p className="text-center">Duration: {data.film.running_time} minute</p></div>
                                    <div className="bg-gray-200 px-5 py-2 rounded-l"><p className="text-center">Rating: {data.film.rt_score}</p></div>
                                </div>

                                <div className="px-5 mt-10 text-justify">
                                    <div className="border-l-4 px-2 border-yellow-500">
                                        <h3 className="text-2xl">Storyline</h3>
                                    </div>
                                    <p className="mt-5">{data.film.description}</p>
                                </div>


                                <div className="px-5 mt-10 text-justify">
                                    <div className="border-l-4 px-2 border-transparent relative">
                                        <h3 className="text-2xl"></h3>
                                        <div className="absolute bg-yellow-500 w-2 h-2 bottom-2 right-0" />
                                    </div>
                                    <div className="border-r-2 pb-2">
                                        <h3 className="text-2xl mb-5">From</h3>
                                        <p>Producer: {data.film.producer}</p>
                                        <p>Director: {data.film.director}</p>
                                    </div>
                                </div>

                                <div className="px-5 mt-10 text-justify">
                                    <div className="border-l-4 px-2 border-yellow-500">
                                        <h3 className="text-2xl">List Characters</h3>
                                    </div>
                                    <div className="mt-5">
                                        {data?.people?.map((v) => {
                                            return (
                                                <div key={v.id} className="mb-5 relative py-5">
                                                    <h4 className="font-medium">{v.name}</h4>
                                                    <hr className="my-2 bg-gray-200" />
                                                    <ul className="">
                                                        <li>
                                                            <div className="flex flex-col">
                                                                <span>Gender: {v.gender}</span>
                                                                <span>Age: {v.age}</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="flex justify-end mt-2">
                                                                <div>
                                                                    <p>Eye Color: {v.eye_color}</p>
                                                                    <p>Hair Color: {v.hair_color}</p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div className="absolute bg-yellow-500 w-6 h-1 bottom-0 right-0" />
                                                </div>
                                            )
                                        })}
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