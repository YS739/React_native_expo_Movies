// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// React native Movies 프로젝트
const firebaseConfig = {
  apiKey: "AIzaSyAGyFW4w9hO4zFev_iwO-LHS2Rb72MJIh8",
  authDomain: "react-native-movies-c21a1.firebaseapp.com",
  projectId: "react-native-movies-c21a1",
  storageBucket: "react-native-movies-c21a1.appspot.com",
  messagingSenderId: "616219940150",
  appId: "1:616219940150:web:3cd809c44084da35c9cf97",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const dbService = getFirestore(app);
export const authService = getAuth(app);
