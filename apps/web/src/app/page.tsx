// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert h-5 w-[100px]"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the{" "}
//             <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
//               page.tsx
//             </code>{" "}
//             file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert h-[14px] w-4"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={14}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }



import Link from "next/link";

const courses = [
  {
    number: "01",
    title: "Python Programming",
    description: "Start with Python basics, then master OOP, data structures, and projects.",
    topics: "Variables · Loops · Functions · OOP",
    icon: "⌘",
  },
  {
    number: "02",
    title: "Mathematics for AI",
    description: "Understand the mathematics behind intelligent systems.",
    topics: "Linear Algebra · Calculus · Statistics",
    icon: "∑",
  },
  {
    number: "03",
    title: "Data Science",
    description: "Explore, clean, analyze, and visualize real-world datasets.",
    topics: "NumPy · Pandas · Matplotlib",
    icon: "◫",
  },
  {
    number: "04",
    title: "Machine Learning",
    description: "Build predictive models and understand how algorithms learn.",
    topics: "Regression · Classification · Clustering",
    icon: "⌁",
  },
  {
    number: "05",
    title: "Deep Learning",
    description: "Explore neural networks, backpropagation, and transformers.",
    topics: "PyTorch · CNN · RNN · Transformers",
    icon: "◎",
  },
  {
    number: "06",
    title: "Generative AI",
    description: "Learn how LLMs, RAG systems, and intelligent agents work.",
    topics: "LLMs · RAG · Fine-tuning · Agents",
    icon: "✳",
  },
];

const workflow = [
  {
    title: "Understand",
    description: "Learn each concept with simple explanations and mathematics.",
  },
  {
    title: "Code",
    description: "Implement algorithms from scratch and with Python libraries.",
  },
  {
    title: "Visualize",
    description: "Explore graphs, model predictions, and training behavior.",
  },
  {
    title: "Build",
    description: "Apply your knowledge to exercises and real-world projects.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090d18] text-slate-100">
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-black tracking-tight">
            <span className="text-cyan-400">Neuro</span>Stack
          </Link>

          <div className="hidden gap-8 text-sm text-slate-300 md:flex">
            <a href="#courses" className="hover:text-cyan-400">
              Learning Paths
            </a>
            <a href="#labs" className="hover:text-cyan-400">
              Interactive Labs
            </a>
            <a href="#method" className="hover:text-cyan-400">
              How It Works
            </a>
          </div>

          <a
            href="https://github.com/ABHINEKKUMAR/neurostack"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/20 px-4 py-2 text-sm hover:border-cyan-400"
          >
            GitHub ↗
          </a>
        </nav>
      </header>

      <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-24">
        <div className="mb-7 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
          Open-source AI Engineering Platform
        </div>

        <h1 className="max-w-5xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
          Don&apos;t just learn AI.
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            See how it works.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
          Master Python, Mathematics, Machine Learning, Deep Learning,
          and Generative AI through hands-on coding, interactive
          visualizations, and real-world engineering projects.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#courses"
            className="rounded-xl bg-cyan-400 px-7 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Explore Learning Paths →
          </a>

          <a
            href="#labs"
            className="rounded-xl border border-white/20 px-7 py-4 font-semibold transition hover:border-cyan-400"
          >
            Explore Labs
          </a>
        </div>

        <div className="mt-16 grid gap-4 border-t border-white/10 pt-8 text-sm text-slate-400 sm:grid-cols-3">
          <div>01 / Structured learning</div>
          <div>02 / Interactive experiments</div>
          <div>03 / Real-world projects</div>
        </div>
      </section>

      <section id="courses" className="bg-[#0d1424] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 font-semibold text-cyan-400">
            LEARNING PATHS
          </p>
          <h2 className="text-4xl font-bold">
            From your first line of code to advanced AI
          </h2>
          <p className="mt-4 max-w-2xl text-slate-400">
            Follow a structured path that builds each skill on the
            foundation of the previous one.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <article
                key={course.number}
                className="rounded-2xl border border-white/10 bg-[#111b2f] p-7 transition hover:-translate-y-1 hover:border-cyan-500/50"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-4xl text-cyan-400">
                    {course.icon}
                  </span>
                  <span className="text-sm text-slate-500">
                    PATH {course.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold">{course.title}</h3>
                <p className="mt-3 min-h-20 leading-7 text-slate-400">
                  {course.description}
                </p>

                <div className="mt-5 border-t border-white/10 pt-5 text-sm text-cyan-300">
                  {course.topics}
                </div>
                <p className="mt-5 text-xs uppercase tracking-wider text-slate-500">
                  Lessons coming soon
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="labs" className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-3 font-semibold text-cyan-400">
          INTERACTIVE LABS
        </p>
        <h2 className="text-4xl font-bold">
          Learn algorithms by experimenting
        </h2>

        <div className="mt-12 grid overflow-hidden rounded-2xl border border-white/10 bg-[#111b2f] lg:grid-cols-2">
          <div className="p-8 md:p-12">
            <span className="rounded-md bg-violet-500/15 px-3 py-2 text-xs font-semibold text-violet-300">
              FIRST PLANNED LAB
            </span>
            <h3 className="mt-8 text-3xl font-bold">
              Linear Regression
            </h3>
            <p className="mt-5 leading-8 text-slate-400">
              Discover how a model finds the best-fitting line,
              how predictions are calculated, and how the loss
              function guides learning.
            </p>

            <div className="mt-8 space-y-3 text-sm text-slate-300">
              <p>✓ Explore slope and intercept</p>
              <p>✓ Understand mean squared error</p>
              <p>✓ Visualize gradient descent</p>
              <p>✓ Implement the algorithm in Python</p>
            </div>

            <p className="mt-9 text-sm font-medium text-cyan-400">
              Interactive implementation coming next
            </p>
          </div>

          <div className="flex min-h-80 items-center justify-center bg-[#080f1d] p-8">
            <div className="w-full max-w-md rounded-xl border border-white/10 bg-[#0e1729] p-6 font-mono text-sm">
              <div className="mb-6 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <p className="text-slate-500">
                # Preview: linear regression
              </p>
              <p className="mt-3">
                <span className="text-violet-400">import</span>{" "}
                numpy <span className="text-violet-400">as</span> np
              </p>
              <p className="mt-3 text-cyan-300">
                slope = 2.5
              </p>
              <p className="text-cyan-300">
                intercept = 1.0
              </p>
              <p className="mt-3 text-slate-200">
                prediction = slope * 4 + intercept
              </p>
              <p className="mt-4 text-green-400">
                # prediction = 11.0
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="method" className="bg-[#0d1424] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 font-semibold text-cyan-400">
            OUR LEARNING METHOD
          </p>
          <h2 className="text-4xl font-bold">
            Understand. Code. Visualize. Build.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {workflow.map((step, index) => (
              <div
                key={step.title}
                className="rounded-xl border border-white/10 p-6"
              >
                <div className="mb-6 text-3xl font-bold text-cyan-400">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-slate-500">
        NeuroStack — Code. Train. Visualize. Deploy.
        <p className="mt-2">
          Built for curious minds and future AI engineers.
        </p>
      </footer>
    </main>
  );
}
