import React from 'react';
import LottieAnimation from './LottieAnimation ';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to the Home Page</h1>
            <Link to="/register">
                <LottieAnimation />
            </Link>
        </div>
    );
}

export default Home;
