import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('submitting');

        const formData = new FormData(e.target);
        formData.append("access_key", import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setFormStatus('success');
                e.target.reset();
                setTimeout(() => setFormStatus('idle'), 4000);
            } else {
                setFormStatus('error');
                setTimeout(() => setFormStatus('idle'), 4000);
            }
        } catch (error) {
            setFormStatus('error');
            setTimeout(() => setFormStatus('idle'), 4000);
        }
    };

    return (
        <section id="contact" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Contáctame</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        ¿Tienes un proyecto en mente? ¡Hablemos! Estoy siempre abierto a nuevas oportunidades y colaboraciones.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-12">
                    {/* Tarjeta de Email Centrada */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 border border-white/10"
                    >
                        <div className="p-4 rounded-full bg-purple-500/10 text-purple-400 mb-4">
                            <FaEnvelope size={28} />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Email</h3>
                        <a
                            href="mailto:josealvarezdeveloper@gmail.com"
                            className="text-gray-300 hover:text-purple-400 transition-colors text-lg"
                        >
                            josealvarezdeveloper@gmail.com
                        </a>
                    </motion.div>

                    {/* Formulario Centrado */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="text-left">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nombre</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
                                        placeholder="Tu nombre"
                                    />
                                </div>
                                <div className="text-left">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
                                        placeholder="tu@email.com"
                                    />
                                </div>
                            </div>

                            <div className="text-left">
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Asunto</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
                                    placeholder="Asunto del mensaje"
                                />
                            </div>

                            <div className="text-left">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Mensaje</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors resize-none"
                                    placeholder="Escribe tu mensaje aquí..."
                                ></textarea>
                            </div>

                            {/* Honeypot Spam Protection (Invisible to humans) */}
                            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                            <button
                                type="submit"
                                disabled={formStatus === 'submitting' || formStatus === 'success'}
                                className={`w-full py-4 rounded-lg font-bold text-white transition-all transform hover:scale-[1.02] active:scale-[0.98] ${formStatus === 'success'
                                    ? 'bg-green-500'
                                    : formStatus === 'error'
                                        ? 'bg-red-500'
                                        : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/20'
                                    }`}
                            >
                                {formStatus === 'submitting' ? 'Enviando...' :
                                    formStatus === 'success' ? '¡Mensaje Enviado!' :
                                        formStatus === 'error' ? 'Error al enviar' :
                                            'Enviar Mensaje'}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
