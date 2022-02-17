import Header from '../components/header'
import PokemonContextProvider from '../context/pokemon'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <PokemonContextProvider>
      <Header />
      <Component {...pageProps} />
    </PokemonContextProvider>
  )
}

export default MyApp
