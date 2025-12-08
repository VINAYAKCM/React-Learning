import { createRoot } from 'react-dom/client'
import reactLogo from './assets/react.svg'
import './index.css'

const root = createRoot(document.getElementById('root'))

root.render(

    <Page />

)


function Header() {
  return (
    <header className = "header">

        <div className="logo-h1">
        <img className="img"src={reactLogo} alt="React Logo"></img>
        <h1 className="nav-h1">ReactFacts</h1>
        </div>

        <nav>
          <ul className = "nav-list">
            <li className= "nav-li">Pricing</li>
            <li className= "nav-li">About</li>
            <li className= "nav-li">Contact</li>
          </ul>        
        </nav>
    </header>
  )
}

function Main(){
  return (
    <main className="main">
        <h1 className="main-h1">Reason I'm excited to learn React</h1>
        <ul>
            <li className="main-li">This'll be the first language that I actually learn properly.</li>
            <li className="main-li">I'd like to then learn animations, getting one step closer to being a design engineer.</li>
            <li className="main-li">Then get a job, be proud of myself for the first time ever in my life.</li> 
        </ul>
      </main>
  )
}

function Footer(){
  return (
    <footer className="footer">
        <small>© 2024 Ziroll development. All rights reserved.</small>
    </footer>
  )
}

function Page() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}
