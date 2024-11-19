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
              <SaleCard
                image={'league-of-legends.jpg'}
                discount={'-20%'}
                fullprice={'R$ 99,99'}
                discountprice={'R$ 79,99'}

              />
              <SaleCard
              image={'dota-2.jpg'}
              discount={'-20%'}
              fullprice={'R$ 99,99'}
              discountprice={'R$ 79,99'}
              />
              <SaleCard
              image={'valorant.jpg'}
              discount={'-20%'}
              fullprice={'R$ 99,99'}
              discountprice={'R$ 79,99'}
              />
            </div>
            
          </div>
          
          <div className={styles.session}>
            <Subtitle>Outros Jogos</Subtitle>
            <div className={styles.gamecontainer}>
              <GameCard
              image={'call_of_duty.jpg'}
              name={'Call of Duty Black Ops 6'}
              type={'Ação'}
              price={'R$ 109,99'}
              />
              <GameCard 
              image={'The-Last-of-Us-Part-1.webp'}
              name={'The Last Of Us - Parte 1'}
              type={'Ação, aventura e sobrevivência'}
              price={'R$ 309,99'}
              />
              <GameCard
              image={'The-Last-of-Us-Part-2.webp'}
              name={'The Last Of Us - Parte 2'}
              type={'Ação, aventura e sobrevivência'}
              price={'R$ 359,99'}
              />
            </div>
          </div>
          
        </Container>
        
        
      </div>
    </>
  )
}
