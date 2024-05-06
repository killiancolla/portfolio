import '../styles/Projects.css'
import { useState } from 'react';
import React from 'react';
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.jpg'
import image from '../assets/pomodoro.png'

function Portfolio() {

    const projects = [
        {
            title: 'Pomodoro',
            image: project1,
            techno: ["ReactJS", "PHP"],
            link: "https://www.twitch.tv/moderator/superkevintran"
        },
        {
            title: 'tructruc',
            image: project2,
            techno: ["ReactJS", "PHP"],
            link: "https://www.twitch.tv/moderator/superkevintran"
        }
    ];


    const [activeItem, setActiveItem] = useState('all');

    const handleClick = (itemName) => {
        setActiveItem(itemName);
    };

    const filtered_projects = projects.filter(project => {
        return activeItem == "all" || project.techno.some(tech => tech.toLowerCase() === activeItem.toLowerCase());
    })

    const columnCount = 3;
    const projectsPerColumn = Math.ceil(filtered_projects.length / columnCount);

    const columns = [];

    for (let i = 0; i < columnCount; i++) {
        const start = i * projectsPerColumn;
        const end = start + projectsPerColumn;
        columns.push(filtered_projects.slice(start, end));
    }

    const [processing, setProcessing] = useState([]);

    const handleButtonClick = (index, link) => {
        setProcessing((prev) => [...prev, index]);
        setTimeout(() => {
            setProcessing((prev) => prev.filter((item) => item !== index));
            window.open(link, "_blank");
        }, 2000);
    };

    const handleRestartClick = () => {
        setProcessing([]);
    };

    const handleClickButtonRedirect = (link) => {
        setTimeout(() => {
            window.open(link, "_blank");
        }, 2000);
    };

    return (
        <div id='projects' className="projects part">
            <div className='title mb-50'>
                <p className='menuFil mb-10'>Projects</p>
                <h3 className='top'>My Creative</h3>
                <h3 className='bottom'>Works</h3>
            </div>
            <ul className='menu'>
                <li className={activeItem === 'all' ? 'active' : ''} onClick={() => setActiveItem('all')}>All Projects</li>
                <li className={activeItem === 'reactjs' ? 'active' : ''} onClick={() => setActiveItem('reactjs')}>ReactJS</li>
                <li className={activeItem === 'php' ? 'active' : ''} onClick={() => setActiveItem('php')}>PHP</li>
                <li className={activeItem === 'python' ? 'active' : ''} onClick={() => setActiveItem('python')}>Python</li>
            </ul>
            <div className="grid-3">
                {columns.map((column, index) => (
                    <div key={index} className="column">
                        {column.map((project, index) => (
                            <div key={index} className="card">
                                <div className="img">
                                    <img src={project.image} alt={project.title} />
                                    <button
                                        key={index}
                                        className={`button ${processing.includes(index) ? 'processing' : ''}`}
                                        onClick={() => handleButtonClick(index, project.link)}
                                    >
                                        <span>See project</span>
                                        <svg viewBox="0 0 15 13">
                                            <polyline points="2 6.5 6 10.5 13 2.5"></polyline>
                                        </svg>
                                    </button>
                                </div>
                                <h2>{project.title}</h2>
                                <h3>
                                    {project.techno.map((tech, index) => (
                                        <React.Fragment key={index}>
                                            {index > 0 && ' • '}
                                            {tech}
                                        </React.Fragment>
                                    ))}
                                </h3>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio;