const BpContents = require('./models/back-points');
const BPEntry = require('./models/back-points-entry');

const db = new BpContents();

let entry = new BPEntry('Monday', 1000, 2, 0, 0);
let entry2 = new BPEntry('Tuesday', 1000, 2, 0, 0);
let entry3 = new BPEntry('Wednesday', 1000, 2, 0, 0);
let entry4 = new BPEntry('Thursday', 1000, 2, 0, 0);
let entry5 = new BPEntry('Friday', 2800, 2, 0, 0);

db.addEntry(entry);     
db.addEntry(entry2);    
db.addEntry(entry3);    
db.addEntry(entry4);
db.addEntry(entry5);


let entries = db.getEntries();//TODO cant figure out why entries isnt being created

// Console loging entries to practice for of loop for to practice for homework
function forofEntries() {
    for (const item of entries) {
        console.log(JSON.stringify(item))
    }
}


console.info(entries[0].fouravg); //entry
console.info(entries[1].fouravg); //e, e2
console.info(entries[2].fouravg); //e, e2, e3
console.info(entries[3].fouravg); //e, e2, e3, e4
console.info(entries[4].fouravg); //e2, e3, e4, e5


// console.log(entries);
forofEntries();