const config = {
    apiKey: "AIzaSyAt9qukQjPJ35WQGH-ej00KnTn_rb0fAHI",
    authDomain: "kwitter-2-64546.firebaseapp.com",
    databaseURL: "https://kwitter-2-64546-default-rtdb.firebaseio.com",
    projectId: "kwitter-2-64546",
    storageBucket: "kwitter-2-64546.appspot.com",
    messagingSenderId: "154940554593",
    appId: "1:154940554593:web:6f875e16b3b602ea4f1920"
  };
  
  
  // Initialize Firebase
  firebase.initializeApp(config);
  User_Name = localStorage.getItem("User_Name");
  room_name =localStorage.getItem("room_name");

  function send(){
        message = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
          name:User_Name,
          like:0,
          message:msg
        });
        document.getElementById("msg").value = "";
  }

  function logOUT(){
  localStorage.removeItem("User_Name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val();
     if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log (firebase_message_id);
console.log (message_data);
name = message_data['name'];
message = message_data['message'];
like  = message_data['like'];
name_with_tag = "<h4>" + name + "<img class = 'user_tick' src = 'tick.png'></h4>";
message_with_tag = "<h4 class = 'message_h4'>"+message+"</h4>";
like_button = "<button class = 'btn btn-warning' id = "+firebase_message_id+" value = "+like+" onclick = 'updateLike(this.id)'> ";
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'> Like:" + like + "</span> </button> <hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag ;
document.getElementById("output").innerHTML += row;


//End code
    } });  }); }
getData();
function updateLike(message_id){
  console.log("clickedonlikedbutton" + message_id );
  button_id = message_id ;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1 ;
  console.log (updated_likes);
firebase.database().ref(room_name).child(message_id).update({
  like : updated_likes
});
}

function logOUT(){
  localStorage.removeItem("User_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}

