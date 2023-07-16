// Import styles
import './styles/styles.scss'
import localFont from 'next/font/local'

// Import components
import SiteLayout from './SiteLayout'


export const metadata = {
  title: {
    template: '%s | Connor Froese',
    default: 'Connor Froese',
  },
  description: 'The personal portfolio site for Connor Froese, Front-End Developer',
  keywords: [ 'web developer', 'Next.js', 'front end developer', 'portfolio', 'WordPress', 'React', 'Vancouver', 'junior developer'],
  generator: 'Next.js',
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

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" className={elzaFont.variable}>
      <body>
        <SiteLayout prop={children}></SiteLayout>
      </body>
    </html>
  )
}