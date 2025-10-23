import PageWrapper from '../components/PageWrapper';

const Home = () => (
  <PageWrapper>
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 py-20 gap-10 bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hello, My name is Sidarth Velan J 👋
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          A Project Engineer – Applications and AI, based in Bangalore and Chennai. Passionate about building clean, responsive, and accessible web experiences.
        </p>
        <a
          href="/projects"
          className="inline-block px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded hover:bg-neutral-800 dark:hover:bg-gray-200 transition-colors duration-300"
        >
          View My Work
        </a>
      </div>
      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-black dark:border-white shadow-lg">
        <img
          src="/profile.jpg"
          alt="Sidarth Velan"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  </PageWrapper>
);

export default Home;
