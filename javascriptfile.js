// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDNygIcFGlAKbxT0QenZnOjGhxsj_V6WGM",
    authDomain: "maxweb-dev.firebaseapp.com",
    projectId: "maxweb-dev",
    storageBucket: "maxweb-dev.appspot.com",
    messagingSenderId: "820857592230",
    appId: "1:820857592230:web:49834065d97d3621c19767",
    measurementId: "G-H3VKVGRBZ2"
  };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    const auth = firebase.auth();

function signUp(){
            
    var email = document.getElementById("email");
    var password = document.getElementById("password");
            
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
            
    alert(email.value + " has signed up");
}
        
        
function signIn(){   
    var email = document.getElementById("email");
    var password = document.getElementById("password");
            
    var promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

}     
    

function signOut(){
    auth.signOut();
}

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        var email = user.email;
        alert("Active user " + email)
    } else {
        alert("No active users")
    }
  });


