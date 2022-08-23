var firebaseConfig = {
    apiKey: "AIzaSyDh_2KD0OHWOPhHQ3OiWVjJR7gyZECWz-8",
    authDomain: "chatsapp-a633c.firebaseapp.com",
    databaseURL: "https://chatsapp-a633c.firebaseio.com",
    projectId: "chatsapp-a633c",
    storageBucket: "chatsapp-a633c.appspot.com",
    messagingSenderId: "990000824740",
    appId: "1:990000824740:web:b4c0b90aa7fb3c16e0c131",
    measurementId: "G-YYEQDGWW70"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function sudoHeck(){
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    document.getElementById("error").innerHTML="You have been hecked "+user;

    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    document.getElementById("error").innerHTML="Error Code: "+errorCode+"<br>Error Message: "+errorMessage;
    // ..
  });

}