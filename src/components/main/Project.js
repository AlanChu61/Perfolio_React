import React, { useState } from "react";
import styles from "./project.module.css";
function Project(props) {
    const [showDescription, setShowDescription] = useState(false);


    const handleDescriptionButtonClick = () => {
        setShowDescription(!showDescription);
    };

    return (
        <div className={`col s6 card ${styles.container}`}>
            <a href={props.project.deployed} target="_blank" rel="noopener noreferrer">
                <img className={`card-image waves-effect waves-block waves-light`}
                    src={props.project.screenshot}
                    alt={props.project.title}
                /></a>
            <div className='card-title'>{props.project.title}</div>
            <div className="card-content">
                <div>Technologies used: {props.project.technologies}</div>
                <div>{showDescription && <p>Description: {props.project.description}</p>}
                </div>
                <div className="btn-container">
                    <button onClick={handleDescriptionButtonClick}>
                        {showDescription ? "Hide Description" : "Show More"}
                    </button>
                    <button>
                        <a href={props.project.github} target="_blank">Github
                        </a>
                    </button>
                </div>
            </div>
        </div >
    );
}

export default Project;
