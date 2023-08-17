import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCPqIIOmRoWuAYJtC8Q71kqRMd_DhZ3_NE",
    authDomain: "proyecto-final-coder-edc77.firebaseapp.com",
    projectId: "proyecto-final-coder-edc77",
    storageBucket: "proyecto-final-coder-edc77.appspot.com",
    messagingSenderId: "760388793622",
    appId: "1:760388793622:web:3814cac6532535e4ae4c37"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);