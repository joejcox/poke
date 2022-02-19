import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function AllPokemon() {
  const router = useRouter()

  useEffect(() => {
    router.push('/all-pokemon/1')
  })

  return (
    <Head>
      <title>All Pokemon</title>
      <meta
        name="description"
        content="Find information about all of the available pokemon in the Sinnoh region and beyond"
      />
    </Head>
  )
}
