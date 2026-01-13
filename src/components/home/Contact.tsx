import React from 'react';
import {Mail} from "lucide-react";

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-24 relative">
            <div
                className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 to-transparent pointer-events-none"></div>
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div
                    className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 border border-slate-700 text-center shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Let's build your next big project <br/>
                        together.
                    </h2>
                    <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                        Your ideas are valuable to us. Leave the technical details to us, you focus on your dream
                        product.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="mailto:destek@okancore.com"
                           className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-cyan-50 transition-colors flex items-center justify-center gap-2">
                            <Mail className="w-5 h-5"/>
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
