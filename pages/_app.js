import '../styles/index.css'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
const TinaWrapper = dynamic(() => import('../components/tina-wrapper'))

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  if (router.pathname.startsWith('/admin')) {
    return (
      <TinaWrapper>
        <Component {...pageProps} />
      </TinaWrapper>
    )
  }
  return <Component {...pageProps} />
}
