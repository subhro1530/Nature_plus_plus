// Import the functions you need from the SDKs you need
import {dbRef} from "./firebase.js";
import {child, set} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

function writeUserData(name, email, phone, thoughts) {
    set(child(dbRef, 'Supporters/' + phone), {
      Name: name,
      Email: email,
      Phone : phone,
      Thoughts: thoughts
    });
    alert("Response Submitted.")
  }

function submit()
{
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const thoughts = document.getElementById('thoughts').value;
    if(name != "" && email != "" && phone != "" && thoughts != "")
      writeUserData(name, email, phone, thoughts);
    else
      alert("All Fields are Required.");
}

document.getElementById('submit').onclick = function() {
  submit();
};