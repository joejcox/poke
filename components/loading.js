import Image from 'next/image'

export default function Loading() {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-white bg-opacity-70">
      <Image
        src={require('../images/pokeball.png')}
        alt=""
        width="100"
        height="100"
      />
    </div>
  )
}
