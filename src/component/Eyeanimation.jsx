import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/Animation - 1726120058197.json';

const Eyeanimation = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Lottie
                animationData={animationData} 
                loop={true} 
                style={{ height: 400, width: 400, borderRadius: '50%' }} 
            />
        </div>
    );
}

export default Eyeanimation;
