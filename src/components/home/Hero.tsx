import React, {useEffect, useState} from 'react';
import {ChevronRight, Code, Cpu, Rocket} from "lucide-react";
import { Link } from "react-router-dom";

interface Star {
    id: number;
    top: string;
    left: string;
    size: number;
    delay: number;
}

const StarField: React.FC = () => {
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        const generateStars = () => {
            const newStars: Star[] = [];
            for (let i = 0; i < 50; i++) {
                newStars.push({
                    id: i,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    size: Math.random() * 2 + 1,
                    delay: Math.random() * 5
                });
            }
            setStars(newStars);
        };
        generateStars();
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute bg-white rounded-full opacity-70 animate-pulse"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        animationDelay: `${star.delay}s`,
                        animationDuration: '3s'
                    }}
                />
            ))}
        </div>
    );
};

const Hero: React.FC = () => {
    return (
        <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.15]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950"></div>
            <StarField/>

            {/* Glow Effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 text-center md:text-left">
                    <div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-400 text-xs font-semibold tracking-wide uppercase backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                        Clean · Scalable · Reliable
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                        I design and build
                        <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                            digital experiences.
                        </span>
                    </h1>

                    <p className="text-lg text-slate-400 leading-relaxed max-w-lg mx-auto md:mx-0">
                        I am a software developer focused on building real-world applications, writing clean, maintainable code, and delivering production-ready systems.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                        <a
                            href="#projects"
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold hover:shadow-[0_0_20px_rgba(8,145,178,0.5)] transition-all flex items-center gap-2 group">
                            View Projects
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                        </a>
                        <Link
                            to="/about"
                            onClick={() => window.scrollTo(0, 0)}
                            className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white transition-all bg-slate-900/50 backdrop-blur-sm">
                            About Me
                        </Link>
                    </div>
                </div>

                <div className="relative hidden md:block">
                    {/* Abstract Tech Visual */}
                    <div className="relative w-full aspect-square max-w-md mx-auto animate-float">
                        <div
                            className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-full border border-slate-700/50 backdrop-blur-sm flex items-center justify-center">
                            <div
                                className="absolute w-[80%] h-[80%] border border-slate-600/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                            <div
                                className="absolute w-[60%] h-[60%] border border-dashed border-cyan-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                            <Rocket className="w-24 h-24 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]"/>
                        </div>

                        {/* Floating Cards */}
                        <div
                            className="absolute -right-4 top-10 bg-slate-800/90 p-4 rounded-xl border border-slate-700 shadow-xl backdrop-blur-md animate-bounce"
                            style={{animationDuration: '4s'}}>
                            <Code className="w-6 h-6 text-purple-400 mb-2"/>
                            <div className="h-2 w-16 bg-slate-700 rounded mb-1"></div>
                            <div className="h-2 w-10 bg-slate-700 rounded"></div>
                        </div>

                        <div
                            className="absolute -left-4 bottom-20 bg-slate-800/90 p-4 rounded-xl border border-slate-700 shadow-xl backdrop-blur-md animate-bounce"
                            style={{animationDuration: '5s'}}>
                            <Cpu className="w-6 h-6 text-green-400 mb-2"/>
                            <div className="h-2 w-20 bg-slate-700 rounded mb-1"></div>
                            <div className="h-2 w-12 bg-slate-700 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
