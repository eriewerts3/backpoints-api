const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://cadevJO:d3m0Journey@dev-ue1-ca.hvarf.mongodb.net?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {

    if(err) {
        console.error(err);
    } else {
        const collection = client.db("test").collection("devices");
        // perform actions on the collection object
        client.close();
    }
});