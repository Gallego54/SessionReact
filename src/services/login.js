import axios from "axios";

const baseURL = "http://localhost:1000/api/data";

const login = credentials => {
    /*Simulate API Login service*/ 
    if (credentials.username === "Pablo" &&
    credentials.password === "1234" ) {
        return {username: "Pablo",token: "123456789"};
    }


    return null;
}

export default login;