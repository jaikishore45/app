import React from 'react'
import '../components/feedback.css'
import '../index.css'


const Feedback = () => {
    return (
      <body class="feed">
           <div class="wrapper">
        <div class="form">
          <h1 class="title">Feedback Form</h1>
          <form class="myform">
            <div class="control-from">
              <label for="firstname">First Name </label>
              <input type="text" id="firstname" class="fna" ></input>
            </div>
            <div class="control-from">
              <label for="phonenumber">Phone Number</label>
              <input type="phone" id="phonenumber" class="ph" ></input>
            </div>
            <div class="full-width">
              <label for="companyname">Feedback</label>
              <textarea id="companyname"></textarea>
            </div>
            <div class="button">
              <button id="register">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </body>

      
    )
}

export default Feedback
