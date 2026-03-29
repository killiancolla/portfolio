"use client";

import { useParams } from "next/navigation";
import { ArrowDownFromLine, Briefcase, Code2, GraduationCap } from "lucide-react";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function About() {

    const params = useParams();
    const locale = params?.locale || "fr";
    const t = useTranslations("About");

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const highlights = [
        { icon: <Briefcase className="w-4 h-4 text-primary shrink-0" />, label: t("highlight_exp") },
        { icon: <Code2 className="w-4 h-4 text-primary shrink-0" />, label: t("highlight_stack") },
        { icon: <GraduationCap className="w-4 h-4 text-primary shrink-0" />, label: t("highlight_degree") },
    ];

    return (
        <motion.div
            id="about"
            className="part flex flex-col items-center text-center pt-20 w-4/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-75px 0px" }}
            variants={variants}
        >
            <div className="mb-10">
                <p className="mb-4 before:content-['\002605'] before:text-[#FB6423] before:mr-2.5 before:text-[15px] before:align-middle">
                    {t("about")}
                </p>
                <h2 className="text-sm font-bold text-primary">{t("about-title1")}</h2>
                <h2 className="font-bold text-2xl after:content-[''] after:block after:w-10 after:h-0.5 after:bg-[#FB6423] after:relative after:-bottom-1.5 after:ml-auto after:mr-auto">
                    {t("about-title2")}
                </h2>
            </div>

            <div className="flex max-sm:flex-col gap-12 w-full items-start justify-center">
                <p className="sm:w-2/5 max-sm:w-full italic font-thin leading-8 text-left text-muted-foreground">
                    {t("about_desc")}
                </p>
                <div className="flex flex-col gap-3 sm:w-2/5 max-sm:w-full">
                    {highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-3 bg-card border rounded-sm px-4 py-3 text-left">
                            {h.icon}
                            <span className="text-sm">{h.label}</span>
                        </div>
                    ))}
                    <a
                        href={locale === 'fr' ? "CV_FR_Killian_Colla.pdf" : "CV_EN_Killian_Colla.pdf"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button className="w-full mt-1">
                            {t("cv-download")}
                            <ArrowDownFromLine className="ml-2 h-4 w-4" />
                        </Button>
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
