import { Client, Databases, Storage } from 'appwrite'

const client = new Client()
const client2 = new Client()

client2
  .setEndpoint(`${process.env.NEXT_PUBLIC_APP_ENDPOINT}`)
  .setProject(`${process.env.NEXT_PUBLIC_PROJECT_ID}`)

client
  .setEndpoint(`${process.env.NEXT_PUBLIC_ENDPOINT}`)
  .setProject(`${process.env.NEXT_PUBLIC_PROJECT_ID}`)

export const databases = new Databases(client)
export const storage = new Storage(client2)
export const getBucketID = () => process.env.NEXT_PUBLIC_BUCKET_ID ?? ''

export default client
