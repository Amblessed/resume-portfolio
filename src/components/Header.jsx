export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md p-8 md:p-10 rounded-xl text-center hover:shadow-xl transition-shadow duration-300">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-3 hover:text-blue-600 transition-colors duration-300">
        Okechukwu Bright Onwumere
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 hover:scale-105 transform transition-transform">
        Test Automation Engineer · Backend Developer · Java, Python & Spring Boot
      </p>
      <nav
        className="flex flex-wrap justify-center gap-4 md:gap-6 text-blue-600 font-medium bg-gray-100 dark:bg-gray-800 p-4 rounded-full shadow-sm"
        aria-label="Social and Resume Links"
      >
        <a
          href="https://github.com/Amblessed"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-red-700 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/okechukwu-bright-onwumere/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-blue-800 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="Onwumere_Lebenslauf.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-green-700 transition-colors"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
