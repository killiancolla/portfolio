import logo1 from '../assets/school.png'
import logo2 from '../assets/work.png'
import logo3 from '../assets/tools.png'
import '../styles/Skills.css'

function Skills() {
    return (
        <div id='skills' className="skills part">
            <div className='title mb-50'>
                <p className='menuFil mb-10'>Skills</p>
                <h3 className='top'>Skills and</h3>
                <h3 className='bottom'>Experience</h3>
            </div>
            <div className="grid-3" style={{ width: '80%' }}>
                <div className='card'>
                    <img src={logo1} />
                    <h3 className='mt-50 mb-20'>FrontEnd Development</h3>
                    <p>JavaScript</p>
                    <ul className='mb-20'>
                        <li>5 years experience</li>
                    </ul>
                    <p>ReactJS</p>
                    <ul className='mb-20'>
                        <li>2 years experience</li>
                    </ul>
                    <p>HTML / CSS</p>
                    <ul className='mb-20'>
                        <li>5 years experience</li>
                    </ul>
                </div>
                <div className='card'>
                    <img src={logo2} />
                    <h3 className='mt-50 mb-20'>FrontEnd Development</h3>
                    <p>JavaScript</p>
                    <ul className='mb-20'>
                        <li>5 years experience</li>
                    </ul>
                    <p>ReactJS</p>
                    <ul className='mb-20'>
                        <li>2 years experience</li>
                    </ul>
                    <p>HTML / CSS</p>
                    <ul className='mb-20'>
                        <li>5 years experience</li>
                    </ul>
                </div>
                <div className='card'>
                    <img src={logo3} />
                    <h3 className='mt-50 mb-20'>FrontEnd Development</h3>
                    <p>JavaScript</p>
                    <ul className='mb-20'>
                        <li>5 years experience</li>
                    </ul>
                    <p>ReactJS</p>
                    <ul className='mb-20'>
                        <li>2 years experience</li>
                    </ul>
                    <p>HTML / CSS</p>
                    <ul className='mb-20'>
                        <li>5 years experience</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills;