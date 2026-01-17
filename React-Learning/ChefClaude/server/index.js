import "dotenv/config"
import express from "express"
import cors from "cors"
import axios from "axios"

const app = express()
app.use(cors())
app.use(express.json())

app.post("/recipe", async (req, res) => {
  try {
    const { ingredients } = req.body

    const prompt = `
You are a helpful chef assistant.
Suggest a simple recipe using some or all of these ingredients:
${ingredients.join(", ")}

Give the recipe with:
- Title
- Ingredients
- Steps
`

    const response = await axios.post(
      "https://router.huggingface.co/hf-inference/models/HuggingFaceH4/zephyr-7b-beta",
      {
        inputs: prompt,
        parameters: {
          max_new_tokens: 400,
          temperature: 0.7
        }
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    )

    res.json({ recipe: response.data[0].generated_text })
  } catch (err) {
    console.error(err.response?.data || err.message)
    res.status(500).json({ error: "Failed to generate recipe" })
  }
})

app.listen(3001, () =>
  console.log("✅ HF server running on http://localhost:3001")
)
