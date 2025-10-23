import PageWrapper from '../components/PageWrapper';

const projects = [
  {
    title: "Weather Dashboard",
    tech: "HTML, CSS, JavaScript",
    image: "/weather.jpg",
    link: "https://github.com/Sidarthvelanj/Weather-dashboard",
  },
  {
    title: "Quiz App",
    tech: "HTML, CSS, JavaScript",
    image: "/quiz.jpg",
    link: "https://github.com/Sidarthvelanj/Quiz-App",
  },
  {
    title: "Counter & Todo App",
    tech: "HTML, CSS, JavaScript",
    image: "/todo.jpg",
    link: "https://github.com/Sidarthvelanj/CounterApp-TodoApp",
  },
  {
    title: "Movie Search Website",
    tech: "HTML, CSS, JavaScript, OMDB API",
    image: "/movie.jpg",
    link: "https://github.com/Sidarthvelanj/MovieSearchWebsite",
  },
];

const Projects = () => (
  <PageWrapper>
    <section className="min-h-screen px-6 py-20 transition-colors duration-300 bg-white text-black dark:bg-black dark:text-white">
      <h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 rounded shadow bg-gray-100 dark:bg-neutral-900 hover:shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">{project.tech}</p>
          </a>
        ))}
      </div>
    </section>
  </PageWrapper>
);

export default Projects;
