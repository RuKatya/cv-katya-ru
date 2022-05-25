// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import clientPromise from "../../lib/mongodb"
import * as yup from "yup";

export default async function handler(req, res) {
  const client = await clientPromise
  const db = client.db("mycv");
  if (req.method === 'POST') {
    try {
      console.log(req.body)
      // const { email, name, message } = req.body
      const bodyObject = JSON.parse(req.body);
      // console.log(bodyObject)
      const { email, name, message } = bodyObject

      console.log(email, name, message)

      let schema = yup.object().shape({
        name: yup.string().required("Plese enter your name").min(2),
        email: yup.string().email("Please enter correct Email").required(),
        message: yup.string().required("Please enter your message").min(2),
      });

      schema
        .validate({
          name,
          email,
          message,
        }).then(async function () {
          const newPost = await db.collection("contacts").insertOne(bodyObject);
          console.log(newPost)
          res.json({ messageFromServer: "We got your message" })
        }).catch(err => {
          res.json({ message: err.errors })
        })

      // res.json({ ok: true })


      // const newPost = await db.collection("contacts").insertOne(bodyObject);
      // console.log(newPost)
      // res.json({ messageFromServer: "We got your message" })
    } catch (error) {
      res.json({ error, messageFromServer: 'There some problem on server' })
    }
  }
}
