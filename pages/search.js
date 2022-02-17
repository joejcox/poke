import Container from '../components/container'

export default function Search({ query }) {
  return (
    <main role="main">
      <section className="py-8">
        <Container>
          <h1 className="text-8xl text-gray-600">
            {query ? `Search results for ${query}` : 'No search term provided'}
          </h1>
          <div className="mt-8 h-4 bg-gradient-to-tr from-yellow-300 to-yellow-500 shadow-lg shadow-yellow-200"></div>
        </Container>
      </section>
    </main>
  )
}
