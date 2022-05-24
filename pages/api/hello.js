// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import clientPromise from "../../lib/mongodb"

export default async function handler(req, res) {
  const client = await clientPromise
  const db = client.db("mycv");
  if (req.method === 'POST') {
    try {
      console.log(req.body)
      const bodyObject = JSON.parse(req.body);
      const newPost = await db.collection("contacts").insertOne(bodyObject);
      console.log(newPost)
      res.json({ messageFromServer: "We get your message" })
    } catch (error) {
      res.json({ error, messageFromServer: 'There some problem on server' })
    }
  }
}
