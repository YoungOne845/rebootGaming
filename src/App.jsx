import React from 'react';
import { FaWhatsapp, FaGamepad, FaTools, FaMicrochip, FaDesktop, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa';

const App = () => {
  const waLink = (num, text) => `https://wa.me/${num}?text=${encodeURIComponent(text)}`;

  const services = [
    { title:<center>    Installation</center> , price: <center><h2>E30</h2></center>, msg: "Hi, I want the E50 Installation service.", features: [<center><h4>Clean Setup</h4><br /><h4>Game Files Verification</h4></center>] },
    { title: <center>   Crash & Error Resolution</center>, price: <center><h2>E30</h2></center>, msg: "Hi, I want the E50 Crash and Error Resolution service.", features: [<center><h4>DLL Error Fixes</h4><br /><h4>Black / white Screen Repair</h4> </center>] },
    { title: <center>   Driver & System Config</center>, price: <center><h2>E90</h2></center>, msg: "Hi, I want the E100 Driver and System Configuration service.", features: [<center><h4>FPS Optimization</h4><br /> <h4>Hardware Tuning</h4></center>] },
    { title: <center>   Full PC Game Diagnostic</center>, price: <center><h2>E120</h2></center>, msg: "Hi, I want the E150 Full PC Game Diagnostic service.", features: [<center><h4>Deep Hardware Check</h4><br /> <h4>Complete System Diagnostics</h4></center>] },
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
          <center><h1 className="inline-block px-4 py-1 mb-6 rounded-full border border-brand-purple/30 bg-black/70 text-brand-purple text-3xl md:text-5xl font-black tracking-widest uppercase shadow-neon-purple">
            Reboot Gaming Inc
          </h1></center>
          <h2 className="text-5xl md:text-7xl font-black italic mb-6 tracking-tighter text-white drop-shadow-lg">
            PC GAMING <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-400 drop-shadow-[0_0_15px_rgba(30,144,255,0.5)]">SERVICES</span>
          </h2>
          <p className="max-w-2xl text-slate-300 text-lg md:text-xl mb-12 font-light leading-relaxed">
            Professional PC game installation, troubleshooting, and diagnostics. <br className="hidden md:block"/>
            <span className="font-semibold text-white">Fast. Reliable. Affordable.</span>
          </p>
          <a href={waLink("26879542590", "Hi! I'm interested in your PC gaming services.")}
             style={{
               background: 'linear-gradient(90deg, #bc13fe 0%, #1e90ff 100%)',
               color: '#fff',
               fontWeight: 'bold',
               fontSize: '1.5rem',
               padding: '0.75rem 2rem',
               borderRadius: '0.75rem',
               boxShadow: '0 2px 16px 0 rgba(188,19,254,0.25)',
               border: '2px solid #fff',
               textTransform: 'uppercase',
               letterSpacing: '0.08em',
               transition: 'all 0.3s',
               display: 'inline-block',
               textAlign: 'center',
               margin: '0 auto',
               cursor: 'pointer',
             }}
             onMouseOver={e => {
               e.currentTarget.style.background = 'linear-gradient(90deg, #1e90ff 0%, #bc13fe 100%)';
               e.currentTarget.style.color = '#000';
               e.currentTarget.style.boxShadow = '0 4px 24px 0 rgba(30,144,255,0.25)';
             }}
             onMouseOut={e => {
               e.currentTarget.style.background = 'linear-gradient(90deg, #bc13fe 0%, #1e90ff 100%)';
               e.currentTarget.style.color = '#fff';
               e.currentTarget.style.boxShadow = '0 2px 16px 0 rgba(188,19,254,0.25)';
             }}
          >
            <h2 style={{display: 'inline', fontWeight: 'bold', fontSize: '1.5rem', verticalAlign: 'middle', marginLeft: '0.5rem'}}>Contact Us on WhatsApp</h2>
          </a>
        </header>

        {/* --- SERVICES SECTION --- */}
        <section className="w-full max-w-7xl mx-auto py-20 px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Choose Your <span className="text-brand-purple">Fix</span></h2>
            <div className="w-24 h-1 bg-brand-blue mx-auto mt-4 rounded-full shadow-neon-blue"></div>
          </div>

          <div className="flex flex-wrap justify-center items-stretch gap-8">
            {services.map((s, i) => (
              <div key={i} className="glass-panel rounded-2xl p-8 flex flex-col relative overflow-hidden group hover:border-brand-blue/50 hover:shadow-neon-blue transition-all duration-500 transform hover:-translate-y-2 w-full sm:w-96 max-w-full">
                {/* Glow effect inside card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full filter blur-[40px] group-hover:bg-brand-blue/20 transition-all"></div>
                <h2 className="text-xl md:text-2xl font-bold mb-2 uppercase tracking-tight text-white text-left">{s.title}</h2>
                <div className="flex-grow mb-6">
                  <div className="text-slate-400 text-sm text-left" style={{marginLeft: '0.5rem'}}>
                    {s.features}
                  </div>
                </div>
                <div className="mt-auto border-t border-white/10 pt-6 flex flex-col items-start pl-2">
                  <p className="text-4xl font-black mb-4 text-white text-left">{s.price}</p>
                  <a href={waLink("26879542590", s.msg)}
                     style={{
                       background: 'linear-gradient(90deg, #1e90ff 0%, #bc13fe 100%)',
                       color: '#fff',
                       fontWeight: 'bold',
                       fontSize: '1.25rem',
                       padding: '0.75rem 2rem',
                       borderRadius: '0.75rem',
                       boxShadow: '0 2px 16px 0 rgba(30,144,255,0.25)',
                       border: '2px solid #fff',
                       textTransform: 'uppercase',
                       letterSpacing: '0.08em',
                       transition: 'all 0.3s',
                       display: 'inline-block',
                       textAlign: 'center',
                       margin: '0 auto',
                       cursor: 'pointer',
                     }}
                     onMouseOver={e => {
                       e.currentTarget.style.background = 'linear-gradient(90deg, #bc13fe 0%, #1e90ff 100%)';
                       e.currentTarget.style.color = '#000';
                       e.currentTarget.style.boxShadow = '0 4px 24px 0 rgba(188,19,254,0.25)';
                     }}
                     onMouseOut={e => {
                       e.currentTarget.style.background = 'linear-gradient(90deg, #1e90ff 0%, #bc13fe 100%)';
                       e.currentTarget.style.color = '#fff';
                       e.currentTarget.style.boxShadow = '0 2px 16px 0 rgba(30,144,255,0.25)';
                     }}
                  >
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
            <center><h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">We Sell a Variety of <span className="text-brand-purple drop-shadow-[0_0_10px_rgba(188,19,254,0.6)]">PC Games</span></h2></center>
            <p className="text-slate-300 mb-10 text-lg">
              Looking for the latest titles or classic hits? We offer a wide range of PC games at affordable prices. 
            </p>
            <a href={waLink("26879542590", "Hi, I want to inquire about available PC games.")}
               style={{
                 background: 'linear-gradient(90deg, #1e90ff 0%, #bc13fe 100%)',
                 color: '#fff',
                 fontWeight: 'bold',
                 fontSize: '1.25rem',
                 padding: '0.75rem 2rem',
                 borderRadius: '0.75rem',
                 boxShadow: '0 2px 16px 0 rgba(30,144,255,0.25)',
                 border: '2px solid #fff',
                 textTransform: 'uppercase',
                 letterSpacing: '0.08em',
                 transition: 'all 0.3s',
                 display: 'inline-block',
                 textAlign: 'center',
                 margin: '0 auto',
                 cursor: 'pointer',
               }}
               onMouseOver={e => {
                 e.currentTarget.style.background = 'linear-gradient(90deg, #bc13fe 0%, #1e90ff 100%)';
                 e.currentTarget.style.color = '#000';
                 e.currentTarget.style.boxShadow = '0 4px 24px 0 rgba(188,19,254,0.25)';
               }}
               onMouseOut={e => {
                 e.currentTarget.style.background = 'linear-gradient(90deg, #1e90ff 0%, #bc13fe 100%)';
                 e.currentTarget.style.color = '#fff';
                 e.currentTarget.style.boxShadow = '0 2px 16px 0 rgba(30,144,255,0.25)';
               }}
            >
              <FaGamepad size={20} style={{verticalAlign: 'middle', marginRight: '0.5rem'}} />
              <span style={{fontWeight: 'bold', fontSize: '1.25rem', verticalAlign: 'middle'}}>Inquire About Games</span>
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
              <a href={waLink("26879542590", "Hi, I need PC game assistance.")}
                 style={{
                   color: '#fff',
                   fontWeight: 'bold',
                   fontSize: '1.25rem',
                   background: 'linear-gradient(90deg, #bc13fe 0%, #1e90ff 100%)',
                   borderRadius: '0.5rem',
                   padding: '0.5rem 1.25rem',
                   boxShadow: '0 2px 12px 0 rgba(30,144,255,0.18)',
                   border: '2px solid #fff',
                   textDecoration: 'none',
                   display: 'inline-flex',
                   alignItems: 'center',
                   gap: '0.5rem',
                   transition: 'all 0.3s',
                 }}
                 onMouseOver={e => {
                   e.currentTarget.style.background = 'linear-gradient(90deg, #1e90ff 0%, #bc13fe 100%)';
                   e.currentTarget.style.color = '#000';
                   e.currentTarget.style.boxShadow = '0 4px 24px 0 rgba(188,19,254,0.25)';
                 }}
                 onMouseOut={e => {
                   e.currentTarget.style.background = 'linear-gradient(90deg, #bc13fe 0%, #1e90ff 100%)';
                   e.currentTarget.style.color = '#fff';
                   e.currentTarget.style.boxShadow = '0 2px 12px 0 rgba(30,144,255,0.18)';
                 }}
              >
                <FaWhatsapp className="text-brand-purple" /> 7954 2590
              </a>
              <a href={waLink("26879659483", "Hi, I need PC game assistance.")}
                 style={{
                   color: '#fff',
                   fontWeight: 'bold',
                   fontSize: '1.25rem',
                   background: 'linear-gradient(90deg, #1e90ff 0%, #bc13fe 100%)',
                   borderRadius: '0.5rem',
                   padding: '0.5rem 1.25rem',
                   boxShadow: '0 2px 12px 0 rgba(30,144,255,0.18)',
                   border: '2px solid #fff',
                   textDecoration: 'none',
                   display: 'inline-flex',
                   alignItems: 'center',
                   gap: '0.5rem',
                   transition: 'all 0.3s',
                 }}
                 onMouseOver={e => {
                   e.currentTarget.style.background = 'linear-gradient(90deg, #bc13fe 0%, #1e90ff 100%)';
                   e.currentTarget.style.color = '#000';
                   e.currentTarget.style.boxShadow = '0 4px 24px 0 rgba(188,19,254,0.25)';
                 }}
                 onMouseOut={e => {
                   e.currentTarget.style.background = 'linear-gradient(90deg, #1e90ff 0%, #bc13fe 100%)';
                   e.currentTarget.style.color = '#fff';
                   e.currentTarget.style.boxShadow = '0 2px 12px 0 rgba(30,144,255,0.18)';
                 }}
              >
                <FaWhatsapp className="text-brand-blue" /> 7965 9483
              </a>
              <a href={waLink("26876368607", "Hi, I need PC game assistance.")}
                 style={{
                   color: '#fff',
                   fontWeight: 'bold',
                   fontSize: '1.25rem',
                   background: 'linear-gradient(90deg, #bc13fe 0%, #1e90ff 100%)',
                   borderRadius: '0.5rem',
                   padding: '0.5rem 1.25rem',
                   boxShadow: '0 2px 12px 0 rgba(30,144,255,0.18)',
                   border: '2px solid #fff',
                   textDecoration: 'none',
                   display: 'inline-flex',
                   alignItems: 'center',
                   gap: '0.5rem',
                   transition: 'all 0.3s',
                 }}
                 onMouseOver={e => {
                   e.currentTarget.style.background = 'linear-gradient(90deg, #1e90ff 0%, #bc13fe 100%)';
                   e.currentTarget.style.color = '#000';
                   e.currentTarget.style.boxShadow = '0 4px 24px 0 rgba(188,19,254,0.25)';
                 }}
                 onMouseOut={e => {
                   e.currentTarget.style.background = 'linear-gradient(90deg, #bc13fe 0%, #1e90ff 100%)';
                   e.currentTarget.style.color = '#fff';
                   e.currentTarget.style.boxShadow = '0 2px 12px 0 rgba(30,144,255,0.18)';
                 }}
              >
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