import '../styles/Portfolio.css';
import React from 'react';

function Portfolio() {
    const workCards = [
        {
            title: 'Unicancer',
            position: 'FullStack Developer',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloremque deleniti nemo beatae debitis suscipit sapiente dolorum voluptatum. Incidunt, possimus illum iure ducimus natus eum pariatur repudiandae eaque dicta fuga.',
            date: '2022 - 2024'
        },
        {
            title: "Université d'Evry Val d'Essonne",
            position: 'FullStack Developer',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloremque deleniti nemo beatae debitis suscipit sapiente dolorum voluptatum. Incidunt, possimus illum iure ducimus natus eum pariatur repudiandae eaque dicta fuga.',
            date: '2021 - 2022'
        }
    ];

    const educationCards = [
        {
            title: 'Unicancer',
            position: 'FullStack Developer',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloremque deleniti nemo beatae debitis suscipit sapiente dolorum voluptatum. Incidunt, possimus illum iure ducimus natus eum pariatur repudiandae eaque dicta fuga.',
            date: '2022 - 2024'
        },
        {
            title: "Université d'Evry Val d'Essonne",
            position: 'FullStack Developer',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloremque deleniti nemo beatae debitis suscipit sapiente dolorum voluptatum. Incidunt, possimus illum iure ducimus natus eum pariatur repudiandae eaque dicta fuga.',
            date: '2021 - 2022'
        }
    ];

    return (
        <div id='portfolio' className="portfolio part">
            <div className='title mb-50'>
                <p className='menuFil mb-10'>Portfolio</p>
                <h3 className='top'>Most Important</h3>
                <h3 className='bottom'>Experience</h3>
            </div>
            <div className='lifeExp'>
                <div className='middleBar'></div>
                <div className='grid-2'>
                    {workCards.map((work, index) => (
                        <React.Fragment key={index}>
                            {(index + 1) % 2 === 0 && <p key={`p_${index}`} className={index % 2 === 0 ? 'right' : 'left'}>{work.date}</p>}
                            <div className={index % 2 === 0 ? 'workCard left' : 'workCard right'} data-aos="fade-right">
                                <h2>{work.title}</h2>
                                <h3>{work.position}</h3>
                                <p>{work.description}</p>
                                <div className='line'></div>
                            </div>
                            {(index + 1) % 2 !== 0 && <p key={`p_${index}`} className={index % 2 === 0 ? 'right' : 'left'}>{work.date}</p>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <div className='title mb-50'>
                <h3 className='top'>Most Important</h3>
                <h3 className='bottom'>Education</h3>
            </div>
            <div className='lifeExp'>
                <div className='middleBar'></div>
                <div className='grid-2'>
                    {educationCards.map((work, index) => (
                        <React.Fragment key={index}>
                            {(index + 1) % 2 === 0 && <p key={`p_${index}`} className={index % 2 === 0 ? 'right' : 'left'}>{work.date}</p>}
                            <div className={index % 2 === 0 ? 'workCard left' : 'workCard right'}>
                                <h2>{work.title}</h2>
                                <h3>{work.position}</h3>
                                <p>{work.description}</p>
                                <div className='line'></div>
                            </div>
                            {(index + 1) % 2 !== 0 && <p key={`p_${index}`} className={index % 2 === 0 ? 'right' : 'left'}>{work.date}</p>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
