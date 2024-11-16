import SaleCard from '@/components/cards/salecard/salcard'
import Container from '@/components/container/container'
import NavBar from '@/components/NavBar/NavBar'
import Subtitle from '@/components/tipography/subtitle/subtitle'
import Head from 'next/head'
import styles from '@/styles/index.module.css'
import GameCard from '@/components/cards/ganecard/gamecard'

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
          <div className={styles.session}>
            <Subtitle>Meus jogos</Subtitle>
            <div className={styles.salecontainer}>
              <SaleCard/>
              <SaleCard/>
              <SaleCard/>
            </div>
            
          </div>
          
          <div className={styles.session}>
            <Subtitle>Outros Jogos</Subtitle>
            <div className={styles.gamecontainer}>
              <GameCard/>
              <GameCard/>
              <GameCard/>
            </div>
          </div>
          
        </Container>
        
        
      </div>
    </>
  )
}
