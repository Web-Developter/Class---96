
var firebaseConfig = {
      apiKey: "AIzaSyBGCYnxzVTJBCFWZ5fSpMyweDJlw1nQF7w",
      authDomain: "kwitter-ffb2e.firebaseapp.com",
      databaseURL: "https://kwitter-ffb2e-default-rtdb.firebaseio.com",
      projectId: "kwitter-ffb2e",
      storageBucket: "kwitter-ffb2e.appspot.com",
      messagingSenderId: "979693691576",
      appId: "1:979693691576:web:4a8fa31d5319d63c1cca4d"
    };
    
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name, message:msg, like:0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.revoveItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}