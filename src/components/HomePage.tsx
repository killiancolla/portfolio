import { Button } from "./ui/button"
import { useTranslations } from 'next-intl';
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, PencilIcon, PencilLine, Phone } from "lucide-react";
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
    <div className="relative">
      <motion.div className="background w-1/2 h-1/3 absolute top-1/2 left-1/2 blur-2xl rounded-full opacity-40 -translate-x-1/2 -translate-y-1/2 -z-10"></motion.div>
      <motion.div
        id="home"
        className="part min-h-screen w-full flex flex-col items-center justify-center gap-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-2">
          <Image
            className="w-32 rounded-full bg-white aspect-square object-cover object-center hover:-translate-y-2 hover:rotate-12 transition-all border-primary hover:border"
            src={"/me.jpg"}
            alt="picture of me"
            width={200}
            height={200}
          />

          <span
            className={`inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`}
          >
            {t("hello")}
          </span>

          <h2 className="font-bold sm:text-5xl max-sm:text-4xl relative border border-primary px-7 py-3 flex gap-2">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {visibleText}
            </motion.p>
            <div className="w-2 bg-white blinking-bar"></div>
            <div className="w-5 h-5 absolute top-0 right-0 bg-primary flex justify-center items-center">
              <PencilLine className="w-2/3 h-2/3" />
            </div>
          </h2>


          <p className="sm:w-1/2 max-sm:w-5/6 text-center">
            {t("intro")}
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center gap-3">
          <h2 className="text-primary font-bold">
            {t("question")}
          </h2>
          <div>
            <Link className="relative group" href={`${pathName}/contact`}>
              <Button className="">{t("contact")}</Button>
            </Link>
          </div>

        </motion.div>
        <motion.div variants={itemVariants} className="flex gap-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Link href="https://github.com/killiancolla" target="_blank" aria-label="Visit my GitHub profile">
              <Github className="hover:text-primary" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Link
              href="https://www.linkedin.com/in/killian-colla-46b48b207/"
              target="_blank"
              aria-label="Visit my LinkedIn profile"
            >
              <Linkedin className="hover:text-primary" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}