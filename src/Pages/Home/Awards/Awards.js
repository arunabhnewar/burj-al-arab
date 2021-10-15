import { faAward, faCertificate, faMedal, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Awards.css';
import forbs from '../../../images/awards/forbes-1.png';
import telegraph from '../../../images/awards/telegraph.png';
import worldtravel from '../../../images/awards/world-travel.png';
import bureau from '../../../images/awards/bureau-1.png';

const Awards = () => {
    return (
        <div className="container mt-5 pt-5">
            <h5 className="mt-5 pt-4 booking-title">Awards</h5>
            <h1 className="mt-3 booking-title">Celebrating Jumeirah</h1>
            <div className="booking-title-underline"></div>

            <div className="row mt-5">
                <div className="col-md-3 col-sm-12 mt-5">
                    <div>
                        <img className="" src={forbs} alt="" />
                    </div>
                    <FontAwesomeIcon icon={faStar} className="text-success" />
                    <FontAwesomeIcon icon={faStar} className="text-success" />
                    <FontAwesomeIcon icon={faStar} className="text-success" />
                    <FontAwesomeIcon icon={faStar} className="text-success" />
                    <FontAwesomeIcon icon={faStar} className="text-success" />
                    <br /> <br />
                    <h6 className="text-muted">Forbes Travel Awards 2019-20 Five Star </h6>
                </div>

                <div className="col-md-3 col-sm-12 mt-5">
                    <div>
                        <img className="" src={telegraph} alt="" />
                    </div>
                    <FontAwesomeIcon className="text-warning" icon={faAward} />
                    <br /> <br />
                    <h6 className="text-muted">Telegraphs ULTRA Awards 2018 - Best Hotel in the World</h6>
                </div>

                <div className="col-md-3 col-sm-12 mt-5">
                    <div>
                        <img className="" src={worldtravel} alt="" />
                    </div>
                    <FontAwesomeIcon className="text-warning" icon={faMedal} />
                    <br /> <br />
                    <h6 className="text-muted">World Travel Awards 2018 UAEs Leading Hotel</h6>
                </div>

                <div className="col-md-3 col-sm-12 mt-5">
                    <div>
                        <img className="" src={bureau} alt="" />
                    </div>
                    <FontAwesomeIcon className="text-warning" icon={faCertificate} />
                    <br /> <br />
                    <h6 className="text-muted">Bureau Veritas Safeguard Certification
                        for hygiene and safety standards and protocols</h6>
                </div>
            </div>
        </div>
    );
};

export default Awards;