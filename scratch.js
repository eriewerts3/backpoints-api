const BpContents = require("./models/back-points");
const BPEntry = require("./models/back-points-entry");
const {MongoClient} = require('mongodb');
const { response } = require("express");



// async function main() {
  
//   // //connection string
//   // const uri = "mongodb+srv://dbUser:47SexcstaFkX72Qi@cluster0.wike7.mongodb.net/admin?replicaSet=atlas-f7ubs3-shard-0&readPreference=primary&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-1"/**TODO need to find login info for cluster see notes */
  
//   // //build new mongo connection object
//   // const client = new MongoClient(uri);
  
//   // // use that new client to connect
//   // await client.connect();
  
//   //use the client to reference the collection object for entries collection
//   // const coll = client.db('backPoints').collection('entries');

//   // let response = await coll.aggregate([{$match: {}}]).toArray();

//   // console.info(JSON.stringify(response, null, 4));
  
//   // client.close();
// }


(async () => {
    main();
})();
