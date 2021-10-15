import React from 'react';
import billiard from '../../../images/club/billiard.jpg';
import gym from '../../../images/club/gym.jpg';
import spa from '../../../images/club/spa.jpg';
import rooftop from '../../../images/club/rooftop.jpg';

const Clubs = () => {
    return (
        <div className="container mt-5 pt-5" id="club">
            <h2 className="mt-5 booking-title">Burj Clubs</h2>
            <div className="booking-title-underline"></div>

            <div className="row mt-5 pt-3">
                <div className="col-md-5 col-sm-12">
                    <img className="w-100" src={billiard} alt="" />
                </div>

                <div className="col-md-7 col-sm-12 mt-4 pt-4">
                    <h2><span className="text-white">The Burj Club Billiard</span></h2>
                    <h5 className="text-muted">Set over five levels (one level being exclusively for ladies), <br /> the Club includes a multitude of billiard rooms with panoramic <br />  views of Downtown Dubai.</h5>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-5 col-sm-12">
                    <img className="w-100" src={gym} alt="" />
                </div>

                <div className="col-md-7 col-sm-12 mt-4 pt-4">
                    <h2><span className="text-white">The Burj Club GYM</span></h2>
                    <h5 className="text-muted">The fitness centres offer gym-goers optimal workout spaces and <br /> feature fully customizable state-of-the-art equipment. Group fitness <br /> classes are also on offer for members and non-members.</h5>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-5 col-sm-12">
                    <img className="w-100" src={spa} alt="" />
                </div>

                <div className="col-md-7 col-sm-12 mt-4 pt-4">
                    <h2><span className="text-white">The Burj Club SPA</span></h2>
                    <h5 className="text-muted">The Spa at The Burj Club is spread over two floors –  one level <br /> for ladies and gents each – equipped with sauna, steam room <br /> and experience showers. Relaxation areas overlook the stunning <br /> vistas of Downtown Dubai and beyond. </h5>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-5 col-sm-12">
                    <img className="w-100" src={rooftop} alt="" />
                </div>

                <div className="col-md-7 col-sm-12 mt-4 pt-4">
                    <h2><span className="text-white">Rooftop, The Burj Club</span></h2>
                    <h5 className="text-muted">Offering an oasis of seclusion against the backdrop of The Dubai Fountain <br /> and Burj Al Arab is The Rooftop Pool and Dining. This chic venue offers <br /> a Miami-meets-Manhattan vibe, with plush lounge beds, tempting <br /> cuisine and refreshing beverages, all overlooking The Dubai Fountain.</h5>
                </div>
            </div>
        </div>
    );
};

export default Clubs;