import React from "react";
import Navbar from "../components/Navbar";
import {
    Calendar,
    Eye,
    Cpu,
    Cookie,
    Scale,
    ShieldCheck,
    Mail,
    CheckCircle2,
    Lock,
    Server,
    MessageSquare
} from "lucide-react";
import Footer from "../components/Footer.tsx";

const Privacy: React.FC = () => {
    const lastUpdated = "January 13, 2026";

    return (
        <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden">
            <Navbar />

            <div className="container mx-auto px-6 max-w-4xl py-24">
                {/* Header Section */}
                <header className="mb-12 border-b border-slate-800 pb-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                        Privacy Policy
                    </h1>
                    <div className="flex items-center gap-2 text-slate-400 bg-slate-900/50 w-fit px-4 py-2 rounded-full border border-slate-800">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        <p className="text-sm font-medium">
                            Last updated: <span className="text-slate-200">{lastUpdated}</span>
                        </p>
                    </div>
                </header>

                {/* Content Article */}
                <article className="space-y-10 text-slate-300 leading-relaxed">
                    {/* Intro */}
                    <section>
                        <p className="mb-4 text-lg">
                            At <strong className="text-white">Okancore</strong>, accessible from okancore.com, one of
                            our main priorities is the privacy of our visitors. This Privacy
                            Policy document contains types of information that is collected
                            and recorded by Okancore and how we use it.
                        </p>
                    </section>

                    {/* 1. Information We Collect */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                                <Eye className="w-6 h-6 text-cyan-400" />
                            </div>
                            1. Information We Collect
                        </h2>
                        <p className="mb-6 text-slate-400">
                            The personal information that you are asked to provide, and the
                            reasons why you are asked to provide it, will be made clear to you
                            at the point we ask you to provide your personal information.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-slate-900/30 p-5 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                                <div className="flex items-center gap-2 mb-2 text-white font-medium">
                                    <MessageSquare className="w-5 h-5 text-purple-400" />
                                    Direct Interactions
                                </div>
                                <p className="text-sm text-slate-400">
                                    When you contact us directly, we may receive info like name, email, phone number, and message contents.
                                </p>
                            </div>
                            <div className="bg-slate-900/30 p-5 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                                <div className="flex items-center gap-2 mb-2 text-white font-medium">
                                    <Server className="w-5 h-5 text-purple-400" />
                                    Log Files
                                </div>
                                <p className="text-sm text-slate-400">
                                    Standard usage of log files including IP addresses, browser type, ISP, date/time stamp, and referring pages.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 2. How We Use Information */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                                <Cpu className="w-6 h-6 text-cyan-400" />
                            </div>
                            2. How We Use Your Information
                        </h2>
                        <ul className="grid md:grid-cols-2 gap-3">
                            {[
                                "Provide, operate, and maintain our website",
                                "Improve, personalize, and expand our website",
                                "Understand and analyze how you use our website",
                                "Develop new products, services, features",
                                "Communicate with you regarding inquiries",
                                "Find and prevent fraud",
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-slate-400 bg-slate-900/20 p-3 rounded-lg">
                                    <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-0.5 shrink-0" />
                                    <span className="text-sm md:text-base">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* 3. Cookies */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                                <Cookie className="w-6 h-6 text-cyan-400" />
                            </div>
                            3. Cookies and Web Beacons
                        </h2>
                        <p className="text-slate-400">
                            Like any other website, Okancore uses "cookies". These cookies are
                            used to store information including visitors' preferences, and the
                            pages on the website that the visitor accessed or visited. The
                            information is used to optimize the users' experience by
                            customizing our web page content.
                        </p>
                    </section>

                    {/* 4. Third Party */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                                <Scale className="w-6 h-6 text-cyan-400" />
                            </div>
                            4. Third Party Privacy Policies
                        </h2>
                        <p className="text-slate-400">
                            Okancore's Privacy Policy does not apply to other advertisers or
                            websites. Thus, we are advising you to consult the respective
                            Privacy Policies of these third-party ad servers for more detailed
                            information.
                        </p>
                    </section>

                    {/* 5. GDPR */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                                <ShieldCheck className="w-6 h-6 text-cyan-400" />
                            </div>
                            5. GDPR Data Protection Rights
                        </h2>
                        <p className="mb-4 text-slate-400">
                            We would like to make sure you are fully aware of all of your data
                            protection rights. Every user is entitled to the following:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                "The right to access",
                                "The right to rectification",
                                "The right to erasure",
                                "The right to restrict processing",
                                "The right to object to processing",
                                "The right to data portability"
                            ].map((right, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-slate-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                                    {right}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section className="bg-gradient-to-br from-slate-900 to-slate-900/50 p-8 rounded-2xl border border-slate-800 mt-12 relative overflow-hidden group">
                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-cyan-500/20 transition-colors" />

                        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                            <Lock className="w-5 h-5 text-cyan-400" />
                            Privacy Contact
                        </h2>
                        <p className="text-slate-400 mb-6 max-w-2xl">
                            If you have any questions about our Privacy Policy or wish to exercise your rights, please do not hesitate to contact us.
                        </p>
                        <a
                            href="mailto:privacy@okancore.com"
                            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-3 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all group-hover:translate-x-1"
                        >
                            <Mail className="w-5 h-5 text-cyan-400" />
                            <span>privacy@okancore.com</span>
                        </a>
                    </section>
                </article>
            </div>

            <Footer/>
        </main>
    );
};

export default Privacy;