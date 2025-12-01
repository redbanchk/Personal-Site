import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MessageSquare, Copy, Check } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首页 Home', href: '#home' },
    { name: '关于 About', href: '#about' },
    { name: '经历 Experience', href: '#experience' },
    { name: '项目 Projects', href: '#projects' },
  ];

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const contactItems = [
    { label: 'QQ', value: CONTACT_INFO.qq, icon: <MessageSquare className="w-5 h-5" /> },
    { label: 'WeChat', value: CONTACT_INFO.wechat, icon: <MessageSquare className="w-5 h-5" /> },
    { label: 'Email', value: CONTACT_INFO.email, icon: <Mail className="w-5 h-5" /> },
    { label: 'Phone', value: CONTACT_INFO.phone, icon: <Phone className="w-5 h-5" /> },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0 flex items-center">
              <a href="#home" className="text-xl font-bold text-white tracking-tight hover:text-primary transition-colors">
                Kunji He's Portfolio
              </a>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-primary transition-colors text-sm font-medium tracking-wide flex flex-col items-center group"
                >
                  <span className="group-hover:text-white transition-colors">{link.name.split(' ')[0]}</span>
                  <span className="text-[10px] text-slate-500 font-light group-hover:text-primary/80">{link.name.split(' ')[1]}</span>
                </a>
              ))}
              <button 
                 onClick={() => setIsContactOpen(true)}
                 className="px-5 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all text-sm font-medium cursor-pointer"
              >
                联系 Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-300 hover:text-white focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-slate-900 absolute w-full border-t border-slate-800 shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsContactOpen(true);
                }}
                className="block w-full text-left px-3 py-3 text-base font-medium text-primary hover:bg-slate-800 rounded-md"
              >
                联系 Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Contact Fly-out Card (Modal) */}
      {isContactOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="bg-slate-900 border border-slate-700 p-8 rounded-2xl max-w-sm w-full relative shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsContactOpen(false)} 
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="text-2xl font-bold text-white mb-1">联系我</h3>
            <p className="text-slate-500 mb-6 text-sm">Contact Me</p>
            
            <div className="space-y-4">
              {contactItems.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-primary/50 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-slate-800 rounded-lg text-primary group-hover:text-white group-hover:bg-primary transition-colors">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{item.label}</p>
                      <p className="text-slate-200 font-mono text-sm truncate">{item.value}</p>
                    </div>
                    <button 
                      onClick={() => handleCopy(item.value, item.label)}
                      className="text-slate-500 hover:text-white transition-colors p-2"
                      title="Copy to clipboard"
                    >
                      {copiedField === item.label ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 text-center">
              <p className="text-slate-500 text-xs">
                期待与您的合作与交流
                <br />
                Looking forward to connecting with you
              </p>
            </div>
          </div>
          
          {/* Close on background click */}
          <div className="absolute inset-0 -z-10" onClick={() => setIsContactOpen(false)}></div>
        </div>
      )}
    </>
  );
};

export default Navbar;