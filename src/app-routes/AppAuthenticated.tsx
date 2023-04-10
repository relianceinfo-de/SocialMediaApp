
// dashboard -- auth
// profile -- auth
// wallet -- auth

import { Fragment, FunctionComponent } from "react"
import { Route, Routes } from 'react-router-dom';
import Dashboard from "../app-modules/Dashboard";
import Profile from "../app-modules/Profile";

const AppAuthenticated: FunctionComponent<any> = (props) => {
    return (
        <Routes>
             <Route
                index
                element={<Dashboard />} // For Index Screens
                path="/" //index page
            />

            <Route
                element={<Dashboard />} //For Dashboard Screens
                path="/dashboard" //dashboard
            />

            <Route
                element={<Profile />} //For Profile Pages
                path="/profile"
            />
            <Route
                // element={}
                path="teams/:teamId"
            // loader={}
            // action={async ({ request }) => {
            //   return updateFakeTeam(await request.formData());
            // }}
            // errorElement={<ErrorBoundary/>}
            />
        </Routes>

    )
}

export default AppAuthenticated;