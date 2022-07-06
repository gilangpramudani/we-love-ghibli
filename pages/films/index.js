import Layout from "../../components/Layout";
import useSWR from "swr";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export default function Films() {
    const fetcher = (url) => {
        return (
            axios.get(url).then((v) => v.data)
        )
    }

    const { data, error, isValidating } = useSWR("https://ghibliapi.herokuapp.com/films", fetcher)
    return (
        <>
            <Layout title={"Films List"}>
                <div className="mt-20 mb-40 md:mt-20 md:mb-60">
                    <h1 className="text-center text-3xl mb-5 md:mb-10 font-medium">{`Studio Ghibli's List Films`}</h1>
                    <div className="lg:grid lg:grid-cols-4 gap-5 md:px-10 md:grid md:grid-cols-2 lg:px-20">
                        {data?.map((value) =>
                            <div key={value.id} className="h-screen lg:h-96 w-full relative transition-all duration-300 ease-in-out  hover:-translate-y-2 hover:shadow-smoothblack/50 shadow-lg">

                                <div className="w-full h-full absolute z-20 transition-all duration-300 ease-in-out opacity-0  px-10 py-5 
                  hover:bg-black/90 hover:opacity-100
                  "
                                >
                                    <div className="relative text-white w-full h-full ">
                                        <h3 className="text-white text-lg">
                                            {value.original_title}
                                        </h3>
                                        <p className="block md:hidden">Romanised: {value.original_title_romanised}</p>
                                        <p className="mt-2 block md:hidden">Director: {value.director}</p>
                                        <div className="flex items-center justify-center w-full h-full">
                                            <Link href={"/films/" + value.id}><a><button className="border-2 border-whote px-5 lg:px-2 lg:py-1 py-2 hover:bg-white hover:text-black rounded ease-in-out transition-all duration-150">More Information</button></a></Link>
                                        </div>
                                        <p className="absolute bottom-0 text-lg">{value.release_date}</p>
                                    </div>
                                </div>
                                <Image src={value.image} alt={value.title} layout="fill" className="" />
                            </div>
                        )}
                    </div>
                </div>
            </Layout>
        </>
    )
}