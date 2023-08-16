// Import functions
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
    title: {
        absolute: 'About Me',
    },
}

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

                <h2>The Personal</h2>

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

            <div className='divider'></div>

            <section className='section-professional'>
                <h2>The Professional</h2>

                <h3>Skills</h3>
                <ul className='skill-list'>
                    {restData.acf.skills_list.map((skill) => (
                        <li className={skill.skill_category}>{skill.skill_name}</li>
                    ))}
                </ul>
            </section>

            <div className='divider'></div>

            <section className='section-contact'>
                <h2>Want to get in touch?</h2>
                <div className='link'><Link href='/contact'>Contact Me</Link></div>
            </section>
        </div>
    )
}