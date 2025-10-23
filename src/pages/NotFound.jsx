import PageWrapper from '../components/PageWrapper';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <PageWrapper>
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 transition-colors duration-300 bg-gray-200 text-black dark:bg-[#0f0f1a] dark:text-white">
      <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300 text-center">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 rounded bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300"
      >
        Go Home
      </Link>
    </section>
  </PageWrapper>
);

export default NotFound;
