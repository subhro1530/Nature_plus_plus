// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { getDatabase, set, ref, child } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAxmJ3qAGnF4ePp6Q7xKrhFOB3M0zbJ2NI",
authDomain: "nature-plus-plus.firebaseapp.com",
projectId: "nature-plus-plus",
storageBucket: "nature-plus-plus.appspot.com",
messagingSenderId: "923928454079",
appId: "1:923928454079:web:19abcb251b535d09e2770a",
measurementId: "G-2WBBJHJQDC",
databaseURL: "https://nature-plus-plus-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getDatabase(app);
export const dbRef = ref(database);