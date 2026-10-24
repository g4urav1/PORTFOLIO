import Github from "../../assets/github.jsx";
import Linkedin from "../../assets/linkedin.jsx";
import about from "../../assets/about.png";
import Home from "../../assets/Home.png";

export default function HomePage() {
  return (
    <main
      id="home"
      className="dot-background min-h-screen scroll-smooth text-main"
    >
      {/* Hero */}

      <section className="relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden px-6 pb-12 pt-20 sm:px-10 lg:px-16">
        <div className="mt-4 flex w-fit items-center gap-2 rounded-full border border-default bg-surface px-3 py-1.5 text-xs">
          <div className="h-2 w-2 animate-pulse rounded-full bg-success shadow-[0px_2px_8px_rgba(111,207,151,0.6)]" />
          Available for freelancing
        </div>

        <div className="relative mt-10 flex flex-1 flex-col justify-center gap-8 lg:flex-row lg:items-center lg:gap-10">
          <div className="relative z-10 flex w-full flex-col gap-6 lg:w-1/2">
            <h1 className="text-4xl font-bold text-accent sm:text-5xl lg:text-6xl">
              Hi,
              <br />
              I'm Gaurav
            </h1>

            <div className="flex items-center gap-2 text-sm text-secondary">
              <div className="h-px w-4 bg-accent" />
              Frontend Developer
            </div>

            <p className="max-w-xl text-base leading-7 text-main/80 sm:text-lg">
              Building clean, responsive, and user-friendly websites with modern
              technologies and a focus on performance and usability.
            </p>

            <div className="mt-2 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full border border-default bg-primary px-5 py-3 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface hover:text-main"
              >
                Explore Projects
              </a>

              <a
                href="#contact"
                className="rounded-full border border-primary bg-surface px-5 py-3 text-main transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-white"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-2 flex items-center gap-4 text-primary">
              <a
                className="transition-colors duration-200 hover:text-main"
                href="https://github.com/g4urav1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>

              <a
                className="transition-colors duration-200 hover:text-main"
                href="https://www.linkedin.com/in/gaurav-jha-b9b43b414/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>

          <div className="relative flex w-full items-center justify-center lg:w-1/2">
            <img
              src={Home}
              alt="Illustration of a frontend developer"
              className="h-auto w-full max-w-[420px] object-contain sm:max-w-[480px] lg:max-w-none"
            />
          </div>
        </div>
      </section>

      {/* About */}

      <section
        id="about"
        className="scroll-mt-24 border-t border-accent px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
      >
        <h1 className="text-right text-4xl font-bold text-secondary sm:text-5xl lg:text-6xl">
          ABOUT
        </h1>

        <div className="mt-8 flex flex-col items-center gap-10 md:flex-row md:gap-12 lg:gap-16">
          <div className="w-full md:w-1/2">
            <img
              src={about}
              alt="Frontend developer"
              className="mx-auto h-auto w-full max-w-3xl object-contain"
            />
          </div>

          {/* About content */}
          <div className="w-full md:w-1/2">
            <p className="text-base font-medium leading-8 tracking-wide text-text sm:text-lg">
              I am a Frontend Developer focused on building responsive,
              user-friendly, and visually consistent web applications using
              HTML, CSS, JavaScript, and React. I strive to write clean,
              maintainable code and continuously enhance my technical skills to
              deliver effective web experiences.
            </p>

            {/* Tech Stack */}
            <div className="mt-8">
              <h2 className="mb-4 text-xl font-bold text-secondary sm:text-2xl">
                Tech Stack
              </h2>

              <div className="flex flex-wrap gap-3">
                {[
                  "HTML5",
                  "CSS3",
                  "JavaScript",
                  "React",
                  "Tailwind CSS",
                  "Git",
                  "GitHub",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-accent px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-secondary hover:text-main"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}

      <section
        id="projects"
        className="scroll-mt-24 border-t border-accent px-6 py-20 sm:px-10 sm:py-28 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-bold text-secondary sm:text-5xl lg:text-6xl">
            Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-center leading-8 tracking-wide text-text sm:text-lg">
            A collection of projects built with clean code, thoughtful features,
            and responsive design.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* AI Chatbot */}
            <article className="group flex flex-col rounded-2xl border border-default bg-main/50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-xl sm:p-8">
              <div className="mb-5 flex items-start justify-between gap-3">
                <h3 className="text-2xl font-bold text-accent transition-colors group-hover:text-secondary sm:text-3xl">
                  Basic AI Chatbot
                </h3>
                <span className="shrink-0 rounded-full border border-accent/40 px-3 py-1 text-xs font-medium text-secondary">
                  Full stack Project
                </span>
              </div>

              <p className="leading-7 tracking-wide text-text">
                An AI chatbot application with a clean, user-friendly interface,
                user authentication, and AI-powered conversational features,
                allowing users to interact with an AI assistant and receive
                helpful responses.
              </p>

              <div className="mt-7">
                <div className="mb-4 flex items-center gap-3 text-lg font-semibold text-secondary">
                  <span className="h-px w-6 bg-accent" />
                  Tech Stack
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    "React.js",
                    "Tailwind CSS",
                    "JavaScript",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "Mongoose",
                    "OpenRouter AI API",
                    "Nodemailer",
                    "Vite",
                    "React Router",
                    "Lucide React",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-default px-3 py-2 text-sm text-text transition-colors hover:border-accent hover:text-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex flex-wrap gap-3 pt-8">
                <a
                  href="https://github.com/g4urav1/basic-chatbot"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-lg border border-default px-5 py-2.5 font-medium text-text transition-all hover:border-accent hover:text-secondary"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-2 h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.72 2.63 1.22 3.27.93.1-.72.39-1.22.71-1.5-2.47-.28-5.07-1.24-5.07-5.5 0-1.21.43-2.2 1.15-2.98-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.98 0 4.27-2.6 5.21-5.08 5.49.4.35.76 1.02.76 2.06v3.12c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                  </svg>
                  GitHub
                </a>

                <a
                  aria-disabled
                  className="inline-flex items-center justify-center rounded-lg bg-secondary px-5 py-2.5 font-semibold text-main transition-all hover:opacity-85"
                  title="NOT LIVE YET"
                >
                  Live Demo
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="ml-2 h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </a>
              </div>
            </article>

            {/* Nexus Social Media */}
            <article className="group flex flex-col rounded-2xl border border-default bg-main/50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-xl sm:p-8">
              <div className="mb-5 flex items-start justify-between gap-3">
                <h3 className="text-2xl font-bold text-accent transition-colors group-hover:text-secondary sm:text-3xl">
                  Nexus Social Media
                </h3>
                <span className="shrink-0 rounded-full border border-accent/40 px-3 py-1 text-xs font-medium text-secondary">
                  Full-Stack Project
                </span>
              </div>

              <p className="leading-7 tracking-wide text-text">
                Nexus is a social media application that allows users to
                connect, share posts, interact through likes and comments, chat
                with others, and make voice or video calls through a modern,
                user-friendly interface.
              </p>

              <div className="mt-7">
                <div className="mb-4 flex items-center gap-3 text-lg font-semibold text-secondary">
                  <span className="h-px w-6 bg-accent" />
                  Tech Stack
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    "React.js",
                    "JavaScript",
                    "Tailwind CSS",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "Mongoose",
                    "Socket.IO",
                    "React Router",
                    "Lucide React",
                    "Vite",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-default px-3 py-2 text-sm text-text transition-colors hover:border-accent hover:text-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex flex-wrap gap-3 pt-8">
                <a
                  href="https://github.com/g4urav1/Nexus"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-lg border border-default px-5 py-2.5 font-medium text-text transition-all hover:border-accent hover:text-secondary"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-2 h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.72 2.63 1.22 3.27.93.1-.72.39-1.22.71-1.5-2.47-.28-5.07-1.24-5.07-5.5 0-1.21.43-2.2 1.15-2.98-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.98 0 4.27-2.6 5.21-5.08 5.49.4.35.76 1.02.76 2.06v3.12c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                  </svg>
                  GitHub
                </a>

                <a
                  href="https://nexus-seven-ochre-83.vercel.app/"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-lg bg-secondary px-5 py-2.5 font-semibold text-main transition-all hover:opacity-85"
                >
                  Live Demo
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="ml-2 h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Contact */}

      <section
        id="contact"
        className="scroll-mt-24 border-t border-accent px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
      >
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Get in touch
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-secondary sm:text-5xl lg:text-7xl">
            LET'S WORK
            <br />
            <span className="text-accent">TOGETHER.</span>
          </h2>

          <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-lg text-base leading-7 text-secondary/70 sm:text-lg">
              Have a project in mind or want to collaborate? I'd love to hear
              from you. Let's create something meaningful together.
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=gauravkumarjha2107@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-3 rounded-full bg-accent px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
             Contact me
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col gap-4 border-t border-primary/10 px-6 py-7 text-xs text-main/45 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
        <p>© {new Date().getFullYear()} — Designed &amp; built with care.</p>

        <div className="flex items-center gap-6">
          <a href="#projects" className="transition-colors hover:text-accent">
            Projects
          </a>

          <a href="#about" className="transition-colors hover:text-accent">
            About
          </a>

          <a href="#contact" className="transition-colors hover:text-accent">
            Contact
          </a>
        </div>
      </footer>
    </main>
  );
}
