import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import toast  from "react-hot-toast";

const firebaseConfig = {
  apiKey: "AIzaSyD_JmLURGAuOVzbxCRvwyHRvF872o8H7Jo",
  authDomain: "fblogin-27551.firebaseapp.com",
  projectId: "fblogin-27551",
  storageBucket: "fblogin-27551.appspot.com",
  messagingSenderId: "693661614988",
  appId: "1:693661614988:web:e40d10373b65946046cca9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const login = async (email, password) => {
  try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        return user;
  }
  catch (error) {
        toast.error(error.message);
  }
};

export default app;
