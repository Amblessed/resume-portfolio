export default function FurtherTrainings() {
  const trainings = [
    {
      title: "The Ultimate React Course 2025: React, Next.js, Redux & More",
      courseUrl: "https://www.udemy.com/course/the-ultimate-react-course/",
      certificateUrl: "Ongoing",
      overview:
        "A hands-on, project-driven program designed to take learners from beginner to advanced in React and Next.js.",
    },
    {
      title: "Spring Boot Data JPA & Hibernate: Master Basics to Advance",
      courseUrl:
        "https://www.udemy.com/course/spring-boot-data-jpa-hibernate-master-basics-to-advance/",
      certificateUrl:
        "https://www.udemy.com/certificate/UC-6b268d46-440d-4f2e-ab65-0d90478123bd/",
      overview:
        "Mastered Hibernate and JPA with Spring Boot, including ORM fundamentals, entity relationships, inheritance strategies, JPQL, Criteria API, and multi-database integration (H2, MySQL, PostgreSQL).",
    },
    {
      title: "Spring Boot REST APIs: Building Modern APIs with Spring Boot",
      courseUrl: "https://www.udemy.com/course/spring-boot-rest-apis/",
      certificateUrl:
        "https://www.udemy.com/certificate/UC-3df2f4a8-2c85-421a-9d71-c8d0cc9da087/",
      overview:
        "Built RESTful APIs with Spring Boot, implementing full CRUD operations, MySQL integration via Spring Data JPA, DTO mapping, validation, proper HTTP status codes, global exception handling, and basic security with Spring Security.",
    },
    {
      title: "Full Stack: React and Java Spring Boot - The Developer Guide",
      courseUrl:
        "https://www.udemy.com/course/full-stack-react-and-java-spring-boot-the-developer-guide/",
      certificateUrl:
        "https://www.udemy.com/certificate/UC-f810695c-a558-4cde-8a20-88f6fe769962/",
      overview:
        "Developed full-stack applications using React for the frontend and Spring Boot for the backend, covering RESTful API integration, state management, and deployment strategies.",
    },
    {
      title:
        "Amazon Junior Software Developer with GenAI Professional Certificate",
      courseUrl:
        "https://www.coursera.org/professional-certificates/amazon-junior-software-developer",
      certificateUrl:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/0BDTVTE5FRM1",
      overview:
        "Completed Amazon’s GenAI-backed curriculum covering software development fundamentals, cloud services, version control, and AI-assisted coding practices for junior developer roles.",
    },
    {
      title: "Meta Database Engineer Professional Certificate",
      courseUrl:
        "https://www.coursera.org/professional-certificates/meta-database-engineer",
      certificateUrl:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/E6VFLQRUP652",
      overview:
        "Gained expertise in database design, normalization, indexing, SQL optimization, and data modeling, with hands-on projects using relational and NoSQL databases.",
    },
    {
      title: "Data Engineering Foundations Specialization",
      courseUrl:
        "https://www.coursera.org/specializations/data-engineering-foundations",
      certificateUrl:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/RKELGBKYEBRL",
      overview:
        "Learned foundational data engineering concepts including ETL pipelines, data warehousing, batch and stream processing, and cloud-based data tools.",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 px-6 py-10 md:px-12 lg:px-24 rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 border-b-2 border-yellow-400 inline-block">
        Further Trainings
      </h2>
      <ul className="space-y-6 text-gray-700 dark:text-gray-300 text-lg">
        {trainings.map((training, index) => (
          <li key={index} className="border-l-4 border-blue-500 pl-4">
            <p className="font-semibold text-blue-600 dark:text-blue-400">
              <a
                href={training.courseUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:underline"
              >
                {training.title}
              </a>{" "}
              —{" "}
              {training.certificateUrl === "Ongoing" ? (
                <span className="italic text-gray-500 dark:text-gray-400">
                  Ongoing
                </span>
              ) : (
                <>
                  <a
                    href={training.certificateUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-green-600 dark:text-green-400 hover:underline"
                  >
                    View Certificate
                  </a>
                </>
              )}
            </p>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {training.overview}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
