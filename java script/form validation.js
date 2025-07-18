


// form validation java script


function validation(){
    var a=document.getElementById('name').value;
    var b=document.getElementById('email').value;
    var c=document.getElementById('message').value;
    
    if( a=== ''  || b=== ''|| c=== '' ){ // using or operator
        alert('Please fill all the Field');
       
    }
    else{
        alert('Message sent, Thank you! for you feedback.');
    }
    }