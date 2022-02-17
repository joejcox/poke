import Link from 'next/link'
import ContainerFlex from './container-flex'
import SearchBar from './search-bar'

export default function Header() {
  return (
    <header className="z-50 bg-white py-8 shadow">
      <ContainerFlex>
        <h2 className="text-5xl">
          <Link href="/">Poke</Link>
        </h2>
        <SearchBar />
      </ContainerFlex>
    </header>
  )
}
