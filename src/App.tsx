import { useEffect, useState, type ReactNode } from "react";

type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  stack: string[];
  accent: string;
  metrics: { value: string; label: string }[];
  features: string[];
};

const projects: Project[] = [
  {
    slug: "queryboard",
    number: "01",
    title: "Queryboard",
    category: "Developer platform",
    description:
      "A collaborative PostgreSQL workspace that turns raw queries into clear, shareable dashboards.",
    longDescription:
      "Queryboard helps product and engineering teams explore their data without losing context. I designed the query workflow, built a resilient API layer, and created a component system for visualizing results across screen sizes.",
    stack: ["Python", "PostgreSQL", "React", "CSS"],
    accent: "acid",
    metrics: [
      { value: "42%", label: "faster analysis" },
      { value: "8k+", label: "queries / month" },
      { value: "99.9%", label: "uptime" },
    ],
    features: [
      "Real-time collaborative SQL editor",
      "Reusable chart and dashboard system",
      "Role-based workspace permissions",
    ],
  },
  {
    slug: "relay",
    number: "02",
    title: "Relay",
    category: "Workflow automation",
    description:
      "A lightweight automation engine for connecting forms, databases, and everyday team tools.",
    longDescription:
      "Relay makes reliable automation approachable. The product combines a visual React workflow editor with Python workers and detailed execution logs, so teams can understand every step without digging through server output.",
    stack: ["React", "Python", "HTML", "PostgreSQL"],
    accent: "coral",
    metrics: [
      { value: "18k", label: "tasks automated" },
      { value: "67%", label: "less manual work" },
      { value: "12", label: "integrations" },
    ],
    features: [
      "Visual trigger and action builder",
      "Retry-safe background processing",
      "Searchable workflow history",
    ],
  },
  {
    slug: "fieldnotes",
    number: "03",
    title: "Fieldnotes",
    category: "Knowledge product",
    description:
      "A fast, offline-friendly research notebook for collecting and connecting ideas in the field.",
    longDescription:
      "Fieldnotes is built for researchers who need their tools to disappear. I focused on a keyboard-first interface, instant search, and dependable synchronization for work that moves between unreliable networks.",
    stack: ["React", "CSS", "PostgreSQL", "Python"],
    accent: "blue",
    metrics: [
      { value: "<80ms", label: "local search" },
      { value: "4.8/5", label: "user rating" },
      { value: "2.4k", label: "notes synced" },
    ],
    features: [
      "Offline-first note capture",
      "Linked references and collections",
      "Conflict-safe cloud synchronization",
    ],
  },
];

function WildlifeArtwork({
  animal,
  className = "",
}: {
  animal: "elephant" | "leopard";
  className?: string;
}) {
  if (animal === "elephant") {
    return (
      <svg
        className={`wildlife-art elephant-art ${className}`}
        viewBox="0 0 520 300"
        role="img"
        aria-label="Interactive line artwork of an African elephant"
        tabIndex={0}
      >
        <circle className="art-sun" cx="402" cy="73" r="43" />
        <path
          className="art-land"
          d="M26 247c91-17 157-9 228 0 76 10 146 12 239-6"
        />
        <g className="art-tree">
          <path d="M440 238c-5-65 4-97 2-133" />
          <path d="M441 141c-19-25-40-30-70-27 16-20 47-26 68-11 17-22 55-24 72-3-31-3-50 10-70 41Z" />
        </g>
        <g className="elephant-body">
          <path d="M103 213c-17-25-19-72 1-102 20-29 58-40 108-36 46 3 86 20 106 53 11 18 9 55-2 83" />
          <path d="M109 210v42M162 215l-2 37M273 211l4 41M315 204l8 48" />
          <path d="M95 120c-26 10-36 42-20 69 12 20 35 21 52 3" />
          <path
            className="elephant-ear"
            d="M119 107c-20 25-15 67 13 80 29-16 45-48 23-76-10-13-26-15-36-4Z"
          />
          <path
            className="elephant-trunk"
            d="M83 138c-21 32-17 73 10 96 12 10 25 4 29-8"
          />
          <path
            className="elephant-tusk"
            d="M91 177c-4 19 5 30 19 32-4-9-4-18 1-27"
          />
          <circle cx="95" cy="128" r="3" className="art-eye" />
        </g>
      </svg>
    );
  }

  return (
    <svg
      className={`wildlife-art leopard-art ${className}`}
      viewBox="0 0 520 240"
      role="img"
      aria-label="Interactive line artwork of an African leopard"
      tabIndex={0}
    >
      <circle className="art-sun" cx="92" cy="65" r="38" />
      <path className="art-land" d="M25 201c130-17 280 15 470-7" />
      <g className="leopard-body">
        <path d="M118 151c25-46 98-64 169-43 25 8 44 4 65-3 30-10 54 8 51 31-3 20-25 30-49 26-31-5-56 1-79 13-45 24-111 21-157-24Z" />
        <path d="M144 166l-22 39M190 178l-8 27M315 159l25 42M359 160l36 36" />
        <path
          className="leopard-tail"
          d="M122 146c-54-11-76-47-52-68 18-15 43 3 30 22"
        />
        <path d="M394 113l10-18 10 20M366 113l-4-18-13 20" />
        <circle cx="395" cy="128" r="3" className="art-eye" />
        <g className="leopard-spots">
          <circle cx="181" cy="132" r="5" />
          <circle cx="216" cy="117" r="7" />
          <circle cx="250" cy="145" r="5" />
          <circle cx="287" cy="126" r="7" />
          <circle cx="330" cy="139" r="5" />
        </g>
      </g>
    </svg>
  );
}

