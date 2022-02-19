import axios from 'axios'
import Link from 'next/link'
import Container from './container'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Loading from './loading'

export default function Suggestions({ result }) {
  const router = useRouter()
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)
  const name = router.asPath.replace('/pokemon/', '')

  useEffect(() => {
    if (result) {
      setLoading(false)
      return false
    }

    const getPokemonMatchesToIncorrectQuery = async () => {
      const mon = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=1126'
      )

      const matches = mon.data.results.filter(
        items => items.name.includes(name) && items.name
      )
      setPokemon(matches)
      setLoading(false)
    }

    getPokemonMatchesToIncorrectQuery()
  }, [result, name])

  if (loading) {
    return <Loading />
  }

  const suggest = (
    <>
      <b>Did you mean:</b>{' '}
      {pokemon.map((p, index) => (
        <span key={index}>
          <Link href={`/pokemon/${p.name}`}>
            <a className="text-blue-700 underline hover:text-blue-800">
              {p.name}
            </a>
          </Link>
          {index === pokemon.length - 1 ? '?' : ', '}
        </span>
      ))}
    </>
  )

  return (
    <section className="py-16">
      <Container>
        <h1 className="mb-8 text-5xl leading-tight text-gray-600">
          No pokemon matches for <span className="text-yellow-300">{name}</span>
        </h1>
        {pokemon.length > 0 && suggest}
      </Container>
    </section>
  )
}
