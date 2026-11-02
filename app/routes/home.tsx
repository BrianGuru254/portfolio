import { useState } from "react"
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react"

import AeroShards from "~/components/AeroShards"

const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#focus" },
  { label: "Selected work", href: "#work" },
  { label: "Contact", href: "#contact" },
]

const focusAreas = [
  {
    number: "01",
    title: "Frontend development",
    description:
      "Building clear, responsive interfaces with React, TypeScript, and Tailwind CSS.",
  },
  {
    number: "02",
    title: "Backend systems & APIs",
    description:
      "Exploring server-side application logic and REST APIs with Node.js and Express.",
  },
  {
    number: "03",
    title: "Databases & deployment",
    description:
      "Continuing to learn how applications store data and move from development to deployment.",
  },
]

const projects = [
  {
    number: "01",
    category: "Community website",
    title: "Mitombili SDA Church Website",
    description:
      "A digital home for the Mitombili SDA Church community, with information and resources for worship, sermons, events, and ministries. The repository includes a React and TypeScript frontend and an Express API with sermon and event routes.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Vercel",
    ],
    artwork: "work-artwork--one",
    repository: "https://github.com/BrianGuru254/Mitombili-sda-church-website-",
    demo: "https://mitombilisdachurch.vercel.app",
  },
]

export function meta() {
  return [
    { title: "Brian Kiprop — Full-Stack Web Developer" },
    {
      name: "description",
      content:
        "Brian Kiprop is a full-stack web developer and software engineering student building practical web applications.",
    },
  ]
}

function SectionHeading({
  eyebrow,
  id,
  title,
}: {
  eyebrow: string
  id: string
  title: string
}) {
  return (
    <div className="mb-10 max-w-2xl sm:mb-14">
      <p className="mb-4 text-xs font-medium tracking-[0.24em] text-violet-300 uppercase">
        {eyebrow}
      </p>
      <h2
        className="text-3xl leading-tight font-medium tracking-tight text-white sm:text-5xl"
        id={id}
      >
        {title}
      </h2>
    </div>
  )
}

