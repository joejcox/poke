import { useState } from 'react'

export default function SearchFilters({ types }) {
  const [isChecked, setIsChecked] = useState([])
  const [isExpanded, setIsExpanded] = useState(false)

  const handleChange = name => {
    if (isChecked.includes(name)) {
      const newCheckedItems = isChecked.filter(item => item !== name)
      setIsChecked(newCheckedItems)
      return false
    }

    setIsChecked([...isChecked, name])
  }

  const handleClear = () => {
    if (!isChecked.length > 0) return null
    setIsChecked([])
  }

  return (
    <div className="mx-4 mb-3 overflow-hidden">
      <span
        className="mb-2 block cursor-pointer bg-white p-4 text-gray-600"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        Filters ({isChecked.length})
      </span>
      <div
        className={`mb-2 flex flex-wrap items-center overflow-hidden bg-white p-1 transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-[400px] translate-y-0' : 'max-h-0 -translate-y-4'
        }`}
      >
        {types.map(type => {
          return (
            <label
              htmlFor={type.name}
              key={type.name}
              className="relative flex w-1/5 cursor-pointer items-center p-1"
            >
              <span
                className={`h-full w-full p-2 ${
                  isChecked.includes(type.name)
                    ? 'bg-yellow-400'
                    : 'bg-gray-100'
                }`}
              >
                <input
                  type="checkbox"
                  id={type.name}
                  className="hidden"
                  onChange={() => handleChange(type.name)}
                />{' '}
                {type.name.substring(1, -1).toUpperCase() +
                  type.name.substring(1)}
              </span>
            </label>
          )
        })}
        <button
          onClick={handleClear}
          className="pl-2 text-red-700 underline hover:text-black"
        >
          Clear All
        </button>
      </div>
    </div>
  )
}
