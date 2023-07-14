'use client'

// Import functions
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { slide as Menu } from 'react-burger-menu'

// Import styles
import './styles/styles.scss'
import styles from './styles/layout.module.scss'
import localFont from 'next/font/local'

// Import components
// import Counter from './Counter'
import HamburgerIcon from './HamburgerIcon'
import CloseIcon from './CloseIcon'

// Import media
import logoBlack from '../../public/images/logo-v1-black.png'
import logoWhite from '../../public/images/logo-v1-white.png'
import burger from './styles/images/burger.svg'
import close from './styles/images/close.svg'

export const metadata = {
  title: 'Connor Froese',
  description: 'The personal portfolio site for Connor Froese, Front-End Developer',
}

const elzaFont = localFont({
  src: [
    {
      path: './styles/fonts/Elza-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './styles/fonts/Elza-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './styles/fonts/Elza-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './styles/fonts/Elza-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './styles/fonts/Elza-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-elza',
  display: 'swap',
})

export default function RootLayout(props) {
  const pathname = usePathname();
  const {children} = props;
  console.log(props);
  let colour = ''

  if ( pathname === '/projects') {
    colour = '-blue'
  } 
  else if ( pathname === '/about' ) {
    colour = '-red'
  }
  else if ( pathname === '/contact' ) {
    colour = '-green'
  }
  else {
    colour = '-white' 
  }



  return (
    <html lang="en" className={elzaFont.variable}>
      <body className={`layout layout${colour}`}>
        <header>
        </header>

        <div className='header2'></div>

        <div className={`${styles.siteSidebar} siteSidebar`}>

          <div className='spacingDiv'></div>

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

          <Menu customBurgerIcon={<HamburgerIcon />} customCrossIcon={<CloseIcon />} width={'auto'} right className='burgerMenu' >

            <nav className={styles.siteNav}>
              <ul className='mainNav'>
                <li><Link prefetch={true} href='/projects'>Projects</Link></li>
                <li><Link prefetch={true} href='/about'>About Me</Link> </li>
                <li><Link prefetch={true} href='/contact'>Contact</Link> </li>
              </ul>

              <ul>
                <li><Link prefetch={true} href='https://www.instagram.com/connorrf/'>Insta</Link></li>
                <li><Link prefetch={true} href='https://github.com/Migtig'>GitHub</Link> </li>
                <li><Link prefetch={true} href='https://www.linkedin.com/in/crfroese98/'>LinkedIn</Link> </li>
              </ul>

              <p className={styles.copyright}>c Connor Froese - 2023</p>
            </nav>

          </Menu>
        </div>

        <main className={`${styles.main} main`}>
          {children}         
        </main>

        </body>
    </html>
  )
}
