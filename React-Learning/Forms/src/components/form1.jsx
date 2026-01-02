export default function Form1() {

    function signUp(formData) {
    {/* Repetitive way of getting data from forms :-- */}
        const email = formData.get("email")
        const password = formData.get("password")
        const dietary = formData.getAll("dietary")
        const description = formData.get("description")
        const color = formData.get("color")
        console.log(email, password, description, dietary, color)

    {/* Repetitive way of getting data from forms :-- */}
        console.log(Object.fromEntries(formData))
  }

    return (
    <section>
      <h1>Signup</h1>
        <form action={signUp}>
        {/* Email :-- */}  
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" placeholder="joe@schmoe.com"  defaultValue="joe@schmoe.com"/>

        {/* Password :-- */}  
            <label htmlFor="password" >Password:</label>
            <input id="password" type="password" name="password"  defaultValue="WEUNFUIEWFNILUAEF"/>

        {/* Description :-- */}
            <label htmlFor="description">Description:</label>
            <textarea name="description" id="description" defaultValue="Hello. This is a description"></textarea>

      {/* Radio :-- */}
          {/* Only one of the radio buttons can be selected at a time because they share the same "name" attribute*/}
          {/* "Value" here in radio input actually helps the formData return the actual value when pulling data from form*/}
            <h4 className="employ">Employment Status</h4>
            <label htmlFor="radio"> 
              <input type="radio" name="employment" value="Unemployed"/> Unemployed
            </label>

            <label htmlFor="radio">
              <input type="radio" name="employment" value="Part-time"/> Part-time
            </label>

            <label htmlFor="radio">
              <input type="radio" name="employment" defaultChecked="True" value="Full-time"/> Full-time
            </label>

            <br />

      {/* CheckBox :-- */}
            <h4 className="diet">Dietary Restrictions</h4>
            <label htmlFor="checkbox">
              <input type="checkbox" name="dietary" value="vegan"/> Vegan
            </label>

            <label htmlFor="checkbox">
              <input type="checkbox" name="dietary" value="non-vegetarian"/> Non-Vegetarian
            </label>

            <label className="diet-final" htmlFor="checkbox">
              <input type="checkbox" name="dietary" value="gluten-Free"/> Gluten-free
            </label>


      {/* Select :-- */}
            <label htmlFor="favColor">What is your favourite color?</label>
            <select name="color" id="color" defaultValue="" required>
              <option value="" disabled>Choose a color</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
              <option value="orange">Orange</option>
              <option value="purple">Purple</option>
            </select>

            <br />
            <button>Submit</button>
        
        </form>
    </section>
    )
}