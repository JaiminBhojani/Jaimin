import Cookies from 'cookies'
import clientPromise from "../../lib/mongodb";
const {createHash} = require('node:crypto');

export default async function handler(req, res) {
  if (req.method == "POST"){
    const name = req.body['name']
    const guess = req.body['password']
    console.log(name,guess);
    const client = await clientPromise;
    const db = client.db("Users");
    const users = await db.collection("Profiles").find({"name": name}).toArray();
    if (users.length == 0){
        res.redirect("/login?msg=Incorrect name or password");
        return;
    }
    const user = users[0]
    // const guess_hash = createHash('sha256').update(guess).digest('hex');
    if (guess == user.password){
        const cookies = new Cookies(req, res)
        cookies.set('name', name)
        res.redirect("/")
    } else {
        res.redirect("/login?msg=Incorrect name or password")
    }
  } else {
    res.redirect("/")
  }
}