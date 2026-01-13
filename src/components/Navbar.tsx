import { useEffect, useMemo, useState } from "react";
import { Menu, X, Cpu } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

interface NavLink {
    name: string;
    href: string; // "#projects" formatında kalacak
}

const navLinksData: NavLink[] = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
];

const HEADER_OFFSET = 88;

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeId, setActiveId] = useState<string>("");

    // Router Hook'ları
    const location = useLocation();
    const navigate = useNavigate();

    // Ana sayfada mıyız kontrolü (path '/' ise true)
    const isHomePage = location.pathname === "/";

    const sectionIds = useMemo(
        () => navLinksData.map((l) => l.href.replace("#", "")),
        []
    );

    // Scroll background effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Body scroll lock
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    // Scrollspy (Sadece Ana Sayfada Çalışmalı)
    useEffect(() => {
        // Eğer ana sayfada değilsek bu mantığı çalıştırma ve activeId'yi sıfırla
        if (!isHomePage) {
            setActiveId("");
            return;
        }

        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];

        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

                if (visible?.target?.id) setActiveId(visible.target.id);
            },
            {
                root: null,
                threshold: [0.25, 0.4, 0.6],
                rootMargin: `-${HEADER_OFFSET}px 0px -60% 0px`,
            }
        );

        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, [sectionIds, isHomePage]); // isHomePage dependency eklendi

    // URL Hash kontrolü (Başka sayfadan ana sayfaya hash ile gelindiğinde)
    useEffect(() => {
        if (isHomePage && location.hash) {
            const id = location.hash.replace("#", "");
            setTimeout(() => {
                scrollToId(id);
            }, 100); // Sayfa render'ı için ufak bir gecikme
        }
    }, [location, isHomePage]);

    const closeMenu = () => setIsMenuOpen(false);

    const scrollToId = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;

        const top =
            el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;

        window.scrollTo({ top, behavior: "smooth" });
    };

    const handleNavClick = (hash: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        closeMenu();

        if (isHomePage) {
            // Zaten ana sayfadaysak direkt kaydır
            const id = hash.replace("#", "");
            scrollToId(id);
            window.history.pushState(null, "", hash);
        } else {
            // Başka sayfadaysak ana sayfaya yönlendir ve hash'i ekle
            navigate(`/${hash}`);
        }
    };

    const handleLogoClick = (e: React.MouseEvent) => {
        e.preventDefault();
        closeMenu();
        if (isHomePage) {
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.history.pushState(null, "", "/");
        } else {
            navigate("/");
            window.scrollTo(0, 0);
        }
    };

    return (
        <nav
            className={[
                "fixed top-0 left-0 w-full z-50 transition-all duration-300",
                scrolled || !isHomePage // Ana sayfa değilse her zaman dolu arka plan olsun
                    ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800/70 py-3"
                    : "bg-transparent py-5",
            ].join(" ")}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Brand */}
                <a
                    href="/"
                    onClick={handleLogoClick}
                    className="flex items-center gap-3 select-none"
                    aria-label="Go to home"
                >
                    <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center rotate-3">
                        <span className="absolute inset-0 rounded-xl bg-cyan-400/40 blur animate-pulse"></span>
                        <Cpu className="relative w-5 h-5 text-white" />
                    </div>

                    <span className="text-xl md:text-2xl font-bold tracking-tight text-white">
                        okan<span className="text-cyan-400">core</span>
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinksData.map((link) => {
                        const id = link.href.replace("#", "");
                        const isActive = activeId === id;

                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={handleNavClick(link.href)}
                                className={[
                                    "text-sm font-medium transition-colors relative cursor-pointer",
                                    isActive ? "text-cyan-300" : "text-slate-300 hover:text-cyan-300",
                                ].join(" ")}
                            >
                                {link.name}
                                <span
                                    className={[
                                        "absolute -bottom-2 left-0 h-[2px] rounded-full transition-all",
                                        isActive ? "w-full bg-cyan-400" : "w-0 bg-transparent",
                                    ].join(" ")}
                                />
                            </a>
                        );
                    })}

                    {/* CTA */}
                    <a
                        href="#contact"
                        onClick={handleNavClick("#contact")}
                        className="px-5 py-2 rounded-full border border-cyan-500/30 text-cyan-300 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all text-sm font-semibold cursor-pointer"
                    >
                        Get in Touch
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2 rounded-lg hover:bg-slate-900/60 transition-colors"
                    onClick={() => setIsMenuOpen((v) => !v)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay + Panel */}
            <div
                className={[
                    "md:hidden fixed inset-0 transition-opacity duration-200",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
                ].join(" ")}
            >
                <div className="absolute inset-0 bg-black/50" onClick={closeMenu} />
                <div className="absolute top-0 right-0 h-full w-[82%] max-w-sm bg-slate-950 border-l border-slate-800 p-6 shadow-2xl">
                    <div className="flex items-center justify-between mb-8">
                        <span className="text-white font-semibold">Menu</span>
                        <button
                            className="text-white p-2 rounded-lg hover:bg-slate-900/60 transition-colors"
                            onClick={closeMenu}
                        >
                            <X />
                        </button>
                    </div>

                    <div className="flex flex-col gap-2">
                        {navLinksData.map((link) => {
                            const id = link.href.replace("#", "");
                            const isActive = activeId === id;

                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={handleNavClick(link.href)}
                                    className={[
                                        "py-3 px-3 rounded-xl border border-slate-800/60 transition-colors cursor-pointer",
                                        isActive
                                            ? "text-cyan-300 bg-slate-900/60"
                                            : "text-slate-200 hover:bg-slate-900/60 hover:text-cyan-300",
                                    ].join(" ")}
                                >
                                    {link.name}
                                </a>
                            );
                        })}

                        <a
                            href="#contact"
                            onClick={handleNavClick("#contact")}
                            className="mt-4 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold text-center hover:shadow-[0_0_20px_rgba(8,145,178,0.35)] transition-all cursor-pointer"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}