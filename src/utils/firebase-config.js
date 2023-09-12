
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
/
const firebaseConfig = {
  apiKey: "AIzaSyBlM0f--v79Jv6D6N-KmmaWlaPTCBWj4b0",
  authDomain: "netflix-clone-app-8a729.firebaseapp.com",
  projectId: "netflix-clone-app-8a729",
  storageBucket: "netflix-clone-app-8a729.appspot.com",
  messagingSenderId: "390635473663",
  appId: "1:390635473663:web:ef55057fb78c74d94b9aca",
  measurementId: "G-PZ0MLDEHTM"
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);
