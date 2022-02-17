import axios from 'axios'
import { createContext, useState, useEffect } from 'react'

export const PokemonContext = createContext([])

export default function PokemonContextProvider({ children }) {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('pokemon'))
    if (data) {
      setPokemon(data)
      return false
    }

    const getPokemon = async () => {
      const response = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=1126'
      )
      setPokemon(response.data.results)
      localStorage.setItem('pokemon', JSON.stringify(response.data.results))
    }

    getPokemon()
  }, [])

  const storePokemon = array => {
    setPokemon(array)
    localStorage.setItem('pokemon', JSON.stringify(array))
  }

  const value = {
    storePokemon,
    pokemon,
  }

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  )
}