function SmartLink({
  href,
  children,
  className = "",
  download,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  download?: boolean;
  ariaLabel?: string;
}) {
  return (
    <a
      href={href}
      className={className}
      download={download}
      aria-label={ariaLabel}
      onClick={(event) => {
        if (download || !href.startsWith("/")) return;
        event.preventDefault();
        window.history.pushState({}, "", href);
        window.dispatchEvent(new PopStateEvent("popstate"));
        const hash = href.split("#")[1];
        requestAnimationFrame(() => {
          if (hash) {
            document.getElementById(hash)?.scrollIntoView();
          } else {
            window.scrollTo({ top: 0, behavior: "instant" });
          }
        });
      }}
    >
      {children}
    </a>
  );
}

function Brand() {
  return (
    <SmartLink href="/" className="brand" ariaLabel="Go to home">
      <span className="brand-mark">TZ</span>
      <span className="brand-name">Treaure Zulu</span>
    </SmartLink>
  );
}

function Sidebar({
  wildlife = "leopard",
}: {
  wildlife?: "elephant" | "leopard";
}) {
  return (
    <aside className={`sidebar ${wildlife}`}>
      <Brand />
      <div className="sidebar-center">
        <p className="eyebrow">Software engineer</p>
        <div className="sidebar-title">
          I build useful
          <br />
          things for the web.
        </div>
        <p className="sidebar-copy">
          Full-stack engineer using AI-assisted workflows to turn complex
          problems into reliable products—and ship them faster.
        </p>
      </div>
      <div className="sidebar-footer">
        <div className="availability">
          <span className="status-dot" />
          Available for new projects
        </div>
        <div className="sidebar-links">
          <SmartLink
            href="https://github.com/treasure-zulu"
            className="text-link"
          >
            GitHub <span>↗</span>
          </SmartLink>
          <SmartLink
            href="/treasure-zulu-cv.pdf"
            className="text-link"
            download
          >
            Download CV <span>↓</span>
          </SmartLink>
        </div>
        <p className="copyright">© 2026 Treaure Zulu </p>
      </div>
      <span className="photo-credit">
        {wildlife === "elephant"
          ? "Elephant · Udara Karunarathna"
          : "Leopard · Geranimo"}{" "}
        / Unsplash
      </span>
    </aside>
  );
}

function Header({ back = false }: { back?: boolean }) {
  return (
    <header className="topbar">
      <SmartLink href={back ? "/" : "/#about"} className="topbar-link">
        {back ? "← Back to work" : "About"}
      </SmartLink>
      {!back && (
        <SmartLink href="/#work" className="topbar-link">
          Work
        </SmartLink>
      )}
      {!back && (
        <SmartLink href="/#contact" className="topbar-link">
          Contact
        </SmartLink>
      )}
      <span className="topbar-rule" />
      <span className="location">Remote · Worldwide</span>
    </header>
  );
}

