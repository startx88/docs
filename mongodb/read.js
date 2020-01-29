/**
 * Reading the document methods and their info:
 */

/**
 * Element Operator:
 * 1. $exists: Matches documents that have the specified field.
 * 2. $type: Selects documents if a field is of the specified type.
 */

/**
 * Evaluation Operator:
 * 1. $expr: allow use of aggregation expression within the query language.
 *    syntax: { $expr: { <expression> } }
 *    ex: db.monthlyBudget.find( { $expr: { $gt: [ "$spent" , "$budget" ] } } )
 *    $expr can build query expressions that compare fields from the same document in a $match stage.
 *
 * 2. $jsonSchema:
 *
 * 3. $mod: Select documents where the value of a field divided by a divisor has the specified remainder
 *    syntax: { field: { $mod: [ divisor, remainder ] } }
 *
 * 4. $regex: Provides regular expression capabilities for pattern matching strings in queries.
 *    syntax: { <field>: /pattern/<options> }
 *
 * 5. $text:
 *
 * 6. $where:
 */

/**
 * Quering arrays:
 * 1. $all: Matches arrays that contain all elements specified in the query.
 * 2. $elmMatch:
 * 3. $size: Selects documents if the array field is a specified size.
 */

/**
 * Understanding the cursors:
 *
 */
