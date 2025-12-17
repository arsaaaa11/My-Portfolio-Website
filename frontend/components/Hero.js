import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-24 md:py-32 flex flex-col md:flex-row items-center gap-10">
      {/* Left Content */}
      <div className="flex-1">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Hi, I’m <span className="text-sky-400">ARSALAN</span>
          <br /> Full Stack Developer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg text-gray-300 max-w-xl"
        >
          I build fast, scalable & accessible web apps with modern technologies
          like <span className="text-sky-400">HTML,CSS,JS</span> -{" "}
          <span className="text-green-400">Node.Js</span>, and{" "}
          <span className="text-yellow-400">MongoDB</span>.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex gap-4"
        >
          <a
            href="#projects"
            className="btn bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-lg hover:shadow-sky-500/50 transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="btn bg-gray-800 border border-gray-700 hover:bg-gray-700 hover:border-sky-500 transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Right Content (Profile Image) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex-1 card p-6 text-center"
      >
        <motion.img
          src="/dp.jpg"
          alt="Profile Picture"
          className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-sky-400 shadow-xl cursor-pointer"
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
        <motion.p
          className="mt-4 text-gray-400"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Open For Internships & Freelance
        </motion.p>
      </motion.div>
    </section>
  );
}
