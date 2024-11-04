const { MongoClient } = require("mongodb");
const url ="mongodb+srv://Abhishek:DjafTdrkRi3Oehow@hellonode.0kn5t.mongodb.net/";
const client = new MongoClient(url)
const dbName ="HelloWorld";

async function main(){
    await client.connect();
    console.log("connection successfully to server");
    const db = client.db(dbName);
    const collection = db.collection('User');

    const data={
        first_name: "Rohan",
        last_name: "Ale",
        city: "Nepal",
        cell: "386747516"
    };

  //  const insertResult =await collection.insertMany([data]);
  //  console.log("Inserted document =>",insertResult);
    //Read
  //  const findResult = await  collection.find({}).toArray();
  //  console.log("Found Document =>", findResult);

  //  const countResult = await collection.countDocuments({});
  //  console.log("Count of Documents in the user collection =>", countResult);

    // Find all documents with a filter of firstname: Rohan
    const result = await collection.find({first_name: "Rohan"}).toArray();
    console.log("result =>", result);

    const result2 = await collection.find({first_name: "Rohan"}).count();
    console.log("result2 =>", result2);

    return 'done';
}
main()
.then(console.log)
.catch(console.error)
.finally(() => client.close());







//NOTES:
//go to mongoDB
// create a free M0 cluster
//create a  user
//  get the connection string
// install mongo DB compass
//create a database
//install mongodb package
//create a connection from code
//CRUD - create,read,update, delete operations
