//si funciona soy dios
var user = document.getElementById('username');
var passwd = document.getElementById('password');
var submit = document.getElementById('submit');

function clicked(){
  if (username == "admin" && password == "admin"){
    window.location.replace("http://ibaillanos.tv/video.mp4");
  } else alert("Invalid credentials");
