// Import functions
import Link from 'next/link'


export default async function Home() {

  const restPathHome = 'https://connorfroese.ca/portfolio-src/wp-json/wp/v2/pages/2'


  async function fetchData(restPath) {

    const response = await fetch( restPath, { next: { revalidate: 1 } })

    if ( !response.ok ) {
        throw new Error( 'Failed to fetch data' )
    }

    return response.json()
}

const restData = await fetchData(restPathHome)

  return (

    <div className='page page-home'>
      <section>
        <p>Connor Froese</p>
        <h1>{restData.acf.hero_text}</h1>
        <p className='sub-hero-text'>{restData.acf.sub_hero_text}</p>
      </section>

      <ul>
        <li>
          <Link prefetch={true} href='/projects'>
            <p>View Works</p>
            <div className='line'></div>
            <div className='link-box blue'>
              <div>
                <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill='#faf9f6' d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"/></svg>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link prefetch={true} href='/about'>
          <p>About Me</p>
            <div className='line'></div>
            <div className='link-box red'>
              <div>
                <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill='#faf9f6' d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"/></svg>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link prefetch={true} href='/contact'>
          <p>Contact</p>
            <div className='line'></div>
            <div className='link-box green'>
              <div>
                <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill='#faf9f6' d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"/></svg>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}
