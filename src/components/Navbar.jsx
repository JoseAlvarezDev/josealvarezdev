import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Inicio', href: '/#home' },
        { name: 'Proyectos', href: '/#projects' },
        { name: 'Habilidades', href: '/#skills' },
        { name: 'Sobre mí', href: '/#about' },
        { name: 'Contacto', href: '/#contact' },
    ];

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMobileMenuOpen ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="/" className="flex items-center group">
                    <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-purple-500/50 group-hover:border-purple-500 transition-colors shadow-lg shadow-purple-500/20 bg-slate-900">
                        <img
                            src="/favicon.png"
                            alt="JADev Logo"
                            className="w-full h-full object-contain p-1.5"
                        />
                    </div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-white transition-colors text-sm font-medium hover:scale-105 transform"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="flex items-center space-x-4">
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="https://github.com/JoseAlvarezDev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110">
                            <FaGithub size={22} />
                        </a>
                        <a href="https://linkedin.com/in/josealvarezdev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-all duration-300 hover:scale-110">
                            <FaLinkedin size={22} />
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={toggleMobileMenu}
                    >
                        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/10"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-gray-300 hover:text-white text-lg font-medium py-2 border-b border-white/5"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex items-center space-x-6 pt-4">
                                <a href="https://github.com/JoseAlvarezDev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400">
                                    <FaGithub size={24} />
                                </a>
                                <a href="https://linkedin.com/in/josealvarezdev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
                                    <FaLinkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
