//login -- unauth
//signup -- unauth
//about us -- unauth



//Introductory


import { FunctionComponent } from "react"
import { Routes, Route } from 'react-router-dom';
import Login from "../app-modules/Login";
import Register from "../app-modules/Register";

const AppUnauthenticated: FunctionComponent<any> = (props) => {
   return (
      <Routes>
         <Route
            index
            element={<Register />} // For Index Screen
            path="/" //index page
         />

         <Route
            index
            element={<Register />} // For Register Screen
            path="/register" //index page
         />

         <Route
            element={<Login />} //For Dashboard Screens
            path="/login" //dashboard
         />

      </Routes>
   )
}

export default AppUnauthenticated;