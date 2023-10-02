import { globalStyles } from '@/styles/globals';
import type { AppProps } from 'next/app'
import bee from '@/assets/bee.svg'
import { Container, Header } from '@/styles/pages/app';
import Image from 'next/image';


export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return(
    <Container>
      <Header>
        <Image src={bee} alt="" height={70}/>
      </Header>
       <Component {...pageProps} />

    </Container>
    )
}
