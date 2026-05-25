import model from "../config/groq.js";

export async function askAI(question) {

  const response =
    await model.invoke(question);

  return response.content;
}