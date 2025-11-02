export default function Skills() {
  const skills = [
    "Java, Python, Javascript",
    "Selenium, Playwright, Cucumber, Postman",
    "JUnit, TestNG",
    "Spring Boot, Spring Data JPA, Spring Security, REST APIs", 
    "Jenkins, GitHub Actions (CI/CD)",
    "HTML, CSS, JS, Bootstrap, React",
    "MySQL, PostgreSQL, SQL Server",
    "Scrum, Jira, Confluence",
    "Data Engineering, Data Analysis",
    "Prompt Engineering, OpenAI API, ChatGPT"
  ];

  return (
    <section className="bg-white dark:bg-gray-900 px-6 py-10 md:px-12 lg:px-24 rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 border-b-2 border-yellow-400 inline-block">
        Skills
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300 text-lg list-disc list-inside">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="hover:text-blue-600 transition-colors duration-300"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
