import dotenv from "dotenv";
dotenv.config();

import { ChatGroq } from "@langchain/groq";

async function testAPI() {
  try {

    const model = new ChatGroq({
      apiKey: process.env.GROQ_API_KEY,
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
    });

    const response = await model.invoke(
      "Hello"
    );

    console.log("✅ API Key Working");
    console.log(response.content);

  } catch (error) {

    console.log("❌ API Key NOT Working");
    console.log(error.message);

  }
}

testAPI();