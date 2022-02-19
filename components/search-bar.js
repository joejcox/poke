import { useRouter } from 'next/router'
import { useContext, useState, useRef, useEffect } from 'react'
import { PokemonContext } from '../context/pokemon'
import SearchAutoComplete from './search-autocomplete'

export default function SearchBar() {
  const { pokemon } = useContext(PokemonContext)
  const router = useRouter()
  const [value, setValue] = useState('')
  const [results, setResults] = useState([])
  const [formIsFocused, setFormIsFocused] = useState(false)
  const acRef = useRef(null)

  useEffect(() => {
    if (!formIsFocused) return null
    const checkIfAutocompleteShouldBeHidden = e => {
      if (e.target !== acRef.current) {
        setFormIsFocused(false)
      }
    }
    document.addEventListener('click', checkIfAutocompleteShouldBeHidden)

    return () => {
      document.removeEventListener('click', checkIfAutocompleteShouldBeHidden)
    }
  }, [formIsFocused])

  const handleFocus = () => {
    setFormIsFocused(true)
  }

  const handleChange = e => {
    setValue(e.target.value)
    const filtered =
      e.target.value !== ''
        ? pokemon.filter(pm =>
            pm.name.includes(e.target.value.toLowerCase().replace(' ', '-'))
          )
        : []
    setResults(filtered)
  }

  const handleSubmit = e => {
    if (!value) return false
    e.preventDefault()
    window.location.href = `http://localhost:3000/pokemon/${value.toLowerCase()}`
  }

  const handleClick = name => {
    router.push(`/pokemon/${name}`)
    setValue('')
  }

  return (
    <div className="relative ml-auto w-[350px]">
      <form onSubmit={handleSubmit} onFocus={handleFocus}>
        <input
          type="search"
          value={value}
          onChange={handleChange}
          className="w-full rounded-full border border-gray-200 px-6 py-3 text-lg text-gray-600 outline-white"
          placeholder="Search Pokemon"
          required
          ref={acRef}
        />
      </form>
      <SearchAutoComplete
        value={value.trim().match('^[A-Za-z0-9]+$')}
        handleClick={handleClick}
        formIsFocused={formIsFocused}
        results={results}
      />
    </div>
  )
}
