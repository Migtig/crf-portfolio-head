import loading from '../../public/images/loading.gif'
import Image from 'next/image'

export default function Loading() {
    return (
        <Image 
            src={loading}
            height={144}
            width={144}
            priority={true}
            className='loading'
        />
    )
}