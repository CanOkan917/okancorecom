import React from 'react';

interface SectionTitleProps {
    title: string;
    subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({title, subtitle}) => (
    <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {title}
            <span className="text-cyan-400">.</span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-4"></div>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">{subtitle}</p>
    </div>
);

export default SectionTitle;