function HomePage() {
  return (
    <div className="site-shell">
      <Sidebar />
      <main className="content">
        <Header />

        <section className="hero" id="about">
          <div className="hero-index">01 / ABOUT</div>
          <WildlifeArtwork animal="elephant" className="hero-artwork" />
          <div className="hero-title">
            Building scalable software that solves
            <br />
            <span>real-world problems.</span>
          </div>
          <div className="hero-bottom">
            <p className="hero-intro">
              I’m Treaure, a software engineer who pairs strong engineering
              judgment with AI-assisted development to move from idea to
              deployment faster—without compromising reliability.
            </p>
            <SmartLink href="#work" className="circle-link">
              <span>Explore</span>
              <span>↓</span>
            </SmartLink>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-heading">
            <div>
              <p className="section-kicker">02 / SELECTED WORK</p>
              <div className="section-title">Recent projects</div>
            </div>
            <p className="section-note">
              A selection of products I’ve designed, built, and shipped.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <SmartLink
                href={`/projects/${project.slug}`}
                className="project-card"
                key={project.slug}
              >
                <div className={`project-visual ${project.accent}`}>
                  <span className="project-number">{project.number}</span>
                  <div className="window">
                    <div className="window-bar">
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="window-content">
                      <span className="window-line wide" />
                      <span className="window-line" />
                      <span className="window-line short" />
                      <div className="window-grid">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <div>
                    <p className="project-category">{project.category}</p>
                    <div className="project-title">{project.title}</div>
                  </div>
                  <span className="project-arrow">↗</span>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-list">
                    {project.stack.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </SmartLink>
            ))}
          </div>
        </section>

        <section className="skills-section">
          <p className="section-kicker">03 / CAPABILITIES</p>
          <div className="skills-grid">
            <div className="skills-intro">
              <div className="section-title">
                Tools I use to bring ideas to life.
              </div>
              <WildlifeArtwork animal="leopard" className="skills-artwork" />
            </div>
            <div className="skills-list">
              {[
                "Python",
                "React",
                "PostgreSQL",
                "HTML",
                "CSS",
                "AI-assisted development",
              ].map((skill, index) => (
                <div className="skill-row" key={skill}>
                  <span>0{index + 1}</span>
                  <strong>{skill}</strong>
                  <span>+</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="section-kicker light">04 / CONTACT</p>
          <div className="contact-title">
            Have a problem worth
            <br />
            solving? Let’s talk.
          </div>
          <div className="contact-bottom">
            <SmartLink
              href="mailto:hello@treaurezulu.dev"
              className="contact-button"
            >
              Start a conversation <span>↗</span>
            </SmartLink>
            <p>
              Open to full-time roles and thoughtful
              <br />
              freelance collaborations.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

function ProjectPage({ project }: { project: Project }) {
  return (
    <div className="site-shell">
      <Sidebar wildlife="leopard" />
      <main className="content project-page">
        <Header back />
        <section className="project-hero">
          <p className="section-kicker">
            {project.number} / {project.category.toUpperCase()}
          </p>
          <div className="project-page-title">{project.title}</div>
          <p className="project-lede">{project.description}</p>
          <div className={`project-showcase ${project.accent}`}>
            <div className="showcase-browser">
              <div className="showcase-bar">
                <span />
                <span />
                <span />
                <i>app.{project.slug}.local</i>
              </div>
              <div className="showcase-body">
                <div className="showcase-nav" />
                <div className="showcase-copy">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="showcase-cards">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="project-story">
          <div>
            <p className="section-kicker">THE CHALLENGE</p>
            <div className="story-title">Making complexity feel calm.</div>
          </div>
          <div>
            <p className="story-copy">{project.longDescription}</p>
            <div className="tag-list">
              {project.stack.map((item) => (
                <span className="tag dark-tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="metrics">
          {project.metrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </section>

        <section className="features">
          <p className="section-kicker">WHAT I BUILT</p>
          {project.features.map((feature, index) => (
            <div className="feature-row" key={feature}>
              <span>0{index + 1}</span>
              <strong>{feature}</strong>
            </div>
          ))}
        </section>

        <section className="next-project">
          <p>Next project</p>
          <SmartLink
            href={`/projects/${
              projects[(projects.indexOf(project) + 1) % projects.length].slug
            }`}
          >
            {projects[(projects.indexOf(project) + 1) % projects.length].title}
            <span>↗</span>
          </SmartLink>
        </section>
      </main>
    </div>
  );
}

function GithubPage() {
  return (
    <div className="site-shell">
      <Sidebar wildlife="leopard" />
      <main className="content project-page">
        <Header back />
        <section className="github-hero">
          <p className="section-kicker">CODE / OPEN WORK</p>
          <div className="project-page-title">GitHub</div>
          <p className="project-lede">
            A closer look at the code behind my selected projects. These
            portfolio repositories are presented here so you can explore
            architecture, decisions, and outcomes without leaving the site.
          </p>
        </section>
        <section className="repository-list">
          {projects.map((project) => (
            <SmartLink
              href={`/projects/${project.slug}`}
              className="repository-row"
              key={project.slug}
            >
              <span className={`repository-mark ${project.accent}`}>
                {project.title.slice(0, 2).toUpperCase()}
              </span>
              <span className="repository-main">
                <strong>treaurezulu/{project.slug}</strong>
                <small>{project.description}</small>
              </span>
              <span className="repository-stack">{project.stack[0]}</span>
              <span className="repository-arrow">↗</span>
            </SmartLink>
          ))}
        </section>
        <section className="github-note">
          <p className="section-kicker light">WORKING IN PUBLIC</p>
          <div className="story-title">
            Clean code is a form of communication.
          </div>
          <p>
            I value practical abstractions, useful documentation, and code that
            the next person can understand quickly.
          </p>
        </section>
      </main>
    </div>
  );
}

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocation = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handleLocation);
    return () => window.removeEventListener("popstate", handleLocation);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      [
        ".hero-index",
        ".hero-title",
        ".hero-intro",
        ".section-kicker",
        ".section-title",
        ".section-note",
        ".project-card",
        ".skill-row",
        ".contact-title",
        ".contact-bottom",
        ".project-page-title",
        ".project-lede",
        ".story-title",
        ".story-copy",
        ".metric",
        ".feature-row",
        ".repository-row",
      ].join(","),
    );

    targets.forEach((target, index) => {
      target.classList.add("scroll-reveal");
      target.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -9% 0px", threshold: 0.08 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [path]);

  const project = projects.find((item) => path === `/projects/${item.slug}`);

  if (project) return <ProjectPage project={project} />;
  if (path === "/github") return <GithubPage />;
  return <HomePage />;
}
