import { MongoClient } from "mongodb";

async function getDatabase() {
    const url= "mongodb+srv://cristg:<1234>@testcluster.t7cutgj.mongodb.net/";
    const client= new MongoClient(url);
    await client.connect()
    const db = client.db("portfolio");

    return db;
}

async function all(){
    const collection= db
}

export default{all};