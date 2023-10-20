import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";
import { Firestore, getFirestore } from "firebase/firestore";

export class Firebase {
  db: Firestore;

  constructor() {
    const app = initializeApp(firebaseConfig);

    this.db = getFirestore(app);
    console.log(this.db)
  }
}

const firebase: Firebase = new Firebase();

export default firebase;
