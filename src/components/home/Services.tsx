import React from 'react';
import { Code2, Layers3, MessageSquare } from "lucide-react";

interface Service {
    icon: React.ReactNode;
    title: string;
    desc: string;
}

const servicesData: Service[] = [
    {
        icon: <Code2 className="w-8 h-8 text-cyan-400" />,
        title: "Product Engineering",
        desc: "I build real-world web apps and features—fast UI, clean APIs, and production-ready delivery."
    },
    {
        icon: <Layers3 className="w-8 h-8 text-purple-400" />,
        title: "System Design",
        desc: "Architecture decisions that scale: modular codebases, reliable integrations, and performance-first foundations."
    },
    {
        icon: <MessageSquare className="w-8 h-8 text-pink-400" />,
        title: "Technical Consulting",
        desc: "Code reviews, architecture guidance, and practical improvements to help teams ship with confidence."
    }
];

const Services: React.FC = () => {
    return (
        <section id="services" className="py-20 relative bg-slate-900/50">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    {servicesData.map((service, idx) => (
                        <div
                            key={idx}
                            className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-300"
                        >
                            <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-slate-400">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;