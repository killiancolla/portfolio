import { useTranslations } from 'next-intl';
import { Cloud, Code, MessageCircle, Monitor, Phone, Settings, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import Link from 'next/link';

export default function Services() {
    const t = useTranslations('Services');

    const services = [
        {
            icon: <Cloud className="h-8 w-8 mb-3 text-primary" />,
            title: t('saas.title'),
            description: t('saas.description'),
        },
        {
            icon: <Monitor className="h-8 w-8 mb-3 text-primary" />,
            title: t('showcase.title'),
            description: t('showcase.description'),
        },
        {
            icon: <ShoppingCart className="h-8 w-8 mb-3 text-primary" />,
            title: t('ecommerce.title'),
            description: t('ecommerce.description'),
        },
        {
            icon: <Code className="h-8 w-8 mb-3 text-primary" />,
            title: t('customapps.title'),
            description: t('customapps.description'),
        },
        {
            icon: <Settings className="h-8 w-8 mb-3 text-primary" />,
            title: t('optimization.title'),
            description: t('optimization.description'),
        },
        {
            icon: <MessageCircle className="h-8 w-8 mb-3 text-primary" />,
            title: t('consulting.title'),
            description: t('consulting.description'),
        },
    ];

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div id="services" className="part flex flex-col items-center text-center pt-20 w-4/5 gap-6">
            <motion.div variants={itemVariants} viewport={{ once: true, margin: "-75px 0px" }} initial="hidden" whileInView="visible" className="mb-10">
                <p className="mb-4 before:content-['\002605'] before:text-[#FB6423] before:mr-2.5 before:text-[15px] before:align-middle">
                    {t('title')}
                </p>
                <h3 className="text-sm font-bold text-primary">{t('subtitle')}</h3>
                <h3 className="font-bold text-2xl after:content-[''] after:block after:w-10 after:h-0.5 after:bg-[#FB6423] after:relative after:-bottom-1.5 after:ml-auto after:mr-auto">
                    {t('heading')}
                </h3>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="transition-all duration-300 hover:shadow-lg dark:hover:shadow-[0_4px_6px_hsl(200,15%,30%)] rounded-md"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            margin: `-${75 * (index + 1)}px 0px`
                        }}
                        variants={cardVariants}
                    >
                        <Card className='w-full h-full'>
                            <CardHeader>
                                <CardTitle className="flex flex-col items-center text-center">
                                    {service.icon}
                                    {service.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-center text-base">{service.description}</CardDescription>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
            <Link href={'https://cal.com/killian-colla-cahhc2/30min'} target='_blank'>
                <Button className='overflow-hidden relative group'>
                    <div className='flex justify-center items-center group-hover:translate-x-[150%] transition-all'>
                        <Phone className='mr-4' />
                        <p className='transition-all'>{t('call')}</p>
                    </div>
                    <Phone className='absolute top-1/2 -left-10 -translate-x-1/2 -translate-y-1/2 group-hover:left-1/2 transition-all' />
                </Button>
            </Link>
        </div>
    );
}