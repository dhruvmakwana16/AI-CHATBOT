// import dotenv from "dotenv";
// dotenv.config();
// import { GoogleGenerativeAI } from "@google/generative-ai";
// const genAI = new GoogleGenerativeAI(
//   process.env.GOOGLE_API_KEY
// );
// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-flash",
// });
// async function run() {
//   const result = await model.generateContent(
//     "Explain JavaScript in simple words"
//   );
//   console.log(result.response.text());
// }
// run();



















import dotenv from "dotenv";
dotenv.config();

import { ChatGroq } from "@langchain/groq";

const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama-3.3-70b-versatile",
  temperature: 0.7,
});

async function main() {
  try {
    const response = await model.invoke(
      "Explain JavaScript in simple words"
    );

    console.log("✅ GROQ Working");
    console.log(response.content);

  } catch (error) {
    console.log("❌ Error");
    console.log(error.message);
  }
}

main();