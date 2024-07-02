import { Button } from "./ui/button"

export default function About() {
    return (
        <div id='about' className='part flex flex-col items-center text-center pt-20'>
            <div className='mb-10'>
                <p className="mb-4 before:content-['\002605'] before:text-[#FB6423] before:mr-2.5 before:text-[15px] before:align-middle">About</p>
                <h3 className='text-xs font-bold text-primary'>My stories and</h3>
                <h3 className="font-bold text-2xl after:content-[''] after:block after:w-10 after:h-0.5 after:bg-[#FB6423] after:relative after:-bottom-1.5 after:ml-auto after:mr-auto">
                    Feelings
                </h3>
            </div>
            <p className="w-2/5 italic font-thin leading-7 mb-5">Avec [X] années d'expérience dans le développement web, j'ai travaillé sur une variété de projets allant des sites vitrines aux applications web complexes. Apprenez-en plus sur mon parcours et ma passion pour le développement.</p>
            <Button className=''>Download CV</Button>
        </div>
    )
}