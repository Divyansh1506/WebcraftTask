import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCpxto_ZJ9W_jSCSLUnMbfXkI_7Xm6uCQ0",
  authDomain: "loginbymail-942fd.firebaseapp.com",
};

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { auth, provider };
