import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer>
                <div className="md:px-40 mb-5 md:mb-10 px-5">
                    <p className="text-center font-semibold text-xl">Made for Opportunity</p>
                    <hr className="border-[#d2d2cb] border-b-2 mt-2" />
                </div>
                <div className="bg-[#d2d2cb] md:px-10 lg:px-20 md:py-10 md:grid md:grid-cols-4 px-5 py-4">
                    <div className="col-span-3">
                        <p className="text-2xl font-semibold">Follow My Social Media</p>
                        <div className="flex gap-4 md:mt-3 mt-1">
                            <Link href={"https://github.com/gilangpramudani"}>
                                <a target="_blank" rel="noopener noreferrer" className="transition-all duration-150 ease-out hover:border-b-2 hover:border-black">
                                    <span>GitHub</span>
                                </a>
                            </Link>
                            <Link href={"https://www.instagram.com/pramudani_1/"}>
                                <a target="_blank" rel="noopener noreferrer" className="transition-all duration-150 ease-out hover:border-b-2 hover:border-black">
                                    <span>Instagram</span>
                                </a>
                            </Link>
                            <Link href={"https://www.facebook.com/gilang.peank"}>
                                <a target="_blank" rel="noopener noreferrer" className="transition-all duration-150 ease-out hover:border-b-2 hover:border-black">
                                    <span>Facebook</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="md:col-span-1 border-l border-r md:border-r-0 md:border-l-2 border-gray-500 px-2 md:px-5 mt-2 md:mt-0">
                        <h6 className="font-semibold">Footprints</h6>
                        <p className="">{`I just love making websites and ghibli, that's all`}</p>
                    </div>
                </div>
                <ul className="mt-10 md:px-5 py-2 flex justify-center gap-4 md:gap-10 md:list-disc">
                    <li>All Image is Not My Own</li>
                    <li>Thanks for Visiting</li>
                </ul>
            </footer>
        </>
    )
}