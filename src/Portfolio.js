import { useState, useEffect } from "react";
import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  Shield,
  Bug,
  FileCode,
  Cpu,
  Twitter,       // for X button
  FileText       // for Medium button
} from "lucide-react";

const DATA = {
  name: "Devansh Patel",
  role: "Cybersecurity | Bug Bounty | DFIR | GRC | VAPT | BLOGGER",
  blurb:
    "I break things thoughtfully, then help teams fix them. Bug bounty, DFIR tooling, and security research.",
  cta: {
    resumeUrl: "https://drive.google.com/file/d/1WDZUR9_Ws3EjYJP_Az1PnUPiA1xfen7m/view?usp=sharing",
    email: "mailto:devanshpatel.work@gmail.com",
    linkedin: "https://www.linkedin.com/in/devanshpatelcybersecurity",
    github: "https://github.com/Zuri09",

    // Added: you can change these anytime
    medium: "https://medium.com/@devanshpatel930",
    x: "https://x.com/zuriinsecurity"
  },

  // your original highlight chips (unchanged)
  highlights: [
    { icon: <Shield className="w-5 h-5" />, label: "DFIR tooling" },
    { icon: <Bug className="w-5 h-5" />, label: "Bug bounty" },
    { icon: <FileCode className="w-5 h-5" />, label: "Python / Go" },
    { icon: <Cpu className="w-5 h-5" />, label: "AI for triage" }
  ],

  projects: [
    {
      title: "Missing Person Portal",
      stack: ["HTML", "CSS", "PHP"],
      desc:
        "Developed and deployed a robust missing person reporting portal, resulting in a 40% reduction in reporting time and enhancing public engagement by providing real-time updates and notificationsports.",
      link: "https://github.com/Zuri09/MissingPersonPortal",
    },
    {
      title: "ReconRaptor",
      stack: ["Bash", "Go", "httpx", "subfinder", "nuclei"],
      desc:
        "One-liner recon pipeline with pretty CLI, installers, and env setup for quick bounty hunts.",
      link: "https://github.com/Zuri09/ReconRaptor",
    },
    {
      title: "Dorkinator",
      stack: ["Python", "Regex", "AST"],
      desc:
        "Google Dorks Generator for Bug Bounty and Vapt",
      link: "https://github.com/Zuri09/Dorkinator",
    },
  ],

  skills: {
    core: ["Web App Sec", "DFIR", "Threat Hunting", "GRC"],
    tools: [
      "Burp Suite",
      "Nmap",
      "Wireshark",
      "Volatility",
      "YARA",
      "nuclei",
      "subfinder",
      "httpx",
      "sqlmap",
      "ParamSpider",
      "Kibana",
      "Splunk"
    ],
    code: ["Python", "Go", "Bash", "JavaScript"],
  },

  experience: [
    {
      org: "Aetheris (Cybersecurity Analyst)",
      when: "Jan 2025 – May 2025",
      points: [
        "Led VAPT for web apps; wrote reproducible PoCs and remediation." ,
        "Built scripts to automate recon and finding triage-ready issues.",
        "Conducted computer and mobile forensic investigations on real-world cases and prepared detailed reports outlining findings and evidence using Magnet Axiom, Cellbrite UFED, Recuva, Mobiledit, Oxygen Forensics.",
        "Assisted in VAPT network and web application using tools like Burp Suite and Nmap, and documented security issues along with recommended mitigations."
      ],
    },
    {
      org: "eSecurify Technologies (VAPT Intern)",
      when: "June 2024 – December 2024",
      points: ["Led in live VAPT projects involving web application security assessments for clients.",
        "Discovered vulnerabilities in client websites and reported them with proper remediation guidance.",
        ["Gained hands-on experience with OWASP Top 10 vulnerabilities and responsible disclosure."]
      ],
    },
    {
      org: "Cyber Crime Helpline LLP(Digital Forensics Intern)",
      when: "June 2023 – August 2023",
      points: ["Hands onCreated and implemented batch (BAT) files, reducing manual workload effectively by 50%.",
        ["Examined digital devices for forensic purposes, including mobile phones also recovered lost data using tools like Recuva , Magnet Axiom, and Mobiledit"]
      ],
    },
    {
      org: "Flip Location Pvt Ltd (Frontend Tester)",
      when: "June 2022 – August 2022",
      points: ["Performance, security, cross-browser, and unit testing in multiple web applications.",
        ["Collaborated with the development team to improve the overall quality of the application."]
      ],
    },
  ],

  education: [
    {
      where: "UCL – MSc Information Security",
      when: "Starting Sep 2025",
      detail: "Focus: DFIR, AppSec, GRC."
    },
    {
      where: "SSPU – B.Tech CS & IT (Cyber Security)",
      when: "2019 – 2025",
      detail: "Graduated."
    },
  ],

  certs: ["ISC2 CC", "SecOps Group CAP v2", "SecOps Group CNSP", "CYBERWAREFARE LABS C3SA"],

  // NEW: Hall of Fame logos (replace `logo` with your image path or /public path; add url to link it)
  hof: [
    { name: "HoF 1", logo: "/logos/BIA.png", url: "#" },
    { name: "HoF 2", logo: "/logos/NYKAA.png", url: "#" },
    { name: "HoF 3", logo: "/logos/QUICKWORK.png", url: "#" },
    { name: "HoF 4", logo: "/logos/SINGAPOURE.jpg", url: "#" },
    { name: "HoF 5", logo: "/logos/HDFCLIFE.png", url: "#" },
    { name: "HoF 6", logo: "/logos/SGRH.png", url: "#" },
    { name: "HoF 7", logo: "/logos/NBC.png", url: "#" },
    { name: "HoF 8", logo: "/logos/DTDC.png", url: "#" },
  ],
};

