import React, { useState } from 'react'
// import '/Users/JEET/.vscode/react/login/src/App.css';

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  let e;
  // // ---1
  function formHandler(e) {
    e.preventDefault();
    if (user.length < 8 || password.length < 6) {

      // Display an error message
      const errorMessage = document.createElement('div');
      errorMessage.classList.add('alert', 'alert-danger');
      errorMessage.textContent = 'Enter Valid Information';
      const container = document.getElementById('errorContainer'); // Replace 'errorContainer' with the actual ID of the container element
      container.appendChild(errorMessage);
    }
    else {
      const errorMessage = document.createElement('div');
      errorMessage.classList.add('alert', 'alert-success');
      errorMessage.textContent = 'Form Submited Sucessfully';
      const container = document.getElementById('errorContainer'); // Replace 'errorContainer' with the actual ID of the container element
      container.appendChild(errorMessage);

    }
  }
  // --userhandler
  function userHandler(prams) {
    let userData = e.traget.value;
    if (userData.length < 10) {
      setUserErr(true);
    } else { setUserErr(false); }
    setUser(userData);
  }
  // ----passwordHandler
  function passwordHandler() {
    let passwordData = e.traget.value;
    if (passwordData.length < 6) {
      setPasswordErr(true);
    } else { setPasswordErr(false); }
    setPassword(passwordData);
  }
  return (
    <>
      <div className='container'>
        <div className="container-fluid" id='errorContainer'>

        </div>
        <h1>Login Form</h1>
        {/* <div className="alert alert-primary" role="alert">
          Fill the form..
        </div> */}
        <form onSubmit={formHandler} >
          <div className="mb-3 ">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setUser(e.target.value)} />

            <div id="emailHelp" className="form-text" onChange={userHandler}>
              {userErr === true ? <span>Not Valid..</span> : " "}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />

            <div id="emailHelp" className="form-text" onChange={passwordHandler}>
              {passwordErr === true ? <span>Not Valid..</span> : " "}</div>
          </div>
          {/* <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div> */}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      </div>
    </>

  )
}
