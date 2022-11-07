const passInput = document.querySelector("#password");
const passConfirmationInput = document.querySelector("#passwordConfirmation");
const passNode = document.querySelector("#pass")

passConfirmationInput.addEventListener('keyup', evaluate);


function evaluate (){
  (passInput.value != passConfirmationInput.value) ? unconfirmed(passInput, passConfirmationInput) : confirmed(passInput, passConfirmationInput);
}

const errorChild = document.createElement("label");
errorChild.textContent= "*Password do not match";
errorChild.classList.add("errorLabel");
//passNode.appendChild(errorChild);


function unconfirmed(a , b){
  passNode.appendChild(errorChild);
  a.classList.remove("ok");
  b.classList.remove("ok");
  a.classList.add("error");
  b.classList.add("error");
}

function confirmed(a , b){
  passNode.removeChild(errorChild);
  a.classList.remove("error");
  b.classList.remove("error"); 
  a.classList.add("ok");
  b.classList.add("ok");
  
}
