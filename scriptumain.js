function adduser() {
    // create the element
    var newUserElement = document.createElement('li');
    // take the text from the input field
    // store the new user in a variable
    var newUser = document.getElementById("userName").value
    // store the text in the innerText newUserElement
    var newUniv = document.getElementById("userUniv").value
    newUserElement.innerText = newUser + ", " + newUniv
    // append the newUserElement to the unorderlist
    document.getElementById("active_user").appendChild(newUserElement);
   // document.getElementById("userName").value = "";
}
function deluser() {
    // delete the frist element in the list
   // active_user.removeChild(active_user.childNodes[0]);
  var Child = document.getElementById("active_user").lastChild;
  console.log(Child)
  document.getElementById("active_user").removeChild(Child);
  var Child = document.getElementById("active_univ").lastChild;
  console.log(Child)
  document.getElementById("active_univ").removeChild(Child);
}
var input = document.getElementById("userName");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("Add").click();
  }
});
