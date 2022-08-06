function clicked() {
  if (!document.getElementById("valid").checkValidity()) {
    //do stuff here ie. show errors
    alert("input not valid!");
  } else {
    subscribed();
  }
}

function subscribed() {
  //submit form or whatever
  n = document.getElementsByClassName("subscribe");
  n1 = document.getElementsByClassName("btn");
  n[0].innerText = "You have successfully Subscribed :)";
  n1[0].innerText = "Subscribed";
}
