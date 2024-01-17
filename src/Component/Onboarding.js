import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import eventImage from "../assests/imgs/Group-33934.svg"
import newsImage from "../assests/imgs/Group-33823.svg"
import shopImage from "../assests/imgs/Group-33824.svg"

const OnboardingScreen = ({ title, content, onNext, onSkip, image }) => (
    <div style={{ height: '100vh' }} className="text-center d-flex justify-content-center flex-wrap align-items-end">
        <img src={image} alt="img" />
        <div>
            <h2 className='text-danger'>{title}</h2>
            <p className='px-4 mt-4 fw-semibold'>{content}</p>
        </div>
        <div className='d-flex w-100 mb-2 px-3 justify-content-between'>
            <button className="btn text-dark fw-semibold" onClick={onSkip}>Skip</button>
            <button className="btn text-dark fw-semibold" onClick={onNext}>Next</button>
        </div>
    </div>
);

const Onboarding = () => {
    const [step, setStep] = useState(0);
    const navigate = useNavigate();

    const nextStep = () => setStep(step + 1);
    const skip = () => navigate('/signin');

    const steps = [
        { title: "Events", content: "From cultural festivals to local gigs, find out what's happening around you.", image: eventImage },

        { title: "Explore Latest News", content: "Stay informed with real-time updates and in-depth reports on Indore's happenings.", image: newsImage },

        { title: "New and Nearby Shops", content: "Explore Indore's vibrant marketplace with our guide to the newest and nearest shops.", image: shopImage }
    ];

    if (step >= steps.length) {
        navigate('/signin');
        return null;
    }

    return (
        <>
            <OnboardingScreen
                title={steps[step].title}
                content={steps[step].content}
                image={steps[step].image}
                onNext={nextStep}
                onSkip={skip} />
        </>
    );
};

export default Onboarding;
