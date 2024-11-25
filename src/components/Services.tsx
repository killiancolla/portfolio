import { useTranslations } from 'next-intl';
import { Cloud, Code, MessageCircle, Monitor, Settings, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

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

    return (
        <div id="services" className="part flex flex-col items-center text-center pt-20 w-4/5">
            <div className="mb-10">
                <p className="mb-4 before:content-['\002605'] before:text-[#FB6423] before:mr-2.5 before:text-[15px] before:align-middle">
                    {t('title')}
                </p>
                <h3 className="text-xs font-bold text-primary">{t('subtitle')}</h3>
                <h3 className="font-bold text-2xl after:content-[''] after:block after:w-10 after:h-0.5 after:bg-[#FB6423] after:relative after:-bottom-1.5 after:ml-auto after:mr-auto">
                    {t('heading')}
                </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <Card key={index} className="transition-all duration-300 hover:shadow-lg dark:hover:shadow-[0_4px_6px_hsl(200,15%,30%)]">
                        <CardHeader>
                            <CardTitle className="flex flex-col items-center text-center">
                                {service.icon}
                                {service.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-center">{service.description}</CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
