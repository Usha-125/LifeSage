// src/services/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// Your Firebase config (from Project Settings > General > Web SDK snippet)
const firebaseConfig = {
  apiKey: "AIzaSyAO6R1_KYmuTfKcqJ4TqYsRdjzdJaH-2KM",
  authDomain: "lifesage-72ed6.firebaseapp.com",
  projectId: "lifesage-72ed6",
  storageBucket: "lifesage-72ed6.firebasestorage.app",
  messagingSenderId: "552247671104",
  appId: "1:552247671104:web:6a1e0a71b561468c31a2a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
};