'use client'

// Import functions
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { slide as Menu } from 'react-burger-menu'
import { useState } from 'react'

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

export default function SiteLayout({ children }) {
  const pathname = usePathname();
  let colour = ''
  let logo = logoWhite

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
    logo = logoBlack
  }



  const [ menuOpen, setMenuOpen ] = useState(false)

  function openMenu() {
    setMenuOpen(true)
  }

  function closeMenu() {
    setMenuOpen(false)
  }



  return (
      <div className={`layout layout${colour}`}>
        <div className='header1'></div>

        <div className='header2'></div>

        <div className={`${styles.siteSidebar} site-sidebar`}>

          <div className='logo-wrapper'>
            <Link prefetch={true} href='/'>
              <Image
                src={logo}
                fill='true'
                alt='Connors Logo'
                priority='true'
              />
            </Link>
          </div>

          <Menu 
            customBurgerIcon={<HamburgerIcon />} 
            customCrossIcon={<CloseIcon />} 
            width={'auto'} 
            right 
            className='burger-menu' 
            isOpen={menuOpen}
            onOpen={() => openMenu()}
            onClose={() => closeMenu()}
          >

            <nav>
              <ul className='main-nav'>
                <li><Link prefetch={true} href='/projects' onClick={() => closeMenu()}>Projects</Link></li>
                <li><Link prefetch={true} href='/about' onClick={() => closeMenu()}>About Me</Link> </li>
                <li><Link prefetch={true} href='/contact' onClick={() => closeMenu()}>Contact</Link> </li>
              </ul>

              <div className='foot-items'>
                <ul>
                  <li><Link prefetch={true} href='https://www.instagram.com/connorrf/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill='currentColor' d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></Link></li>
                  <li><Link prefetch={true} href='https://github.com/Migtig'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill='currentColor' d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></Link></li>
                  <li><Link prefetch={true} href='https://www.linkedin.com/in/connorfroese|/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill='currentColor' d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></Link> </li>
                </ul>

                <p className='copyright'>c Connor Froese - 2023</p>
              </div>

            </nav>

          </Menu>

          <nav className='desktop-nav'>
              <ul className='main-nav'>
                <li><Link prefetch={true} href='/projects' onClick={() => closeMenu()}>Projects</Link><div className='page-marker'></div></li>
                <li><Link prefetch={true} href='/about' onClick={() => closeMenu()}>About Me</Link><div className='page-marker'></div></li>
                <li><Link prefetch={true} href='/contact' onClick={() => closeMenu()}>Contact</Link><div className='page-marker'></div></li>
              </ul>

              <div className='foot-items'>
                <ul>
                  <li><Link prefetch={true} href='https://www.instagram.com/connorrf/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill='currentColor' d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></Link></li>
                  <li><Link prefetch={true} href='https://github.com/Migtig'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill='currentColor' d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></Link></li>
                  <li><Link prefetch={true} href='https://www.linkedin.com/in/connorfroese/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill='currentColor' d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></Link> </li>
                </ul>

                <p className='copyright'>c Connor Froese - 2023</p>
              </div>

            </nav>
        </div>

        <main className={`${styles.main} main`}>
          {children}         
        </main>

        </div>
  )
}
