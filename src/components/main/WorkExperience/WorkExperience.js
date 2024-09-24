import React from 'react';

function WorkExperience() {
    return (
        <section className="bg-secondary text-white p-5 mb-4">
            <h2 className="mb-4">Work Experience</h2>

            <article className="mb-4">
                <h3>Software Development Engineer</h3>
                <h4>Walmart | Oct. 2023 - Present</h4>
                <ul>
                    <li>Developed Python automation scripts, reducing report generation time by 75%.</li>
                    <li>Built and maintained Spring Boot APIs and React-based tools to enhance backend capabilities.</li>
                    <li>Supported PMs by pulling and analyzing data, driving new feature development and insights.</li>
                    <li>Monitored system alerts and dashboards with Grafana and Power BI.</li>
                </ul>
            </article>

            <article className="mb-4">
                <h3>Co-founder/Founding Software Engineer</h3>/
                <h4>Shanghai Genius Academy | Aug. 2020 - Present</h4>
                <ul>
                    <li>Developed a payroll system using React, FastAPI, and SQLite, automating salary calculations.</li>
                    <li>Architected a Student Management System with MongoDB and Node.js, reducing administrative workload by 50%.</li>
                    <li>Deployed an open-source Moodle system on AWS Lightsail for scalable storage.</li>
                </ul>
            </article>

            <article>
                <h3>Application Development Engineer</h3>
                <h4>KLA-Tencor | Oct. 2021 - June 2022</h4>
                <ul>
                    <li>Created Excel Macro scripts to automate TFS procedures, reducing analysis time by 30%.</li>
                    <li>Recognized as the most innovative team member, implementing new tools and passing Level-1 exam quickly.</li>
                </ul>
            </article>
        </section>
    );
}

export default WorkExperience;