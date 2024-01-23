import React, { useState } from 'react';
import './Account-Detail.css';
import 'remixicon/fonts/remixicon.css'
import { auth } from './firebase-config';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const navigate = useNavigate();

    const [profile, setProfile] = useState({
        name: '',
        mobileNo: '',
        email: '',
        image: 'https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1vZGVsfGVufDB8fDB8fHww',
    });

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            setProfile({ ...profile, image: URL.createObjectURL(img) });
        }
    };


    const handleLogout = () => {
        signOut(auth).then(() => {
          navigate('/signin');
        }).catch((error) => {
          console.error("Logout Error: ", error);
        });
      };
    
    return (
        <div style={{ height: "100vh" }} className="text-center  mx-3 my-3">
            <h5 className="title mb-5 fw-semibold">My Profile</h5>
            <button style={{position:'absolute', top:25, right:10}} onClick={handleLogout}>Sample Logout</button>
            <div className="row justify-content-center">
                <form style={{ height: "90vh", position: 'relative' }} className='d-flex align-content-end flex-column '>
                    <div className="form-group text-center">
                        <div className="profile-image-container">
                            <img
                                src={profile.image || 'path/to/default/image.jpg'}
                                alt="Profile"
                                className="profile-image"
                            />
                            <label htmlFor="profileImage" className="camera-icon">
                                <i style={{ color: "white" }} class="ri-camera-line"></i>
                                <input type="file" className="d-none" id="profileImage" onChange={handleImageChange} />
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="form-group mt-5">
                            <input
                                placeholder='Enter your Name'
                                type="text"
                                className="form-control"
                                id="name"
                                value={profile.name}
                                onChange={e => setProfile({ ...profile, name: e.target.value })}
                            />
                        </div>
                        <div className="form-group py-3">
                            <input
                                placeholder='Enter Mobile no'
                                type="tel"
                                className="form-control"
                                id="mobileNo"
                                value={profile.mobileNo}
                                onChange={e => setProfile({ ...profile, mobileNo: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                placeholder='Enter your Email'
                                type="email"
                                className="form-control"
                                id="email"
                                value={profile.email}
                                onChange={e => setProfile({ ...profile, email: e.target.value })}
                            />
                        </div>
                    </div>
                    <button style={{width:"90%", bottom: 10,left:'50%',transform:'translate(-50%,-50%)',position: 'absolute' }} type="submit" className="btn btn-danger">Save Details</button>
                </form>
            </div>
        </div>
    );
};

export default ProfilePage;
