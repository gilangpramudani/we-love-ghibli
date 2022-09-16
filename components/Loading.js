import Image from 'next/image'
import loading from '/public/loading.svg'


export default function Loading() {
    return (
        <div className='h-full w-full my-20'>
            <div className='relative h-20'>
                <Image src={loading} alt="Loading" layout='fill' quality={50} />
            </div>
        </div>
    )
} 