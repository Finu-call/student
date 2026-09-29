import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";
export const firebaseConfig={apiKey:"YOUR_FIREBASE_API_KEY",authDomain:"YOUR_PROJECT.firebaseapp.com",projectId:"YOUR_PROJECT_ID",storageBucket:"YOUR_PROJECT.firebasestorage.app",messagingSenderId:"YOUR_MESSAGING_SENDER_ID",appId:"YOUR_APP_ID"};
export const firebaseConfigured=!Object.values(firebaseConfig).some(v=>String(v).startsWith("YOUR_"));
const app=initializeApp(firebaseConfig);
export const auth=getAuth(app); export const db=getFirestore(app); export const googleProvider=new GoogleAuthProvider();