import React from 'react';
import Header from '../home/Header';
import fourOhFour from '../assets/404.png';
import Social from './Social';

export default function NotFound() {
    return (
        <>
            <div className="fourOhFour">
                <Header />
                <div className="container center my-3">
                    <img src={fourOhFour} alt="404" style={{maxWidth: '100%'}} />
                    <h2 childrenlassName="mb-5">Oh boy, this does not seem right!</h2>
                </div>
            </div>
        </>
    )
}