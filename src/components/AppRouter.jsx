import React, {useEffect, useState} from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
    useLocation,
} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import ForgotPasswordPage from '../pages/ForgotPasswordPage'
import Homepage from '../pages/Homepage'
import Loginpage from '../pages/Loginpage'
import NotfoundPage from '../pages/NotfoundPage'
import Profilepage from '../pages/Profilepage'
import Registerpage from '../pages/Registerpage'
import ResetPasswordPage from '../pages/ResetPasswordPage'
import TestPage from '../pages/TestPage'
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Tech from "../pages/Tech";
import ApplicationPage from "../pages/ApplicationPage";
import AdminApplicationPage from "../pages/AdminApplicationPage";



export default function AppRouter(props) {


    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/' component={Homepage} />
                    <ProtectedRoute exact path='/admin-page' component={AdminApplicationPage} />
                    <ProtectedRoute exact path='/login' component={Loginpage} />
                    <ProtectedRoute exact path='/register' component={Registerpage} />
                    <Route exact path='/profile' component={Profilepage} />
                    <ProtectedRoute exact path='/Contact' component={Contact} />
                    <ProtectedRoute exact path='/Tech' component={Tech} />
                    <ProtectedRoute exact path='/Services' component={Services} />
                    <ProtectedRoute exact path='/test' component={TestPage} />
                    <ProtectedRoute exact path='/application' component={ApplicationPage} />
                    <ProtectedRoute exact path='/forgot-password' component={ForgotPasswordPage} />
                    <ProtectedRoute exact path='/reset-password' component={ResetPasswordPage} />
                    <Route exact path='*' component={NotfoundPage} />

                </Switch>
            </Router>
        </>
    )
}



function ProtectedRoute(props) {
    const { currentUser} = useAuth()
    const { path } = props
    const location = useLocation()

    if (
        path === '/login' ||
        path === '/register' ||
        path === '/forgot-password' ||
        path === '/reset-password'
    )
    {
        return currentUser ?   (
            <Redirect to={location.state?.from ?? '/profile'} />
        ) : (
            <Route {...props} />
        )
    }
    return currentUser ? (
        <Route {...props} />
    ) : (
        <Redirect
            to={{
                pathname: '/login',
                state: { from: path },
            }}
        />
    )
}
