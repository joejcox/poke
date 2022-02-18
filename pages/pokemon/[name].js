import axios from 'axios'
import Image from 'next/image'
import Container from '../../components/container'
import ErrorMessage from '../../components/error-message'

export default function Pokemon({ result }) {
  if (result.error) {
    return <ErrorMessage message={result.error} />
  }
  return (
    <main role="main">
      <section className="py-8">
        <Container>
          <div className="flex items-end justify-between">
            <h1 className=" pb-4 text-8xl capitalize text-gray-600">
              {result.name}
            </h1>

            <figure className="relative h-[100px] w-[100px]">
              <Image
                src={result.sprites.front_default}
                alt={result.name}
                layout="fill"
                objectFit="cover"
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
    ...response.data.results.map(data => ({ params: { name: data.name } })),
  ]

  return {
    paths,
    fallback: false,
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
    },
  }
}
