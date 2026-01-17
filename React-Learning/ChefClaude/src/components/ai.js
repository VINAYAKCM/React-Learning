import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

export async function getRecipeFromGemini(ingredientsArr) {
  try {
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",  // ← newest, fast, free-tier model
      generationConfig: { maxOutputTokens: 1024 },
      systemInstruction: SYSTEM_PROMPT,
    });

    const ingredientsString = ingredientsArr.join(", ");

    const result = await model.generateContent(
      `I have these ingredients: ${ingredientsString}. ` +
      `Please suggest a delicious recipe I can make with them!`
    );

    const response = await result.response;
    return response.text();
  } catch (err) {
    console.error("Gemini API Error:", err);
    let message = "Sorry, couldn't generate a recipe right now.";
    if (err.status === 429) {
      message += " (Too many requests — wait 1–2 minutes)";
    } else if (err.status === 401 || err.status === 403) {
      message += " (Invalid API key — double-check your .env)";
    } else if (err.status === 404) {
      message += " (Model not found — try a different model)";
    }
    return message;
  }
}