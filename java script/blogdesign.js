function validateForm(){
    var email = document.getElementById("email").value
    var message = document.getElementById("message").value
    
    
    if(email === ""  ||  message === ""){
        alert("please fill the form.");
        
    }
    else{
    alert("form submitted successfully!");
    
    }
    }
      