import { useTranslations } from 'next-intl';
import { Cloud, Code, MessageCircle, Monitor, Phone, Settings, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Services() {
    const t = useTranslations('Services');
    const pathName = usePathname();
    const locale = pathName.split('/')[1] || 'fr';

    const services = [
        {
            icon: <Monitor className="h-8 w-8 mb-3 text-primary" />,
            title: t('showcase.title'),
            description: t('showcase.description'),
            featured: true,
            href: `/${locale}/creation-site-vitrine-nice`,
        },
        {
            icon: <Cloud className="h-8 w-8 mb-3 text-primary" />,
            title: t('saas.title'),
            description: t('saas.description'),
            href: `/${locale}/developpement-saas`,
        },
        {
            icon: <ShoppingCart className="h-8 w-8 mb-3 text-primary" />,
            title: t('ecommerce.title'),
            description: t('ecommerce.description'),
            href: `/${locale}/site-e-commerce-nice`,
        },
        {
            icon: <Code className="h-8 w-8 mb-3 text-primary" />,
            title: t('customapps.title'),
            description: t('customapps.description'),
            href: `/${locale}/application-web-sur-mesure`,
        },
        {
            icon: <Settings className="h-8 w-8 mb-3 text-primary" />,
            title: t('optimization.title'),
            description: t('optimization.description'),
            href: `/${locale}/refonte-optimisation-site-web`,
        },
        {
            icon: <MessageCircle className="h-8 w-8 mb-3 text-primary" />,
            title: t('consulting.title'),
            description: t('consulting.description'),
            href: `/${locale}/conseil-accompagnement-digital`,
        },
    ];

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div id="services" className="part flex flex-col items-center text-center pt-20 w-4/5 gap-6">
            <motion.div variants={itemVariants} viewport={{ once: true, margin: "-75px 0px" }} initial="hidden" whileInView="visible" className="mb-10">
                <p className="mb-4 before:content-['\002605'] before:text-[#FB6423] before:mr-2.5 before:text-[15px] before:align-middle">
                    {t('title')}
                </p>
                <h2 className="text-sm font-bold text-primary">{t('subtitle')}</h2>
                <h2 className="font-bold text-2xl after:content-[''] after:block after:w-10 after:h-0.5 after:bg-[#FB6423] after:relative after:-bottom-1.5 after:ml-auto after:mr-auto">
                    {t('heading')}
                </h2>
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: `-50px 0px` }}
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full"
            >
                {services.map((service, index) => (
                    <Link
                        key={index}
                        href={service.href}
                        className={`rounded-md transition-all duration-300 border block ${
                            service.featured
                                ? 'border-primary/50 shadow-[0_0_20px_-5px] shadow-primary/20'
                                : 'border-transparent hover:border-primary/60'
                        }`}
                    >
                        <Card className={`w-full h-full border-0 ${service.featured ? 'bg-card/80' : ''}`}>
                            <CardHeader>
                                <CardTitle className="flex flex-col items-center text-center">
                                    {service.icon}
                                    {service.title}
                                    {service.featured && (
                                        <span className="mt-2 text-xs font-normal text-primary border border-primary/40 rounded-full px-2 py-0.5">
                                            ✦ Featured
                                        </span>
                                    )}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-center text-sm leading-6">{service.description}</CardDescription>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </motion.div>
            <Link href={`/${locale}/booking`}>
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
