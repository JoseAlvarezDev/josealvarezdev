import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-20 left-0 w-72 h-72 bg-pink-600/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >


                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight flex flex-wrap justify-center gap-x-4">
                        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                            Jose Alvarez
                        </span>
                        <motion.span
                            initial={{ y: -150, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                                bounce: 0.8
                            }}
                            className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent inline-block"
                        >
                            Dev
                        </motion.span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Desarrollador Web Full Stack apasionado por crear experiencias digitales únicas, modernas y altamente funcionales.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <a
                            href="#projects"
                            className="group relative px-8 py-4 bg-white text-slate-950 font-bold rounded-full overflow-hidden transition-all hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Ver Proyectos <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>

                        <a
                            href="#contact"
                            className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-medium hover:bg-white/10 transition-all hover:scale-105 backdrop-blur-sm"
                        >
                            Contactar
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
            >

            </motion.div>
        </section>
    );
};

export default Hero;
