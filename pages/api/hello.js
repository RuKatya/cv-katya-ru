// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import clientPromise from "../../lib/mongodb"

export default async function handler(req, res) {
  const client = await clientPromise
  const db = client.db("mycv");
  if (req.method === 'POST') {
    try {
      console.log(req.body)
      let bodyObject = JSON.parse(req.body);
      let newPost = await db.collection("contacts").insertOne(bodyObject);
      console.log(newPost)
      res.json({ message: "We get your message" })
    } catch (error) {
      res.json({ error, message: 'There some problem on server' })
    }
  }
}
