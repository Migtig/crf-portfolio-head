// Import functions
import Link from 'next/link'

export const metadata = {
    title: {
        absolute: 'Contact',
    },
}

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
        <div className='page page-contact'>
            <h1 className='page-title-mobile'>Contact</h1>



            <div className='header-connect'>
                <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill='currentColor' d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"/></svg>

                <h2>{restData.acf.header_text}</h2>
            </div>
            <p>{restData.acf.invitation_to_contact}</p>

            <h3>Email</h3>
            <p>{restData.acf.email}</p>

            <h3>Phone</h3>
            <p>{restData.acf.phone_number}</p>

            <h3><Link href={restData.acf.linkedin_link.url}>LinkedIn</Link></h3>
        </div>
    )
}