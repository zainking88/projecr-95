var firebaseConfig = {
    apiKey: "AIzaSyDtF6PqKzqCq9aAV_lQO4EBDvMB8h20KaQ",
    authDomain: "web-chat-app-9569b.firebaseapp.com",
    databaseURL: "https://web-chat-app-9569b-default-rtdb.firebaseio.com",
    projectId: "web-chat-app-9569b",
    storageBucket: "web-chat-app-9569b.appspot.com",
    messagingSenderId: "1036626589143",
    appId: "1:1036626589143:web:58bf36375809c940c90792"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
username=localStorage.getItem("username");
document.getElementById("username").innerHTML="welcome "+username+"!";
user_name=localStorage.getItem(username);
function send(){
  msg=document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
        });
        document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;

     name=message_data['name'];
     message=message_data['message'];
     like=message_data['like'];
     name_with_tag="<h4>"+name+"<img src='tick.png'class='user_tick'></h4>";
     message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
     like_button="<button class='btn btn-success 'id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
     span_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
     row=name_with_tag+message_with_tag+like_button+span_tag;
     document.getElementById("output").innerHTML+=row;
    } });  }); }

    function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
      }
