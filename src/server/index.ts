/**
 * @name index.ts
 * @description file contains the code to generate content using the Google Generative AI package.
 * for more information about Gemini 1.0 Pro and other Gemini models:  https://ai.google.dev/models/gemini#model-sizes
 *
 */

// TODO: Make a request to Gemini API to translate prompt to 10 different languages and return response in JSON format. 

import { GoogleGenerativeAI } from "@google/generative-ai"; 
import {
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai/dist/types";

const API_KEY = process.env.API_KEY ?? "YOUR_API_KEY";
console.log(API_KEY);
const genAI = new GoogleGenerativeAI(API_KEY);

/**
 * ====================================
 *        OPTIONAL CONFIGURATION OPTIONS
 * @description
 * ====================================
 */

const _generationConfig = {
  maxOutputTokens: 200,
};

const _safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
];

/**
 * ====================================
 *        GENERATIVE MODEL
 * @description are using the latest version of Gemini 1.0 Pro with an input token limit is 30720, an output token limit is 2048 and a rate limit is 60 request per minute
 *  Note: For Gemini models, a token is equivalent to about 4 characters. 100 tokens are about 60-80 English words.
 * ====================================
 */

const model: string = "gemini-1.0-pro-latest";

const AI = genAI.getGenerativeModel({
  model,
});

/**
 * ====================================
 *        EXAMPLE USE CASES
 * ====================================
 */

async function run() {
  try {
    const prompt = "You have brains in your head, you have feet in your shoes, you can steer yourself, any direction you choose, you're on your own, and you know what you know, and YOU are the guy who'll decide where to go."
    const result = await AI.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    const cleanText = cleanJsonString(text);
    console.log("Clean Text at Index 0 ", cleanText.slice(0, 3));
    console.log("Gemini JSON response: ", JSON.parse(text));

    process.exit(0);
  } catch (error) {
    console.error(
      "There was a problem generating content from Gemini: ",
      error
    );
  }
}

function cleanJsonString(text: string) {
  // Remove triple backticks and trim whitespace
  let jsonString = text.trim().replace(/^```|```$/g, "");

  // Remove "json" text if present at the beginning
  jsonString = jsonString.replace(/^JSON\s*/i, "");

  jsonString = jsonString.trim();

  return jsonString;
}

run();
