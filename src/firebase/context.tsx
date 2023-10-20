import { createContext } from "react";
import { Firebase } from "./firebase";
import { getFirestore } from "firebase/firestore";

const initValue: Firebase = {
    db: getFirestore()
};

const FirebaseContext = createContext(initValue);

export default FirebaseContext;
