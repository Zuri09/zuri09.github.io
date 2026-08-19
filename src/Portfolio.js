import { useEffect, useState } from "react";
import Lenis from "lenis";
import {
  ArrowUpRight,
  Award,
  Briefcase,
  Bug,
  CheckCircle2,
  Cpu,
  Download,
  ExternalLink,
  FileCode,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Radar,
  Shield,
  Sparkles,
  TerminalSquare,
  Twitter,
} from "lucide-react";

const DATA = {
  name: "Devansh Patel",
  role: "Security Engineering Intern | AppSec | GRC",
  snapshot: [
    "Security Engineering Intern at Freetrade",
    "UCL MSc Information Security",
    "ISC2 CC · CNSP · C3SA",
  ],
  blurb:
    "I turn vulnerability research into practical fixes across AppSec, GRC, DFIR, VAPT, risk reporting, remediation tracking, and security automation.",
  location: "London, United Kingdom",
  cta: {
    resumeUrl: "/Devansh_Patel_CV.pdf",
    email: "mailto:devanshpatelinfo@gmail.com",
    linkedin: "https://www.linkedin.com/in/devanshpatelcybersecurity",
    github: "https://github.com/Zuri09",
    medium: "https://medium.com/@devanshpatel930",
    comolho: "https://cyber.comolho.com/researcher/profile/zuri99",
    x: "https://x.com/zuriinsecurity",
  },
  stats: [
    { value: "91", label: "Reported vulnerabilities", detail: "Com Olho profile" },
    { value: "66.25%", label: "Acceptance ratio", detail: "Signal quality" },
    { value: "#33", label: "Global rank", detail: "Researcher standing" },
  ],
  highlights: [
    { icon: <Shield className="icon-sm" />, label: "Web / API VAPT" },
    { icon: <Bug className="icon-sm" />, label: "91 reported vulns" },
    { icon: <FileCode className="icon-sm" />, label: "Recon automation" },
    { icon: <Cpu className="icon-sm" />, label: "Top 1% on Com Olho" },
  ],
  projects: [
    {
      title: "ReconRaptor",
      stack: ["Bash", "Go", "subfinder", "httpx", "waybackurls"],
      desc:
        "A Bash and Go recon automation pipeline that reduced average reconnaissance time by roughly 30% across 23 assessments.",
      link: "https://zuri09.github.io/ReconRaptor/",
      type: "Security automation",
      metric: "30% faster recon",
    },
    {
      title: "Dorkinator",
      stack: ["Python", "Regex", "AST"],
      desc:
        "A Google dork generator for bug bounty and VAPT research, built to speed up discovery and targeting.",
      link: "https://zuri09.github.io/Dorkinator/",
      type: "Research tooling",
      metric: "Discovery workflow",
    },
    {
      title: "Missing Person Portal",
      stack: ["HTML", "CSS", "PHP"],
      desc:
        "A reporting portal that reduced reporting time and improved public engagement with real-time updates.",
      link: "https://github.com/Zuri09/MissingPersonPortal",
      type: "Public safety platform",
      metric: "Public reporting",
    },
  ],
  skills: {
    core: [
      "Application Security",
      "DFIR",
      "GRC",
      "Threat Intelligence",
      "Web/API VAPT",
      "OWASP Top 10",
      "CWE mapping",
      "CVSS scoring",
      "Evidence handling",
      "Risk reporting",
      "Remediation tracking",
      "Security automation",
    ],
    tools: [
      "Nmap",
      "Burp Suite",
      "OWASP",
      "SQLMap",
      "Magnet AXIOM",
      "Autopsy",
      "FTK",
      "Wireshark",
      "Shodan",
      "Maltego",
      "nuclei",
      "subfinder",
      "httpx",
      "waybackurls",
    ],
    code: [
      "Bash",
      "Go",
      "Python",
      "Batch scripting",
      "SQL",
      "Git",
      "PHP",
      "HTML/CSS",
      "ISO 27001",
      "NIST CSF",
      "GDPR",
    ],
    languages: [
      "English - Professional working",
      "Hindi - Limited working",
      "Gujarati - Elementary",
    ],
  },
  experience: [
    {
      org: "Freetrade",
      role: "Security Engineering Intern",
      when: "Aug 2026 - Present",
      points: [
        "Supporting security engineering work across application security, risk reduction, and secure delivery.",
        "Applying hands-on vulnerability research, automation, and reporting experience to production security workflows.",
      ],
    },
    {
      org: "Students' Union UCL",
      role: "Student Ambassador",
      when: "Nov 2025 - Present",
      points: [
        "Represent UCL student communities through outreach, events, and student-facing support.",
        "Support communication between students and university teams while building stakeholder engagement experience in London.",
      ],
    },
    {
      org: "UCL",
      role: "Student Representative",
      when: "Oct 2025 - Present",
      points: [
        "Represent student feedback and help connect academic teams with student priorities across the MSc Information Security cohort.",
        "Contribute to programme-level communication, issue tracking, and student experience improvements.",
      ],
    },
    {
      org: "Freelance",
      role: "Bug Bounty Hunter",
      when: "Aug 2024 - Present",
      points: [
        "Reported 91 vulnerabilities on Com Olho, with 25,625 points, a 66.25% acceptance ratio, Top 1% recognition, Global Rank 33, and State Rank 10 in Maharashtra.",
        "Reported XSS, CORS misconfiguration, token exposure, sensitive data exposure, security misconfiguration, broken authentication, SSRF, and hardcoded credential issues.",
        "Authored structured remediation notes and redacted write-ups aligned to OWASP Top 10 and CWE.",
        "Automated reconnaissance with Bash and Go scripts, including ReconRaptor, to streamline bug bounty and VAPT workflows.",
      ],
    },
    {
      org: "Aetheris",
      role: "Cyber Security Analyst",
      when: "Jan 2025 - May 2025",
      points: [
        "Conducted vulnerability assessments of web applications using Burp Suite and OWASP methodology.",
        "Assisted in real-world digital forensics investigations under expert guidance.",
        "Gained exposure to Israeli-grade forensic tools and techno-legal processes.",
        "Supported incident analysis, report drafting, and client-focused remediation plans.",
        "Collaborated with senior analysts on cybersecurity compliance and awareness projects.",
      ],
    },
    {
      org: "eSecurify Technologies",
      role: "Cyber Security Analyst",
      when: "Jun 2024 - Dec 2024",
      points: [
        "Built practical experience in web application security and vulnerability identification.",
        "Led a team during live Vulnerability Assessment and Penetration Testing projects for a client.",
        "Contributed to development of a proprietary company application.",
        "Applied cybersecurity concepts to real-world scenarios, strengthening secure development and testing skills.",
      ],
    },
    {
      org: "CYBER CRIME HELPLINE LLP",
      role: "Digital Forensics Intern",
      when: "Jun 2023 - Aug 2023",
      points: [
        "Conducted mobile forensics investigations and extracted critical digital evidence from multiple device types.",
        "Developed batch scripting tools for auditing, improving investigation efficiency by approximately 40%.",
        "Worked with CISA auditing principles and open-source intelligence methodologies.",
        "Built forensic support tools with batch scripting to help the team handle investigative tasks more efficiently.",
      ],
    },
    {
      org: "FlipLocation Pvt Ltd",
      role: "Frontend Tester",
      when: "May 2022 - Jul 2022",
      points: [
        "Tested frontend workflows and strengthened practical understanding of testing methodologies.",
        "Gained early exposure to tools and concepts including SQLMap and Lambda during product testing work.",
      ],
    },
  ],
  education: [
    {
      where: "UCL",
      degree: "MSc, Information Security",
      when: "2025 - 2026",
      detail: "Postgraduate study focused on information security at University College London.",
    },
    {
      where: "Symbiosis Skills & Professional University",
      degree: "Bachelor of Technology - BTech, Cyber Security",
      when: "Sep 2021 - Jun 2025",
      detail: "Undergraduate cybersecurity study with applied work across AppSec, OSINT, and forensics.",
    },
  ],
  certs: [
    "ISC2 Certified in Cybersecurity (CC)",
    "CNSP",
    "C3SA",
    "Introduction to Dark Web, Anonymity, and Cryptocurrency",
    "OSINTCon 2025",
    "Bash for Beginners - Shell Scripting for Automation",
    "Python for Beginners - Learn Python Programming in Hindi",
  ],
  hof: [
    { name: "BIA", logo: "/logos/BIA.png", url: "#" },
    { name: "Nykaa", logo: "/logos/NYKAA.png", url: "#" },
    { name: "Quickwork", logo: "/logos/QUICKWORK.png", url: "#" },
    { name: "Singapore", logo: "/logos/SINGAPOURE.jpg", url: "#" },
    { name: "HDFC Life", logo: "/logos/HDFCLIFE.png", url: "#" },
    { name: "SGRH", logo: "/logos/SGRH.png", url: "#" },
    { name: "NBC", logo: "/logos/NBC.png", url: "#" },
    { name: "DTDC", logo: "/logos/DTDC.png", url: "#" },
    { name: "Dabur", logo: "/logos/DABUR.png", url: "#" },
    { name: "Tata Motors", logo: "/logos/TATAMOTORS.png", url: "#" },
    { name: "Ixigo", logo: "/logos/IXIGO.png", url: "#" },
    { name: "Elan", logo: "/logos/ELAN.png", url: "#" },
    { name: "Eurostar", logo: "/logos/Eurostar-Logo.png", url: "#" },
    { name: "CK Birla", logo: "/logos/CKBIRLA.png", url: "#" },
    { name: "Com Olho", logo: "/logos/COMOLHO.png", url: "https://cyber.comolho.com/researcher/profile/zuri99" },
    { name: "PNB Housing", logo: "/logos/PNB_HOUSING.png", url: "#" },
    { name: "Allcargo", logo: "/logos/ALLCARGO.png", url: "#" },
    { name: "Max Healthcare", logo: "/logos/MAX_HEALTHCARE.png", url: "#" },
    { name: "Perfios", logo: "/logos/Perfios.png", url: "#" },
  ],
};

