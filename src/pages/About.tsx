import React, {useState, useEffect} from "react";
import {
    Mail,
    MapPin,
    Briefcase,
    Code2,
    GraduationCap,
    Camera,
    Coffee,
    Terminal,
    X,
    ChevronLeft,
    ChevronRight,
    Maximize2, Github, Gitlab
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Zoom } from "swiper/modules";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";

interface HobbyData {
    label: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any;
    coverImage: string;
    gallery: string[];
}

const hobbiesData: HobbyData[] = [
    {
        label: "Photography",
        icon: Camera,
        coverImage: "/assets/about/kalekoy-1.jpg",
        gallery: [
            "/assets/about/kalekoy-1.jpg",
            "/assets/about/kalekoy-2.jpg",
            "/assets/about/bahce-1.JPG",
        ]
    },
    {
        label: "Sound Engineering",
        icon: Terminal,
        coverImage: "/assets/about/sound-3.jpeg",
        gallery: [
            "/assets/about/sound-1.jpeg",
            "/assets/about/sound-2.jpeg",
            "/assets/about/sound-3.jpeg",
            "/assets/about/sound-4.png",
        ]
    },
    {
        label: "Robotics",
        icon: MapPin,
        coverImage: "/assets/about/robot-1.jpeg",
        gallery: [
            "/assets/about/robot-1.jpeg",
            "/assets/about/robot-2.jpeg",
            "/assets/about/robot-3.jpeg"
        ]
    },
];

