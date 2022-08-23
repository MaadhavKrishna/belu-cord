//YOUR FIREBASE LINKS
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

room_name=localStorage.getItem("room_name");
user_name=localStorage.getItem("user_name");
message="message";
console.log(room_name)
childData="Welcome to "+room_name;
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData += "<br><br>"+childSnapshot.val().message; if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
      document.getElementById("output").innerHTML=message_data;
      window.scrollTo(0,document.body.scrollHeight);
//Start code
//End code
   } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("Room_Name");
      window.location = "index.html";
}

function send(){
      console.log("send function started")
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            message:user_name+": "+msg
      })
      document.getElementById("msg").value="";
      childData="Welcome to "+room_name;
      getData();
}