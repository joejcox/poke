export default function SearchAutoComplete({
  formIsFocused,
  results,
  value,
  handleClick,
}) {
  const classes =
    formIsFocused && value ? 'opacity-1 transform' : 'translate-y-3 opacity-0'

  return (
    <div
      className={`${classes} absolute top-full left-0 z-50 max-h-[500px] w-full overflow-y-scroll rounded-lg bg-white shadow transition-all duration-200`}
    >
      {results.map(item => (
        <div className="px-6 hover:bg-gray-100" key={item.name}>
          <button
            onClick={() => handleClick(item.name)}
            className="block w-full py-3 px-2 text-left text-sm capitalize text-gray-600 outline-none"
          >
            {item.name.replace('-', ' ')}
          </button>

          <span className="block h-[1px] border-b border-gray-200"></span>
        </div>
      ))}
    </div>
  )
}
