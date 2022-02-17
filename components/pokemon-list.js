import Image from 'next/image'
import { useRouter } from 'next/router'

export default function PokemonList({ pokemon, images }) {
  const router = useRouter()

  const handleClick = name => {
    router.push(`/pokemon/${name}`)
  }

  return (
    <div className="flex flex-wrap">
      {pokemon.map((mon, index) => {
        const image =
          images[index] ??
          'https://pngset.com/images/pokemon-question-mark-sprite-cross-symbol-pac-man-tree-transparent-png-813958.png'
        return (
          <article
            key={mon.id + mon.name}
            className="w-full cursor-pointer p-4 capitalize sm:w-1/2 lg:w-1/4"
            onClick={() => handleClick(mon.name)}
          >
            <div className="rounded bg-white p-8 shadow">
              <figure className="relative mx-auto h-28 w-28">
                <Image
                  src={image}
                  alt={mon.name}
                  layout="fill"
                  objectFit="contain"
                />
              </figure>
              <h2 className="text-center text-xl">{mon.name}</h2>
            </div>
          </article>
        )
      })}
    </div>
  )
}
