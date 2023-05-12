import Cookies from 'cookies'
import clientPromise from "../../lib/mongodb";
// const { createHash } = require('node:crypto');

export default async function handler(req, res) {
    if (req.method == "POST") {
        const name = req.body['name']
        const email = req.body['email']
        const password = req.body['password']
        console.log(name,email,password)
        
        const client = await clientPromise;
        const db = client.db("Users");
        const users = await db.collection("Profiles").find({ "name": name }).toArray();
        if (users.length > 0) {
            res.redirect("/signup?msg=A user already has this username");
            return;
        }
        // const password_hash = createHash('sha256').update(password).digest('hex');
        // const currentDate = new Date().toUTCString();
        const bodyObject = {
            name: name,
            email:email,
            password: password
        }
        await db.collection("Profiles").insertOne(bodyObject);
        const cookies = new Cookies(req, res)
        const abc = name+email+password
        cookies.set('name', name)
        res.redirect("/")
    } else {
        res.redirect("/")
    }
}