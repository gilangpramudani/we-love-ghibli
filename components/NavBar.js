import Image from "next/image"
import Link from "next/link"
import LogoNav from '/public/images/logoNav.png'

export default function NavBar() {
    const centerNav = [
        {
            name: "Home"
        },
        {
            name: "Ghibli's Story"
        },
        {
            name: "About"
        }
    ]

    return (
        <>
            <div className="flex justify-center">
                <Image src={LogoNav} alt="Studio Ghibli's Logo" height={80} width={170} />
            </div>
            <nav className="md:px-20 py-5">
                <div className="flex justify-center md:justify-start items-center">
                    <ul className="flex gap-10 text-xl text-smoothblack">
                        {centerNav.map((value) =>
                            <Link key={value.name} href="#">
                                <a>
                                    <li className="transition-all duration-150 ease-out border-b-2 border-transparent hover:border-black">
                                        {value.name}
                                    </li>
                                </a>
                            </Link>
                        )}
                    </ul>
                </div>
            </nav>
        </>
    )
}