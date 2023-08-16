// import axios from 'axios'
import dotenv from 'dotenv-safe'
import { Configuration, OpenAIApi } from 'openai'

dotenv.config()

const configuration = new Configuration({
  apiKey: process.env.CHATGPT_KEY,
});

const openai = new OpenAIApi(configuration);

export const sendMessage = (msg) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            "role": "system",
            "content": "Você é um assistente útil"
          },
          {
            "role": "user",
            "content": msg
          }
        ],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      // console.log(response.data.choices[0].message)
      resolve(response.data.choices)
    } catch (error) {
      reject(error)
    }

  })
}


