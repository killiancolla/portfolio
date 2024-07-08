import React from "react";
import { useTranslations } from 'next-intl';

export default function Portfolio() {

    const t = useTranslations('Portfolio')

    const workCards = [
        {
            code: "unicancer",
            title: 'Unicancer',
            date: '2022 - 2024'
        },
        {
            code: "univevry",
            title: "Université d'Evry Val d'Essonne",
            date: '2021 - 2022'
        }
    ];

    const educationCards = [
        {
            code: "ipssi",
            title: 'IPSSI',
            date: '2022 - 2024'
        },
        {
            code: "univevryschool",
            title: "Université d'Evry Val d'Essonne",
            date: '2021 - 2022'
        }
    ];

    return (
        <div id='portfolio' className="part flex items-center flex-col text-center w-4/5 pt-20">
            <div className='mb-16'>
                <p className="mb-4 before:content-['\002605'] before:text-[#FB6423] before:mr-2.5 before:text-[15px] before:align-middle">{t('portfolio')}</p>
                <h3 className='text-xs font-bold text-primary'>{t('portfolio_title1')}</h3>
                <h3 className="font-bold text-2xl after:content-[''] after:block after:w-10 after:h-0.5 after:bg-[#FB6423] after:relative after:-bottom-1.5 after:ml-auto after:mr-auto">
                    {t('portfolio_title2')}
                </h3>
            </div>
            <div className='relative'>
                <div className="absolute w-0.5 h-full bg-foreground left-1/2 -translate-x-1/2 top-0
                before:bg-[#FB6423] before:content-[''] before:w-5 before:h-5 before:absolute before:rounded-full before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:-top-4 before:animate-pulse
                after:border-2 after:border-[#FB6423] after:content-[''] after:w-8 after:h-8 after:absolute after:rounded-full after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:-top-4"></div>
                <div className='grid grid-cols-2 gap-24'>
                    {workCards.map((work, index) => (
                        <React.Fragment key={index}>
                            {(index + 1) % 2 === 0 && <p key={`p_${index}`} className='flex w-full items-center justify-end'>{work.date}</p>}
                            <div className={`relative border-2 border-primary p-6 rounded-sm ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                <h2 className="text-2xl font-bold text-primary">{work.title}</h2>
                                <h3 className="font-bold mb-4">{t(work.code + '_position')}</h3>
                                <p className="leading-7">{t(work.code + '_description')}</p>
                                <div className={`absolute top-1/2 right-0 w-12 h-px bg-foreground ${(index + 1) % 2 !== 0 ? '-right-px translate-x-full' : '-left-px -translate-x-full'}`}></div>
                            </div>
                            {(index + 1) % 2 !== 0 && <p key={`p_${index}`} className='flex items-center justify-start'>{work.date}</p>}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div className='mb-16 pt-10'>
                <h3 className='text-xs font-bold text-primary'>{t('portfolio_title3')}</h3>
                <h3 className="font-bold text-2xl after:content-[''] after:block after:w-10 after:h-0.5 after:bg-[#FB6423] after:relative after:-bottom-1.5 after:ml-auto after:mr-auto">
                    {t('portfolio_title4')}
                </h3>
            </div>
            <div className='relative'>
                <div className="absolute w-0.5 h-full bg-foreground left-1/2 -translate-x-1/2 top-0
          before:bg-[#FB6423] before:content-[''] before:w-5 before:h-5 before:absolute before:rounded-full before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:-top-4
          after:border-2 after:border-[#FB6423] after:content-[''] after:w-8 after:h-8 after:absolute after:rounded-full after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:-top-4 before:animate-pulse"></div>
                <div className='grid grid-cols-2 gap-24'>
                    {educationCards.map((education, index) => (
                        <React.Fragment key={index}>
                            {(index + 1) % 2 === 0 && <p key={`p_${index}`} className='flex w-full items-center justify-end'>{education.date}</p>}
                            <div className={`relative border-2 border-primary p-6 rounded-sm ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                <h2 className="text-2xl font-bold text-primary">{education.title}</h2>
                                <h3 className="font-bold mb-4">{t(education.code + '_position')}</h3>
                                <p className="leading-7">{t(education.code + '_description')}</p>
                                <div className={`absolute top-1/2 right-0 w-12 h-px bg-foreground ${(index + 1) % 2 !== 0 ? '-right-px translate-x-full' : '-left-px -translate-x-full'}`}></div>
                            </div>
                            {(index + 1) % 2 !== 0 && <p key={`p_${index}`} className='flex items-center justify-start'>{education.date}</p>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}