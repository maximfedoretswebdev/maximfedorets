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

// This is the Log in function
function signIn(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
    window.location.href = "visits.html";
}

// Log out fuction
function signOut(){
    auth.signOut();
    window.location.href = "login.html";
}





    auth.onAuthStateChanged(function(user){
		if(user){
			// var email = user.email;
			var personalEml =  document.getElementById("personalEmail");
            personalEml.innerHTML = `<div>${user.email}</div>`;
			//Take user to a different or home page
			//is signed in
		}else{
			//no user is signed in
		}
    });
