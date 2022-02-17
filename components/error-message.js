import Container from './container'

export default function ErrorMessage({ message }) {
  return (
    <main className="absolute top-0 right-0 bottom-0 left-0 -z-[1]" role="main">
      <section className="flex h-full items-center">
        <Container>
          <h1 className="text-center text-4xl text-gray-600">{message}</h1>
        </Container>
      </section>
    </main>
  )
}
