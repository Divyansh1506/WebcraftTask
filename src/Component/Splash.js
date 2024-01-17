import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import topImage from '../assests/imgs/Group-33622.png'
import btmImage from '../assests/imgs/Group-33825.svg'

const Splash = () => {
      let navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
              navigate('/onboarding');
        }, 1000);
          }, [navigate]);

    return (
        <div style={{ height: '100vh' }} className="text-center d-flex justify-content-center flex-wrap align-items-end">
            <div className="top-image">
                <img src={topImage} alt="img" />
            </div>
            <div className="btm-image">
                <img src={btmImage} alt="img" />
            </div>
        </div>
    );
};

export default Splash;