const navItems = [
  ["Vulns", "#found-vulnerabilities"],
  ["Experience", "#experience"],
  ["Work", "#projects"],
  ["Skills", "#skills"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

function useLenisScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    const lenis = new Lenis({
      duration: 1.08,
      smoothWheel: true,
      wheelMultiplier: 0.92,
      touchMultiplier: 1.08,
    });

    let frameId;
    function raf(time) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);
}

function useRevealMotion() {
  useEffect(() => {
    const targets = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.14 }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);
}

function SectionHeading({ eyebrow, title, children, align = "left" }) {
  return (
    <div className={`section-heading reveal ${align === "center" ? "section-heading-center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children ? <p className="section-lede">{children}</p> : null}
    </div>
  );
}

function Pill({ children, tone = "neutral" }) {
  return <span className={`pill pill-${tone}`}>{children}</span>;
}

function ActionLink({ href, children, variant = "ghost", icon: Icon, label }) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
      aria-label={label}
      className={`action-link action-${variant}`}
    >
      {Icon ? <Icon className="icon-sm" /> : null}
      <span>{children}</span>
    </a>
  );
}

export default function Portfolio() {
  const [year, setYear] = useState(new Date().getFullYear());
  useLenisScroll();
  useRevealMotion();

  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <div className="site-shell">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <header className="site-header">
        <div className="nav-wrap">
          <a href="#home" className="brand-lockup" aria-label="Go to home">
            <span className="brand-mark">DP</span>
            <span className="brand-text">devansh.security</span>
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            {navItems.map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </nav>

          <a href={DATA.cta.email} className="nav-contact">
            <Mail className="icon-sm" />
            <span>Contact</span>
          </a>
        </div>
      </header>

      <main id="main">
        <section id="home" className="hero-section">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-noise" aria-hidden="true" />

          <div className="container hero-layout">
            <div className="hero-copy reveal">
              <div className="status-row">
                <span className="signal-dot" />
                <span>Open to UK cyber roles</span>
                <span className="status-separator" />
                <MapPin className="icon-sm" />
                <span>{DATA.location}</span>
              </div>

              <p className="eyebrow hero-eyebrow">{DATA.role}</p>
              <h1>
                Security researcher. Fixes built.
              </h1>
              <div className="hero-snapshot" aria-label="Current profile snapshot">
                {DATA.snapshot.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <p className="hero-body">{DATA.blurb}</p>

              <div className="hero-actions" aria-label="Profile links">
                <ActionLink
                  href={DATA.cta.resumeUrl}
                  variant="primary"
                  icon={Download}
                  label="Open Devansh Patel resume"
                >
                  Resume
                </ActionLink>
                <ActionLink href={DATA.cta.github} icon={Github} label="Open GitHub profile">
                  GitHub
                </ActionLink>
                <ActionLink href={DATA.cta.linkedin} icon={Linkedin} label="Open LinkedIn profile">
                  LinkedIn
                </ActionLink>
                <ActionLink href={DATA.cta.medium} icon={FileText} label="Open Medium profile">
                  Medium
                </ActionLink>
              </div>

              <div className="highlight-row" aria-label="Core highlights">
                {DATA.highlights.map((item) => (
                  <Pill key={item.label} tone="blue">
                    {item.icon}
                    {item.label}
                  </Pill>
                ))}
              </div>
            </div>

            <aside className="hero-visual reveal" aria-label="Recruiter proof summary">
              <div className="portrait-shell">
                <img
                  src="/profile.png"
                  alt="Devansh Patel"
                  width="640"
                  height="800"
                  className="portrait-image"
                />
                <div className="portrait-badge">
                  <Radar className="icon-md" />
                  <span>validated researcher profile</span>
                </div>
              </div>

              <div className="proof-panel">
                <div>
                  <p className="panel-kicker">current focus</p>
                  <h2>AppSec + GRC + DFIR</h2>
                </div>
                <Shield className="panel-icon" />
                <ul>
                  {["CVSS-mapped PoCs", "Risk and control reports", "Remediation tracking"].map((item) => (
                    <li key={item}>
                      <CheckCircle2 className="icon-sm" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pipeline-panel">
                <p className="panel-kicker">report pipeline</p>
                {["recon", "proof", "risk", "fix"].map((item, index) => (
                  <div key={item} className="pipeline-step">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{item}</strong>
                  </div>
                ))}
              </div>
            </aside>
          </div>

          <div className="container stat-band reveal" aria-label="Com Olho metrics">
            {DATA.stats.map((stat) => (
              <a
                key={stat.label}
                href={DATA.cta.comolho}
                target="_blank"
                rel="noreferrer"
                className="stat-card"
              >
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
                <span className="stat-detail">{stat.detail}</span>
              </a>
            ))}
          </div>
        </section>

        <section id="found-vulnerabilities" className="section section-alt">
          <div className="container">
            <div className="split-heading">
              <SectionHeading eyebrow="Recognition" title="Found Vulnerabilities In">
                Public programs and organizations where responsible disclosure work identified real
                security issues.
              </SectionHeading>
              <a href={DATA.cta.comolho} target="_blank" rel="noreferrer" className="proof-link reveal">
                <ExternalLink className="icon-sm" />
                Com Olho profile
              </a>
            </div>

            <div className="logo-marquee reveal" aria-label="Hall of fame logos">
              <div className="logo-grid">
                {DATA.hof.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.url || "#"}
                    target={item.url && item.url !== "#" ? "_blank" : undefined}
                    rel={item.url && item.url !== "#" ? "noreferrer" : undefined}
                    className="logo-tile"
                    style={{ "--delay": `${Math.min(index * 24, 240)}ms` }}
                    aria-label={item.name}
                  >
                    <img src={item.logo} alt={item.name} loading="lazy" width="160" height="80" />
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <SectionHeading eyebrow="Experience" title="Evidence-led work across security and leadership.">
              A focused record across vulnerability reporting, remediation support, risk/control
              reporting, student representation, and digital forensics.
            </SectionHeading>

            <div className="experience-list">
              {DATA.experience.map((item, index) => (
                <article
                  key={`${item.org}-${item.when}`}
                  className="timeline-card reveal"
                  style={{ "--delay": `${Math.min(index * 44, 260)}ms` }}
                >
                  <div className="timeline-meta">
                    <div className="card-icon">
                      <Briefcase className="icon-md" />
                    </div>
                    <span>{item.when}</span>
                  </div>
                  <div className="timeline-content">
                    <p>{item.role}</p>
                    <h3>{item.org}</h3>
                    <ul>
                      {item.points.map((point) => (
                        <li key={point}>
                          <CheckCircle2 className="icon-sm" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section section-alt">
          <div className="container">
            <SectionHeading eyebrow="Selected Work" title="Security tools that point to live work.">
              Recruiters should not have to imagine the output. These project cards now open the
              live project sites where available.
            </SectionHeading>

            <div className="project-grid">
              {DATA.projects.map((project, index) => (
                <a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-card reveal"
                  style={{ "--delay": `${index * 70}ms` }}
                >
                  <div className="project-topline">
                    <Pill tone="amber">{project.type}</Pill>
                    <ArrowUpRight className="icon-md" />
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="project-metric">
                    <Sparkles className="icon-sm" />
                    <span>{project.metric}</span>
                  </div>
                  <div className="stack-row">
                    {project.stack.map((item) => (
                      <Pill key={item}>{item}</Pill>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <SectionHeading eyebrow="Capabilities" title="A practical security toolkit.">
              Methods and tools used across offensive testing, investigations, security operations,
              governance, and automation.
            </SectionHeading>

            <div className="skills-grid">
              {Object.entries(DATA.skills).map(([category, items], index) => (
                <article
                  key={category}
                  className="skill-card reveal"
                  style={{ "--delay": `${index * 54}ms` }}
                >
                  <div className="skill-heading">
                    <TerminalSquare className="icon-md" />
                    <h3>{category}</h3>
                  </div>
                  <div className="skill-cloud">
                    {items.map((item) => (
                      <Pill key={item}>{item}</Pill>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section section-compact">
          <div className="container">
            <SectionHeading eyebrow="Education" title="Academic grounding in cybersecurity.">
              Formal study paired with hands-on security projects and professional practice.
            </SectionHeading>

            <div className="education-grid">
              {DATA.education.map((item, index) => (
                <article
                  key={item.where}
                  className="education-card reveal"
                  style={{ "--delay": `${index * 70}ms` }}
                >
                  <div className="card-icon">
                    <GraduationCap className="icon-md" />
                  </div>
                  <span>{item.when}</span>
                  <h3>{item.where}</h3>
                  <p className="degree">{item.degree}</p>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="section section-compact">
          <div className="container">
            <SectionHeading eyebrow="Certifications" title="Validated security fundamentals." />
            <div className="cert-grid">
              {DATA.certs.map((cert, index) => (
                <span key={cert} className="cert-pill reveal" style={{ "--delay": `${Math.min(index * 35, 180)}ms` }}>
                  <Award className="icon-sm" />
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-layout">
            <div className="reveal">
              <p className="eyebrow">Contact</p>
              <h2>Have a security project or role I should look at?</h2>
              <p>
                Send me the context, scope, and what success looks like. I am happy to talk about
                GRC, VAPT, SOC, DFIR, recon tooling, or security research.
              </p>
            </div>
            <div className="contact-actions reveal">
              <ActionLink href={DATA.cta.email} variant="primary" icon={Mail} label="Email Devansh Patel">
                Email
              </ActionLink>
              <ActionLink href={DATA.cta.linkedin} icon={Linkedin} label="Open LinkedIn">
                LinkedIn
              </ActionLink>
              <ActionLink href={DATA.cta.medium} icon={FileText} label="Open Medium">
                Medium
              </ActionLink>
              <ActionLink href={DATA.cta.x} icon={Twitter} label="Open X profile">
                X
              </ActionLink>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-layout">
          <p>(c) {year} {DATA.name}. Stay curious, stay dangerous.</p>
          <div>
            <a href={DATA.cta.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={DATA.cta.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={DATA.cta.email}>Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
