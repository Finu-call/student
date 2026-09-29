import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

export const firebaseConfig = {
 apiKey: "AIzaSyC1lyGA9VZuAYKzSTcRu1r8fOnsoMBHh7I",
  authDomain: "studentsave-d07e1.firebaseapp.com",
  projectId: "studentsave-d07e1",
  storageBucket: "studentsave-d07e1.firebasestorage.app",
  messagingSenderId: "216325632538",
  appId: "1:216325632538:web:71325309a863b2bd0097a3",
  measurementId: "G-FE3FPTFMXD"
};

export const firebaseConfigured = !String(firebaseConfig.apiKey).startsWith("YOUR_");

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
