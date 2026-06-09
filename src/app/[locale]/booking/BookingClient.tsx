"use client"

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export default function BookingClient() {
    const router = useRouter()
    const pathName = usePathname()
    const locale = pathName.split('/')[1] || 'fr'

    useEffect(() => {
        // Clear any previous embed content
        const calEl = document.getElementById('cal-inline')
        if (calEl) calEl.innerHTML = ''

        const initEmbed = () => {
            const Cal = (window as any).Cal
            Cal("inline", {
                elementOrSelector: "#cal-inline",
                calLink: "killian-colla-cahhc2/30min",
            })
            Cal("ui", { hideEventTypeDetails: false, layout: "month_view" })
            Cal("on", {
                action: "bookingSuccessful",
                callback: () => {
                    router.push(`/${locale}/confirmation`)
                },
            })
        }

        if (!(window as any).Cal) {
            // First load: inject the IIFE loader (loads embed.js once)
            const script = document.createElement('script')
            script.innerHTML = `
                (function (C, A, L) {
                    let p = function (a, ar) { a.q.push(ar); };
                    let d = C.document;
                    C.Cal = C.Cal || function () {
                        let cal = C.Cal; let ar = arguments;
                        if (!cal.loaded) {
                            cal.ns = {}; cal.q = cal.q || [];
                            d.head.appendChild(d.createElement("script")).src = A;
                            cal.loaded = true;
                        }
                        if (ar[0] === L) {
                            const api = function () { p(api, arguments); };
                            const namespace = ar[1];
                            api.q = api.q || [];
                            if (typeof namespace === "string") {
                                cal.ns[namespace] = cal.ns[namespace] || api;
                                p(cal.ns[namespace], ar);
                                p(cal, [L, namespace, ar[2]]);
                            } else p(cal, ar);
                            return;
                        }
                        p(cal, ar);
                    };
                })(window, "https://app.cal.com/embed/embed.js", "init");
                Cal("init", { origin: "https://cal.com" });
            `
            document.head.appendChild(script)
        }

        // Cal stub exists (queued or already loaded) — safe to call
        initEmbed()

        const handleCalEvent = (e: MessageEvent) => {
            if (e.data?.type === 'CAL:bookingSuccessful') {
                router.push(`/${locale}/confirmation`)
            }
        }
        window.addEventListener('message', handleCalEvent)

        return () => {
            window.removeEventListener('message', handleCalEvent)
            const el = document.getElementById('cal-inline')
            if (el) el.innerHTML = ''
        }
    }, [router, locale])

    return <div id="cal-inline" className="w-full min-h-[650px]" />
}
