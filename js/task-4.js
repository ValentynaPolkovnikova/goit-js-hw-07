const form = document.querySelector('.login-form');

function handleSubmit(event){
    event.preventDefault();
   const emailInput = foregisterForm.elements.email;
   const passwordInput = registerForm.elements.password;
   const emailValue = emailInput.value.trim();
   const passwordValue = passwordInput.value.trim();
    
if(emailValue === "" || passwordValue ===""){
    return alert('All form fields must be filled in')
    }
else{  
   console.log(`email: ${emailValue},
                password: ${passwordValue}`);
   registerForm.reset(); // Move the reset inside the 'else' block
    }
}
registerForm.addEventListener('submit', handleSubmit);