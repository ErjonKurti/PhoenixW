import React from 'react';
import { assets } from '../../assets/assets';
import './Preloader.css';

const Preloader = () => {

    return (
            <div className='preloader'>
                <div className='logo-container-preloader'>
                    <img className='preloader-logo' src={assets.logo} alt='Preloader Logo' />
                    <div className="loader">Loading...</div>
                </div>
            </div>
    );
}

export default Preloader;
