import React from 'react';
import './Club.css';
// import billiard1 from '../../images/club/billiard-1.png';
import bar from '../../images/club/rooftop.jpg';
import gym from '../../images/club/gym.jpg';
import spa from '../../images/club/spa.jpg';

const Club = () => {
    return (
        <div className="container-fluid club-section" >
            <div className="row d-flex flex-row-reverse pt-5  burj-clubs">
                <div className="col-md-5 mt-5 pt-5">
                    <h5 className="text-warning mt-3 pt-3">WELLNESS</h5>
                    <h1 className="text-white">Talise Fitness at Burj Al Arab</h1>
                    <h5 className="text-white">Take an energising journey towards your fitness goals at our state-of-the-art gym</h5>

                    <button className="regular-btn text-white mt-3">Contact Us</button>
                </div>
            </div>

            <div className="row mt-5 pt-5">
                <h2 className="pb-5 text-success">The Burj Club GYM</h2>
                <div className="col-md-6">
                    <h4 className="pt-4 text-white">Exclusive level for ladies</h4>
                    <p className="text-muted">Your privacy matters. Which is why we have a complete level dedicated to ladies, including <br /> a well-appointed gym and a luxurious spa.</p>

                    <h5 className="pt-4 text-white">FUNCTIONAL FIT</h5>
                    <p className="text-muted">A functional circuit style workout that incorporates a range of body weight, cardio <br /> and resistance exercises. Great for weight loss and core stability.</p>

                    <span className="text-muted">T +971 4 888 3900 | fitness@theburjclub.com</span>

                    <div className="pt-5">
                        <button className="regular-btn text-white mb-3">Classes</button>
                    </div>
                </div>

                <div className="col-md-6">
                    <img className="w-100" src={gym} alt="" />
                </div>
            </div>

            <div className=" mt-5 pt-5">
                <div className="row d-flex justify-content-start align-items-start  pt-5 spa-clubs">

                    <div className="col-md-5 mt-5 pt-5">
                        <h5 className="text-warning mt-5 pt-5">WELLNESS</h5>
                        <h1 className="text-white">Talise Spa at Burj Al Arab</h1>
                        <h5 className="text-white">Perched 150 metres above the Arabian Gulf, welcome <br /> to the ultimate  destination to luxuriate, relax and rejuvenate</h5>
                        <button className="regular-btn text-white mt-3">Contact Us</button>
                    </div>
                </div>
            </div>

            <div className="row mt-5 pt-5">
                <h2 className="pb-5 text-success">The Burj Club Spa</h2>

                <div className="col-md-6">
                    <img className="w-100" src={spa} alt="" />
                </div>

                <div className="col-md-6">
                    <h4 className="pt-4 text-white">The Burj Club Spa launches revolutionary skincare treatment</h4>
                    <p className="text-muted">Explore a completely new spa menu featuring Hydropeptide products for facials and body <br /> treatments that are designed to leave skin youthfully plump, smooth, radiant and visibly lifted <br /> with just in one treatment.</p>

                    <p className="text-muted">The Hydropeptide facials have multiple anti-aging benefits and include balancing <br /> stressed skin and exfoliating potent that leaves the skin smoother, brighter and energize.</p>

                    <span className="text-muted">T +971 4 888 3900 | spa@theburjclub.com</span>

                    <div className="pt-5">
                        <button className="regular-btn text-white mb-3">Rates</button>
                    </div>
                </div>
            </div>

            <div className=" mt-5 pt-5">
                <div className="row d-flex flex-row-reverse  pt-5 rooftop-bars">

                    <div className="col-md-5 mt-5 pt-5">
                        <h5 className="text-warning mt-5 pt-5">WELLNESS</h5>
                        <h1 className="text-white">Talise Bar at Burj Al Arab</h1>
                        <h5 className="text-white">A tour of the city's emerging alternative dining scene</h5>
                        <button className="regular-btn text-white mt-3">Contact Us</button>
                    </div>
                </div>
            </div>

            <div className="row mt-5 pt-5">
                <h2 className="pb-5 text-success">The Burj Roof-Top Bar</h2>
                <div className="col-md-6">
                    <h4 className="pt-4 text-white">The Burj Club Friday Brunch</h4>
                    <p className="text-muted">Enjoy the city’s most sought-after Friday brunch experience with exceptional BBQ stations and spectacular views of Dubai Fountain as well as pool access</p>

                    <h5 className="pt-4 text-white">Pool and BBQ</h5>
                    <p className="text-muted">If it is Friday, it must be the BBQ Brunch at The Burj Club in the iconic Burj Al Arab. The Friday BBQ Brunch promises an experience like no other in the city! Children up to 6 years, dine complimentarily. Join us every Friday from 1pm till 4pm.</p>

                    <span className="text-muted">T +971 4 888 3900 | fitness@theburjclub.com</span>

                    <div className="pt-3">
                        <button className="regular-btn text-white mb-3">Classes</button>
                    </div>
                </div>

                <div className="col-md-6">
                    <img className="w-100" src={bar} alt="" />
                </div>
            </div>

        </div >
    );
};

export default Club;