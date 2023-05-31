// Using a Hash Table to write functions for the UndergroundSystem class

var UndergroundSystem = function() {
// When instance of the class is created it gets 2 Maps
    this.map = new Map()
    this.map2 = new Map()
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */

// This function is setting the key "id" with the value of the station name and time
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.map.set(id, {s : stationName, time : t})
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */

/** This function checks the map for the given idand if it exists, sets a count for how many times that route has been travelled along with the total time spent 
for that id */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    let check = this.map.has(id)

    if(check){
        let travelName = `${this.map.get(id).s}-${stationName}`
        if(!this.map2.has(travelName)){
            this.map2.set(travelName, {total : 0, count : 0})
        }
        let total = this.map2.get(travelName).total + (t - this.map.get(id).time)
        let count = this.map2.get(travelName).count + 1
        this.map2.set(travelName,{total,count})
    }
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */

// This function is calculating the average time by setting the trip to a variable called "travel" and returning the total if the trip exists
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
  let travel = `${startStation}-${endStation}`
  if(this.map2.has(travel)){
      return this.map2.get(travel).total / this.map2.get(travel).count
  }
};