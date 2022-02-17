import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { PokemonContext } from '../context/pokemon'

export default function SearchBar() {
  const { pokemon } = useContext(PokemonContext)

  const router = useRouter()
  const [value, setValue] = useState('')
  const [results, setResults] = useState([])

  const handleChange = e => {
    setValue(e.target.value.toLowerCase())
    const filtered = pokemon.filter(pm =>
      pm.name.includes(e.target.value.toLowerCase())
    )
    setResults(filtered)
  }

  const handleSubmit = e => {
    if (!value) return false

    e.preventDefault()
    router.push({
      pathname: `/pokemon/${value.toLowerCase()}`,
    })
  }

  const handleClick = name => {
    setValue('')
    router.push(`/pokemon/${name}`)
  }

  return (
    <form onSubmit={handleSubmit} className="relative ml-auto w-[350px]">
      <input
        type="search"
        value={value}
        onChange={handleChange}
        className="w-full rounded-full border border-gray-200 px-6 py-3 text-lg text-gray-600 outline-white"
        placeholder="Search Pokemon"
        required
      />
      {results.length > 0 && value !== '' && (
        <div className="absolute top-full left-0 max-h-[500px] w-full overflow-y-scroll rounded-lg bg-white shadow">
          {results.map(item => (
            <div className="px-6" key={item.name}>
              <button
                onClick={() => handleClick(item.name)}
                type="button"
                className="block w-full py-3 px-2 text-left text-sm capitalize text-gray-600 outline-none hover:bg-gray-100"
              >
                {item.name}
              </button>

              <span className="block h-[1px] border-b border-gray-200"></span>
            </div>
          ))}
        </div>
      )}
    </form>
  )
}
