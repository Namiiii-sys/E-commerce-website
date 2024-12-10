
const DUMMY_CREDENTIALS = {
    username: "namita",
    password: "password"
  };
  
  
  const loginForm = document.getElementById("login-form");
  const errorMessage = document.getElementById("error-message");
  
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); 
  

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (username === DUMMY_CREDENTIALS.username && password === DUMMY_CREDENTIALS.password) {
      alert("Login successful!");
      window.location.href = "home.html"; 
    } else {
      
      errorMessage.textContent = "Invalid username or password. Please try again.";
    }
  });
  