// export default function Projects() {
//   const projects = [
//     {
//       title: "MS Hospital",
//       desc: "A cool project built with HTML, CSS & JS.",
//       github: "https://github.com/yourusername/project-one",
//       demo: "https://project-one-demo.vercel.app",
//       image: "/project1.jpg"
//     },
//     {
//       title: "TIC TAC TOE",
//       desc: "Made with only HTML, CSS & JS.",
//       github: "https://github.com/yourusername/project-two",
//       demo: "https://project-two-demo.vercel.app",
//       image: "/project2.jpg"
//     }
//   ];
//   return (
//     <section id="projects" className="py-20">
//       <h2 className="section-title">Projects</h2>
//       <div className="grid md:grid-cols-2 gap-6">
//         {projects.map(p => (
//           <div key={p.title} className="card overflow-hidden">
//             <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
//             <div className="p-6">
//               <h3 className="text-xl font-bold">{p.title}</h3>
//               <p className="text-gray-300 mt-2">{p.desc}</p>
//               <div className="mt-4 flex gap-4">
//                 <a className="link" href={p.github} target="_blank" rel="noreferrer">GitHub</a>
//                 <a className="link" href={p.demo} target="_blank" rel="noreferrer">Live Demo</a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "MS Hospital",
      desc: "My First Begginer project built with HTML, CSS & JS.",
      github: "https://github.com/arsaaaa11/MS-Hospital-Website.git",
      demo: "https://project-one-demo.vercel.app",
      image: "/project1.jpg"
    },
    {
      title: "LaVista Resturant",
      desc: "Made with only HTML, CSS & JS.",
      github: "https://github.com/arsaaaa11/LaVista-Resturant-Website.git",
      demo: "https://project-two-demo.vercel.app",
      image: "/project2.jpg"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 px-4 md:px-0">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative w-full h-56">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                {p.title}
              </h3>
              <p className="text-gray-300 mt-3">{p.desc}</p>
              <div className="mt-4 flex gap-4">
                <a
                  className="text-blue-500 hover:underline hover:text-blue-400 transition-colors duration-300"
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="text-blue-500 hover:underline hover:text-blue-400 transition-colors duration-300"
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
