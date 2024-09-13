import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/lottieflow-scroll-top-04-2-000000-easey.json';

const LottieAnimation = () => {
    return (
        <div>
            <Lottie
                animationData={animationData} 
                loop={true} // Enable looping
                style={{ height: 100, width: 100 }} 
                rendererSettings={{
                    preserveAspectRatio: "xMidYMid slice"
                }}
            />
        </div>
    );
}

export default LottieAnimation;
