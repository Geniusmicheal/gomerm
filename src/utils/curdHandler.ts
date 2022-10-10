import initializeFirebaseApp from "@utils/Firebase";
import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore";

const db = getFirestore(initializeFirebaseApp);

export const insertQuery = (dbName:string, data:any ,docID?:string) => {
   data.timestamp =new Date();
   return addDoc(collection(db, dbName),data);
}

export const getRecordQuery = async (dbName:string) => {
   return await getDocs(collection(db, dbName));
}