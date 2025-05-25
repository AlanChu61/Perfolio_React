import React from 'react';
import styles from "./AboutMe.module.css";

function AboutMe() {
    const resumePath = '/Resume.pdf';

    return (
        <div className='row'>
            <div className={`col-12 card ${styles.selfIntro}`} id="about">
                <h1>About Me</h1>
                <p>
                    I'm a software engineer with a strong background in backend systems, automation, and data pipelines. Currently at Walmart, I build Spring Boot APIs, Python ETL workflows, and operational tools to streamline internal processes and improve real-time decision-making. I’m comfortable working across the stack and have deployed full systems using React, FastAPI, and MongoDB in previous roles.
                </p>
                <p>
                    I’m also pursuing an M.S. in Artificial Intelligence at UT Austin, where I focus on applying machine learning and computer vision techniques to infrastructure and automation challenges. I enjoy solving complex problems with pragmatic code and am always open to new opportunities in platform engineering, dev tooling, or AI systems.
                </p>
                <div className='btn-container'>
                    <button className={`${styles.button}`}>
                        <a href={resumePath} target="_blank" rel="noopener noreferrer">
                            Resume
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;