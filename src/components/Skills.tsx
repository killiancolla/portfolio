import Image from "next/image";

export default function Skills() {
    return (
        <div id='skills' className="part flex flex-col items-center text-center pt-20 w-4/5">
            <div className='mb-10'>
                <p className="mb-4 before:content-['\002605'] before:text-[#FB6423] before:mr-2.5 before:text-[15px] before:align-middle">Skills</p>
                <h3 className='text-xs font-bold text-primary'>Skills and</h3>
                <h3 className="font-bold text-2xl after:content-[''] after:block after:w-10 after:h-0.5 after:bg-[#FB6423] after:relative after:-bottom-1.5 after:ml-auto after:mr-auto">
                    Experience
                </h3>
            </div>
            <div className="flex w-1/2 justify-center flex-wrap">
                {[...Array(6)].map((_, index) => (
                    <div key={index} className="w-40 bg-card flex items-center mt-4 p-4 m-8 rounded">
                        <Image width={50} height={50} alt="logo" className="w-1/3 object-cover" src='/react.svg' />
                        <h3 className="w-2/3">ReactJS</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}