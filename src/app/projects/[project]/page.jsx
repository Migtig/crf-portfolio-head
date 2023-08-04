

async function fetchData(someData) {

    const restPath = `https://connorfroese.ca/portfolio-src/wp-json/wp/v2/crf-project/${someData}`

    const response = await fetch( restPath, { next: { revalidate: 1 } })

    if ( !response.ok ) {
        throw new Error( 'Failed to fetch data' )
    }

    return response.json()
}

export default async function ProjectInfo({ params }) {

    const project = await fetchData(params.project)


    return (
        <div>
            <h1>{project.title.rendered}</h1>
            <p>This is a description of my project. I worked very hard on it.</p>
        </div>
    )
}