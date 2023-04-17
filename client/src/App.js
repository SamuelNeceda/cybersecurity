import React, {useState, useEffect} from "react";
import "./App.css";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/Welcome";
import ScrollToTop from "./components/scrollToTop";

function App() {

    // default value of state is false, meaning user is not authenticated
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const checkAuthenticated = async () => {
        try {
            const res = await fetch("http://localhost:5000/auth/verify", {
                method: "GET",
                headers: {token: localStorage.token}
            });

            const parseRes = await res.json();
            parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
        } catch (err) {
            console.error(err.message);
        }
    };

    // check the state after each reload
    useEffect(() => {
        checkAuthenticated();
    }, []);

    // check if user is authenticated
    const setAuth = (boolean) => {
        setIsAuthenticated(boolean);
    };

    return (
        <>
            <Router>
                <ScrollToTop/>
                <div className="container">
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={(props) =>
                                <Welcome {...props}/>
                            }
                        />
                        <Route
                            exact
                            path="/login"
                            render={(props) =>
                                !isAuthenticated ? (
                                    <Login {...props} setAuth={setAuth}/>
                                ) : (
                                    <Redirect to="/dashboard"/>
                                )
                            }
                        />
                        <Route
                            exact
                            path="/register"
                            render={(props) =>
                                !isAuthenticated ? (
                                    <Register {...props} setAuth={setAuth}/>
                                ) : (
                                    <Redirect to="/login"/>
                                )
                            }
                        />
                        <Route
                            exact
                            path="/dashboard"
                            render={(props) =>
                                isAuthenticated ? (
                                    <Dashboard {...props} setAuth={setAuth}/>
                                ) : (
                                    <Redirect to="/login"/>
                                )
                            }
                        />
                    </Switch>
                </div>
            </Router>
            <ToastContainer/>
        </>
    );
}

export default App;

