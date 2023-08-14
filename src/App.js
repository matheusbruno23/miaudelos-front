import GlobalStyle from "./styles/GlobalStyle";
import LoginPage from "./pages/LoginPage/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUpPage from "./pages/SignUpPage/SignUpPage"
import CatsPage from "./pages/CatsPage/CatsPage"
import CatsIdPage from "./pages/CatIdPage/CatIdPage"
import UserPage from "./pages/UserPage/UserPage"
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";

export default function App() {

  const [user, setUser]= useState({})

  return (
    <BrowserRouter>
    <UserContext.Provider value ={{user, setUser}}>
    <Routes>
    <Route path="/" element={<LoginPage/>}/>
    <Route path="/signup" element={<SignUpPage/>}/>
    <Route path="/cats" element={<CatsPage/>}/>
    <Route path="/cats/:id" element={<CatsIdPage/>}/>
    <Route path="/me" element={<UserPage/>}/>
    </Routes>
    </UserContext.Provider>
    <GlobalStyle/>
    </BrowserRouter>
  );
}

