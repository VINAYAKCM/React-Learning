import Contact from './components/Contact.jsx'
import './App.css'

import img1 from "./assets/img1.jpg"
import img2 from "./assets/img2.jpg"
import img3 from "./assets/img3.jpg"
import img4 from "./assets/img4.jpg"


export default function App() {

  return (
    <>
      <div className="card">
        <Contact 
            img ={img1}
            name = "Mr. Whiskerson"
            phone = "(212) 555-1234"
            email = "mr.whiskerson@example.com"
        />
        <Contact 
            img ={img2}
            name = "Felix"
            phone = "(212) 555-2345"
            email = "felix@example.com" 
        />
        <Contact 
            img ={img3}
            name = "FufflyKins"
            phone = "(212) 555-3456"
            email = "fluff@me.co"
        />
        <Contact 
            img ={img4}
            name = "Mr. Purrfect"
            phone = "(212) 555-4567"
            email = "purrfect@example.com"
        />
      </div>
    </>
  )
}

