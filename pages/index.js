import Head from 'next/head'
import Link from 'next/link'

export default function Home({ pokemon }) {
  return (
    <main role="main" className="py-16">
      <Head>
        <title>Poke</title>
        <meta name="description" content="Poke API Stuff" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-full items-center justify-center">
        <Link href="/page/1">
          <a className="rounded-full bg-sky-500 py-4 px-16 text-center text-white hover:bg-sky-600">
            Go To Poke List
          </a>
        </Link>
      </div>
    </main>
  )
}

// import axios from 'axios'
// import Head from 'next/head'
// import Container from '../components/container'
// import PokemonList from '../components/pokemon-list'
// import SearchBar from '../components/search-bar'

// export default function Home({ pokemon, count }) {
//   return (
//     <div>
//       <Head>
//         <title>Poke</title>
//         <meta name="description" content="Poke API Stuff" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <section className="border-y border-gray-200 bg-gray-100 py-8">
//         <Container>
//           <PokemonList pokemon={pokemon} />
//         </Container>
//       </section>
//     </div>
//   )
// }

// export async function getStaticProps() {
//   let response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1126')

//   return {
//     props: {
//       pokemon: response.data.results,
//     },
//   }
// }
