import PageWrapper from '../components/PageWrapper';

const Contact = () => (
  <PageWrapper>
    <section className="min-h-screen px-4 sm:px-6 py-16 sm:py-20 transition-colors duration-300 bg-white text-black dark:bg-black dark:text-white">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
        Contact Me
      </h2>

      <form className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 sm:p-4 text-sm sm:text-base rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-900 text-black dark:text-white transition-colors duration-300"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 sm:p-4 text-sm sm:text-base rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-900 text-black dark:text-white transition-colors duration-300"
          required
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 sm:p-4 text-sm sm:text-base rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-900 text-black dark:text-white transition-colors duration-300"
          required
        ></textarea>
        <button
          type="submit"
          className="px-5 py-2 sm:px-6 sm:py-3 rounded bg-black text-white dark:bg-white dark:text-black hover:scale-105 hover:bg-neutral-800 dark:hover:bg-gray-200 transition-all duration-300"
        >
          Send Message
        </button>

      </form>
    </section>
  </PageWrapper>
);

export default Contact;
