// Import functions
import Link from 'next/link'

// Import styles
import styles from '../styles/home.module.scss'

async function fetchData(restPath) {

    const response = await fetch( restPath, { next: { revalidate: 1 } })

    if ( !response.ok ) {
        throw new Error( 'Failed to fetch data' )
    }

    return response.json()
}

export default async function Contact() {

    const restData = await fetchData('https://connorfroese.ca/portfolio-src/wp-json/wp/v2/pages/23')
    
    return(
        <div className={styles.pageContent}>
            <h2>{restData.acf.header_text}</h2>
            <p>{restData.acf.invitation_to_connect}</p>

            <h3>Email</h3>
            <p>{restData.acf.email}</p>

            <h3>Phone</h3>
            <p>{restData.acf.phone_number}</p>

            <h3><Link href={restData.acf.linkedin_link.url}>LinkedIn</Link></h3>
        </div>
    )
}