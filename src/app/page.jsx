'use client'

// Import functions
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

// Import styles
import styles from './styles/home.module.scss'

// Import components
import Loading from './Loading'
// Import media

export default function Home() {

  const restPath = 'https://connorfroese.ca/portfolio-src/wp-json/wp/v2/pages/2'
  const [restData, setData] = useState([])
  const [isLoaded, setLoadStatus] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(restPath)
      if ( response.ok ) {
        const data = await response.json()
        setData(data)
        setLoadStatus(true)
      }
      else {
        setLoadStatus(false)
      }
    }
    fetchData()
  }, [restPath])


  return (
    <>
    { isLoaded ?
        <div className={styles.pageContent}>
          <section>
            <p>Connor Froese</p>
            <h1>{restData.acf.hero_text}</h1>
            <p>{restData.acf.sub_hero_text}</p>
          </section>

          <nav className={styles.homeScreenNav}>
            <div className={styles.blue}><Link prefetch={true} href='/projects'>View Works</Link></div>
            <div className={styles.red}><Link prefetch={true} href='/about'>About Me</Link> </div>
            <div className={styles.green}><Link prefetch={true} href='/contact'>Contact</Link> </div>
          </nav>
        </div>
      :
        <Loading />
    }
    </>
  )
}
