const form = document.querySelector('.login-form');

function handleSubmit(event){
    event.preventDefault();
   const emailInput = form.elements.email;  // Fix variable name to 'form'
   const passwordInput = form.elements.password; // Fix variable name to 'form'
   const emailValue = emailInput.value.trim();
   const passwordValue = passwordInput.value.trim();
 
if (emailValue === "" || passwordValue ===""){
    return alert('All form fields must be filled in')
    }
else {  
   console.log({ email: emailValue, password: passwordValue }); // Change console.log format
   form.reset();                                                // Move the reset inside the 'else' block
   }
}
form.addEventListener('submit', handleSubmit);
