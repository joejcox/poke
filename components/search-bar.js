import { useRouter } from 'next/router'
import { useState } from 'react'

export default function SearchBar() {
  const router = useRouter()
  const [value, setValue] = useState('')

  const handleChange = e => {
    setValue(e.target.value)
  }

  const handleSubmit = e => {
    if (!value) return false

    e.preventDefault()
    router.push({
      pathname: `/pokemon/${value.toLowerCase()}`,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="ml-auto w-[350px]">
      <input
        type="search"
        value={value}
        onChange={handleChange}
        className="w-full rounded-full border border-gray-200 px-6 py-3 text-lg text-gray-600 outline-white"
        placeholder="Search Pokemon"
        required
      />
    </form>
  )
}
