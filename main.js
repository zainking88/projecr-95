function add_user(){
user=document.getElementById("user_name").value;
localStorage.setItem("username",user);
window.location="indexroom.html";
}

