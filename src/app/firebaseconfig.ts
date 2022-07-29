import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

 export const firebaseConfig = {
    apiKey: "AIzaSyDz8HH8I4BD9-CM2DcJDNbqO6E0XiUG8eI",
    authDomain: "angular-app-5c5b4.firebaseapp.com",
    projectId: "angular-app-5c5b4",
    storageBucket: "angular-app-5c5b4.appspot.com",
    messagingSenderId: "838453758031",
    appId: "1:838453758031:web:1f52ad7be69fda24e2c23a",
    measurementId: "G-LQGQ2BSNP0"
  };
  const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
