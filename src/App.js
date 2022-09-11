import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./components/about.component/About";
import Form from "./components/form.component/Form";
import Home from "./components/home.component/Home";
import Nav from "./components/nav.component/Nav";



function App() {
  const [user, setUser] = React.useState(null);


  React.useEffect (() => {
    const loggedUserJSON = window.localStorage.getItem('logged');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, [])


  return (
    <div className="App">
      <Nav/>
      {
        user? <h1>Hola {user.username}!</h1>: <></>
      }
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="login" element={<Form callback={(user)=>{ setUser(user); }} />}  />
      </Routes>
    </div>
  );
}

export default App;