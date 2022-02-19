import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Container from '../../components/container'
import PokemonList from '../../components/pokemon-list'

export default function Page({ page, pages, count, pokemon, images }) {
  const router = useRouter()
  const currentNumberFrom = Math.round((count / pages) * page - 20)
  const currentNumberTo = Math.round((count / pages) * page)

  const goToPrevPage = () => {
    if (page < 2) return false
    router.push(`/all-pokemon/${page - 1}`)
  }

  const goToNextPage = () => {
    if (page >= pages) return false
    router.push(`/all-pokemon/${page + 1}`)
  }

  return (
    <div>
      <Head>
        <title>Page {page} - All Pokemon | Poke</title>
        <meta
          name="description"
          content={`View pokemon starting from ${currentNumberFrom} to ${currentNumberTo}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="border-y border-gray-200 bg-gray-100 py-8">
        <Container>
          <div className="relative mx-4 mb-4 flex h-10 items-center justify-between font-bold text-white">
            <button
              className="flex h-full items-center border-none bg-yellow-400 px-6 font-bold outline-none hover:bg-yellow-500"
              onClick={goToPrevPage}
              disabled={page < 2}
            >
              Prev
            </button>
            <div className="flex h-full w-full items-center justify-center bg-black">
              {currentNumberFrom} - {currentNumberTo} of {count}
            </div>
            <button
              className="flex h-full items-center border-none bg-yellow-400 px-6 font-bold outline-none hover:bg-yellow-500"
              onClick={goToNextPage}
              disabled={page >= pages}
            >
              Next
            </button>
          </div>
          <PokemonList pokemon={pokemon} images={images} />
        </Container>
      </section>
    </div>
  )
}

export async function getStaticPaths() {
  const pokemon = await axios.get(
    'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
  )

  const numberOfPages = Math.ceil(pokemon.data.count / 20)

  const paths = []

  for (let i = 1; i < numberOfPages; i++) {
    paths.push({ params: { num: String(i) } })
  }

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?offset=${20 * (params.num - 1)}&limit=20`
  )

  const images = []

  for (let i = 0; i < response.data.results.length; i++) {
    const pokemon = response.data.results[i]
    const mon = await axios.get(pokemon.url)
    let image = mon.data.sprites.front_default
    if (!image) {
      image = mon.data.sprites.other['official-artwork'].front_default
    }
    images.push(image)
  }

  return {
    props: {
      pokemon: response.data.results,
      images: images,
      pages: Math.round(response.data.count / 20),
      count: response.data.count,
      page: Number(params.num),
    },
  }
}
