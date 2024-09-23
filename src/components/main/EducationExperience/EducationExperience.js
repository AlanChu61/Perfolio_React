import React from "react";
import Education from './Education';
import Achievements from './Achievements';
import Publications from './Publications';

function EducationExperience() {
    return (
        <div className="container">
            <Education />
            <Achievements />
            <Publications />
        </div>
    );
}

export default EducationExperience;