import axios from 'axios'
import Image from 'next/image'
import Container from '../../components/container'
import Suggestions from '../../components/suggestions'

export default function Pokemon({ result }) {
  if (!result || result.error) {
    return <Suggestions result={result} />
  }

  return (
    <main role="main">
      <section className="py-8">
        <Container>
          <div className="flex items-end justify-between">
            <h1 className=" pb-4 text-8xl capitalize text-gray-600">
              {result.name.replace('-', ' ')}
            </h1>

            <figure className="relative h-[100px] w-[100px]">
              <Image
                src={
                  result.sprites.front_default ||
                  result.sprites.other['official-artwork'].default ||
                  'https://pngset.com/images/pokemon-question-mark-sprite-cross-symbol-pac-man-tree-transparent-png-813958.png'
                }
                alt={result.name}
                layout="fill"
                objectFit="contain"
              />
            </figure>
          </div>
          <div className="h-4 bg-gradient-to-tr from-yellow-300 to-yellow-500 shadow-lg shadow-yellow-200"></div>
        </Container>
      </section>
    </main>
  )
}

export async function getStaticPaths() {
  const response = await axios.get(
    'https://pokeapi.co/api/v2/pokemon?limit=1126'
  )

  const paths = [
    ...response.data.results.map(data => ({
      params: { name: data.name },
    })),
  ]

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const result = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
    .then(res => res.data)
    .catch(error => {
      return { error: error.message }
    })

  return {
    props: {
      result,
      name: params.name,
    },
  }
}
