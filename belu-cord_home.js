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

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      })
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name-"+Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>"
       document.getElementById("output").innerHTML+=row;
      });});}
getData();

function redirectToRoomName(room){
      console.log(room);
      localStorage.setItem("room_name",room);
      window.location="belu-cord_room.html";
}

function logout(){
      console.log("Signing Out")
      firebase.auth().signOut().then(() => {
            // Sign-out successful.
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location = "index.html";
            console("Sign-out successful")
          }).catch((error) => {
            // An error happened.
          });
}