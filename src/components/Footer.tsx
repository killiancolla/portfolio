import { Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer({ className }: { className?: string }) {
    return (
        <div className={`flex items-center justify-center w-full flex-col gap-4 bg-card p-6 relative ${className}`}>
            <Image src={"/logo.png"} width={100} height={100} alt="logo" className="h-12 w-12 absolute top-1/2 -translate-y-1/2 left-10" />
            <div className='flex items-start gap-2 h-12'>
                <Link
                    href={"https://wa.me/33695041166"}
                    className="h-full w-fit aspect-square object-contain hover:-translate-y-2 hover:rotate-12 hover:transition-all transition-all"
                    target='_blank'
                >
                    <Image alt='Whatsapp logo' src={"/whatsapp.webp"} height={100} width={100} />
                </Link>
                <Link
                    className="h-full w-fit aspect-square object-contain hover:-translate-y-2 hover:rotate-12 hover:transition-all transition-all"
                    href={"https://x.com/_killiandev"}
                    target='_blank'
                >
                    <Image alt='X logo' src={"/x.webp"} height={100} width={100} />
                </Link>
                <Link
                    className="h-full w-fit aspect-square object-contain hover:-translate-y-2 hover:rotate-12 hover:transition-all transition-all"
                    href={"https://www.linkedin.com/in/killian-colla-46b48b207/"}
                    target='_blank'
                >
                    <Image alt='LinkedIn logo' src={"/linkedin.webp"} height={100} width={100} />
                </Link>
                <Link
                    className="h-full w-fit aspect-square object-contain hover:-translate-y-2 hover:rotate-12 hover:transition-all transition-all"
                    href={"https://github.com/killiancolla"}
                    target='_blank'
                >
                    <Image alt='GitHub logo' src={"/github.png"} height={100} width={100} />
                </Link>
            </div>
            <p>© {new Date().getFullYear()} Killian Colla. All rights reserved.</p>
        </div>
    )

}