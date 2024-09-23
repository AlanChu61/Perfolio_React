import React from 'react';
import PropTypes from 'prop-types';

// EducationTableRow component
const EducationTableRow = ({ degree, institution, date }) => (
    <tr>
        <td>{degree}</td>
        <td>{institution}</td>
        <td>{date}</td>
    </tr>
);

EducationTableRow.propTypes = {
    degree: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

// EducationTable component
const EducationTable = ({ educationRecords }) => (
    <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>Degree</th>
                <th>Institution</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            {educationRecords.map((item, index) => (
                <EducationTableRow
                    key={index}
                    degree={item.degree}
                    institution={item.institution}
                    date={item.date}
                />
            ))}
        </tbody>
    </table>
);

EducationTable.propTypes = {
    educationRecords: PropTypes.arrayOf(
        PropTypes.shape({
            degree: PropTypes.string.isRequired,
            institution: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
        })
    ).isRequired,
};

// Education data
const educationRecords = [
    { degree: "M.S. in Artificial Intelligence", institution: "The University of Texas at Austin", date: "Fall, 2024 - Present" },
    { degree: "M.S. in Computer and Information Technology", institution: "University of Pennsylvania", date: "Aug, 2022 - Present" },
    { degree: "Full Stack Web Development (Python, Walmart Sponsored)", institution: "Hackbright Academy", date: "Apr, 2023 - Jun, 2023" },
    { degree: "Software Engineering Immersive", institution: "General Assembly", date: "Nov, 2022 - May, 2023" },
    { degree: "M.S. in Materials Science (Ph.D. Candidacy Completed)", institution: "Purdue University", date: "Graduated in 2020" },
    { degree: "B.S. and M.S. in Chemical Engineering", institution: "National Tsing Hua University", date: "Graduated in 2016" },
];

// Education component
function Education() {
    if (!educationRecords || educationRecords.length === 0) {
        return <p>No education data available.</p>;
    }

    return (
        <div className="row mb-4">
            <div className="col-12">
                <h2>Education</h2>
                <EducationTable educationRecords={educationRecords} />
            </div>
        </div>
    );
}

export default Education;