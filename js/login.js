function login(){
			
	//recuperer la valeur de l'input 
	event.preventDefault();
	var email =document.getElementById("email").value;
	var password =document.getElementById("password").value;
	//var formulaire=document.getElementById("loginForm").value;


	if (email === "romdhane_sahar@yahoo.com" && password === "123456") {
	
		//document.getElementsByTagName("form")="welcomePage.html";

		document.location.href="../html/welcomePage.html";
       //window.location.href="https://www.google.com/";
		
		
		
	}
	else{
		alert('verify your login and password !');
		
	}
	
	/*document.getElementById("res").value=resultat;//na pas marche*/
	
}
