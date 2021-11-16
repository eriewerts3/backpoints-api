const BPEntry = require("./back-points-entry");
//const fs = require('fs');
const { MongoClient } = require("mongodb");

/**
 * A manager of creating multiple entries
 */

class BpContents {
    // client;
    constructor() {
        //connection string
        const uri = "mongodb+srv://dbUser:47SexcstaFkX72Qi@cluster0.wike7.mongodb.net/admin?replicaSet=atlas-f7ubs3-shard-0&readPreference=primary&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-1"/**TODO need to find login info for cluster see notes */
          
        //build new mongo connection object
        this.client = new MongoClient(uri);
        this.isConnected = false;
    }

  /**
   * adds a new bpentry to the database
   * @param {BPEntry} newEntry the new entry you're passing to add
   */
  getAverage(arr) {
    if (!arr) {
      arr = this.entries;
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i].da;
    }
    return sum / arr.length;
  }

  async addEntry(newEntry) {
    //ensure that we are connected to mongo
    if(this.isConnected) {
        await this.client.connect();
        this.isConnected = true;
    }
    await this.client.db('backPoints').collection('entries').insertOne(newEntry);
  }

  /**
   * Get you all the entries stored in the database
   * @returns
   */
  async getEntries() {
    //ensure that we are connected to mongo
    if (!this.isConnected) {
      await this.client.connect();
      this.isConnected = true;
    }

    //let contents = fs.readFileSync('./myData.json', 'utf-8');
    let contents = await this.client
      .db("backPoints")
      .collection("entries")
      .aggregate([{ $match: {} }])
      .toArray();

    if (contents.length == 0) {
      this.entries = [];
    } else {
      this.entries = contents;
    }

    for (let i = 0; i < this.entries.length; i++) {
      switch (i) {
        case 0:
          this.entries[i].fourDayAvg = this.entries[0].da;
          break;
        case 1:
          this.entries[i].fourDayAvg = this.getAverage([
            this.entries[0],
            this.entries[1],
          ]);
          break;
        case 2:
          this.entries[i].fourDayAvg = this.getAverage([
            this.entries[0],
            this.entries[1],
            this.entries[2],
          ]);
          break;
        default:
          let arr = [];

          //get last 4 items from current index
          for (let j = i; j > i - 4; j--) {
            arr.push(this.entries[j]);
          }

          this.entries[i].fourDayAvg = this.getAverage(arr);

          break;
      }

      const element = this.entries[i];
    }

    return this.entries;
  }
}

module.exports = BpContents;
