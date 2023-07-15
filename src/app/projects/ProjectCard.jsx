// Import functions
import Image from 'next/image'
import Link from 'next/link'
import { decode } from 'html-entities';


async function fetchData(imageID) {

    const restPath = `https://connorfroese.ca/portfolio-src/wp-json/wp/v2/media/${imageID}`

    const response = await fetch( restPath, { next: { revalidate: 1 } })

    if ( !response.ok ) {
        throw new Error( 'Failed to fetch data' )
    }

    return response.json()
}

export default async function ProjectCard({ prop }) {

    const imageObject = await fetchData(prop.acf.project_screenshot)


    return(
        <article className='project-card'>
            <Image
                src={imageObject.media_details.sizes.large.source_url}
                width={imageObject.media_details.sizes.large.width}
                height={imageObject.media_details.sizes.large.height}
                alt={imageObject.alt_text}
                priority={true}
                className='screenshot'
            />

            <div className='project-info'>
                <h2>{ decode(prop.title.rendered) }</h2>

                <ul className='tech-stack'>
                    {prop.acf.project_tech_stack.map((skill) => (
                        <li>{skill}</li>
                    ))}
                </ul>

                <p className='overview'>{prop.acf.project_overview}</p>

                <div className='links'>
                    <div className='repo-link'><Link href={prop.acf.project_repo_link.url}>{prop.acf.project_repo_link.title}</Link></div>

                    <div className='project-link'><Link href={prop.acf.project_link.url}>{prop.acf.project_link.title}</Link></div>
                </div>

            </div>


        </article>
    )
}