import React, { useState } from 'react'


export default function Profile() {
    const [login, setLogin] = useState(false);
    return (
        <>
            <h1>Login</h1>        <br /><br />
            <label htmlFor="name">Name : </label>
            <input type="text" name="" id="" />
            <br /><br />

            <label htmlFor="password : ">Password : </label>
            <input type="password" name="" id="" />
            <br /><br />

            <button value='submit'>Submit</button>


        </>
        //     <>
        //          {/*{login ? <h1>Welcome Jeet!</h1> : <h1>Welcome Guest</h1>}
        //         for multiple user conditions we use ternery oprater in this formate,ex:for 3 users 1.2.3

        //   {login==1 ?<h1>Welcome</h1>:login==2 ?<h1>Welcome jeet</h1>:<h1>Welcome guest</h1>}
        //  */}
        //     </>
    )

}

