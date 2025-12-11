import reactLogo from '../assets/react.svg'

export default function Navbar(){
  return (
    <>
    <header className = "header">
        <img className="img" src={reactLogo} alt="React Logo"/>
        <h1 className="nav-h1">ReactFacts</h1>
    </header>

    </>
  )
}