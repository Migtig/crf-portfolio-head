// Import functions
import Image from 'next/image'


async function fetchData(restPath) {

    const response = await fetch( restPath, { next: { revalidate: 1 } })

    if ( !response.ok ) {
        throw new Error( 'Failed to fetch data' )
    }

    return response.json()
}

export default async function About() {

    const restData = await fetchData('https://connorfroese.ca/portfolio-src/wp-json/wp/v2/pages/17')
    const imgData = await fetchData(`https://connorfroese.ca/portfolio-src/wp-json/wp/v2/media/${restData.acf.portrait_image}`)
    
    return(
        <div className='page page-about'>

            <h1 className='page-title-mobile'>About Me</h1>


            <section className='section-personal'>

                <h2>The Personal Bits</h2>

                <Image
                    src={imgData.media_details.sizes.full.source_url}
                    width={imgData.media_details.sizes.full.width}
                    height={imgData.media_details.sizes.full.height}
                    alt={imgData.alt_text}
                    priority={true}
                    className='portrait'
                />

                <p>{restData.acf.short_bio}</p>
            </section>

            <section className='section-professional'>
                <h2>The Professional Bits</h2>

                <ul>
                    {restData.acf.skills_list.map((category) => (
                        <li>
                            <h3>{category.skill_group}</h3>
                            <p>{category.skill_content}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}