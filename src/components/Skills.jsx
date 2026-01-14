import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt, FaRust, FaPython, FaSwift } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiMongodb, SiAstro, SiKotlin, SiAwslambda } from 'react-icons/si';

const skills = [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "Astro", icon: SiAstro, color: "#FF5D01" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Lambda", icon: SiAwslambda, color: "#FF9900" },
    { name: "Swift", icon: FaSwift, color: "#F05138" },
    { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
    { name: "Rust", icon: FaRust, color: "#DEA584" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Habilidades Técnicas</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Herramientas y tecnologías que utilizo para dar vida a mis ideas.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                            className="p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-4 transition-colors cursor-pointer"
                        >
                            <skill.icon size={40} style={{ color: skill.color }} />
                            <span className="font-medium text-gray-200">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
