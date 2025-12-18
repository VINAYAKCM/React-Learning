import './App.css'
import Joke from './components/Joke.jsx'
import jokesData from './jokesData.js'

export default function App() {
  const jokeElements = jokesData.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />
  })

  return (
    <>
      <section className="Card">
          {jokeElements}
      </section>
    </>
  )
}


