import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.h2 className="section-title" initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
        About Me
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-6 text-gray-300 leading-relaxed">
          I’m a B.Tech student at Integral University, Lucknow, focused on modern web development.
          I enjoy building products end-to-end and learning new tech.
        </div>
        <ul className="card p-6 space-y-3 text-gray-300">
          <li> • Focus:-   Next.js, Node.js, MongoDB</li>
          <li> • Interests:-   Full Stack, Ai&Ml, Java</li>
          <li> • Location:-   Lucknow</li>
        </ul>
      </div>
    </section>
  );
}

// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     <section id="about" className="py-20 container">
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="section-title"
//       >
//         About Me
//       </motion.h2>
//       <motion.p
//         className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//       >
//         I’m <span className="text-sky-400 font-bold">Arsalan</span>, a passionate
//         Full Stack Developer. I love building modern, responsive, and scalable
//         applications using technologies like <b>Next.js, Node.js, MongoDB</b>,
//         and <b>TailwindCSS</b>. My goal is to craft smooth user experiences while
//         writing clean and efficient code.
//       </motion.p>
//     </section>
//   );
// }