const About: React.FC = () => {
    const [selectedHobby, setSelectedHobby] = useState<HobbyData | null>(null);

    useEffect(() => {
        if (selectedHobby) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [selectedHobby]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedHobby(null);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden flex flex-col">
            <Navbar/>

            <main className="flex-grow relative pt-32 pb-20">
                {/* Background accents */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"/>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none"/>

                <div className="container mx-auto px-6 relative z-10">

                    {/* Hero Section */}
                    <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
                        {/* Sol Kolon (Metinler) */}
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800 text-cyan-300 text-xs font-semibold tracking-wide">
                                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"/>
                                About Me
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                                Software developer building <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                                    production-ready systems.
                                </span>
                            </h1>

                            <p className="text-slate-300/90 leading-relaxed text-lg max-w-2xl">
                                I focus on real-world applications, clean architecture, and maintainable codebases. I enjoy turning ambiguous ideas into clear, working systems.
                            </p>

                            {/* Highlights Grid */}
                            <div className="grid sm:grid-cols-3 gap-4">
                                {[
                                    { icon: Code2, color: "text-cyan-400", title: "Clean Code", desc: "Readable, testable, and scalable code." },
                                    { icon: Briefcase, color: "text-purple-400", title: "Delivery", desc: "From concept to production ownership." },
                                    { icon: MapPin, color: "text-pink-400", title: "Remote-ready", desc: "Async-friendly collaboration." },
                                ].map((item, idx) => (
                                    <div key={idx} className="group rounded-2xl bg-slate-900/40 border border-slate-800 p-5 backdrop-blur hover:bg-slate-900/60 hover:border-slate-700 transition-all">
                                        <div className={`flex items-center gap-2 text-slate-200 font-semibold mb-2`}>
                                            <item.icon className={`w-4 h-4 ${item.color}`}/>
                                            {item.title}
                                        </div>
                                        <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href="https://github.com/canokan917"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-slate-700 to-slate-900 border border-slate-600 text-white font-semibold hover:border-slate-400 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all"
                                >
                                    <Github className="w-5 h-5" />
                                    <span>GitHub</span>
                                </a>

                                {/* GitLab Button: Turuncu/Kırmızı gradient, turuncu glow efekti */}
                                <a
                                    href="https://gitlab.okancore.com/canokan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold border border-transparent hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] transition-all"
                                >
                                    <Gitlab className="w-5 h-5" />
                                    <span>GitLab</span>
                                </a>
                                <a href="mailto:canokan@okancore.com" className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-slate-700 text-slate-200 hover:border-cyan-500/40 hover:text-white transition-all bg-slate-900/40 backdrop-blur">
                                    Contact <Mail className="w-4 h-4"/>
                                </a>
                            </div>
                        </div>

                        {/* Sağ Kolon: Profil Kartı */}
                        <aside className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-3xl opacity-30 blur group-hover:opacity-60 transition duration-500"/>
                            <div className="relative rounded-3xl bg-slate-950 border border-slate-800 p-6 backdrop-blur-xl">
                                <div className="relative rounded-2xl overflow-hidden border border-slate-800 aspect-[4/3] group-hover:scale-[1.02] transition-transform duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10"/>
                                    <img src="/assets/canokan.jpg" alt="Can Okan Profile" className="w-full h-full object-cover" loading="lazy"/>
                                    <div className="absolute bottom-4 left-4 z-20">
                                        <div className="text-white font-bold text-xl">Can Okan</div>
                                        <div className="text-cyan-400 text-sm font-medium">Full Stack Engineer</div>
                                    </div>
                                </div>
                                <div className="mt-6 space-y-4">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-slate-400">Status</span>
                                        <span className="flex items-center gap-2 text-amber-400 bg-amber-400/10 px-2 py-1 rounded-full text-xs font-medium border border-amber-400/20">
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                                            Studying & Working
                                      </span>
                                    </div>
                                    <div className="h-px bg-slate-800"/>
                                    <div>
                                        <div className="text-xs text-slate-500 mb-3 uppercase tracking-wider font-semibold">Core Stack</div>
                                        <div className="flex flex-wrap gap-2">
                                            {["React", "TypeScript", "Node.js", "Next.js", "MySQL", "Docker", "AWS"].map((t) => (
                                                <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500/30 hover:text-cyan-400 transition-colors cursor-default">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>

                    {/* Experience Section */}
                    <div className="mt-32">
                        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                            <Terminal className="w-8 h-8 text-cyan-400"/>
                            Professional Experience
                        </h2>
                        <div className="grid lg:grid-cols-3 gap-6">
                            {[
                                {
                                    year: "2025 — Now",
                                    role: "CTO",
                                    company: "Tentunit Inc.",
                                    desc: "Building and shipping production-ready applications with a focus on performance and maintainability.",
                                },
                                {
                                    year: "2022 — 2024",
                                    role: "Full-Stack Developer",
                                    company: "Webdekimenum",
                                    desc: "End-to-end ownership across frontend, backend, and deployments. Led the migration of legacy monoliths to microservices.",
                                },
                                {
                                    year: "2020 — Now",
                                    role: "Frontend Developer",
                                    company: "Ejderoglu",
                                    desc: "Developed high-performance dashboards and internal tools using React and TypeScript.",
                                },
                            ].map((item, idx) => (
                                <div key={idx} className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-slate-700/50 to-slate-900/50 hover:from-cyan-500/40 hover:to-purple-500/40 transition-all duration-300">
                                    <div className="h-full rounded-2xl bg-slate-950/80 p-6 backdrop-blur flex flex-col">
                                        <div className="text-xs text-cyan-400 font-mono mb-2">{item.year}</div>
                                        <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">{item.role}</h3>
                                        <div className="text-sm text-slate-500 font-medium mb-4">{item.company}</div>
                                        <p className="text-slate-400 text-sm leading-relaxed flex-grow">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education & Interests Grid */}
                    <div className="mt-24 grid lg:grid-cols-2 gap-8">
                        {/* Education Box */}
                        <div className="rounded-3xl bg-slate-900/20 border border-slate-800 p-8 backdrop-blur hover:bg-slate-900/30 transition-colors">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                                    <GraduationCap className="w-6 h-6 text-purple-400"/>
                                </div>
                                <h3 className="text-xl font-bold text-white">Education</h3>
                            </div>

                            {/* Container'dan space-y-6'yı kaldırdık */}
                            <div className="ml-2">

                                {/* University */}
                                <div className="relative pl-8 border-l border-slate-800 pb-2">
                                    <div className="absolute -left-[6.5px] top-1.5 w-3 h-3 rounded-full bg-slate-700 border-2 border-slate-900 ring-4 ring-slate-900/30"/>

                                    <div className="text-white font-semibold text-lg">BSc in Computer Science</div>
                                    <div className="text-sm text-slate-400 mb-2">Technical University of Eindhoven · 2025 - 2028</div>
                                </div>

                                {/* Udemy */}
                                <div className="relative pl-8 border-l border-slate-800 pb-2">
                                    <div className="absolute -left-[6.5px] top-1.5 w-3 h-3 rounded-full bg-slate-700 border-2 border-slate-900 ring-4 ring-slate-900/30"/>

                                    <div className="text-white font-semibold text-lg">Build Responsive Real-World Websites</div>
                                    <div className="text-sm text-slate-400 mb-2">Udemy (Jonas Schmedtmann) · 2024</div>
                                </div>

                                <div className="relative pl-8 border-l border-transparent pb-0">
                                    <div className="absolute -left-[6.5px] top-1.5 w-3 h-3 rounded-full bg-slate-700 border-2 border-slate-900 ring-4 ring-slate-900/30"/>

                                    <div className="text-white font-semibold text-lg">High School Diploma</div>
                                    <div className="text-sm text-slate-400 mb-2">Ankara Private Tevfik Fikret Schools · 2021 - 2025</div>

                                    <div className="space-y-1 mt-3">
                                        <div className="flex items-center gap-2 text-xs text-slate-500">
                                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50"></span>
                                            French Curriculum (LabelFrancÉducation)
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-slate-500">
                                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50"></span>
                                            Graduated with High Honors
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Interests / Photos Box */}
                        <div className="rounded-3xl bg-slate-900/20 border border-slate-800 p-8 backdrop-blur hover:bg-slate-900/30 transition-colors">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/20">
                                    <Coffee className="w-6 h-6 text-pink-400"/>
                                </div>
                                <h3 className="text-xl font-bold text-white">Interests & Hobbies</h3>
                            </div>

                            <p className="text-slate-400 text-sm mb-6">
                                Click on the photos to view gallery.
                            </p>

                            <div className="grid grid-cols-3 gap-3">
                                {hobbiesData.map((hobby, i) => (
                                    <div
                                        key={i}
                                        onClick={() => setSelectedHobby(hobby)}
                                        className="group relative aspect-square rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 cursor-pointer"
                                    >
                                        <img
                                            src={hobby.coverImage}
                                            alt={hobby.label}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"/>

                                        {/* Büyüteç ikonu (Hover'da görünür) */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                                                <Maximize2 className="w-5 h-5 text-white" />
                                            </div>
                                        </div>

                                        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                                            <hobby.icon className="w-3.5 h-3.5 text-cyan-400"/>
                                            <span className="text-[11px] font-semibold text-white tracking-wide">
                                                {hobby.label}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer/>

            {/* FULLSCREEN GALLERY MODAL */}
            {selectedHobby && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center"
                    onClick={(e) => {
                        if(e.target === e.currentTarget) setSelectedHobby(null)
                    }}
                >
                    {/* Kapat Butonu */}
                    <button
                        onClick={() => setSelectedHobby(null)}
                        className="absolute top-6 right-6 z-[102] p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    {/* Modal İçeriği */}
                    <div className="w-full h-full max-w-7xl max-h-[90vh] mx-auto px-4 relative flex flex-col justify-center">

                        {/* Başlık */}
                        <div className="absolute top-0 left-6 md:left-10 z-[102] pointer-events-none">
                            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                <selectedHobby.icon className="w-6 h-6 text-cyan-400" />
                                {selectedHobby.label}
                            </h3>
                            <p className="text-slate-400 text-sm mt-1">
                                {selectedHobby.gallery.length} photos
                            </p>
                        </div>

                        {/* Slider */}
                        <Swiper
                            modules={[Navigation, Pagination, Keyboard, Zoom]}
                            navigation={{
                                nextEl: ".swiper-button-next-custom",
                                prevEl: ".swiper-button-prev-custom",
                            }}
                            pagination={{ clickable: true }}
                            keyboard={{ enabled: true }}
                            zoom={true}
                            loop={true}
                            spaceBetween={30}
                            className="w-full h-[70vh] md:h-[80vh] rounded-xl"
                        >
                            {selectedHobby.gallery.map((img, idx) => (
                                <SwiperSlide key={idx} className="flex items-center justify-center">
                                    <div className="swiper-zoom-container">
                                        <img
                                            src={img}
                                            alt={`${selectedHobby.label} ${idx + 1}`}
                                            className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom Navigation Buttons (Daha şık görünüm için) */}
                        <button className="swiper-button-prev-custom absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-[101] p-3 rounded-full bg-white/10 hover:bg-cyan-500 text-white transition-all backdrop-blur-md group disabled:opacity-50">
                            <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button className="swiper-button-next-custom absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-[101] p-3 rounded-full bg-white/10 hover:bg-cyan-500 text-white transition-all backdrop-blur-md group disabled:opacity-50">
                            <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default About;