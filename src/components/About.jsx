import '../styles/About.css'

function About() {
    return (
        <div id='about' className='about part'>
            <div className='title mb-50'>
                <p className='menuFil mb-10'>About</p>
                <h3 className='top'>My stories and</h3>
                <h3 className='bottom'>Feelings</h3>
            </div>
            <p>Avec [X] années d'expérience dans le développement web, j'ai travaillé sur une variété de projets allant des sites vitrines aux applications web complexes. Apprenez-en plus sur mon parcours et ma passion pour le développement.</p>
            <button className='mt-20'>Download CV</button>
        </div>
    )
}

export default About;