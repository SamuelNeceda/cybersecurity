import React from 'react';
import {useHistory} from 'react-router-dom';
import Footer from "./Footer";


const Welcome = () => {

    const history = useHistory();

    const handleLoginClick = () => {
        history.push('/login');
    };

    const handleExternalClick = () => {
        window.open('https://www.hack-health.tech/', '_blank');
    };

    return (
        <div className="text-center">
            <h1 className="mt-5">Welcome to the HackHealth</h1>
            <p className="lead">You are about to enter simple application to demonstrate the security vulnerabilities in
                web
                applications. After detecting the vulnerabilities, you will be prompted to fix them.
            </p>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-4 mx-auto text-center">
                        <h2>Tutorial</h2>
                        <p>Follow the tutorial to proceed with implementation and thread detection</p>
                        <button onClick={handleExternalClick} className="btn btn-primary">Tutorial</button>
                    </div>
                    <div className="logo-container col-md-2 mx-auto text-center mt-5">
                        <img src="/logo_main.png" alt="HackHealth logo" className="logo"/>
                    </div>
                    <div className="col-md-4 mx-auto text-center">
                        <h2>Login</h2>
                        <p>First step, try to login to the HackHealth app and start hacking :)</p>
                        <button onClick={handleLoginClick} className="btn btn-primary">Login</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    );
};

export default Welcome;