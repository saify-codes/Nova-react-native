// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnElcAYlcpmWkdJ8S3lRi_5VQFDXc-j0k",
  authDomain: "react-native-a3d27.firebaseapp.com",
  projectId: "react-native-a3d27",
  storageBucket: "react-native-a3d27.firebasestorage.app",
  messagingSenderId: "451971736331",
  appId: "1:451971736331:web:ffb591f23e0826ad4cf80e",
  measurementId: "G-E8VFD96TGV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);