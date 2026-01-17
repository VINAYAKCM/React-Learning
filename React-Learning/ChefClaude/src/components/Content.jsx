import React from "react"
import IngredientsList from '../components/IngredientsList.jsx';
import Recipe from '../components/Recipe.jsx';

export default function Content() {

    const [ingredients, setIngredients] = React.useState([])
    const [recipeText, setRecipeText] = React.useState("")       // ← new: store recipe from mistral
    const [recipeShown, setRecipeShown] = React.useState(false)  

   async function getRecipe() {
    try {
    const res = await fetch("http://localhost:3001/recipe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ingredients })
    })

    const data = await res.json()
    setRecipeText(data.recipe)
    setRecipeShown(true)
    
  } catch (err) {
  console.error("Frontend error:", err)
  setRecipeText("Model is warming up. Try again in a few seconds.")
  setRecipeShown(true)
}
}

    function handleSubmit(formData){

        const ingredient = formData.get("ingredient")

        setIngredients(prevIngredients => [
            ...prevIngredients, ingredient])


    }
    
    return (
        <main>
            <form action={handleSubmit} className ="ingredient-form">
                <input 
                    aria-label="Add ingredient" 
                    type="text" 
                    className="input-box"  
                    placeholder="eg. oregano" 
                    name="ingredient"
                    />
                
                <button className="add-button">Add Ingredient</button>
            </form>

            {ingredients.length > 0 ? <IngredientsList ingredients={ingredients}
                                                       getRecipe={getRecipe} /> : null}


            {recipeShown && <Recipe recipeText={recipeText} />}

        </main>
    )
}

