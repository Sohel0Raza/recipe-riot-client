// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzA9yinSPlmHLVKAB7pu4ANPAoSYROnok",
  authDomain: "recipe-riot-auth.firebaseapp.com",
  projectId: "recipe-riot-auth",
  storageBucket: "recipe-riot-auth.appspot.com",
  messagingSenderId: "237361723845",
  appId: "1:237361723845:web:7bf74a60e006bf209fb3ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;