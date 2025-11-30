// app/page.tsx
import Sidebar from "@/components/Sidebar";

const techStacks = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Golang",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Redis",
  "Prisma",
  "Firebase",
  "Git",
  "GitHub",
  "Figma",
];

export default function Home() {
  return (
    <div className="flex w-full gap-6">
      <Sidebar />

      <main className="flex-1 flex flex-col gap-10 pr-10">
        {/* Hero */}
        <section className="p-2">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm text-slate-400 mb-1">Based in Bandung, ID</p>
              <h1 className="text-2xl md:text-3xl font-semibold flex items-center gap-2">
                Hi, I&apos;m Bagas
                <span className="text-xl">👋</span>
                <span className="rounded-full border border-anime-pink/40 bg-slate-900/70 px-2 py-1 text-[10px] text-anime-pink">
                  anime mode ON
                </span>
              </h1>
              <p className="mt-3 text-sm text-slate-300 max-w-2xl">
                Full-stack developer yang suka ngoding sambil binge anime.
                Fokus bikin aplikasi dengan UI manis, performa kencang, dan
                sedikit vibes <span className="text-anime-pink">isekai tech</span>.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Turning coffee & episodes into clean code, one commit at a time.
              </p>
            </div>

            <div className="flex flex-col items-end gap-2 text-xs text-slate-400">
              <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700">
                Open for freelance & collab
              </span>
              <span className="text-[10px]">
                Status: <span className="text-anime-cyan">Grinding EXP</span>
              </span>
            </div>
          </div>
        </section>

        {/* Career */}
        <section className="p-2">
          <h2 className="section-title">Career</h2>
          <p className="text-xs text-slate-400 mb-4">
            Beberapa role yang pernah gue ambil di dunia nyata, bukan cuma di
            party RPG.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="anime-card bg-slate-900/80 p-4">
              <p className="text-xs text-slate-400 mb-1">2023 - Present</p>
              <h3 className="font-semibold text-sm mb-1">Front-end Developer</h3>
              <p className="text-xs text-slate-400 mb-2">
                Freelance • Bandung, Indonesia
              </p>
              <p className="text-xs text-slate-300">
                Membangun landing page, dashboard, dan portal kampus
                dengan fokus ke UX yang smooth dan tema yang kadang terlalu
                terinspirasi anime.
              </p>
            </div>

            <div className="anime-card bg-slate-900/80 p-4">
              <p className="text-xs text-slate-400 mb-1">2022 - Present</p>
              <h3 className="font-semibold text-sm mb-1">Back-end Developer</h3>
              <p className="text-xs text-slate-400 mb-2">
                Project-based • Indonesia
              </p>
              <p className="text-xs text-slate-300">
                Merancang API, otentikasi, dan database untuk berbagai aplikasi
                web. Tujuan: server tetap santai walau user lagi full ARAM.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="p-2">
          <h2 className="section-title">Tech Stacks</h2>
          <p className="text-xs text-slate-400 mb-4">
            Tools yang sering dipakai buat summon aplikasi ke dunia nyata.
          </p>

          <div className="flex flex-wrap gap-2">
            {techStacks.map((tech) => (
              <span key={tech} className="tech-badge">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-anime-pink to-anime-cyan" />
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Contact / CTA */}
        <section className="p-2">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="section-title mb-2">Let&apos;s collaborate</h2>
              <p className="text-xs text-slate-300 max-w-md">
                Punya ide project, tugas kampus, atau ingin bikin platform
                yang nuansanya anime juga? Kirim detailnya, kita bisa
                brainstorming bareng.
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <a
                href="mailto:bagas@example.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium
                bg-gradient-to-r from-anime-pink to-anime-cyan text-slate-950 shadow-anime-glow"
              >
                Contact me
                <span>✨</span>
              </a>
              <span className="text-[10px] text-slate-500">
                「がんばろう。」 let&apos;s build something cool.
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
