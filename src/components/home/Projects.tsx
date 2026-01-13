import React from "react";
import { ArrowUpRight, Github } from "lucide-react";
import SectionTitle from "../SectionTitle.tsx";

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    tech: string[];
    liveUrl?: string;
    caseUrl?: string;
    repoUrl?: string;
}

const projectsData: Project[] = [
    {
        id: 1,
        title: "Bilkosözlük",
        category: "Full Stack",
        description:
            "Bilkosozluk is a community-driven content platform where users create, share, and discuss entries on various topics in a structured, topic-based format.",
        image: "/assets/bilkosozluk.png",
        tech: ["PHP", "MySQL", "Codeigniter"],
        liveUrl: "https://www.bilkosozluk.com",
    },
    {
        id: 2,
        title: "Tentunit",
        category: "Data & Backend",
        description:
            "Tentunit is a platform that simplifies student housing by turning a complex process into a clear, simple, and safe experience.",
        image: "/assets/tentunit.png",
        tech: ["React", "Next.js", "TypeORM", "MySQL", "Stripe", "MapBox"],
        liveUrl: "https://www.tentunit.com",
    },
    {
        id: 3,
        title: "Okancore Marketim",
        category: "Full Stack",
        description:
            "Okancore Marketim is a barcode-based inventory management system designed for small businesses, offering fully automated stock tracking and high revenue potential.",
        image: "https://placehold.co/1200x800/0f172a/34d399?text=Marketim",
        tech: ["Node.js", "MySQL", "Express.js", "EJS", "cron"],
        repoUrl: "https://github.com/CanOkan917/okancore_marketim",
    },
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/30 to-slate-950 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <SectionTitle
                    title="Selected Projects"
                    subtitle="A few recent builds focused on performance, clarity, and production-ready engineering."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project) => (
                        <article
                            key={project.id}
                            className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-slate-700/60 via-slate-800/30 to-slate-900/60 hover:from-cyan-500/40 hover:via-slate-800/30 hover:to-purple-500/30 transition-colors"
                        >
                            {/* Card */}
                            <div className="relative rounded-2xl bg-slate-900/50 border border-slate-800/80 overflow-hidden backdrop-blur-xl">
                                {/* Shine */}
                                <div className="pointer-events-none absolute -inset-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                                </div>

                                {/* Image */}
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover scale-[1.02] group-hover:scale-[1.08] transition-transform duration-700"
                                        loading="lazy"
                                    />

                                    {/* Category chip */}
                                    <div className="absolute left-4 top-4 z-20">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-slate-950/60 border border-slate-700 text-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {project.category}
                    </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                                        {project.title}
                                    </h3>

                                    {/* Desc */}
                                    <p className="mt-2 text-slate-400 text-sm leading-relaxed line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Tech */}
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.tech.map((t, i) => (
                                            <span
                                                key={i}
                                                className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-800/70 text-slate-200 border border-slate-700/80"
                                            >
                        {t}
                      </span>
                                        ))}
                                    </div>

                                    {/* Actions */}
                                    <div className="mt-6 flex items-center justify-between gap-3">
                                        <div className="flex gap-3">
                                            {project.caseUrl && (
                                                <a
                                                    href={project.caseUrl}
                                                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                                                >
                                                    Case Study <ArrowUpRight className="w-4 h-4" />
                                                </a>
                                            )}
                                            {project.repoUrl && (
                                                <a
                                                    href={project.repoUrl}
                                                    target={`_blank`}
                                                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
                                                >
                                                    <Github className="w-4 h-4" /> Code
                                                </a>
                                            )}
                                        </div>

                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target={`_blank`}
                                                className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-2 rounded-full bg-slate-800/60 border border-slate-700 text-white hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
                                            >
                                                Live <ArrowUpRight className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;