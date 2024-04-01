// Import GoogleGenerativeAI from the package
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Create new GoogleGenerativeAI instance with API key as param
const genAI = new GoogleGenerativeAI("AIzaSyAnIenr2eGQJmOy9CULRoNtepLrf02gD0o");

// Are using the latest verion of Gemini 1.0 Pro; Input token limit is 30720; Output token limit is 2048; Rate limit is 60 request per minute
// Note: For Gemini models, a token is equivalent to about 4 characters. 100 tokens are about 60-80 English words.
// For more information about Gemini 1.0 Pro and other Gemini models:  https://ai.google.dev/models/gemini#model-sizes

// optional: configure generation settings for model
// const generationConfig = {
//   maxOutputTokens: 200,
// };

// optional: configure safety settings for model
// const safetySettings = [
//   {
//     category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//     threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
//   },
// ];

// Get the generative model with the specified model name and optional generation and safety settings
const model = genAI.getGenerativeModel({
    model: "gemini-1.0-pro-latest",
    // generationConfig,
    // safetySettings,
});

// Below are examples of different Gemini use cases.
// When generating text from text-only input, use the generateContent method to generate text output
// When using generateContent, the conversation history needs to be stored for Gemini to remember
async function run() {
  try {
    const prompt =
      "Given the following sentence: Hello, my name is Edwin. I am 32 years old and live in Miami, Florida. As part of my goal of becoming a fotware engineer I am working on this project with a group of friends. Convert to spanish, french, and german. Return the response as a JSON object";
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    // console.log("Gemini text response: ", text);
    const cleanText = cleanJsonString(text);
    console.log("Clean Text at Index 0 ", cleanText.slice(0, 3));
    console.log("Gemini JSON response: ", JSON.parse(text));

    process.exit(0);
  } catch (e) {
    console.error("There was a problem generating content from Gemini: ", e.message);
  }
}

function cleanJsonString(text) {
  // Remove triple backticks and trim whitespace
  let jsonString = text.trim().replace(/^```|```$/g, "");

  // Remove "json" text if present at the beginning
    jsonString = jsonString.replace(/^JSON\s*/i, "");
    
    jsonString = jsonString.trim(); 

  return jsonString;
}

run();

// When inputting both text and images to generate text output
// use the generateContent method
// const fs = require("fs");

// const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// function fileToGenerativePart(path, mimeType) {
//   return {
//     inlineData: {
//       data: Buffer.from(fs.readFileSync(path)).toString("base64"),
//       mimeType,
//     },
//   };
// }

// async function run() {
//     // For text-and-image input (multimodal), use gemini-pro-vision model
//     const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

//     const prompt = "What's different between these pictures?";

//     const imageParts = [
//         fileToGenerativePart("image1.png", "image/png"),
//         fileToGenerativePart("image2.jpeg", "image/jpeg"),
//     ];

//     const result = await model.generateContent([prompt, ...imageParts]);
//     const response = await result.response;
//     const text = response.text();
// }

// run();

// take a language, specify 10 languages to convert into...english, german,... take reponse, parse response, ask for a json response.
