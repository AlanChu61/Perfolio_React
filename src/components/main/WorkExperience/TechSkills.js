import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';

// 簡單的技術技能數據
const data = [
    { name: 'Python', experience: 4 },
    { name: 'FastAPI', experience: 3 },
    { name: 'Spring Boot', experience: 1 },
    { name: 'Flask', experience: 2 },
    { name: 'MongoDB', experience: 3 },
    { name: 'React', experience: 3 },
    { name: 'AWS Lightsail', experience: 3 },
    { name: 'ML', experience: 2 },  // 簡化名稱
    { name: 'Regression', experience: 2 },
    { name: 'SVM & Decision Trees', experience: 2 },
];

function TechSkills() {
    const [chartWidth, setChartWidth] = useState(window.innerWidth * 0.9);  // 初始寬度設為螢幕寬度的90%

    useEffect(() => {
        const handleResize = () => {
            setChartWidth(window.innerWidth * 0.9);  // 調整圖表寬度隨螢幕尺寸變化
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className="container bg-light p-5 mb-4">
            <h2 className="mb-4">Technical Skills</h2>
            <div className="row justify-content-center">
                <div className="col-12">
                    <ResponsiveContainer width="100%" height={600}>
                        <BarChart
                            layout="vertical"
                            width={chartWidth}
                            height={600}
                            data={data}
                            margin={{ top: 20, right: 30, left: 120, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" label={{ value: 'Years', position: 'insideBottomRight', offset: -10 }} />
                            <YAxis type="category" dataKey="name" width={120} />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="experience" fill="#82ca9d" name="Experience (Years)" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </section>
    );
}

export default TechSkills;