import React from 'react';
import workExperience from '../../../data/workExperience.json';

function WorkExperience() {
    return (
        <section className="bg-secondary text-white p-5 mb-4">
            <h2 className="mb-4">Work Experience</h2>

            {workExperience.map((job, index) => (
                <article key={index} className="mb-4">
                    <h3>{job.title}</h3>
                    <h4>{job.company} | {job.duration}</h4>
                    <ul>
                        {job.points.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>
                </article>
            ))}
        </section>
    );
}

export default WorkExperience;