import React from 'react'
import '../components/login.css'



const login_signup = () => {
   
    return (
        <body> 
          <div class="bg">
              <p class="p">Explore the world</p>
          </div>
          <div class="form-box">
              <div class='button-box'>
              <div id='btn'></div>
            <button type='button' onClick='login'class='toggle-btn'>Log In</button>
            <button type='button' onClick='register'class='toggle-btn'>Register</button>
        </div>
              <form id='login' class='input-group-login'>
             <input type='text'class='input-field'placeholder='Email Id' required />
          <input type='password'class='input-field'placeholder='Enter Password' required/>
          <input type='checkbox'class='check-box'/><span>Remember Password</span>
         
          <button type='submit'class='submit-btn'>Log in</button>
        
       </form>
       
          </div>
          
      </body>

         
    )
}

export default login_signup
