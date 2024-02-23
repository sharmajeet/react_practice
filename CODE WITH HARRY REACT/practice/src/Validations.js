import React, { useState } from 'react'

export default function Validations() {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [userErr, setUserErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);
    let e;
    function handelform(e) {
        e.preventDefault();
        if(user.length<3 || password.length<5) {
            console.error("Invalid");
        }else{
            alert("All Good!");
        }
       
    }
    function userHandler(e) {
        let userlen = e.target.value;
        if (userlen.length < 3) {
            setUserErr(true);
        } else {
            setUserErr(false);
        }
        setUser(userlen);
    }
    function passwordHandler(e) {
        let passwordlen = e.target.value;
        if (passwordlen.length < 5) {
            setPasswordErr(true);
        } else {
            setPasswordErr(false);

        }
        setPassword(passwordlen);
    }
    return (
        <form action="" onSubmit={handelform}>
            <div className="container">
                <h1>Login</h1>
                <span>Id : </span>
                <input type="text" name='id' placeholder='ex:jeet@gmail.com' onChange={userHandler} />{userErr == true ? <span>Not Valid</span> : ""} <br />

                <span>Password : </span>
                <input type="password" name="psw" id="" placeholder='Enter password .' onChange={passwordHandler} />{passwordErr == true ? <span>Not Valid</span> : ""} <br />

                <button name='submit' value='submit'>Submit</button>
            </div>
        </form>
    )
}
