import { useState, useEffect } from "react";
import {
  ArrowRight,
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
  Shield,
  Terminal,
  Twitter,
} from "lucide-react";

const DATA = {
  name: "Devansh Patel",
  role: "Graduate Cybersecurity Consultant",
  tagline: "Penetration testing, security operations, DFIR, GRC, and bug bounty research",
  blurb:
    "MSc Information Security candidate at UCL with hands-on experience across penetration testing, security operations, digital forensics, and risk management.",
  location: "London, United Kingdom",
  cta: {
    resumeUrl: "/Devansh_Patel_CV.pdf",
    email: "mailto:devanshpatel.work@gmail.com",
    linkedin: "https://www.linkedin.com/in/devanshpatelcybersecurity",
    github: "https://github.com/Zuri09",
    medium: "https://medium.com/@devanshpatel930",
    x: "https://x.com/zuriinsecurity",
  },
  stats: [
    { value: "20", label: "Confirmed disclosures" },
    { value: "2C / 4H", label: "Critical and high findings" },
    { value: "10k+", label: "Writeup readers" },
  ],
  highlights: [
    { icon: <Shield className="h-4 w-4" />, label: "Web / API VAPT" },
    { icon: <Bug className="h-4 w-4" />, label: "20 confirmed vulns" },
    { icon: <FileCode className="h-4 w-4" />, label: "Python / Go" },
    { icon: <Cpu className="h-4 w-4" />, label: "SOC and DFIR" },
  ],
  projects: [
    {
      title: "ReconRaptor",
      stack: ["Bash", "Go", "subfinder", "httpx", "waybackurls"],
      desc:
        "A Bash and Go recon automation pipeline that reduced average reconnaissance time by roughly 30% across 23 assessments.",
      link: "https://github.com/Zuri09/ReconRaptor",
      type: "Security automation",
    },
    {
      title: "Dorkinator",
      stack: ["Python", "Regex", "AST"],
      desc:
        "A Google dork generator for bug bounty and VAPT research, built to speed up discovery and targeting.",
      link: "https://github.com/Zuri09/Dorkinator",
      type: "Research tooling",
    },
    {
      title: "Missing Person Portal",
      stack: ["HTML", "CSS", "PHP"],
      desc:
        "A reporting portal that reduced reporting time and improved public engagement with real-time updates.",
      link: "https://github.com/Zuri09/MissingPersonPortal",
      type: "Public safety platform",
    },
  ],
  skills: {
    core: [
      "Manual Web/API VAPT",
      "OWASP Top 10",
      "CVSS v3.1",
      "Threat modelling",
      "Vulnerability triage",
      "Incident response support",
      "Risk reporting",
      "DFIR triage",
    ],
    tools: [
      "Burp Suite",
      "Nmap",
      "Nessus",
      "Wireshark",
      "Shodan",
      "Maltego",
      "Magnet AXIOM",
      "Autopsy",
      "FTK",
      "nuclei",
      "subfinder",
      "httpx",
      "waybackurls",
      "ELK Stack",
      "Splunk",
    ],
    code: [
      "Python",
      "Bash",
      "Go",
      "SQL",
      "Git",
      "AWS/Azure/GCP fundamentals",
      "IAM/PAM",
      "Zero Trust",
      "DevSecOps concepts",
      "MITRE ATT&CK",
      "ISO 27001",
      "NIST CSF",
      "GDPR",
    ],
  },
  experience: [
    {
      org: "HackerOne, Bugcrowd, YesWeHack",
      role: "Bug Bounty Researcher (Freelance)",
      when: "Aug 2024 - Present",
      points: [
        "Provided PoCs, CVSS v3.1 mapped severity ratings, and remediation guidance for 20 responsibly disclosed vulnerabilities: 2 Critical, 4 High, 6 Medium, and 8 Low.",
        "Built ReconRaptor, a Bash and Go automation pipeline integrating subfinder, httpx, and waybackurls, reducing average reconnaissance time by approximately 30% across 23 assessments.",
        "Earned Hall of Fame recognition across multiple programs and published 10+ technical write-ups on InfoSecWriteups and Medium covering XSS, CSRF, SSRF, and broader AppSec topics.",
      ],
    },
    {
      org: "Aethris Technologies",
      role: "Cyber Security Analyst (Contract)",
      when: "Jan 2025 - May 2025",
      points: [
        "Authored a standardised risk and control report template and triage checklist, reducing median investigation closure from 3.4 to 2.3 days across 20 cases.",
        "Produced prioritised risk and control reports for IT, compliance, and leadership stakeholders, tracking remediation progress and advising on control improvements.",
      ],
    },
    {
      org: "eSecurify Technologies",
      role: "Cyber Security Intern (Web/API VAPT)",
      when: "Jun 2024 - Dec 2024",
      points: [
        "Supported two rounds of remediation verification with the client engineering team across a 3-week web and REST API VAPT engagement.",
        "Identified vulnerabilities mapped to OWASP Top 10 and CVSS v3.1 through manual and automated testing on a 2-person team under senior consultant supervision.",
        "Co-authored prioritised technical reports with actionable mitigations and policy recommendations.",
      ],
    },
    {
      org: "Cyber Crime Helpline LLP",
      role: "Digital Forensics Intern",
      when: "Jun 2023 - Aug 2023",
      points: [
        "Processed 8 case files using Magnet AXIOM, Autopsy, and FTK.",
        "Automated repetitive analysis tasks with BAT scripting, reducing manual effort by approximately 50% and improving consistency across cases.",
      ],
    },
  ],
  education: [
    {
      where: "UCL",
      degree: "MSc Information Security",
      when: "Sep 2025 - Sep 2026",
      detail:
        "Dissertation: adapting Tor exit node detection techniques to commercial VPN providers using ASN/BGP clustering, JA3/JA4 TLS fingerprinting, and latency/jitter profiling.",
    },
    {
      where: "SSPU",
      degree: "B.Tech CS & IT, Cyber Security",
      when: "Sep 2021 - May 2025",
      detail: "Cybersecurity graduate with applied work across AppSec, OSINT, and forensics.",
    },
  ],
  certs: [
    "ISC2 Certified in Cybersecurity (CC)",
    "SecOps Group CNSP",
    "SecOps Group CAP",
    "Cyber Warfare Labs C3SA",
    "CompTIA Security+ in progress",
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
    { name: "CK Birla", logo: "/logos/CKBIRLA.png", url: "#" },
    { name: "Com Olho", logo: "/logos/COMOLHO.png", url: "#" },
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

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
      {children ? <p className="mt-4 text-base leading-7 text-slate-300">{children}</p> : null}
    </div>
  );
}

