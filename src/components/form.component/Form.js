import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import loginService from "../../services/login";


function Form( {callback}){ 
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[user, setUser] = useState(null);

    
    useEffect (() => {
        const loggedUserJSON = window.localStorage.getItem('logged');
        if (loggedUserJSON) {
          const user = JSON.parse(loggedUserJSON);
          setUser(user);
          callback(user);
        }
      }, [])

      useEffect (() => { }, [user])

    const handleSubmit = event => {
        event.preventDefault();
        const user = loginService({
            username,
            password
        })

        setUser(user);
        console.log(user);
        setUsername('');
        setPassword('');
        if (user) {
            window.localStorage.setItem(
                'logged', JSON.stringify(user)
            )
            callback(user);
        }
    }   

    const handleLogout = _ => {
        window.localStorage.removeItem('logged');
        setUser(null)
        callback(null);
    }

    return (
        !user?
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={({ target }) => setUsername(target.value)} /><br/>
            <input type="password" value={password} onChange={({ target }) => setPassword(target.value)} /><br/>
            <input type="submit" />
        </form>
        :
        <div>
            <h1>U ARE LOGGED... {user.username} </h1>
            <button onClick={handleLogout}>Logout</button>
        </div>

    );


}

export default Form;