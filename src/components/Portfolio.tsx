import React from "react";
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from "lucide-react";

const workCards = [
    {
        code: "qovery",
        title: 'Qovery',
        date: '2025 - présent',
        tags: ['Golang', 'Rust', 'React', 'IA'],
    },
    {
        code: "unicancer",
        title: 'Unicancer',
        date: '2022 - 2024',
        tags: ['PHP', 'Symfony', 'JavaScript', 'SQL'],
    },
    {
        code: "univevry",
        title: "Université d'Evry",
        date: '2021 - 2022',
        tags: ['PHP', 'Joomla', 'JavaScript', 'MySQL'],
    }
];

const educationCards = [
    {
        code: "ipssi",
        title: 'IPSSI',
        date: '2022 - 2024',
        tags: ['Next.js', 'React', 'Python', 'Docker'],
    },
    {
        code: "univevryschool",
        title: "Université d'Evry",
        date: '2021 - 2022',
        tags: ['Symfony', 'React', 'WordPress', 'Flutter'],
    }
];

const cardVariantsLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const cardVariantsRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

function TimelineCard({
    code,
    title,
    date,
    tags,
    index,
    icon,
    t,
}: {
    code: string;
    title: string;
    date: string;
    tags: string[];
    index: number;
    icon: React.ReactNode;
    t: (key: string) => string;
}) {
    const isEven = (index + 1) % 2 === 0;
    const variants = isEven ? cardVariantsRight : cardVariantsLeft;

    return (
        <React.Fragment>
            {isEven && (
                <motion.p
                    variants={cardVariantsLeft}
                    viewport={{ once: false, margin: "-100px 0px" }}
                    initial="hidden"
                    whileInView="visible"
                    className='max-sm:hidden flex w-full items-center justify-end text-sm text-muted-foreground'
                >
                    {date}
                </motion.p>
            )}
            <motion.div
                variants={variants}
                viewport={{ once: false, margin: "-100px 0px" }}
                initial="hidden"
                whileInView="visible"
                className="max-sm:w-4/5 relative border border-border hover:border-primary/50 transition-colors p-5 rounded-sm text-left flex flex-col gap-3"
            >
                {/* Date visible sur mobile uniquement */}
                <span className="sm:hidden text-xs text-muted-foreground">{date}</span>

                <div className="flex justify-between items-start gap-2">
                    <div>
                        <h2 className="text-xl font-bold text-primary">{title}</h2>
                        <h3 className="font-medium text-sm mt-0.5">{t(code + '_position')}</h3>
                    </div>
                    <span className="text-primary/40 shrink-0 mt-1">{icon}</span>
                </div>

                <p className="leading-7 text-sm text-muted-foreground">{t(code + '_description')}</p>

                <div className="flex flex-wrap gap-1.5">
                    {tags.map(tag => (
                        <span key={tag} className="text-xs bg-primary/10 text-primary border border-primary/20 rounded-sm px-2 py-0.5">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className={`max-sm:hidden absolute top-1/2 w-12 h-px bg-border ${!isEven ? '-right-px translate-x-full' : '-left-px -translate-x-full'}`} />
            </motion.div>
            {!isEven && (
                <motion.p
                    variants={cardVariantsRight}
                    viewport={{ once: false, margin: "-100px 0px" }}
                    initial="hidden"
                    whileInView="visible"
                    className='max-sm:hidden flex items-center justify-start text-sm text-muted-foreground'
                >
                    {date}
                </motion.p>
            )}
        </React.Fragment>
    );
}

export default function Portfolio() {

    const t = useTranslations('Portfolio')

    return (
        <div id='portfolio' className="part flex items-center flex-col text-center w-4/5 pt-20 mb-10">
            <motion.div className='mb-16' variants={itemVariants} viewport={{ once: true, margin: "-75px 0px" }} initial="hidden" whileInView="visible">
                <p className="mb-4 before:content-['\002605'] before:text-[#FB6423] before:mr-2.5 before:text-[15px] before:align-middle">{t('portfolio')}</p>
                <h2 className='text-sm font-bold text-primary'>{t('portfolio_title1')}</h2>
                <h2 className="font-bold text-2xl after:content-[''] after:block after:w-10 after:h-0.5 after:bg-[#FB6423] after:relative after:-bottom-1.5 after:ml-auto after:mr-auto">
                    {t('portfolio_title2')}
                </h2>
            </motion.div>

            {/* Timeline expériences */}
            <div className='relative w-full'>
                <div className="absolute w-0.5 h-full bg-border max-sm:left-0 sm:left-1/2 -translate-x-1/2 top-0
                    before:bg-[#FB6423] before:content-[''] before:w-4 before:h-4 before:absolute before:rounded-full before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:-top-3 before:animate-pulse
                    after:border-2 after:border-[#FB6423] after:content-[''] after:w-7 after:h-7 after:absolute after:rounded-full after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:-top-3" />
                <div className='max-sm:flex max-sm:gap-4 max-sm:items-center max-sm:flex-col sm:grid sm:grid-cols-2 sm:gap-20'>
                    {workCards.map((card, index) => (
                        <TimelineCard
                            key={card.code}
                            {...card}
                            index={index}
                            icon={<Briefcase className="w-5 h-5" />}
                            t={t}
                        />
                    ))}
                </div>
            </div>

            {/* Titre formations */}
            <motion.div className='mb-16 pt-16' variants={itemVariants} viewport={{ once: true, margin: "-75px 0px" }} initial="hidden" whileInView="visible">
                <h2 className='text-sm font-bold text-primary'>{t('portfolio_title3')}</h2>
                <h2 className="font-bold text-2xl after:content-[''] after:block after:w-10 after:h-0.5 after:bg-[#FB6423] after:relative after:-bottom-1.5 after:ml-auto after:mr-auto">
                    {t('portfolio_title4')}
                </h2>
            </motion.div>

            {/* Timeline formations */}
            <div className='relative w-full'>
                <div className="absolute w-0.5 h-full bg-border max-sm:left-0 sm:left-1/2 -translate-x-1/2 top-0
                    before:bg-[#FB6423] before:content-[''] before:w-4 before:h-4 before:absolute before:rounded-full before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:-top-3 before:animate-pulse
                    after:border-2 after:border-[#FB6423] after:content-[''] after:w-7 after:h-7 after:absolute after:rounded-full after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:-top-3" />
                <div className='max-sm:flex max-sm:gap-4 max-sm:items-center max-sm:flex-col sm:grid sm:grid-cols-2 sm:gap-20'>
                    {educationCards.map((card, index) => (
                        <TimelineCard
                            key={card.code}
                            {...card}
                            index={index}
                            icon={<GraduationCap className="w-5 h-5" />}
                            t={t}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
