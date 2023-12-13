
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCCUVfAwSpoPtbZMLGVNpjxciISLaaCC2Q",
  authDomain: "travel-project-51404.firebaseapp.com",
  projectId: "travel-project-51404",
  storageBucket: "travel-project-51404.appspot.com",
  messagingSenderId: "555328258383",
  appId: "1:555328258383:web:97077f0a886da51502453a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
