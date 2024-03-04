
function divRegister(){
  console.log("test1")
  mewreplace.innerHTM = 
  `
  <div class="center column">
      <form id="mainForm">
          <div class="center column mb-20">
              <input type="text" id="username" placeholder="Username">
              <input type="email" id="email" placeholder="Email">
              <input type="password" id="password" placeholder="New Password">    
              <button class="mt-20" type="submit">Register</button>
              <div class="mt-20 color">OR</div>
              <button class="mt-20 color" onclick="divLogin()">Login instead</button>
          </div>
      </form>
  </div>
  `
}
function divLogin(){
  console.log("test22")
  mewreplace.innerHTM = 
  `
  <div class="center column">
      <form id="mainForm">
          <div class="center column mb-20">
              <input type="email" id="email" placeholder="Email">
              <input type="password" id="password" placeholder="New Password">    
              <button class="mt-20" type="submit">Login</button>
              <div class="mt-20 color">OR</div>
              <button class="mt-20 color" onclick="divRegister()">Create an account instead</button>
          </div>
      </form>
  </div>
  <div class="mt-75">
      <button class="color" onclick="btnClicked()">Forgot Password?</button>
  </div>
  `
}