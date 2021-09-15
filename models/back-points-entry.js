let Chance = require("chance");
let chance = new Chance();
//TODO ? Should we take away chance?
/**
 * A class to retrieve information about backpoints
 */
class BPEntry {
  constructor(dow, steps, overactive, walk, drive) {
    this.dow = dow; // Day of Week
    this.steps = steps;
    this.overactive = overactive; //Overactive hours
    this.walk = walk; //hours walked
    this.drive = drive; //hours driven.
    this.da = this.dailyActivity(); // Daily activity
    //TODO FT this.FP = this.forcastedPain();
    //TODO FT this.mp = this.mp; //measured pain
  }

  dailyActivity() {
    let steps = this.steps;
    let oa = this.overactive;
    let walk = this.walk;
    let drive = this.drive;

    let activity = steps + oa * 300 - walk * 2500 + drive * 500;
    // console.log(activity);
    return activity;
  }
}

module.exports = BPEntry;
