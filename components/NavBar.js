import Image from "next/image"
import Link from "next/link"
import LogoNav from '/public/images/logoNav.png'
import { useRouter } from 'next/router'

export default function NavBar() {
    const router = useRouter()
    const centerNav = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Films",
            link: "/films"
        },
        {
            name: "Ghibli's Story",
            link: "/ghibli-story"

        },
    ]
    console.log(router.asPath)

    return (
        <>
            <div className="flex justify-center">
                <Image src={LogoNav} alt="Studio Ghibli's Logo" height={80} width={170} />
            </div>
            <nav className="md:px-20 py-5 flex flex-col md:flex-row md:justify-between">
                <div className="flex justify-center md:justify-start items-center">
                    <ul className="flex gap-10 text-xl text-smoothblack">
                        {centerNav.map((value) =>
                            <Link key={value.name} href={value?.link ?? "#"}>
                                <a>
                                    <li className={`transition-all duration-150 ease-out border-b-2 ${router?.asPath == value?.link ? "border-gray-500" : "border-transparent"} hover:border-black`}>
                                        {value.name}
                                    </li>
                                </a>
                            </Link>
                        )}
                    </ul>
                </div>
                <div className="flex justify-center mt-5">
                    <Link href={"/about"}>
                        <a>
                            <p className={`transition-all text-xl duration-150 ease-out border-b-2 ${router?.asPath == '/about' ? "border-gray-500" : "border-transparent"} hover:border-black`}>
                                About
                            </p>
                        </a>
                    </Link>
                </div>
            </nav>
        </>
    )
}