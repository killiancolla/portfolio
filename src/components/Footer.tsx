import { Plus } from "lucide-react"

export default function Footer({ className }: { className?: string }) {
    return (
        <div className={`font-thin text-sm mb-10 relative flex flex-col justify-between py-2 ${className}`}>
            <Plus className="-translate-x-1/2 -translate-y-1/2 absolute top-0 left-0" />
            <Plus className="translate-x-1/2 -translate-y-1/2 absolute top-0 right-0" />
            <Plus className="-translate-x-1/2 translate-y-1/2 absolute bottom-0 left-0" />
            <Plus className="translate-x-1/2 translate-y-1/2 absolute bottom-0 right-0" />
            <p>© {new Date().getFullYear()} Killian Colla. All rights reserved.</p>
            <p>contact@killian-colla.com | (+33)6 95 04 11 66</p>
        </div>
    )

}