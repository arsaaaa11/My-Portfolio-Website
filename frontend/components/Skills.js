// export default function Skills() {
//   const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js", "Express", "MongoDB", "Git", "SQL"];
//   return (
//     <section id="skills" className="py-20">
//       <h2 className="section-title">Skills</h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
//         {skills.map((s) => (
//           <div key={s} className="card p-4 text-center">{s}</div>
//         ))}
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";

const skills = [
  "HTML", "CSS", "JavaScript", "Node.js",
  "MongoDB", "MS Office", "Canva", "Git/GitHub"
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 container">
      <h2 className="section-title">Skills</h2>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="card text-center p-4 hover:shadow-sky-500/40 transition-all"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
