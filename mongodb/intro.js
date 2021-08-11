/**
 * What is mongodb: no-sql document database
 *
 * A database: structured way to store and access data.
 *
 * It is a NoSQL database, MongoDB is a document-oriented database.
 * It is scemaless, used json as the data format, no or few relations.
 *
 *
 * Document:
 * A way to organize and store data as a set of field-valiue pairs.
 *
 * {
 *  <field>: <value>,
 *  name:"pradeep",
 *  age:25
 * }
 *
 * Collections: A collection containing many documents.
 *
 *
 * Mondodb has collection and collection has documents.
 * Each document is a json object.
 * Each document max length is 16MB.
 * Document has nested document.
 *
 *
 * MongoDB Ecosystem:
 *
 * 1. MongoDB databse:
 *  1. Self-Managed / Enterprise database => Could Manager / OPS Manager
 *  2. Atlas (Cloud)
 *  3. Mobile
 *
 * 2. Stich
 *  1. Serverless query API.
 *  2. Serverless function.
 *  3. Database triggers
 *  4. Real-time Sync
 *
 *
 *
 *
 *
 * Replica Set - a few connected machines that store the same data to ensure that if something happens to one of the machines the data will remain intact.
 * Comes from the word replicate - to copy something.
 *
 * Instance - a single machine locally or in the cloud, running a certain software, in our case it is the MongoDB database.
 *
 * Cluster - group of servers that store your data.
 *
 *
 *
 * Json vs Bson: no
 *
 * JSON:
 *  Cons: 1. Text based, 2. Space-consumint, 3. Limited
 *  Pros: 1. Simple, 2. Lightweight, 3. Easy to read and write
 *
 *  Encoding: UTF-8 string,
 *  Data Support: Number, string, boolean, Object, Array, null
 *  Readabilty: Human and machine
 *
 *
 * BSON:
 *  Optimized for:
 *  1. Speed.
 *  2. Space.
 *  3. Flexibi
 *
 *  Encoding: Binary
 *  Data Support: Number (Integer, Long, Float, ...), string, boolean, Object, Array, Date, Raw Binary.
 *  Readability: Machine only
 *
 *
 *
 *
 * Import and Export data:
 *
 * JSON:
 * 1. Importing:
 *     mongoimport sales.json -d database -c collection --jsonArray --drop
 * 2. Exporting:
 *    mongoexport --uri="mongodb+srv://<your username>:<your password>@<your cluster>.mongodb.net/sample_supplies" --collection=sales --out=sales.json
 *
 * BSON:
 * 1. Importing:
 *    mongorestore --uri "mongodb+srv://<your username>:<your password>@<your cluster>.mongodb.net/sample_supplies"  --drop dump.bson
 * 2. Exporting:
 *    mongodump --uri "mongodb+srv://<your username>:<your password>@<your cluster>.mongodb.net/sample_supplies"
 *
 *
 * URI: Uniform Resource Identifier
 * SRV: Established a secure connection
 *
 *
 *
 * Data explorer:
 *
 * */




/***
 * MongoDB limits and threshold:
 *
 * 1. BSON document size is 16 megabytes.
 *    The maximum document size helps ensure that a single document cannot use excessive amount of RAM or, during transmission, excessive amount of bandwidth.
 *    To store documents larger than the maximum size, MongoDB provides the GridFS API.
 *
 * 2. Nested Depth for BSON Documents:
 *    MongoDB supports no more than 100 levels of nesting for BSON documents.
 *
 * 3. Naming Restrictions:
 *    1. Database:
 *      a. Database Name Case Sensitivity: Since database names are case insensitive in MongoDB
 *      b. Restrictions on Database Names for Windows: For MongoDB deployments running on Windows, database names cannot contain any of the following characters:
 *         /\. "$*<>:|?, Also database names cannot contain the null character.
 *      c. Length of Database Names: Database names cannot be empty and must have fewer than 64 characters.
 *   2. Collection:
 *      a. Collection names should begin with an underscore or a letter character.
 *         can not use
 *         aa. contain the $.
 *         ab. be an empty string (e.g. "").
 *         ac. contain the null character.
           ad. begin with the system. prefix. (Reserved for internal use.)
 *
 * */


