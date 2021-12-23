import React, { useState, useEffect } from "react";
import axios from "axios";

const PrivacyForm = () => {
    const [privacy, setPrivate] = useState({
        Name: '',
        Email: '',
        DOB: '',
        Gender: '',
        Bio: ''
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-9 d-flex justify-content-start">
                    <div>
                    <h5>Privacy Form</h5>
                    <p>Update your privacy settings below</p>
                    <form>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                                <label class="form-check-label" for="flexSwitchCheckDefault">First and Last Name</label>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                                <label class="form-check-label" for="flexSwitchCheckDefault">Email</label>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                                <label class="form-check-label" for="flexSwitchCheckDefault">DOB</label>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                                <label class="form-check-label" for="flexSwitchCheckDefault">Gender</label>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                                <label class="form-check-label" for="flexSwitchCheckDefault">Bio</label>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyForm;