import firebase from "firebase";
import "firebase/fireastore";
import "firebase/auth";
import "firebase/storage";

const config = {
  // put here firebase configuaration object data
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const fireastore = firebase.fireastore();

export default firebase;
