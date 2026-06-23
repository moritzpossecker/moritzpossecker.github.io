import Link from "next/link";
import Image from "next/image";
import { IconArrowUpRight, IconDownload, IconBrandGithub, IconMail } from "@tabler/icons-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px] text-zinc-800 selection:bg-purple-200">

      <nav className="max-w-3xl mx-auto px-6 py-8 flex justify-between items-center relative z-10">
        <span className="font-bold text-xl tracking-tight bg-white px-2 py-1 rounded-md shadow-sm border border-zinc-100">MP.</span>
        <div className="flex gap-4 text-zinc-500 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-zinc-100 shadow-sm">
          <Link href="https://github.com/moritzpossecker" target="_blank" className="hover:text-purple-600 transition-colors">
            <IconBrandGithub size={20} />
          </Link>
          <Link href="mailto:moritzpossecker@proton.me" className="hover:text-purple-600 transition-colors">
            <IconMail size={20} />
          </Link>
        </div>
      </nav>

      <section className="max-w-3xl mx-auto px-6 pt-20 pb-24 relative z-10">

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">
          <div className="text-zinc-400 text-2xl sm:text-3xl font-medium mb-3">Hi, ich bin</div>
          Moritz Poßecker.
        </h1>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </div>
            <span className="text-sm font-semibold text-purple-600 uppercase tracking-widest">
              Aktuell
            </span>
          </div>

          <ul className="space-y-3 text-lg text-zinc-600">
            <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="font-medium text-zinc-900">Dualer Student Informatik</span>
              <span className="hidden sm:inline text-zinc-300">•</span>
              <span className="flex items-center gap-1.5">
                an der
                <Link href="https://www.dhsn.de/" target="_blank" rel="noopener noreferrer" className="text-zinc-800 hover:text-purple-600 underline decoration-zinc-300 hover:decoration-purple-600 underline-offset-4 transition-all">
                  Dualen Hochschule Sachsen
                </Link>
              </span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="font-medium text-zinc-900">Junior Software Developer</span>
              <span className="hidden sm:inline text-zinc-300">•</span>
              <span className="flex items-center gap-1.5">
                bei der
                <Link href="https://www.deskcenter.com/" target="_blank" rel="noopener noreferrer" className="text-zinc-800 hover:text-purple-600 underline decoration-zinc-300 hover:decoration-purple-600 underline-offset-4 transition-all">
                  Deskcenter AG
                </Link>
              </span>
            </li>
          </ul>
        </div>

        <div className="text-lg text-zinc-600 leading-relaxed mb-10 space-y-4">
          <p>
            Mein duales Studium hat mir die Möglichkeit gegeben, Softwareentwicklung nicht nur theoretisch zu lernen, sondern direkt in der Praxis anzuwenden. Dabei habe ich neben der klassischen Entwicklungsarbeit ein besonderes Interesse für DevSecOps und IT-Sicherheit entwickelt. Im Rahmen meiner Bachelorarbeit habe ich mich daher intensiv mit automatisierten Sicherheitsanalysen (SAST, DAST und SCA) beschäftigt.
          </p>
          <p>
            In meiner Freizeit bin ich gerne aktiv. Seit meinem achten Lebensjahr spiele ich Fußball und verbringe regelmäßig Zeit im Fitnessstudio. Der sportliche Ausgleich hilft mir, nach einem Tag vor dem Bildschirm den Kopf freizubekommen.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://raw.githubusercontent.com/moritzpossecker/resume/main/resume.pdf"
            download="Moritz_Possecker_CV.pdf"
            className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-full shadow-md hover:shadow-purple-600/20 transition-all duration-300"
          >
            <IconDownload size={18} />
            Lebenslauf (PDF)
          </a>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-32 relative z-10">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-sm font-semibold text-purple-600 uppercase tracking-widest bg-white px-3 py-1 rounded-md shadow-sm border border-zinc-100">
            Ausgewählte Projekte
          </h2>
          <div className="h-px flex-1 bg-zinc-200"></div>
        </div>

        <div className="flex flex-col gap-12">

          <article className="relative bg-white p-6 rounded-lg shadow-sm border border-zinc-100">
            <Link href="https://head-coach.io" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between mb-2 w-fit gap-2">
              <Image
                src="/img/headcoach/headcoach.png"
                alt="Head Coach Logo"
                width={8}
                height={8}
                className="w-8 h-8 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold text-zinc-900 group-hover:text-purple-600 transition-colors">
                Head Coach - NFL Fantasy Manager
              </h3>
              <IconArrowUpRight className="text-zinc-400 group-hover:text-purple-600 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
            </Link>
            <p className="text-zinc-600 mb-4">
              Fantasy-Manager-Spiel basierend auf Echtzeit-Daten der NFL (American Football).
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-medium px-2.5 py-1 bg-zinc-100/80 border border-zinc-200/60 text-zinc-600 rounded-md">C# (ASP.NET Core, EF Core)</span>
              <span className="text-xs font-medium px-2.5 py-1 bg-zinc-100/80 border border-zinc-200/60 text-zinc-600 rounded-md">Microsoft Identity</span>
              <span className="text-xs font-medium px-2.5 py-1 bg-zinc-100/80 border border-zinc-200/60 text-zinc-600 rounded-md">Python (Flask)</span>
              <span className="text-xs font-medium px-2.5 py-1 bg-zinc-100/80 border border-zinc-200/60 text-zinc-600 rounded-md">TypeScript (Vite, React)</span>
              <span className="text-xs font-medium px-2.5 py-1 bg-zinc-100/80 border border-zinc-200/60 text-zinc-600 rounded-md">TailwindCSS & ShadCN</span>
              <span className="text-xs font-medium px-2.5 py-1 bg-zinc-100/80 border border-zinc-200/60 text-zinc-600 rounded-md">MySQL</span>
              <span className="text-xs font-medium px-2.5 py-1 bg-zinc-100/80 border border-zinc-200/60 text-zinc-600 rounded-md">Docker</span>
              <span className="text-xs font-medium px-2.5 py-1 bg-zinc-100/80 border border-zinc-200/60 text-zinc-600 rounded-md">GitHub Actions</span>
            </div>
          </article>

          <article className="relative bg-white p-6 rounded-lg shadow-sm border border-zinc-100">
            <Link href="https://blueball.world" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between mb-2 w-fit gap-2">
              <Image
                src="/img/blueball/globe.svg"
                alt="Blue Ball Logo"
                width={8}
                height={8}
                className="w-8 h-8 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold text-zinc-900 group-hover:text-purple-600 transition-colors">
                Blue Ball - Geographie-Quizspiel
              </h3>
              <IconArrowUpRight className="text-zinc-400 group-hover:text-purple-600 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
            </Link>
            <p className="text-zinc-600 mb-4">
              Interaktives Geographie-Quizspiel, entwickelt im Dreierteam als Open-Source-Projekt.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-medium px-2.5 py-1 bg-zinc-100/80 border border-zinc-200/60 text-zinc-600 rounded-md">TypeScript (Next.js, Bun, React)</span>
              <span className="text-xs font-medium px-2.5 py-1 bg-zinc-100/80 border border-zinc-200/60 text-zinc-600 rounded-md">Prisma</span>
              <span className="text-xs font-medium px-2.5 py-1 bg-zinc-100/80 border border-zinc-200/60 text-zinc-600 rounded-md">better-auth</span>
              <span className="text-xs font-medium px-2.5 py-1 bg-zinc-100/80 border border-zinc-200/60 text-zinc-600 rounded-md">TailwindCSS & ShadCN</span>
              <span className="text-xs font-medium px-2.5 py-1 bg-zinc-100/80 border border-zinc-200/60 text-zinc-600 rounded-md">LeafletJS</span>
              <span className="text-xs font-medium px-2.5 py-1 bg-zinc-100/80 border border-zinc-200/60 text-zinc-600 rounded-md">PostgreSQL</span>
              <span className="text-xs font-medium px-2.5 py-1 bg-zinc-100/80 border border-zinc-200/60 text-zinc-600 rounded-md">GitHub Actions</span>
              <span className="text-xs font-medium px-2.5 py-1 bg-zinc-100/80 border border-zinc-200/60 text-zinc-600 rounded-md">Docker Compose</span>
            </div>
          </article>

        </div>
      </section>

      <footer className="max-w-3xl mx-auto px-6 py-8 text-sm text-zinc-500 flex justify-between items-center relative z-10 border-t border-zinc-200/80">
        <span>© {new Date().getFullYear()} Moritz Poßecker</span>
        <span>Hosted on GitHub Pages</span>
      </footer>

    </main>
  );
}
