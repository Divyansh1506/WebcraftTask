import React, { useState, useRef, useEffect } from 'react';

const OtpVerification = () => {
    const otpLength = 6;
    const [otp, setOtp] = useState(new Array(otpLength).fill(''));
    const [verificationStatus, setVerificationStatus] = useState('');
    const inputsRef = useRef([]);

    useEffect(() => {
        inputsRef.current[0].focus();
    }, []);

    const handleChange = (element, index) => {
        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        if (element.nextSibling && element.value) {
            element.nextSibling.focus();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (otp.join('') === "123456") { 
                setVerificationStatus('OTP verified successfully!');
            } else {
                throw new Error('Invalid OTP');
            }
        } catch (error) {
            setVerificationStatus(error.message);
        }
    };

    return (
        <>
            <div className='verification-container px-4 py-4 text-center'>
                <h6>Verification</h6>
                <h3 className='mt-5'>Verification</h3>
                <p>We've sent you the verification code</p>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="otp">Enter OTP:</label>
                        <div className="d-flex justify-content-center">
                            {otp.map((_, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    className="otp-input form-control mx-1 text-center"
                                    maxLength="1"
                                    value={otp[index]}
                                    onChange={e => handleChange(e.target, index)}
                                    ref={ref => inputsRef.current[index] = ref}
                                />
                            ))}
                        </div>
                        <p className='my-4 text-danger'>Resend Code</p>
                        <button style={{width:"100%"}} type="submit" className="btn btn-danger fw-semibold mt-3">Continue</button>
                    </form>
                    {verificationStatus && <p>{verificationStatus}</p>}
                </div>
            </div>
        </>
    );
};

export default OtpVerification;
