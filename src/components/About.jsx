import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-black/20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 flex justify-center"
                    >
                        <div className="relative group max-w-md">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                            <img
                                src="/images/profile.jpg"
                                alt="Jose Alvarez"
                                className="relative z-10 w-full rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02] object-cover filter contrast-[1.05] brightness-[1.02]"
                                loading="eager"
                                decoding="async"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Sobre Mí</h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Soy un desarrollador apasionado con más de 10 años de experiencia en la creación de soluciones digitales. Me especializo en el desarrollo frontend con React y el ecosistema moderno de JavaScript, pero también tengo sólida experiencia en backend.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            Mi enfoque se centra en escribir código limpio, eficiente y escalable, siempre priorizando la experiencia del usuario. Me encanta aprender nuevas tecnologías y mantenerme al día con las últimas tendencias del desarrollo web.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-4xl font-bold text-purple-400 mb-2">10+</h4>
                                <p className="text-gray-400">Años de experiencia</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-pink-500 mb-2">100+</h4>
                                <p className="text-gray-400">Proyectos completados</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
