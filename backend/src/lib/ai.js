const dotenv = require('dotenv')
const { Configuration, OpenAIApi } = require('openai')

const configuration = new Configuration({
  apiKey: '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',
})
const openai = new OpenAIApi(configuration)

module.exports = async function ({ name, description }) {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `Create a description for a baking event:\n\nbaking sourdough is:
    name: ${name}
    description: ${description}
    `,
    temperature: 0.5,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  })

  return response.data.choices?.[0]?.text
}
