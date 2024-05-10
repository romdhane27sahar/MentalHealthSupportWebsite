//ce code en commentaire : username est mise en commentaire

/*const form = document.getElementById("form");
//const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkRequired(inputs) {
  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

function checkEmail(input) {
  // Reference: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(input.value.trim()).toLowerCase())) showSuccess(input);
  else showError(input, `${getFieldName(input)} is not valid`);
}

function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}

form.addEventListener("submit", (e) => {
		e.preventDefault();
		checkRequired([email, password, password2]);
		//checkLength(username, 3, 15);
		checkLength(password, 6, 25);
		checkEmail(email);
		checkPasswordMatch(password, password2);
	});
*/



//j'ai changé const en var + gardé username en commentaire


var form = document.getElementById("form");
//var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var password2 = document.getElementById("password2");


function showError(input, message) {
  var formControl = input.parentElement;//The parentElement property returns the parent element of the specified element.
  formControl.className = "form-control error";
  var small = formControl.querySelector("small");//The querySelector() method returns the first element that matches a CSS selector.
  small.innerText = message;
}

function showSuccess(input, message) {
  var formControl = input.parentElement;
  formControl.className = "form-control success";
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//charAt() returns the character at a specified position (ici 0 qui est le 1er caractere dans une chaine) in a string
//slice(1):extracts a part of a string and returns the extracted part (ici extract de la position 1 jusqu'à fin de chaine)
//<=>It removes the first character from the string and returns that without altering the original string
function checkRequired(inputs) {
  inputs.forEach((input) => {
    if (input.value.trim() === "") {//La méthode trim() permet de retirer les blancs en début et fin de chaîne
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}
/*${var} to add the variable string in-line to your current string.(au lieu de faire + de la concatenation)
ex:
let captain = 'Jean-luc'
console.log('Paging ' + captain + ' to report to the bridge.')
est equivalent à :
console.log(`Paging ${captain} to report to the bridge.`)

*/
function checkEmail(input) {
  // Reference: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(input.value.trim()).toLowerCase())) showSuccess(input);
  else showError(input, `${getFieldName(input)} is not valid`);
}
/*RegExp.test(string: string): boolean
Returns a Boolean value that indicates whether or not a pattern exists in a searched string.
ici test va chercher si le pattern re se trouve dans String passé au parametre ou non et retourner une valeur booleenne*/
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}

form.addEventListener("submit", (e) => {
		e.preventDefault();
		checkRequired([email, password, password2]);
		//checkLength(username, 3, 15);
		checkLength(password, 6, 25);
		checkEmail(email);
		checkPasswordMatch(password, password2);
    
	});


//registration done successfull or denied

function register(){
  var mail = document.getElementById("email").value;
  var passwordOne = document.getElementById("password").value;
  var passwordTwo = document.getElementById("password2").value;
  

    if (mail === "romdhane_sahar@yahoo.com" && passwordOne === "123456" && passwordTwo === "123456") {
      alert('Successful Registration ');
      document.location.href= "../html/login.html"
    
    }
    else{
     setTimeout(mssge,100);
      
     //alert('Verify your data !!'); elle bloque donc je l'ai enlevé
      
    }
  }
  function mssge(){
    alert('Verify your data !!');
  }
  