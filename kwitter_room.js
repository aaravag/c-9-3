const firebaseConfig = {
    apiKey: "AIzaSyCtXczwfubdJaXQxX2ZVO-5TgAI-eT5wDE",
    authDomain: "kidduoga.firebaseapp.com",
    projectId: "kidduoga",
    storageBucket: "kidduoga.appspot.com",
    messagingSenderId: "535771436289",
    appId: "1:535771436289:web:7c3ef61a349bbb8c08f700"
  };
  
  // Initialize Firebase
  firebase.initializeApp(config);
  User_Name = localStorage.getItem("User_Name");
  document.getElementById("User_Name").innerHTML = "Welcome   " + User_Name + "   !!";

function getData(){
    firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey;

console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
document.getElementById("output").innerHTML += row;
});
    });
}
getData();
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location = "kwitter_page.html";
}
function add_room(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding_roomname"
    });
    localStorage.setItem("room_name" , room_name);
    console.log(room_name);
    window.location = "kwitter_page.html"
}
function log_out(){
    localStorage.removeItem("User_Name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}


   
