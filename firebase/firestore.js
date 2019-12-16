/**
 * Firestore:
 * Cloude firestore store data into the documents and which are store into the collections
 */

/**
 * Add data into the firestore
 */

firestore()
  .collection("users")
  .add({
    name: "pradeep",
    age: 20
  })
  .then(docRef => console.log(docRef))
  .catch(err => {
    console.log(err);
  });

// Add a second document with a generated ID.
db.collection("users")
  .add({
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });

/**
 * Read data : You can also use the "get" method to retrieve the entire collection.
 */

db.collection("users")
  .get()
  .then(querySnapshot => {
    querySnapshot.forEach(doc => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  });
