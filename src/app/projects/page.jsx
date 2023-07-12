// Import functions
import Image from 'next/image'
import Link from 'next/link'

// Import styles
import styles from '../styles/home.module.scss'

// Import components
import ProjectCard from './ProjectCard'

// Import media


async function fetchData() {

    const restPath = 'https://connorfroese.ca/portfolio-src/wp-json/wp/v2/crf-project'

    const response = await fetch( restPath, { next: { revalidate: 1 } })

    if ( !response.ok ) {
        throw new Error( 'Failed to fetch data' )
    }

    return response.json()
}

export default async function Projects() {

    const restData = await fetchData()

    return(

        <div className={styles.pageContent}>
            {restData.map((project) => (
                <ProjectCard prop={project} key={project.id}/>
            ))}
        </div>

    )
}