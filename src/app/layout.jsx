// Import functions
import Link from 'next/link'
import Image from 'next/image'

// Import styles
import styles from './styles/layout.module.scss'

// Import components
import Counter from './Counter'

// Import media
import logoBlack from '../../public/images/logo-v1-black.png'
import logoWhite from '../../public/images/logo-v1-white.png'

export const metadata = {
  title: 'Connor Froese',
  description: 'The personal portfolio site for Connor Froese, Front-End Developer',
}

export default function RootLayout({ children }) {

  const restBase = 'https://connorfroese.ca/portfolio-src/wp-json/wp/v2/'

  let counter = 0


  return (
    <html lang="en">
      <body>
        <header>

        </header>

        <div className={styles.siteSidebar}>

          <div className={styles.logoWrapper}>
            <Link prefetch={true} href='/'>
              <Image
                src={logoBlack}
                fill='true'
                alt='Connors Logo'
                priority='true'
              />
            </Link>
          </div>

          <nav className={styles.siteNav}>
            <ul>
              <li><Link prefetch={true} href='/projects'>Projects</Link></li>
              <li><Link prefetch={true} href='/about'>About Me</Link> </li>
              <li><Link prefetch={true} href='/contact'>Contact</Link> </li>
            </ul>
          </nav>

          <nav>
            <ul>
              <li><Link prefetch={true} href='https://www.instagram.com/connorrf/'>Insta</Link></li>
              <li><Link prefetch={true} href='https://github.com/Migtig'>GitHub</Link> </li>
              <li><Link prefetch={true} href='https://www.linkedin.com/in/crfroese98/'>LinkedIn</Link> </li>
            </ul>
          </nav>

          <Counter></Counter>

          <p className={styles.copyright}>© Connor Froese - 2023</p>

        </div>

        <main>
          {children}         
        </main>

        </body>
    </html>
  )
}
