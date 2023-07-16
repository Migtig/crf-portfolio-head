// Import components
import ProjectCard from './ProjectCard'

export const metadata = {
    title: {
        absolute: 'Projects',
    },
}


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

        <div className='page page-projects'>

            <h1 className='page-title-mobile'>Projects</h1>

            {restData.map((project) => (
                <ProjectCard prop={project} key={project.id}/>
            ))}
        </div>

    )
}