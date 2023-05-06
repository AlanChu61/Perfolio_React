import React from 'react';

function SelfIntro() {
    const resumePath = '/Resume.pdf'; // 使用 '/Resume.pdf' 作为简历文件路径

    return (
        <div className="selfIntro card" id="selfIntro">
            <h1>About Me</h1>
            <p>
                Passionate and technically skilled software developer with experience in full-stack web development and operations management. Adept in delivering high-quality web applications and optimizing processes while leading cross-functional teams to drive customer satisfaction. Equipped with the knowledge and experience to provide accessible and extensive solutions to meet project objectives within agreed parameters.
            </p>
            <button>
                <a href={resumePath} target="_blank" rel="noopener noreferrer" className="download-resume-button">
                    Resume
                </a>
            </button>
        </div>
    );
}

export default SelfIntro;
