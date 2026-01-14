import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/projects';

const Projects = () => {
    // Solo mostramos los primeros 6 para la home
    const featuredProjects = projects.slice(0, 6);

    return (
        <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Proyectos Destacados</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Una selección de mis trabajos más recientes, donde combino diseño y funcionalidad.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-medium px-2 py-1 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex items-center gap-4">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-purple-400 transition-colors">
                                        <FaGithub /> Código
                                    </a>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-purple-400 transition-colors">
                                        <FaExternalLinkAlt /> Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center"
                >
                    <a
                        href="/projects"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all hover:scale-105 backdrop-blur-sm"
                    >
                        Ver todos los proyectos <FaExternalLinkAlt size={14} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
