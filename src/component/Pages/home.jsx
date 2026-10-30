import { useEffect } from "react";
import Github from "../../assets/github.jsx";
import Linkedin from "../../assets/linkedin.jsx";
import about from "../../assets/about.png";
import Home from "../../assets/Home.png";

export default function HomePage() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      return;
    }

    const elements = document.querySelectorAll("[data-scroll-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    document.documentElement.classList.add("has-scroll-reveal");
    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("has-scroll-reveal");
      elements.forEach((element) => element.classList.remove("is-visible"));
    };
  }, []);

  return (
    <main className="dot-background min-h-screen scroll-smooth text-main">
      {/* Hero */}

      <section
        id="home"
        className="relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden px-6 pb-12 pt-20 sm:px-10 lg:px-16"
      >
        <div
          data-scroll-reveal
          className="mt-4 flex w-fit items-center gap-2 rounded-full border border-default bg-surface px-3 py-1.5 text-xs"
        >
          <div className="h-2 w-2 animate-pulse rounded-full bg-success shadow-[0px_2px_8px_rgba(111,207,151,0.6)]" />
          Available for freelancing
        </div>

        <div className="relative mt-10 flex flex-1 flex-col justify-center gap-8 lg:flex-row lg:items-center lg:gap-10">
          <div
            data-scroll-reveal
            className="relative z-10 flex w-full flex-col gap-6 lg:w-1/2"
          >
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

          <div
            data-scroll-reveal
            data-scroll-reveal-delay="1"
            className="relative flex w-full items-center justify-center lg:w-1/2"
          >
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
        <h1
          data-scroll-reveal
          className="text-right text-4xl font-bold text-secondary sm:text-5xl lg:text-6xl"
        >
          ABOUT
        </h1>

        <div
          data-scroll-reveal
          className="mt-8 flex flex-col items-center gap-10 md:flex-row md:gap-12 lg:gap-16"
        >
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
            {/* RedTape Landing Page */}
            <article className="group flex flex-col rounded-2xl border border-default bg-main/50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-xl sm:p-8">
              <div className="mb-5 flex items-start justify-between gap-3">
                <h3 className="text-2xl font-bold text-accent transition-colors group-hover:text-secondary sm:text-3xl">
                  RedTape Landing page ui clone
                </h3>
                <span className="shrink-0 rounded-full border border-accent/40 px-3 py-1 text-xs font-medium text-secondary">
                  Frontend Clone Project
                </span>
              </div>

              <p className="leading-7 tracking-wide text-text">
                A responsive RedTape-inspired landing page clone built to
                recreate the brand’s e-commerce UI, featuring product sections,
                category navigation, and a clean shopping-focused layout.
              </p>

              <div className="mt-7">
                <div className="mb-4 flex items-center gap-3 text-lg font-semibold text-secondary">
                  <span className="h-px w-6 bg-accent" />
                  Tech Stack
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Html", "Css"].map((skill) => (
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
                  href="https://github.com/g4urav1/redtape-landingpage-ui-clone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-default px-5 py-2.5 font-medium text-text transition-all hover:border-accent hover:text-secondary"
                >
                  GitHub
                </a>

                <a
                  href="https://g4urav1.github.io/redtape-landingpage-ui-clone/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-secondary px-5 py-2.5 font-semibold text-main transition-all hover:opacity-85"
                  title="NOT LIVE YET"
                >
                  Live Demo
                </a>
              </div>
            </article>

            {/* TODO App */}
            <article className="group flex flex-col rounded-2xl border border-default bg-main/50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-xl sm:p-8">
              <div className="mb-5 flex items-start justify-between gap-3">
                <h3 className="text-2xl font-bold text-accent transition-colors group-hover:text-secondary sm:text-3xl">
                  TODO App with Backend
                </h3>
                <span className="shrink-0 rounded-full border border-accent/40 px-3 py-1 text-xs font-medium text-secondary">
                  Full Stack Project
                </span>
              </div>

              <p className="leading-7 tracking-wide text-text">
                A backend-centric To-Do app that securely manages task
                persistence across logins, allowing users to access their saved
                tasks even after logging out and back in. Features user
                authentication and email OTP-based password recovery.
              </p>

              <div className="mt-7">
                <div className="mb-4 flex items-center gap-3 text-lg font-semibold text-secondary">
                  <span className="h-px w-6 bg-accent" />
                  Tech Stack
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Node.js",
                    "Express.js",
                    "Nodemailer",
                    "JSON File Storage",
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
                  href="https://github.com/g4urav1/ToDo-App"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-default px-5 py-2.5 font-medium text-text transition-all hover:border-accent hover:text-secondary"
                >
                  GitHub
                </a>

                <a
                  href="https://to-do-app-navy-nine.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-secondary px-5 py-2.5 font-semibold text-main transition-all hover:opacity-85"
                  title="NOT LIVE YET"
                >
                  Live Demo
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
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-default px-5 py-2.5 font-medium text-text transition-all hover:border-accent hover:text-secondary"
                >
                  GitHub
                </a>

                <a
                  href="https://nexus-seven-ochre-83.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-secondary px-5 py-2.5 font-semibold text-main transition-all hover:opacity-85"
                >
                  Live Demo
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
        <div data-scroll-reveal className="mx-auto max-w-5xl">
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
      <footer
        data-scroll-reveal
        className="flex flex-col gap-4 border-t border-primary/10 px-6 py-7 text-xs text-main/45 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16"
      >
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
