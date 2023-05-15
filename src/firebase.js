// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDownloadURL, getStorage, uploadString, ref, query } from 'firebase/storage';
import { collection, getFirestore, addDoc, doc, getDoc, where, query } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBWxY9pTj7ADKmHBqlZyGwhwt9aoh3WgFI",
    authDomain: "beard-and-puff-vape-shop.firebaseapp.com",
    projectId: "beard-and-puff-vape-shop",
    storageBucket: "beard-and-puff-vape-shop.appspot.com",
    messagingSenderId: "976501525068",
    appId: "1:976501525068:web:05ae947c4f3cd0e1a242e9",
    measurementId: "G-MP6MBKSPWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage();
const storageRef = ref(storage);

const db = getFirestore(app);

const accountRef = doc(db, "account", "user");


export const uploadDataUrlImage = async (fileDataUrl, filename) => {
    console.log(filename);

    const imagesRef = ref(storage, 'images/products/');
    const fileRef = ref(storage, `images/products/${filename}.png`);

    const uploadedFile = await uploadString(fileRef, fileDataUrl, 'data_url');

    const url = await getDownloadURL(fileRef);

    return url;
}


export const userAuth = async (email, password) => {

    const doc = await getDoc(accountRef);
    console.log(doc.data());

}
