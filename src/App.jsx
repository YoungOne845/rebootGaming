import React from 'react';
import { FaWhatsapp, FaGamepad, FaTools, FaMicrochip, FaDesktop, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa';

const App = () => {
  const waLink = (num, text) => `https://wa.me/${num}?text=${encodeURIComponent(text)}`;

  const services = [
    { title: "Installation", price: "E50", msg: "Hi, I want the E50 Installation service.", icon: <FaDesktop />, features: ["Clean Setup", "Game Files Verification"] },
    { title: "Crash & Error Resolution", price: "E50", msg: "Hi, I want the E50 Crash and Error Resolution service.", icon: <FaTools />, features: ["DLL Error Fixes", "Black Screen Repair"] },
    { title: "Driver & System Config", price: "E100", msg: "Hi, I want the E100 Driver and System Configuration service.", icon: <FaMicrochip />, features: ["FPS Optimization", "Hardware Tuning"] },
    { title: "Full PC Game Diagnostic", price: "E150", msg: "Hi, I want the E150 Full PC Game Diagnostic service.", icon: <FaGamepad />, features: ["Deep Hardware Check", "Complete Overhaul"] },
  ];

  return (
    <div className="relative min-h-screen bg-brand-dark selection:bg-brand-purple selection:text-white flex flex-col font-sans">
      
      {/* Background Elements */}
      <div className="bg-grid"></div>
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-brand-purple rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-pulse-slow pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-brand-blue rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-pulse-slow pointer-events-none delay-1000"></div>

      <div className="relative z-10 flex flex-col flex-grow">
        
        {/* --- HERO SECTION --- */}
        <header className="flex flex-col items-center justify-center text-center py-32 px-6">
          <div className="inline-block px-4 py-1 mb-6 rounded-full border border-brand-purple/30 bg-brand-purple/10 text-brand-purple text-xs font-bold tracking-widest uppercase shadow-neon-purple">
            Reboot gaming.inc
          </div>
          <h1 className="text-5xl md:text-7xl font-black italic mb-6 tracking-tighter text-white drop-shadow-lg">
            PC GAMING <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-400 drop-shadow-[0_0_15px_rgba(30,144,255,0.5)]">SERVICES</span>
          </h1>
          <p className="max-w-2xl text-slate-300 text-lg md:text-xl mb-12 font-light leading-relaxed">
            Professional PC game installation, troubleshooting, and diagnostics. <br className="hidden md:block"/>
            <span className="font-semibold text-white">Fast. Reliable. Affordable.</span>
          </p>
          <a href={waLink("26879542590", "Hi! I'm interested in your PC gaming services.")} 
             className="group relative inline-flex items-center gap-3 bg-brand-purple text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-brand-purple hover:shadow-neon-purple-hover">
            <FaWhatsapp size={24} className="group-hover:scale-110 transition-transform" /> 
            <span>Contact Us on WhatsApp</span>
          </a>
        </header>

        {/* --- SERVICES SECTION --- */}
        <section className="w-full max-w-7xl mx-auto py-20 px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Choose Your <span className="text-brand-purple">Fix</span></h2>
            <div className="w-24 h-1 bg-brand-blue mx-auto mt-4 rounded-full shadow-neon-blue"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <div key={i} className="glass-panel rounded-2xl p-8 flex flex-col relative overflow-hidden group hover:border-brand-blue/50 hover:shadow-neon-blue transition-all duration-500 transform hover:-translate-y-2">
                {/* Glow effect inside card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full filter blur-[40px] group-hover:bg-brand-blue/20 transition-all"></div>
                
                <div className="text-brand-blue text-4xl mb-6 drop-shadow-[0_0_8px_rgba(30,144,255,0.8)]">{s.icon}</div>
                <h3 className="text-xl font-bold mb-2 uppercase tracking-tight text-white">{s.title}</h3>
                
                <div className="flex-grow mb-6">
                  <ul className="space-y-2 mt-4">
                    {s.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-400">
                        <FaCheckCircle className="text-brand-purple text-xs" /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto border-t border-white/10 pt-6">
                  <p className="text-4xl font-black mb-6 text-white">{s.price}</p>
                  <a href={waLink("26879542590", s.msg)} 
                     className="block w-full text-center py-3 rounded text-sm font-bold uppercase tracking-wider border-2 border-brand-blue/50 text-brand-blue hover:bg-brand-blue hover:text-black transition-all duration-300 shadow-[inset_0_0_10px_rgba(30,144,255,0)] hover:shadow-[inset_0_0_20px_rgba(30,144,255,0.5)]">
                    Book Service
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- GAME SALES BANNER --- */}
        <section className="w-full relative py-24 my-10 overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-brand-purple/10 border-y border-brand-purple/20 glass-panel"></div>
          <div className="absolute left-[-10%] bottom-[-50%] w-96 h-96 bg-brand-purple rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
          
          <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">We Sell a Variety of <span className="text-brand-purple drop-shadow-[0_0_10px_rgba(188,19,254,0.6)]">PC Games</span></h2>
            <p className="text-slate-300 mb-10 text-lg">
              Looking for the latest titles or classic hits? We offer a wide range of PC games at affordable prices. 
            </p>
            <a href={waLink("26879542590", "Hi, I want to inquire about available PC games.")} 
               className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-brand-purple text-brand-purple px-8 py-4 rounded-full font-bold uppercase hover:bg-brand-purple hover:text-white transition-all duration-300 hover:shadow-neon-purple-hover">
              <FaGamepad size={20} /> Inquire About Games
            </a>
          </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section className="max-w-3xl mx-auto py-16 px-6 text-center">
          <h2 className="text-2xl font-bold mb-6 text-white">Why <span className="text-brand-blue">Reboot?</span></h2>
          <div className="glass-panel p-8 rounded-2xl">
            <p className="text-slate-300 leading-relaxed text-lg">
              Based in <span className="text-white font-bold">Mbabane</span>, Reboot gaming.inc provides top-tier technical support for gamers. 
              With experienced PC troubleshooting, we ensure your rig runs smoothly so you can focus on the win. 
              Reliable service is our guarantee.
            </p>
          </div>
        </section>

      </div>

      {/* --- FOOTER --- */}
      <footer className="relative z-10 bg-black/80 backdrop-blur-md py-12 px-6 border-t border-white/10 text-slate-400 text-center mt-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-10 text-sm uppercase tracking-widest font-semibold">
            <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/5"><FaMapMarkerAlt className="text-brand-blue text-lg"/> Mbabane</div>
            <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/5"><FaClock className="text-brand-purple text-lg"/> 9AM – 4PM</div>
          </div>
          
          <div className="mb-8">
            <p className="text-xs uppercase tracking-widest mb-4 text-slate-500">Direct Support Lines</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 font-mono text-lg">
              <a href={waLink("26879542590", "Hi, I need PC game assistance.")} className="flex items-center gap-2 hover:text-brand-purple transition-colors duration-300">
                <FaWhatsapp className="text-brand-purple" /> 7954 2590
              </a>
              <a href={waLink("26879659483", "Hi, I need PC game assistance.")} className="flex items-center gap-2 hover:text-brand-blue transition-colors duration-300">
                <FaWhatsapp className="text-brand-blue" /> 7965 9483
              </a>
              <a href={waLink("26876368607", "Hi, I need PC game assistance.")} className="flex items-center gap-2 hover:text-brand-purple transition-colors duration-300">
                <FaWhatsapp className="text-brand-purple" /> 7636 8607
              </a>
            </div>
          </div>
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>
          <p className="text-xs text-slate-500">© 2026 Reboot gaming.inc. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default App;