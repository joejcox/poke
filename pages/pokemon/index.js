import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function PokemonRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.push('/pokemon/bulbasaur')
  })

  return (
    <Head>
      <title>All Pokemon</title>
      <meta
        name="description"
        content="Find information about a certain pokemon"
      />
    </Head>
  )
}