function Pill({ children, tone = "slate" }) {
  const tones = {
    slate: "border-slate-700 bg-slate-900 text-slate-200",
    cyan: "border-cyan-400/30 bg-cyan-400/10 text-cyan-100",
    amber: "border-amber-300/30 bg-amber-300/10 text-amber-100",
  };

  return (
    <span className={`inline-flex items-center gap-2 rounded-md border px-3 py-1 text-xs ${tones[tone]}`}>
      {children}
    </span>
  );
}

export default function Portfolio() {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <div className="min-h-screen bg-[#071014] text-slate-100 antialiased">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#071014]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="group flex items-center gap-3" aria-label="Go to home">
            <span className="grid h-9 w-9 place-items-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-sm font-bold text-cyan-100">
              DP
            </span>
            <span className="hidden text-sm font-semibold tracking-tight text-white sm:block">
              devansh.security
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="transition hover:text-white">
                {label}
              </a>
            ))}
          </nav>
          <a
            href={DATA.cta.email}
            className="inline-flex h-10 items-center gap-2 rounded-md bg-white px-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">Contact</span>
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 security-grid opacity-40" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24 lg:py-28">
            <div className="flex flex-col justify-center">
              <div className="mb-6 flex flex-wrap gap-2">
                <Pill tone="cyan">
                  <Shield className="h-3.5 w-3.5" />
                  Available for security roles
                </Pill>
                <Pill tone="amber">
                  <Terminal className="h-3.5 w-3.5" />
                  {DATA.location}
                </Pill>
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                {DATA.role}
              </p>
              <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
                {DATA.name}
              </h1>
              <p className="mt-5 max-w-2xl text-xl leading-8 text-slate-300">{DATA.tagline}</p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">{DATA.blurb}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={DATA.cta.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-md bg-cyan-300 px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                  <Download className="h-4 w-4" />
                  Resume
                </a>
                <a
                  href={DATA.cta.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-md border border-white/15 px-5 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/5"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={DATA.cta.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-md border border-white/15 px-5 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/5"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href={DATA.cta.medium}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-md border border-white/15 px-5 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/5"
                >
                  <FileText className="h-4 w-4" />
                  Medium
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {DATA.highlights.map((item) => (
                  <Pill key={item.label}>
                    {item.icon}
                    {item.label}
                  </Pill>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid gap-4 sm:grid-cols-[0.82fr_1fr] md:grid-cols-1 lg:grid-cols-[0.82fr_1fr]">
                <div className="overflow-hidden rounded-lg border border-white/10 bg-slate-900">
                  <img
                    src="/profile.png"
                    alt="Devansh Patel"
                    className="aspect-[4/5] h-full w-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="grid content-between gap-4">
                  <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20">
                    <div className="mb-5 flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                          Current focus
                        </p>
                        <p className="mt-2 text-lg font-semibold text-white">AppSec + GRC + DFIR</p>
                      </div>
                      <Shield className="h-8 w-8 text-cyan-300" />
                    </div>
                    <div className="space-y-3">
                      {["CVSS-mapped PoCs", "Risk and control reports", "Security writeups"].map((item) => (
                        <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                          <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {DATA.stats.map((stat) => (
                      <div key={stat.label} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                        <p className="text-2xl font-semibold text-white">{stat.value}</p>
                        <p className="mt-1 text-xs leading-5 text-slate-400">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr]">
            <SectionHeading eyebrow="Intro" title="Security work with clear evidence and useful remediation.">
              I translate technical findings into stakeholder-facing reports, PoCs, severity ratings,
              and control improvements that help teams fix issues at pace.
            </SectionHeading>
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6 text-base leading-8 text-slate-300">
              My experience spans public bug bounty programs, web and REST API VAPT, security
              operations concepts, digital forensics, and risk management. I am familiar with ISO
              27001, GDPR, NIST CSF, MITRE ATT&CK, and CVSS v3.1, and I am comfortable working
              across both offensive and defensive security initiatives.
            </div>
          </div>
        </section>

        <section id="found-vulnerabilities" className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
            <SectionHeading eyebrow="Recognition" title="Found Vulnerabilities In">
              Public programs and organizations where my responsible disclosure and security
              research work identified real security issues.
            </SectionHeading>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 xl:grid-cols-9">
              {DATA.hof.map((item) => (
                <a
                  key={item.name}
                  href={item.url || "#"}
                  target={item.url && item.url !== "#" ? "_blank" : undefined}
                  rel={item.url && item.url !== "#" ? "noreferrer" : undefined}
                  className="group flex h-24 items-center justify-center rounded-lg border border-white/10 bg-white p-3 transition hover:-translate-y-1 hover:border-cyan-300/60"
                  aria-label={item.name}
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="max-h-12 max-w-full object-contain transition group-hover:scale-105"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          <SectionHeading eyebrow="Experience" title="Security roles across bug bounty, VAPT, GRC, and forensics.">
            Recent work combining CVSS-mapped vulnerability reporting, remediation support,
            risk/control reporting, and evidence-led investigation.
          </SectionHeading>
          <div className="space-y-4">
            {DATA.experience.map((item) => (
              <article
                key={`${item.org}-${item.when}`}
                className="grid gap-5 rounded-lg border border-white/10 bg-[#0b171d] p-6 md:grid-cols-[0.34fr_1fr]"
              >
                <div>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-amber-300/10 text-amber-200">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <p className="text-sm text-slate-400">{item.when}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{item.org}</h3>
                  <p className="mt-1 text-sm text-cyan-200">{item.role}</p>
                </div>
                <ul className="space-y-3 text-sm leading-6 text-slate-300">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-emerald-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
            <SectionHeading eyebrow="Selected Work" title="Tools and projects built around real workflows.">
              A few examples of how I package investigation, recon, and reporting into useful
              software.
            </SectionHeading>
            <div className="grid gap-5 md:grid-cols-3">
              {DATA.projects.map((project) => (
                <a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex min-h-[280px] flex-col rounded-lg border border-white/10 bg-[#0b171d] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-[#0d1c23]"
                >
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <Pill tone="cyan">{project.type}</Pill>
                    <ExternalLink className="h-4 w-4 text-slate-500 transition group-hover:text-cyan-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{project.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <Pill key={item}>{item}</Pill>
                    ))}
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
                    View project
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          <SectionHeading eyebrow="Capabilities" title="A practical security toolkit.">
            Tools, languages, frameworks, and methods I use across offensive testing, security
            operations, investigations, and reporting.
          </SectionHeading>
          <div className="grid gap-5 md:grid-cols-3">
            {Object.entries(DATA.skills).map(([category, items]) => (
              <div key={category} className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-lg font-semibold capitalize text-white">{category}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          <SectionHeading eyebrow="Education" title="Academic grounding in cybersecurity.">
            Formal study paired with hands-on security projects and professional practice.
          </SectionHeading>
          <div className="grid gap-5 md:grid-cols-2">
            {DATA.education.map((item) => (
              <article key={item.where} className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-cyan-300/10 text-cyan-200">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <p className="text-sm text-slate-400">{item.when}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{item.where}</h3>
                <p className="mt-1 text-sm font-medium text-cyan-200">{item.degree}</p>
                <p className="mt-4 text-sm leading-6 text-slate-300">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications" className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          <SectionHeading eyebrow="Certifications" title="Validated security fundamentals.">
            Certifications that support my work across offensive security, SOC practice, and cloud
            security basics.
          </SectionHeading>
          <div className="flex flex-wrap gap-3">
            {DATA.certs.map((cert) => (
              <span
                key={cert}
                className="inline-flex items-center gap-2 rounded-md border border-amber-300/25 bg-amber-300/10 px-4 py-2 text-sm text-amber-50"
              >
                <Award className="h-4 w-4 text-amber-200" />
                {cert}
              </span>
            ))}
          </div>
        </section>

        <section id="contact" className="border-t border-white/10 bg-[#0b171d]">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-[1fr_0.8fr] md:py-20">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
                Contact
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Have a security project or role I should look at?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                Send me the context, scope, and what success looks like. I am happy to talk about
                VAPT, DFIR, recon tooling, or security research.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3 sm:flex-row md:flex-col">
              <a
                href={DATA.cta.email}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-cyan-300 px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                <Mail className="h-4 w-4" />
                Email me
              </a>
              <a
                href={DATA.cta.medium}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/15 px-5 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/5"
              >
                <FileText className="h-4 w-4" />
                Medium
              </a>
              <a
                href={DATA.cta.x}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/15 px-5 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/5"
              >
                <Twitter className="h-4 w-4" />
                X
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#071014]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>
            (c) {year} {DATA.name}. Stay curious, stay dangerous.
          </p>
          <div className="flex items-center gap-4">
            <a href={DATA.cta.github} target="_blank" rel="noreferrer" className="hover:text-white">
              GitHub
            </a>
            <a href={DATA.cta.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
              LinkedIn
            </a>
            <a href={DATA.cta.email} className="hover:text-white">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
