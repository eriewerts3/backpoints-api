const BpContents = require('./models/back-points');
const BPEntry = require('./models/back-points-entry');

const db = new BpContents();

let entry = new BPEntry('Monday', 1000, 2, 0, 0);
let entry2 = new BPEntry('Tuesday', 1000, 2, 0, 0);
let entry3 = new BPEntry('Wednesday', 1000, 2, 0, 0);
let entry4 = new BPEntry('Thursday', 1000, 2, 0, 0);

db.addEntry(entry);     
db.addEntry(entry2);    
db.addEntry(entry3);    
db.addEntry(entry4);    

let entries = db.getEntries();


console.info(entries[0].threeDayAverage); //entry
console.info(entries[1].threeDayAverage); //e, e2
console.info(entries[2].threeDayAverage); //e, e2, e3
console.info(entries[3].threeDayAverage); //e2, e3, e4

console.log(entries);
