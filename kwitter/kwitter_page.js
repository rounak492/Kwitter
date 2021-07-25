//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAeSSjuSDyC2nzazpGnp66v3TPQiPsLAXQ",
      authDomain: "classname-9973a.firebaseapp.com",
      databaseURL: "https://classname-9973a-default-rtdb.firebaseio.com",
      projectId: "classname-9973a",
      storageBucket: "classname-9973a.appspot.com",
      messagingSenderId: "623310167082",
      appId: "1:623310167082:web:fd0f6b055ef50300be7753",
      measurementId: "G-Q0N8T22D4Y"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name =  message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+ name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>"+ message +"</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon-thumbs-up'>Like: "+ like +" </span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
//End code
      } });  }); }
getData();

function Send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref("room_name").push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}