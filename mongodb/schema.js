/******
 * Schema validation:
 * some time you need to validate schema of your document.
 * 
 * 1. validationLevel: Which documents get validated?
 *     - 0: strict => All insert and updates
 *     - 1: moderate => all inserts and updates to correct document.
 * 
 * 2. validationAction: What happens if validation fails?
 *     - 0: error => Throw error and denied insert/udpate.
 *     - 1: warn => Log warning but proceed.
 * 
 * */

db.createCollection("contact", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "message", "mobile"],
      properties: {
        name: {
          bsonType: "string",
          description: "Name must be string"
        },
        email: {
          bsonType: "string",
          description: "Email must be string"
        },
        message: {
          bsonType: "string",
          description: "Message must be string"
        },
        mobile: {
          bsonType: "string",
          description: "Mobile must be string"
        }
      }
    }
  }
});
/*
db.contact.insertMany([
  {
    name: "Pradee",
    email: "pradeep@gmail.com",
    message: "Hello world",
    mobile: "7821489484"
  },
  {
    name: "Arun",
    email: "arun@yahoo.com",
    message: "Hello world",
    mobile: "7291893484"
  },
  {
    name: "Sanjeev",
    email: "sanjeev@hotmail.com",
    message: "I am new on this site",
    mobile: "7296313484"
  },
  {
    name: "Dilip",
    email: "dilip@gmail.com",
    message: "I loave this site world",
    mobile: "7291893484"
  }
]);
 */


/**
 * Update schema
 * 
 * */

db.runCommand({
  colMod: "contact",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "message", "mobile"],
      properties: {
        name: {
          bsonType: "string",
          description: "Name must be string"
        },
        email: {
          bsonType: "string",
          description: "Email must be string"
        },
        message: {
          bsonType: "string",
          description: "Message must be string"
        },
        mobile: {
          bsonType: "string",
          description: "Mobile must be string"
        }
      }
    }
  },
  validationAction: 'warn',
  validationLevel: 'moderate'
})