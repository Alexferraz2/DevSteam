import SaleCard from '@/components/cards/salecard/salcard'
import Container from '@/components/container/container'
import NavBar from '@/components/NavBar/NavBar'
import Subtitle from '@/components/tipography/subtitle/subtitle'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavBar/>
        <Container>
          <div>
            <Subtitle>Meus jogos</Subtitle>
            <SaleCard/>
          </div>
          
          <div>
            <Subtitle>Promoções</Subtitle>
          </div>
          
        </Container>
        
        
      </div>
    </>
  )
}
