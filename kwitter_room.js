
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyCCdf-X6CIzqS87CiMaQcAAimJO9jXGA9g",
      authDomain: "classtest-fee49.firebaseapp.com",
      databaseURL: "https://classtest-fee49-default-rtdb.firebaseio.com",
      projectId: "classtest-fee49",
      storageBucket: "classtest-fee49.appspot.com",
      messagingSenderId: "233036804723",
      appId: "1:233036804723:web:3de76faf7b45c088ad7006"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome "+ user_name+ "!";      
function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;     
console.log("room name - " + Room_names);
row = "<div class='room_name' id= "+ Room_names + "onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";


document.getElementById("output").innerHTML += row;
});});}
getData();
function redirectToRoomName(name) 
{ 
  console.log(name);
   localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html"; 
  }
  function logout() 
  {
     localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location = "kwitter.html"; 
  }