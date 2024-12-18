import Header from "./components/Header";
import Cards from "./components/Cards";
import Container from "./components/Container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Landing from "./pages/Landing";
import { useState } from "react";

function App()
{

  const [users,setusers] = useState(
    [
        {
            username:"nishar",
            password:"123"
        },

        {
          username:"abc",
          password:"123"
        }
    ]
)

  return(
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
    <Route path='/signup' element={<SignUp users={users} setusers={setusers}/>}></Route>
    <Route path='/landing' element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;