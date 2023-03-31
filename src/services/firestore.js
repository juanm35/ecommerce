// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore, doc, getDoc, getDocs, where, query } from "firebase/firestore";
import Products from '../db.json'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgJgJ92dWOQuyvqXLekokeTdpsXHu-0uc",
  authDomain: "ecommerce-coder-f03d7.firebaseapp.com",
  projectId: "ecommerce-coder-f03d7",
  storageBucket: "ecommerce-coder-f03d7.appspot.com",
  messagingSenderId: "51497275363",
  appId: "1:51497275363:web:94e9bf9d3e50d0df741ad6",
  measurementId: "G-9XY2VQ63B1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Add a new document with a generated id.
export async function exportData() {
    //for ... of
    const collectionRef = collection(db, "products");
  
    for (let item of Products.items) {
      const { id } = await addDoc(collectionRef, item);
      console.log("Documento creado", id);
    }
  }

  export async function getSingleItemFromDatabase(idItem) {
    // referencia de la colección y del documento
    const productsColectionRef = collection(db, "products");
    const docRef = doc(productsColectionRef, idItem);
  
    // getDoc -> datos
    const docSnapshot = await getDoc(docRef);
  
    // extra
    if (docSnapshot.exists() === false) throw new Error("No existe el documento");
  
    return { ...docSnapshot.data(), id: docSnapshot.id };
  }

  export async function getItemsFromDatabase() {
    const productsColectionRef = collection(db, "products");
    let snapshotProducts = await getDocs(productsColectionRef);
    const documents = snapshotProducts.docs;
  
    const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
    return dataProducts;
  }
  
  export async function getItemsByCategoryFromDatabase(categoryURL) {
    const productsColectionRef = collection(db, "products");
  
    const q = query(productsColectionRef, where("category", "==", categoryURL));
  
    let snapshotProducts = await getDocs(q);
    const documents = snapshotProducts.docs;
    const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
    return dataProducts;
  }

  export async function createOrder(orderData) {
    const collectionRef = collection(db, "orders");
  
    console.log(orderData);
  
    const response = await addDoc(collectionRef, orderData);
    console.log("Orden creada correctamente", response.id);
  
    return response.id;
  }