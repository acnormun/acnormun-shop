import { globalStyles } from '@/styles/globals';
import type { AppProps } from 'next/app'
import bee from '@/assets/bee.svg'


export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return(
    <div>
      <header>
        <img src={bee.src} alt="" height={70} />
      </header>
       <Component {...pageProps} />

    </div>
    )
}
