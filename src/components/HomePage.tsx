"use client"

import { Button } from "./ui/button"
import { useTranslations } from 'next-intl';
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { motion } from 'framer-motion'
import { useEffect, useState } from "react";

export default function HomePage() {

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const pathName = usePathname();
  const t = useTranslations('HomePage')

  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setVisibleText(t('title').substring(0, i + 1));
      i++;
      if (i === t('title').length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [t]);

  return (
    <motion.div
      id="home"
      className="part min-h-screen w-full flex flex-col items-center justify-center gap-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="flex flex-col items-center gap-4">
        {/* Photo avec glow */}
        <div className="relative mb-2">
          <div className="absolute inset-0 rounded-full bg-primary/25 blur-2xl scale-150" />
          <Image
            className="relative w-32 rounded-full aspect-square object-cover object-center border-2 border-primary/40"
            src={"/me.jpg"}
            alt="picture of me"
            width={200}
            height={200}
            priority
            loading="eager"
          />
        </div>

        <span className="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-lg">
          {t("hello")}
        </span>

        <h1 className="font-bold sm:text-6xl max-sm:text-3xl text-center leading-tight">
          {visibleText}
          <span className="w-0.5 h-[0.85em] inline-block bg-foreground align-middle ml-1 blinking-bar" />
        </h1>

        <p className="sm:w-1/2 max-sm:w-5/6 text-center text-muted-foreground leading-7">
          {t("intro")}
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div variants={itemVariants} className="flex gap-10 max-sm:gap-6">
        {[
          { value: "5+", label: t("stat_years") },
          { value: "15+", label: t("stat_projects") },
          { value: "10+", label: t("stat_techs") },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className="text-3xl font-bold text-primary">{stat.value}</span>
            <span className="text-xs text-muted-foreground text-center max-w-[80px]">{stat.label}</span>
          </div>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-col items-center gap-4">
        <Link href={`${pathName}/contact`}>
          <Button size="lg">{t("contact")}</Button>
        </Link>
        <div className="flex gap-6">
          <Link
            href="https://github.com/killiancolla"
            target="_blank"
            aria-label="GitHub"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/killian-colla-46b48b207/"
            target="_blank"
            aria-label="LinkedIn"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