export default function Portfolio() {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* NAV */}
      <header className="sticky top-0 backdrop-blur bg-gray-950/70 border-b border-gray-800 z-30">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href=" " className="font-semibold tracking-tight text-white">devansh<span className="text-indigo-400">.security</span></a>
          <nav className="hidden md:flex gap-6 text-sm">
            {[
              ["About", "#about"],
              ["Projects", "#projects"],
              ["Skills", "#skills"],
              ["Experience", "#experience"],
              ["Education", "#education"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="text-gray-300 hover:text-white">{label}</a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-transparent to-fuchsia-900/20 pointer-events-none -z-10" />
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-indigo-400 text-xs uppercase tracking-widest mb-3">Portfolio</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {DATA.name}
            </h1>
            <p className="mt-3 text-xl text-gray-300">{DATA.role}</p>
            <p className="mt-5 text-gray-400 max-w-prose">{DATA.blurb}</p>

            {/* CTA BUTTONS (added Medium + X) */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={DATA.cta.resumeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-indigo-500 hover:bg-indigo-600 transition">
                <Download className="w-4 h-4" /> <span>Resume</span>
              </a>
              <a href={DATA.cta.email} className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-gray-700 hover:border-gray-500">
                <Mail className="w-4 h-4" /> <span>Contact</span>
              </a>
              <a href={DATA.cta.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-gray-700 hover:border-gray-500">
                <Github className="w-4 h-4" /> <span>GitHub</span>
              </a>
              <a href={DATA.cta.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-gray-700 hover:border-gray-500">
                <Linkedin className="w-4 h-4" /> <span>LinkedIn</span>
              </a>
              <a href={DATA.cta.medium} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-gray-700 hover:border-gray-500">
                <FileText className="w-4 h-4" /> <span>Medium</span>
              </a>
              <a href={DATA.cta.x} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-gray-700 hover:border-gray-500">
                <Twitter className="w-4 h-4" /> <span>X</span>
              </a>
            </div>

            {/* your original chips (unchanged) */}
            <div className="mt-6 flex flex-wrap gap-2">
              {DATA.highlights.map((h, i) => (
                <span key={i} className="inline-flex items-center gap-2 text-xs bg-gray-800 border border-gray-700 rounded-full px-3 py-1">
                  {h.icon} {h.label}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
  <div className="aspect-square rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
    <img
      src="/profile.png"              // <- your file in /public
      alt="Devansh Patel"
      className="w-full h-full object-cover"
      loading="lazy"
    />
  </div>
  <div className="absolute inset-0 -z-10 blur-3xl bg-indigo-600/10" />
</div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="text-gray-300 max-w-3xl">
          Here’s the thing: I enjoy tearing apart systems, documenting impact, and shipping fixes people can actually use.
          I build tools, write clear reports, and keep learning. If it touches security, I’m curious. Along side that i am a Cybersecurity graduate with hands-on experience in VAPT, digital forensics, and OSINT. Skilled in Burp Suite, Magnet Axiom, Bash scripting, and basic SOC monitoring/log analysis. Built security tools, led VAPT teams, and improved the efficiency of investigations
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {DATA.projects.map((p, idx) => (
            <a key={idx} href={p.link} target="_blank" rel="noreferrer" className="group block rounded-2xl border border-gray-800 bg-gray-900/40 hover:bg-gray-900 transition shadow">
              <div className="p-5">
                <h3 className="font-medium text-white group-hover:text-indigo-300">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="text-xs bg-gray-800 border border-gray-700 rounded-full px-2 py-0.5">{s}</span>
                  ))}
                </div>
                <div className="mt-4 inline-flex items-center gap-1 text-sm text-indigo-300">
                  <span>View</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(DATA.skills).map(([cat, items]) => (
            <div key={cat} className="rounded-2xl border border-gray-800 bg-gray-900/40 p-5">
              <h3 className="capitalize text-white font-medium">{cat}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((i) => (
                  <span key={i} className="text-xs bg-gray-800 border border-gray-700 rounded-full px-2 py-0.5">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold mb-6">Experience</h2>
        <ol className="relative border-s border-gray-800 ms-3">
          {DATA.experience.map((e, idx) => (
            <li key={idx} className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-indigo-500 rounded-full mt-1.5 -start-1.5 border border-gray-900" />
              <time className="mb-1 text-sm text-gray-400">{e.when}</time>
              <h3 className="text-white font-medium">{e.org}</h3>
              <ul className="list-disc ms-5 mt-2 text-gray-300 space-y-1">
                {e.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* EDUCATION */}
      <section id="education" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold mb-6">Education</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {DATA.education.map((ed, idx) => (
            <div key={idx} className="rounded-2xl border border-gray-800 bg-gray-900/40 p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-medium">{ed.where}</h3>
                <span className="text-sm text-gray-400">{ed.when}</span>
              </div>
              <p className="mt-2 text-gray-300">{ed.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HALL OF FAMES (new section with 5 logo slots) */}
      <section id="hall-of-fames" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold mb-6">Hall of Fames</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {DATA.hof.map((h) => (
            <a
              key={h.name}
              href={h.url || "#"}
              target={h.url ? "_blank" : undefined}
              rel={h.url ? "noreferrer" : undefined}
              className="group h-20 rounded-xl border border-gray-800 bg-gray-900/40 flex items-center justify-center overflow-hidden"
            >
              {h.logo ? (
                <img
                  src={h.logo}
                  alt={h.name}
                  className="max-h-12 object-contain grayscale group-hover:grayscale-0 transition"
                />
              ) : (
                <span className="text-xs text-gray-500">Add logo</span>
              )}
            </a>
          ))}
        </div>
        {/* <p className="mt-3 text-xs text-gray-500">
          Tip: put logos in <code>/public/logos/</code> and just update the paths in <code>DATA.hof</code>.
        </p> */}
      </section>

      {/* CERTIFICATIONS (your original cert list, now separate) */}
      <section id="certifications" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold mb-6">Certifications</h2>
        <div className="flex flex-wrap gap-2">
          {DATA.certs.map((c) => (
            <span key={c} className="text-sm bg-gray-800 border border-gray-700 rounded-full px-3 py-1">
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold mb-4">Let’s talk</h2>
        <p className="text-gray-300 max-w-prose">Have a security project, research idea, or role I should look at? Reach out.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={DATA.cta.email} className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-white text-gray-900">
            <Mail className="w-4 h-4" /> Email me
          </a>
          <a href={DATA.cta.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-gray-700">
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </div>
      </section>

      <footer className="border-t border-gray-800">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-gray-400 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {year} {DATA.name}. Stay Curious, Stay Dangerous.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Imprint</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
