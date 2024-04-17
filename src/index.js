// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
console.log('go here');
const firebaseConfig = {
  apiKey: "AIzaSyDhdR2M8iv6v70dGCUSIhetx66eTQythWA",
  authDomain: "hoclieucongnghe9.firebaseapp.com",
  projectId: "hoclieucongnghe9",
  storageBucket: "hoclieucongnghe9.appspot.com",
  messagingSenderId: "23549767320",
  appId: "1:23549767320:web:86e325122e1a2a96a5aaed",
  measurementId: "G-TP8SK5BNXF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getStorage(app);
const analytics = getAnalytics(app);

function action (){
alert('hjello')
}
document.addEventListener('scroll', async() => {
    console.log('gggg');
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });

    console.log('querySnapshot',querySnapshot);
})