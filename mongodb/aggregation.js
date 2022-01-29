/******
 * Aggregation framework: Retrieving data efficiently & In a structured way.
 * MongoDB provides three ways to perform aggregation: 
 *    1. the aggregation pipeline, 
 *    2. the map-reduce function, 
 *    3. single purpose aggregation methods.
 *  
 * The aggregation pipeline can operate on a sharded collection.
 * The aggregation pipeline can use indexes to improve its performance during some of its stages.
 * 
 * The aggregation pipeline has an internal optimization phase. 
 *    1. Pipeline Operators and Indexes.
 *    2. Aggregation Pipeline Optimization for details.
 * 
 * Single Purpose Aggregation Operations:
 *    1. db.collection.estimatedDocumentCount().help() 
 *    2. db.collection.count().
 *    3. db.collection.distinct().
 * 
 * 
 * $group vs $project:
 * 
 * $group: n:1
 *  multiple document => single document
 *  use: sum, count, average, max, min, build array etc.
 * 
 * $project: 1:1
 * use: include/exclude field, Transform field (within a single document)
  * */



// sort
db.persons.aggregate([
  { $match: { gender: "male" } },
  { $group: { _id: { age: "$dob.age" }, total: { $sum: 1 } } },
  { $sort: { total: -1 } }
])

// project
// transform location into geoJSON
// transform birthdate
// convert string into double
// substring string
db.persons.aggregate([
  {
    $project: {
      _id: 0,
      email: 1,
      name: 1,
      gender: 1,
      // birthdate: { $convert: { input: "$dob.date", to: 9 } },
      birthdate: { $toDate: "$dob.date" },
      age: "$dob.age",
      location: {
        type: "Point",
        coordinates: [
          { $convert: { input: "$location.coordinates.longitude", to: 1, onError: 0, onNull: 0.0 } },
          { $convert: { input: "$location.coordinates.latitude", to: 1, onError: 0, onNull: 0.0 } },
        ]
      }
    }
  },
  {
    $project: {
      email: 1,
      gender: 1,
      birthdate: 1,
      age: 1,
      location: 1,
      fullName: {
        $concat: [
          { $toUpper: { $substrCP: ["$name.first", 0, 1] } },
          {
            $substrCP: [
              "$name.first",
              1,
              { $subtract: [{ $strLenCP: "$name.first" }, 1] }
            ]
          },
          ' ',
          { $toUpper: "$name.last" }
        ]
      }
    }
  },
  { $group: { _id: { birthYear: { $isoWeekYear: "$birthdate" } }, total: { $sum: 1 } } }
])


/**
 * Pipeline operator:
 * 1. $abs: Returns the absolute value of a number, If the argument resolves to NaN, then NaN is returned.
 *    syntax: { $abs: <number> }, Number should be 1, -1, or null.
 *    ex: db.ratings.aggregate([{ $project: { delta: { $abs: { $subtract: ["$start", "$end"] } } } }])
 *
 * 2. $accumulator: Returns the result of an accumulator function.
 *    syntax:
 *          {
 *             $accumulator: {
 *               init: <code>,
 *               initArgs: <array expression>,        // Optional
 *               accumulate: <code>,
 *               accumulateArgs: <array expression>,
 *               merge: <code>,
 *               finalize: <code>,                    // Optional
 *               lang: <string>
 *             }
 *         }
 *   Ex: db.ratings.aggregate([
 *        {
 *           $group :
 *           {
 *             _id : "$author",
 *             avgCopies:
 *             {
 *               $accumulator:
 *               {
 *                 init: function() {                        // Set the initial state
 *                   return { count: 0, sum: 0 }
 *                 },
 *                 accumulate: function(state, numCopies) {  // Define how to update the state
 *                   return {
 *                     count: state.count + 1,
 *                     sum: state.sum + numCopies
 *                   }
 *                 },
 *                 accumulateArgs: ["$copies"],              // Argument required by the accumulate function
 *                 merge: function(state1, state2) {         // When the operator performs a merge,
 *                   return {                                // add the fields from the two states
 *                     count: state1.count + state2.count,
 *                     sum: state1.sum + state2.sum
 *                   }
 *                 },
 *                 finalize: function(state) {               // After collecting the results from all documents,
 *                   return (state.sum / state.count)        // calculate the average
 *                 },
 *                 lang: "js"
 *               }
 *             }
 *           }
 *         }
 *
 *       ])
 * 
 *
 * $sample: Randomly selects the specified number of documents from its input.
 *  syntax: { $sample: { size:<N, how many documents>}} 
 *          When: N <=5% of number of documents in cource collection and soure collection has >= 100 documents and $sample is the first stage.
 * 
 * $rand: Returns a random float between 0 and 1 each time it is called.
 *  Syntax: { $rand: {} }

 * */


/******
 * 
 * Copy array into another array:
 * */
db.persons.aggregate([
  { $unwind: "$hobbies" }, // it will create multiple copies of array with whole data
  //{ $group: { _id: { age: "$dob.age" }, allHobies: { $push: "$hobbies" } } }, // but it will not remove duplicate
  { $group: { _id: { age: "$dob.age" }, allHobies: { $addToSet: "$hobbies" } } }, // this will remove duplicate value in an array
])

/**
 * Using projection with array:
 *
 * $slice:
 * db.persons.aggregate([{$project:{_id:0, hobbies:{$slice:["$hobbies", 0, 2]}}}])
 *
 * $siz:
 * db.persons.aggregate([{$project:{_id:0, totalEmploye: {$size: "$employees" }}])
 *
 * $filter:
 db.persons.aggregate([
   {
     $project: {
       _id: 0,
       persons: {
         $filter: { input: "$employees", as: "employee", cond: { $eq: ["$$employee.name", "John"] } }
       }
     }
   }
 ])
 *
 * */


db.numbers.aggregate([
  {
    $project: {
      sum: {
        $divide: [
          {
            $subtract: [
              { $multiply: ["$a", 10] },
              { $multiply: ["$b", 10] }
            ]
          }, 10
        ]
      },
    }
  }
])