export default function Contact() {
  return (
    <section
      id="contact"
      class="bg-white dark:bg-gray-900 px-6 py-10 md:px-12 lg:px-24 rounded-xl shadow-md"
    >
      <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-6 border-b-2 border-yellow-400 inline-block">
        Contact Me
      </h2>
      <div class="space-y-4 text-lg text-gray-700 dark:text-gray-300">
        <p>
          📧 Email:{" "}
          <a
            href="mailto:onwumere.bright@gmail.com"
            class="text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-800"
          >
            onwumere.bright@gmail.com
          </a>
        </p>
        <p>
          📞 Phone: <span class="font-medium">+49 176 80495017</span>
        </p>
      </div>
    </section>
  );
}