export default function Home() {
  const [gpuError, setGpuError] = useState<Error | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="portfolio-page relative isolate overflow-clip bg-[#080611] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10"
      >
        <AeroShards
          accentColor="#A855F7"
          backgroundColor="transparent"
          count={900}
          depthOfField={0.75}
          holdToGather
          markers="plus"
          material="glass"
          mouseInteraction
          onError={setGpuError}
          placement="full"
          pulseOnClick
          shardColor="#896ABD"
          style={{ height: "100%", width: "100%" }}
          vignette={0.3}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080611]/40 via-[#080611]/75 to-[#080611]" />
      </div>

      <header className="sticky top-0 z-30 border-b border-white/[0.08] bg-[#080611]/75 backdrop-blur-xl">
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a
            aria-label="Portfolio home"
            className="inline-flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300"
            href="#home"
            onClick={() => setMenuOpen(false)}
          >
            <span className="flex size-8 items-center justify-center rounded-full border border-violet-300/50 text-sm text-violet-200">
              BK
            </span>
            <span className="text-xs font-medium tracking-[0.18em] text-white/85 uppercase">
              Brian Kiprop
            </span>
          </a>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-8 sm:flex"
          >
            {navigation.map((item) => (
              <a
                className="rounded-sm text-sm text-white/65 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="flex size-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-violet-300/60 hover:text-violet-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300 sm:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            {menuOpen ? (
              <X aria-hidden="true" size={19} />
            ) : (
              <Menu aria-hidden="true" size={19} />
            )}
          </button>
        </div>

        <nav
          aria-label="Mobile navigation"
          className="border-t border-white/[0.08] bg-[#0c0916] px-5 py-3 sm:hidden"
          hidden={!menuOpen}
          id="mobile-navigation"
        >
          {navigation.map((item) => (
            <a
              className="block rounded-sm px-2 py-3 text-sm text-white/75 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-violet-300"
              href={item.href}
              key={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      {gpuError && (
        <p
          className="fixed top-[5.25rem] right-4 z-40 max-w-sm rounded-lg border border-amber-200/20 bg-[#15101e]/95 px-4 py-3 text-sm text-amber-100 shadow-xl"
          role="status"
        >
          The animated background is unavailable: {gpuError.message}
        </p>
      )}

      <section
        aria-labelledby="hero-title"
        className="mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:px-12"
        id="home"
      >
        <div className="relative z-10 max-w-3xl">
          <p className="mb-6 inline-flex items-center gap-3 text-xs font-medium tracking-[0.2em] text-violet-200/90 uppercase">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-violet-300"
            />
            Full-stack web developer · Software engineering student
          </p>
          <h1
            className="text-6xl leading-[0.98] font-medium tracking-[-0.06em] text-white sm:text-8xl lg:text-[7.5rem]"
            id="hero-title"
          >
            Brian
            <br />
            <span className="bg-gradient-to-r from-violet-200 via-fuchsia-200 to-white bg-clip-text text-transparent">
              Kiprop.
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/70 sm:text-xl">
            I enjoy turning ideas into practical web applications, with
            thoughtful user interfaces and reliable application logic.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-violet-200 px-6 text-sm font-medium text-[#160e21] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-200"
              href="#work"
            >
              Explore selected work
              <ArrowDown
                aria-hidden="true"
                className="transition-transform group-hover:translate-y-0.5"
                size={16}
              />
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm text-white/80 transition-colors hover:border-violet-200/60 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-200"
              href="#contact"
            >
              Get in touch
            </a>
          </div>
          <p className="mt-5 text-xs text-white/45">
            Growing through hands-on projects and continued learning.
          </p>
        </div>

        <div
          aria-hidden="true"
          className="relative mx-auto flex aspect-square w-full max-w-[25rem] items-center justify-center"
        >
          <div className="absolute inset-[8%] rounded-full border border-violet-200/15" />
          <div className="absolute inset-[20%] rounded-full border border-dashed border-violet-200/20" />
          <div className="absolute inset-[31%] rounded-full bg-violet-500/10 blur-2xl" />
          <div className="portfolio-orb relative flex aspect-square w-[45%] items-center justify-center rounded-[32%] border border-white/30 bg-gradient-to-br from-white/20 via-violet-300/10 to-fuchsia-400/20 shadow-[0_0_90px_rgba(168,85,247,0.2)] backdrop-blur-md">
            <div className="absolute inset-[12%] rounded-[30%] border border-white/20" />
            <div className="size-3 rounded-full bg-white shadow-[0_0_28px_10px_rgba(216,180,254,0.75)]" />
          </div>
          <span className="absolute top-[15%] right-[22%] size-2 rounded-full bg-fuchsia-200 shadow-[0_0_20px_5px_rgba(232,121,249,0.5)]" />
          <span className="absolute bottom-[19%] left-[18%] size-1.5 rounded-full bg-violet-200 shadow-[0_0_18px_4px_rgba(196,181,253,0.6)]" />
          <span className="absolute right-0 bottom-[34%] rounded-full border border-white/10 bg-[#100c1b]/80 px-3 py-2 text-[10px] tracking-[0.18em] text-white/60 uppercase backdrop-blur">
            Build with care
          </span>
        </div>
      </section>

      <section
        aria-labelledby="about-title"
        className="scroll-mt-24 border-y border-white/[0.08] bg-[#0b0813]/75"
        id="about"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
          <div>
            <p className="mb-4 text-xs font-medium tracking-[0.24em] text-violet-300 uppercase">
              A little about me
            </p>
            <h2
              className="max-w-md text-3xl leading-tight font-medium tracking-tight text-white sm:text-5xl"
              id="about-title"
            >
              The person behind the pixels.
            </h2>
          </div>
          <div className="max-w-2xl">
            <p className="text-base leading-8 text-white/70 sm:text-lg">
              Hi, I’m Brian Kiprop, a full-stack developer and software
              engineering student. I enjoy turning ideas into practical web
              applications, with a focus on thoughtful user interfaces and
              reliable application logic. I’m continuing to grow my skills
              across frontend development, backend systems, APIs, databases, and
              deployment.
            </p>
            <dl className="mt-9 grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-3">
              <div>
                <dt className="text-xs tracking-[0.15em] text-white/40 uppercase">
                  Role
                </dt>
                <dd className="mt-2 text-sm text-white/80">
                  Full-stack web developer
                </dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.15em] text-white/40 uppercase">
                  Currently
                </dt>
                <dd className="mt-2 text-sm text-white/80">
                  Software engineering student
                </dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.15em] text-white/40 uppercase">
                  Find me
                </dt>
                <dd className="mt-2 text-sm text-white/80">
                  GitHub & LinkedIn
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="focus-title"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
        id="focus"
      >
        <SectionHeading
          eyebrow="Skills & interests"
          id="focus-title"
          title="Learning by building practical software."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {focusAreas.map((area) => (
            <article
              className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-colors hover:border-violet-200/30 hover:bg-white/[0.055] sm:p-8"
              key={area.number}
            >
              <span className="text-xs tracking-[0.2em] text-violet-300">
                {area.number}
              </span>
              <h3 className="mt-10 text-xl font-medium text-white">
                {area.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/60">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="work-title"
        className="scroll-mt-24 border-y border-white/[0.08] bg-[#0b0813]/75"
        id="work"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <SectionHeading
              eyebrow="Selected work"
              id="work-title"
              title="A project built for community connection."
            />
            <a
              className="mb-10 inline-flex min-h-11 items-center gap-2 text-sm text-violet-200 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-200 sm:mb-14"
              href="#contact"
            >
              Discuss a project
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </div>

          <div className="grid max-w-3xl gap-5">
            {projects.map((project) => (
              <article
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#100c1b]/90"
                key={project.number}
              >
                <div
                  aria-hidden="true"
                  className={`work-artwork ${project.artwork} relative flex aspect-[1.5] items-center justify-center overflow-hidden border-b border-white/10`}
                >
                  <div className="work-artwork__shape" />
                  <span className="relative z-10 text-xs tracking-[0.22em] text-white/55 uppercase">
                    {project.category}
                  </span>
                  <span className="absolute top-4 right-4 text-xs text-white/40">
                    {project.number}
                  </span>
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="text-lg font-medium text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-white/60">
                    {project.description}
                  </p>
                  <ul
                    aria-label="Project skills and tools"
                    className="mt-5 flex flex-wrap gap-2"
                  >
                    {project.tags.map((tag) => (
                      <li
                        className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-white/55"
                        key={tag}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                    <a
                      className="inline-flex min-h-10 items-center gap-2 text-sm text-violet-200 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-200"
                      href={project.repository}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Source code
                      <ArrowUpRight aria-hidden="true" size={14} />
                    </a>
                    <a
                      className="inline-flex min-h-10 items-center gap-2 text-sm text-violet-200 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-200"
                      href={project.demo}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Live demo
                      <ArrowUpRight aria-hidden="true" size={14} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="contact-title"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
        id="contact"
      >
        <div className="relative overflow-hidden rounded-3xl border border-violet-200/20 bg-gradient-to-br from-violet-500/15 via-[#120d20] to-fuchsia-500/[0.08] px-6 py-12 sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 -right-20 size-80 rounded-full bg-violet-500/15 blur-3xl"
          />
          <div className="relative max-w-2xl">
            <p className="mb-4 text-xs font-medium tracking-[0.24em] text-violet-200 uppercase">
              Contact
            </p>
            <h2
              className="text-4xl leading-tight font-medium tracking-tight text-white sm:text-6xl"
              id="contact-title"
            >
              Let’s connect.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/65">
              I’m continuing to grow as a developer and enjoy connecting with
              people who care about building practical software. Find me on
              GitHub or LinkedIn.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-6 text-sm font-medium text-[#160e21] transition-colors hover:bg-violet-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                href="https://github.com/BrianGuru254"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
              <a
                className="inline-flex min-h-12 items-center gap-3 rounded-full border border-white/20 px-6 text-sm text-white/85 transition-colors hover:border-violet-200/60 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-200"
                href="https://www.linkedin.com/in/brianguru254"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>© {new Date().getFullYear()} Brian Kiprop.</p>
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-5 gap-y-2"
          >
            {navigation.map((item) => (
              <a
                className="rounded-sm transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
            <a
              className="rounded-sm transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300"
              href="#home"
            >
              Back to top
            </a>
          </nav>
        </div>
      </footer>
    </main>
  )
}
