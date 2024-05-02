import '../styles/Projects.css'
import { useState } from 'react';
import project1 from '../assets/project1.png'

function Portfolio() {

    const projectsCards = [
        {
            title: 'Unicancer',
            description: 'FullStack Developer',
            link: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloremque deleniti nemo beatae debitis suscipit sapiente dolorum voluptatum. Incidunt, possimus illum iure ducimus natus eum pariatur repudiandae eaque dicta fuga.',
            image: project1
        },
        {
            title: 'Unicancer',
            description: 'FullStack Developer',
            link: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloremque deleniti nemo beatae debitis suscipit sapiente dolorum voluptatum. Incidunt, possimus illum iure ducimus natus eum pariatur repudiandae eaque dicta fuga.',
            image: project1
        },
        {
            title: 'Unicancer',
            description: 'FullStack Developer',
            link: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloremque deleniti nemo beatae debitis suscipit sapiente dolorum voluptatum. Incidunt, possimus illum iure ducimus natus eum pariatur repudiandae eaque dicta fuga.',
            image: project1
        },
        {
            title: 'Unicancer',
            description: 'FullStack Developer',
            link: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloremque deleniti nemo beatae debitis suscipit sapiente dolorum voluptatum. Incidunt, possimus illum iure ducimus natus eum pariatur repudiandae eaque dicta fuga.',
            image: project1
        },
        {
            title: 'Unicancer',
            description: 'FullStack Developer',
            link: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloremque deleniti nemo beatae debitis suscipit sapiente dolorum voluptatum. Incidunt, possimus illum iure ducimus natus eum pariatur repudiandae eaque dicta fuga.',
            image: project1
        },
        {
            title: 'Unicancer',
            description: 'FullStack Developer',
            link: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloremque deleniti nemo beatae debitis suscipit sapiente dolorum voluptatum. Incidunt, possimus illum iure ducimus natus eum pariatur repudiandae eaque dicta fuga.',
            image: project1
        },
        {
            title: 'Unicancer',
            description: 'FullStack Developer',
            link: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloremque deleniti nemo beatae debitis suscipit sapiente dolorum voluptatum. Incidunt, possimus illum iure ducimus natus eum pariatur repudiandae eaque dicta fuga.',
            image: project1
        },
        {
            title: 'Unicancer',
            description: 'FullStack Developer',
            link: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloremque deleniti nemo beatae debitis suscipit sapiente dolorum voluptatum. Incidunt, possimus illum iure ducimus natus eum pariatur repudiandae eaque dicta fuga.',
            image: project1
        },
        {
            title: 'Unicancer',
            description: 'FullStack Developer',
            link: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloremque deleniti nemo beatae debitis suscipit sapiente dolorum voluptatum. Incidunt, possimus illum iure ducimus natus eum pariatur repudiandae eaque dicta fuga.',
            image: project1
        },
    ];

    const [activeItem, setActiveItem] = useState('all');

    const handleClick = (itemName) => {
        setActiveItem(itemName);
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
                <li className={activeItem === 'react' ? 'active' : ''} onClick={() => setActiveItem('react')}>ReactJS</li>
                <li className={activeItem === 'php' ? 'active' : ''} onClick={() => setActiveItem('php')}>PHP</li>
                <li className={activeItem === 'python' ? 'active' : ''} onClick={() => setActiveItem('python')}>Python</li>
            </ul>
            {projectsCards.reduce((acc, _, index, array) => {
                if (index % 5 === 0) {
                    acc.push(array.slice(index, index + 5));
                    console.log(acc);
                }
                return acc;
            }, []).map((subArray, index) => (
                <div key={index} className='projectsGrid'>
                    {subArray.map((work, i) => (
                        <div key={i} className={`p p${(i % 5) + 1}`} style={{ backgroundImage: `url(${work.image})` }}>
                            <div className="footer"></div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Portfolio;