import Navbar from "../components/Navbar.tsx";
import Hero from "../components/home/Hero.tsx";
import Services from "../components/home/Services.tsx";
import Projects from "../components/home/Projects.tsx";
import Testimonials from "../components/home/Testimonials.tsx";
import Footer from "../components/Footer.tsx";
import Contact from "../components/home/Contact.tsx";

export default function Home() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden">

            <Navbar />

            <main>
                <Hero/>
                <Services/>
                <Projects/>
                <Testimonials/>
                <Contact/>
            </main>

            <Footer/>
        </div>
    );
}