import PageWrapper from '../components/PageWrapper';
import { Code2, Palette, Rocket, Lightbulb } from 'lucide-react';

const About = () => (
  <PageWrapper>
    <section className="min-h-screen px-6 py-20 transition-colors duration-300 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
          I'm <span className="font-semibold text-black dark:text-white">Sidarth Velan</span>, a frontend developer and project engineer intern specializing in <span className="font-semibold text-black dark:text-white">AI and applications</span>. Based in Bangalore, I’m passionate about crafting clean, responsive, and accessible web experiences that blend thoughtful design with practical functionality.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          My core strengths lie in building modular React interfaces, optimizing user flows, and adapting quickly to evolving tech ecosystems. Whether it's designing intuitive layouts, integrating modern libraries, or solving real-world problems with AI-driven solutions, I approach every challenge with clarity, curiosity, and a drive to improve.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {[
          {
            icon: <Code2 className="w-6 h-6 text-black dark:text-white" />,
            title: 'React + Vite',
            desc: 'Fast dev workflow, modular components, and smooth routing with React Router.',
          },
          {
            icon: <Palette className="w-6 h-6 text-black dark:text-white" />,
            title: 'TailwindCSS',
            desc: 'Utility-first styling with dark/light theme support and responsive layouts.',
          },
          {
            icon: <Rocket className="w-6 h-6 text-black dark:text-white" />,
            title: 'Lucide Icons',
            desc: 'Clean, scalable icons for modern UI components and navigation.',
          },
          {
            icon: <Lightbulb className="w-6 h-6 text-black dark:text-white" />,
            title: 'Problem Solving',
            desc: 'Troubleshooting npm errors, adapting to new tools, and optimizing UX patterns.',
          },
        ].map((skill, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-lg bg-gray-100 dark:bg-neutral-900 hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              {skill.icon}
              <h3 className="text-xl font-semibold">{skill.title}</h3>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">{skill.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="/SidarthVelan_Resume.pdf"
          download
          className="inline-block px-6 py-3 rounded bg-black text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-gray-200 transition-colors duration-300"
        >
          Download Resume
        </a>
      </div>
    </section>
  </PageWrapper>
);

export default About;
