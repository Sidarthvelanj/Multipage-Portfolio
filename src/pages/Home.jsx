import PageWrapper from '../components/PageWrapper';

const Home = () => (
  <PageWrapper>
    <section className="w-full px-4 sm:px-6 py-10 bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          
          {/* Text Block */}
          <div className="flex-1 max-w-xl text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Hello, My name is Sidarth Velan J 👋
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
              A Project Engineer – Applications and AI, based in Bangalore and Chennai. Passionate about building clean, responsive, and accessible web experiences.
            </p>
            <a
              href="/projects"
              className="inline-block px-5 py-2 sm:px-6 sm:py-3 bg-black text-white dark:bg-white dark:text-black rounded hover:scale-105 hover:bg-neutral-800 dark:hover:bg-gray-200 transition-all duration-300"
            >
              View My Work
            </a>
          </div>

          {/* Image Block */}
          <div className="flex-1 flex justify-center">
            <div className="w-40 sm:w-48 md:w-64 aspect-square rounded-full overflow-hidden border-4 border-black dark:border-white shadow-lg">
              <img
                src="/profile.jpg"
                alt="Sidarth Velan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  </PageWrapper>
);

export default Home;
