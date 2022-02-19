import Head from 'next/head'
import Header from '../components/header'
import PokemonContextProvider from '../context/pokemon'
import '../styles/globals.css'

// export function reportWebVitals(metric) {
//   console.log(metric)
// }

function MyApp({ Component, pageProps }) {
  return (
    <PokemonContextProvider>
      <Head>
        <link rel="icon" href="/images/pokeball.png" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </PokemonContextProvider>
  )
}

export default MyApp
