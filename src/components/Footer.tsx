import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="relative bg-slate-950 border-t border-slate-900 py-14 text-sm overflow-hidden">
            {/* Soft background accent */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 blur-[120px] pointer-events-none"/>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <span className="text-lg font-bold tracking-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                                okan
                            </span>
                            <span className="text-slate-200">core</span>
                        </span>
                        <span className="text-xs text-slate-500">
                            Production-ready software.
                        </span>
                    </div>

                    {/* Links */}
                    <nav className="flex gap-8">
                        <a
                            href="#projects"
                            className="text-slate-400 hover:text-cyan-400 transition-colors"
                        >
                            Projects
                        </a>
                        <a
                            href="#services"
                            className="text-slate-400 hover:text-cyan-400 transition-colors"
                        >
                            Services
                        </a>
                        <a
                            href="#contact"
                            className="text-slate-400 hover:text-cyan-400 transition-colors"
                        >
                            Contact
                        </a>
                    </nav>

                    {/* Meta */}
                    <div className="flex flex-col items-center md:items-end gap-2 text-slate-500">
                        <span>
                            © {new Date().getFullYear()} Okancore
                        </span>
                        <div className="flex gap-6 text-xs">
                            <a
                                href="/privacy"
                                className="hover:text-cyan-400 transition-colors"
                            >
                                Privacy
                            </a>
                            <a
                                href="/terms"
                                className="hover:text-cyan-400 transition-colors"
                            >
                                Terms
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom divider */}
                <div className="mt-10 pt-6 border-t border-slate-900/60 text-center text-xs text-slate-600">
                    Built with care and attention to detail.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
