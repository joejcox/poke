import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Loading from '../components/loading'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/all-pokemon/1')
  }, [router])

  return (
    <main role="main" className="py-16">
      <Head>
        <title>Pokéworld | Find information about your favourite pokemon</title>
        <meta
          name="description"
          content="Are you looking for information about your favourite Pokemon? Take a look around and see if you have caught them all! You can find in depth Pokemon statistics right here at Pokéworld"
        />
      </Head>
      <div className="flex h-full items-center justify-center">
        <Loading start />
      </div>
    </main>
  )
}
