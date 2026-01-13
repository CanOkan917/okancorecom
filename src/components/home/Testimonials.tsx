import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Star } from "lucide-react";
import SectionTitle from "../SectionTitle";

import "swiper/css";

interface Company {
    name: string;
    url: string;
}

interface Testimonial {
    id: number;
    name: string;
    position: string;
    company?: Company;
    quote: string;
    image: string;
}

const testimonialsData: Testimonial[] = [
    {
        id: 1,
        name: "Deniz Barış EJDEROĞLU",
        position: "Founder",
        company: {
            name: "Ejderoglu",
            url: "https://www.ejderoglu.com"
        },
        quote: "Working with Okancore meant clean code, clear communication, and a system that was ready for production from day one.",
        image: "/assets/testimonials/dbarisejderoglu.jpeg",
    },
    {
        id: 2,
        name: "Kayra KANPOLAT",
        position: "CEO",
        company: {
            name: "Tentunit",
            url: "https://www.tentunit.com"
        },
        quote:
            "Can is incredibly great to work with. Clear, reliable, and detail-oriented. His technical expertise consistently turns complex requirements into clean, scalable solutions, and he genuinely thinks about the product beyond just execution.",
        image: "/assets/testimonials/kayrakanpolat.jpg",
    },
    // {
    //     id: 3,
    //     name: "Deniz ÖNER",
    //     position: "Frontend Designer",
    //     quote:
    //         "The collaboration was smooth and highly technical. Decisions were always backed by solid engineering reasoning.",
    //     image: "/assets/testimonials/denizoner.jpg",
    // },
    {
        id: 4,
        name: "Artun HAZER",
        position: "Frontend Developer",
        company: {
            name: "Tentunit",
            url: "https://www.tentunit.com"
        },
        quote:
            "I have known Can for a long time. He is a highly disciplined professional who takes his work very seriously. He is responsible, reliable, and a trusted individual who fulfills his duties with great care and attention to detail.",
        image: "/assets/testimonials/artunhazer.jpeg",
    },

];

const Testimonials: React.FC = () => {
    return (
        <section
            id="testimonials"
            className="py-24 relative bg-slate-900/30 overflow-hidden"
        >
            {/* Arka plan efektleri */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <SectionTitle
                    title="Testimonials"
                    subtitle="Feedback from people I’ve worked with on real-world projects."
                />

                <div className="mt-12 max-w-7xl mx-auto [&_.swiper-pagination-bullet]:bg-slate-600 [&_.swiper-pagination-bullet-active]:bg-cyan-500">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        loop
                        speed={650}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        breakpoints={{
                            768: { slidesPerView: 2, spaceBetween: 24 },
                            1024: { slidesPerView: 3, spaceBetween: 24 },
                        }}
                        className="pb-12"
                    >
                        {testimonialsData.map((item) => (
                            <SwiperSlide key={item.id} className="!h-auto pt-2 pl-2 pr-2 pb-2">
                                <div className="group h-full rounded-2xl p-[1px] bg-gradient-to-b from-slate-700/60 via-slate-800/30 to-slate-900/60 hover:from-cyan-500/40 hover:to-purple-500/30 transition-colors">
                                    <div className="relative h-full rounded-2xl bg-slate-950/40 border border-slate-800/70 backdrop-blur-xl p-8 flex flex-col">

                                        {/* Tırnak işareti */}
                                        <div className="absolute top-5 right-6 text-slate-700/40 text-6xl font-serif leading-none select-none group-hover:text-cyan-500/10 transition-colors">
                                            “
                                        </div>

                                        {/* Yıldızlar */}
                                        <div className="flex items-center gap-1 text-cyan-400 mb-5">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-current" />
                                            ))}
                                        </div>

                                        {/* Yorum  */}
                                        <p className="text-slate-200/90 text-sm md:text-base leading-relaxed flex-1">
                                            {item.quote}
                                        </p>

                                        {/* Alt Kısım (Kişi Bilgisi) */}
                                        <div className="mt-6 pt-6 border-t border-slate-800/70 flex items-center gap-4">
                                            <div className="relative shrink-0">
                                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-500 blur opacity-0 group-hover:opacity-50 transition-opacity" />
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    loading="lazy"
                                                    className="relative w-12 h-12 rounded-full object-cover border border-slate-700 group-hover:border-cyan-500/40 transition-colors"
                                                />
                                            </div>

                                            <div className="min-w-0">
                                                <div className="text-white font-semibold leading-tight group-hover:text-cyan-300 transition-colors">
                                                    {item.name}
                                                </div>
                                                <div className="text-xs text-slate-400 mt-1 truncate">
                                                    {item.position}
                                                    {item.company && (
                                                        <> · <a href={item.company.url} target={"_blank"} rel="noreferrer" className="text-slate-500 hover:text-cyan-400 hover:underline transition-colors">{item.company.name}</a></>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;