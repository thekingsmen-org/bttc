import { Client, Databases } from 'appwrite'

const client = new Client()

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(`${process.env.NEXT_PUBLIC_PROJECT_ID}`)

export const databases = new Databases(client)
export default client
