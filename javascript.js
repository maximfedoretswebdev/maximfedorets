var firebaseConfig = {
    apiKey: "AIzaSyABPkrQM3W4M7X47duNwvzLOx_aHn6qm5M",
    authDomain: "maxwebdevlogin.firebaseapp.com",
    projectId: "maxwebdevlogin",
    storageBucket: "maxwebdevlogin.appspot.com",
    messagingSenderId: "425661031757",
    appId: "1:425661031757:web:d06258533f4b685601c304"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function logIn(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.nodeValue, password.value);
    PromiseRejectionEvent.catch(e => alert(e.message));

    alert("Sign in " + email);
  }