// ! Mainly, we are going to use jaavscript to add and remove a class (targeting display: none)
// ! We are going to use differ in the script tag, so it will work after html has been loaded


// get both links
let SignUp = document.getElementById(`SignUp`);
const Login = document.getElementById(`Login`);

// get both containers, to apply the class to 

const loginContainer = document.getElementById(`loginContainer`);
const signUpContainer = document.getElementById(`signUpContainer`);




 
  SignUp.onclick = function (event) {
    event.preventDefault(); // prevent jumping
    loginContainer.classList.add("hidden");
    signUpContainer.classList.remove("hidden");
  };

 
  Login.onclick = function (event) {
    event.preventDefault();
    signUpContainer.classList.add("hidden");
    loginContainer.classList.remove("hidden");
  };