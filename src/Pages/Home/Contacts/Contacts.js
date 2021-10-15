import React from 'react';

const Contacts = () => {
    return (
        <div className="container mt-5 pt-5">
            <h2 className="mt-5 booking-title">Contact</h2>
            <div className="booking-title-underline"></div>

            <div className="row mt-5 pt-4">
                <div className="col-md-4 col-sm-12 ">
                    <h4 className="text-white">ADDRESS</h4>
                    <p className="text-muted">Jumeirah St - Dubai, <br /> PO Box 74147, Dubai, UAE</p>

                </div>

                <div className="col-md-4 col-sm-12">
                    <h4 className="text-white">EMAIL</h4>
                    <p className="text-muted">burj_al_arab@mail.com</p>
                </div>

                <div className="col-md-4 col-sm-12">
                    <h4 className="text-white">PHONE</h4>
                    <p className="text-muted">+99 999 111 333</p>
                </div>


            </div>
        </div>
    );
};

export default Contacts;