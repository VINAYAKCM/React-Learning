import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"   

import phone from "../assets/phone.png"
import mail from "../assets/mail.png"


export default function Contact(props) {
  return (
    <>
        <article className="contact-card">
                <img 
                    src={props.img}
                    alt="Photo of Mr. Whiskerson"
                />
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img 
                        src={phone} 
                        alt="phone icon" 
                    />
                    <p>(212) 555-1234</p>
                </div>
                <div className="info-group">
                    <img 
                        src={mail} 
                        alt="mail icon"
                    />
                    <p>{props.email}</p>
                </div>
            </article>
    </>
  )
}