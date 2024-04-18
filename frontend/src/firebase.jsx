// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDQ4kYLw4OzWM9TGLMJOcZnhVYwbf88b6g",
  authDomain: "attendance-track-908ad.firebaseapp.com",
  projectId: "attendance-track-908ad",
  storageBucket: "attendance-track-908ad.appspot.com",
  messagingSenderId: "998885080830",
  appId: "1:998885080830:web:d44e3979e077f48da72faf",
  measurementId: "G-CB5WZ7ZQ4R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth