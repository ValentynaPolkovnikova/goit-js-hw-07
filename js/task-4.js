const form = document.querySelector('.login-form');


function handleSubmit(event){
    event.preventDefault();
   const emailInput = form.elements.email;
   const passwordInput = form.elements.password;
   const emailValue = emailInput.value.trim();
   const passwordValue = passwordInput.value.trim();

if(emailValue === "" || passwordValue ===""){
    return alert("All form fields must be filled in")
}
else{  
   console.log(`email:${emailValue},
    password:${passwordValue}`);
}


form.reset();
}
form.addEventListener('submit', handleSubmit);