import React, { useState } from "react";

function Project(props) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="col s6 card">
            <img className="card-image waves-effect waves-block waves-light"
                src={props.project.screenshot}
                alt={props.project.title}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
            <div className='card-title'>{props.project.title}</div>
            <div class="card-content">
                <p>Technologies used: {props.project.technologies}</p>
                {isHovered && <p>Description: {props.project.description}</p>}
            </div>
            <div className="btnContainer card-action">
                <button>
                    <a href={props.project.github} target="_blank">
                        Github
                    </a>
                </button>
                <button>
                    <a href={props.project.deployed} target="_blank">
                        APP
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Project;
