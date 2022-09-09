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
    const fetcherPeople = (url) => {
        if (id != undefined)
            return (
                axios.get("https://ghibliapi.herokuapp.com/people").then((v) => v.data)
            )
    }

    const fetcherSpecies = (url) => {
        if (id != undefined)
            return (
                axios.get("https://ghibliapi.herokuapp.com/species").then((v) => v.data)
            )
    }

    const fetcherLocations = (url) => {
        if (id != undefined)
            return (
                axios.get("https://ghibliapi.herokuapp.com/locations").then((v) => v.data)
            )
    }
    const fetcherVehicles = (url) => {
        if (id != undefined)
            return (
                axios.get("https://ghibliapi.herokuapp.com/vehicles").then((v) => v.data)
            )
    }


    const { data: film, error: eFilm, isValidating: iFilm } = useSWR(`https://ghibliapi.herokuapp.com/films/${id}`, fetcher)
    const { data: people, error: ePeople, isValidating: iPeople, mutate } = useSWR(id, fetcherPeople)
    const { data: species, error: eSpecies, isValidating: iSpecies, } = useSWR(id + 0, fetcherSpecies)
    const { data: locations, error: eLocations, isValidating: iLocations, } = useSWR(id + 1, fetcherLocations)
    const { data: vehicles, error: eVehicles, isValidating: iVehicles, } = useSWR(id + 2, fetcherVehicles)


    useEffect(() => {
        if (film != undefined && people != undefined && locations != undefined && vehicles != undefined) {
            const peopleFilter = people.map((v) => {
                return v.films.filter((b) => {
                    return b == "https://ghibliapi.herokuapp.com/films/" + id
                }).map((g) => v)
            })
            const mergedPeople = [].concat.apply([], peopleFilter);

            const locationFilter = locations.map((v) => {
                return v.films.filter((b) => {
                    return b == "https://ghibliapi.herokuapp.com/films/" + id
                }).map((g) => v)
            })
            const mergedLocation = [].concat.apply([], locationFilter);

            const vehiclesFilter = vehicles.map((v) => {
                return v.films.filter((b) => {
                    return b == "https://ghibliapi.herokuapp.com/films/" + id
                }).map((g) => v)
            })
            const mergedVehicles = [].concat.apply([], vehiclesFilter);


            setData({ people: mergedPeople, film: film, location: mergedLocation, vehicle: mergedVehicles })
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [film, id, people, locations, vehicles])
    console.log(data, "00000-0-0")
    console.log(film, "paa")
    return (
        <>
            <Layout title={data?.film?.title}>
                {data?.film != undefined && species != undefined ?
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
                                        {data?.people?.length == 0 ? <p className="text-lg text-center">{`There'is no characters detail in this movie, sorry.`}</p> : ""}

                                        {data?.people?.map((v) => {
                                            const spesies = v.species.replace("https://ghibliapi.herokuapp.com/species/", '')
                                            const spesiesFound = species?.find(v => v.id == spesies)
                                            return (
                                                <div key={v.id} className="mb-5 relative py-5 border-gray-500 px-4 border-b border-l">
                                                    <h4 className="font-medium">{v.name}</h4>
                                                    <hr className="my-2 bg-gray-200" />
                                                    <ul className="">
                                                        <li>
                                                            <div className="flex flex-col">
                                                                <span>Gender: {v.gender}</span>
                                                                <span>Age: {v.age == "" ? "NA" : v.age}</span>
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
                                                        <li>
                                                            <div className="flex flex-col">
                                                                <span>Species: {spesiesFound?.name ?? "NA"}</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div className="absolute bg-yellow-500 w-6 h-1 bottom-0 left-0" />
                                                    <div className="absolute bg-gray-500 w-[1px] h-10 top-0 right-0" />
                                                    <div className="absolute bg-yellow-500 w-3 h-1 top-0 right-0" />
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div className="px-5 mt-14 text-justify">
                                    <div className="border-r-4 px-2 border-blue-400">
                                        <h3 className="text-2xl text-right">List Locations</h3>
                                    </div>
                                    <div className="mt-5">
                                        {data?.location?.length == 0 ? <p className="text-lg text-center">{`There'is no locations detail, sorry.`}</p> : ""}

                                        {data?.location?.map((v) => {

                                            return (
                                                <div key={v.id} className="mb-5 relative py-5 border-gray-500 border-b">
                                                    <h4 className="font-medium">{v.name}</h4>
                                                    <hr className="my-2 bg-gray-200 w-8/12" />
                                                    <ul className=" px-4">
                                                        <li><span>Climate: {v.climate}</span></li>
                                                        <li><span>Terrain: {v.terrain}</span></li>
                                                        <li><span>Surface Water: {v.surface_water} M</span></li>
                                                    </ul>

                                                    <div className="absolute bg-blue-500 w-6 h-1 bottom-0 left-0" />
                                                    <div className="absolute bg-gray-500 w-1 h-3 bottom-0 right-0" />
                                                    <div className="absolute bg-gray-500 w-1 h-1 top-0 left-0" />
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>


                                <div className="px-5 mt-14 text-justify">
                                    <div className="border-l-4 px-2 border-rose-400">
                                        <h3 className="text-2xl">List Vehicles</h3>
                                    </div>
                                    <div className="mt-5">
                                        {data?.vehicle?.length == 0 ? <p className="text-lg text-center">{`There'is no available vehicle detail in this movie, sorry.`}</p> : ""}

                                        {data?.vehicle?.map((v) => {
                                            const pilotFind = data?.people?.find(p => p.url == v?.pilot)
                                            console.log(pilotFind)
                                            return (
                                                <div key={v.id} className="mb-5 relative py-5 border-gray-500 border-r">
                                                    <h4 className="font-medium">{v.name}</h4>
                                                    <div className="flex justify-end">
                                                        <hr className="my-2 bg-gray-200 w-5/12" />
                                                    </div>
                                                    <div className="px-2 text-black/90 my">
                                                        <span>Description: {v.description}</span>
                                                    </div>
                                                    <ul className="px-4">
                                                        <li><span>Pilot: {pilotFind?.name}</span></li>
                                                        <li><span>Vehicle Type: {v.vehicle_class}</span></li>
                                                        <li><span>Length: {v.length} ft</span></li>
                                                    </ul>

                                                    <div className="absolute bg-rose-500 w-6 h-1 bottom-0 right-0" />
                                                    <div className="absolute bg-gray-500 w-1 h-4 top-0 right-0" />
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