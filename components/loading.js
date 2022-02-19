import Image from 'next/image'

export default function Loading() {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center bg-white">
      <Image
        className="animate-spin"
        src={'/images/pokeball.png'}
        alt=""
        width="100"
        height="100"
        priority
      />
      <h2 className="text-2xl">Searching Pokédex...</h2>
    </div>
  )
}
