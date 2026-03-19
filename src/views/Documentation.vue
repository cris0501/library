<template>
  <div class="flex min-h-[100dvh] bg-gray-50">

    <!-- Sidebar -->
    <aside class="hidden lg:flex flex-col w-64 shrink-0 border-r border-gray-200 bg-white sticky top-0 h-[100dvh] overflow-y-auto py-10 px-6">
      <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Documentation</p>
      <nav class="flex flex-col space-y-1">
        <template v-for="section in sections" :key="section.id">
          <button
            @click="scrollTo(section.id)"
            :class="[
              'text-left px-3 py-2 rounded-lg text-sm transition-colors',
              activeSection === section.id
                ? 'bg-blue-50 text-blue-700 font-semibold'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            ]"
          >
            {{ section.title }}
          </button>
          <template v-if="section.children" v-for="child in section.children" :key="child.id">
            <button
              @click="scrollTo(child.id)"
              :class="[
                'text-left pl-6 pr-3 py-1.5 rounded-lg text-sm transition-colors',
                activeSection === child.id
                  ? 'bg-blue-50 text-blue-700 font-semibold'
                  : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'
              ]"
            >
              {{ child.title }}
            </button>
          </template>
        </template>
      </nav>
    </aside>

    <!-- Main content -->
    <main class="w-full lg:w-2/3 mx-auto px-6 py-16 lg:py-12">

      <!-- Header -->
      <section id="overview" class="mb-14">
        <p class="text-4xl font-bold font-plex mb-4">EduWords Documentation</p>
        <p class="text-lg text-gray-600">
          Complete guide for writing interactive math books with LaTeX.
        </p>

        <!-- 3 feature cards -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <button
            @click="scrollTo('quick-start')"
            class="flex flex-col justify-between p-5 rounded-xl bg-gradient-to-br from-green-400 to-blue-500 text-white text-left transition-opacity hover:opacity-90 active:opacity-80"
          >
            <span class="flex items-center text-xl mb-3">
              <i class="icon icon-book"></i>
              <p class="font-bold font-plex ml-3 text-base">Quick Start</p>
            </span>
            <p class="font-nunito text-sm opacity-90 mb-3">Learn the basics and write your first document.</p>
          </button>
          <button
            @click="scrollTo('environments')"
            class="flex flex-col justify-between p-5 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 text-white text-left transition-opacity hover:opacity-90 active:opacity-80"
          >
            <span class="flex items-center text-xl mb-3">
              <i class="icon icon-file"></i>
              <p class="font-bold font-plex ml-3 text-base">Environments</p>
            </span>
            <p class="font-nunito text-sm opacity-90">Theorems, proofs, definitions, and more.</p>
          </button>
          <button
            @click="scrollTo('math')"
            class="flex flex-col justify-between p-5 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 text-white text-left transition-opacity hover:opacity-90 active:opacity-80"
          >
            <span class="flex items-center text-xl mb-3">
              <i class="icon icon-code"></i>
              <p class="font-bold font-plex ml-3 text-base">Math</p>
            </span>
            <p class="font-nunito text-sm opacity-90">Inline and display math with KaTeX.</p>
          </button>
        </div>

        <!-- YouTube course -->
        <a
          href="https://m.youtube.com/playlist?list=PL2FIypMaf6V0d3PN8pjNZ9TTyL3i5FUtw"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-4 mt-6 p-4 rounded-xl bg-white border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-colors group"
        >
          <i class="icon icon-youtube text-2xl text-red-500"></i>
          <div class="flex-1 min-w-0">
            <p class="font-semibold text-gray-800 group-hover:text-red-700 text-sm">LaTeX Course on YouTube</p>
            <p class="text-xs text-gray-500 mt-0.5">New to LaTeX? This course is a solid starting point for learning the base syntax.</p>
          </div>
          <i class="icon icon-arrow_right text-gray-400 group-hover:text-red-400 shrink-0"></i>
        </a>

        <!-- Project intro -->
        <div class="mt-10 flex flex-col gap-4 text-gray-700 leading-relaxed">
          <p>
            <code class="code-inline">larex</code> is a LaTeX parser that converts your documents into interactive web books. If you already know LaTeX, you can write content immediately — no new syntax to learn. The parser supports a curated subset of LaTeX commands optimized for mathematical and educational content.
          </p>
          <p>
            Documents are rendered with KaTeX for math, and include interactive features like clickable notes, cross-references, and structured theorem environments.
          </p>
        </div>
      </section>

      <hr class="border-gray-200 mb-14" />

      <!-- Quick Start -->
      <section id="quick-start" class="mb-14">
        <h2 class="text-2xl font-bold font-plex mb-2">Quick Start</h2>
        <p class="text-sm text-gray-400 mb-6">Write your first interactive book</p>

        <h3 class="text-lg font-semibold font-plex mb-3">Minimal Document</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          A valid document requires at least the <code class="code-inline">\documentclass</code> declaration and the <code class="code-inline">\begin{document}</code> / <code class="code-inline">\end{document}</code> wrapper:
        </p>
        <div class="code-block mb-8">
          <div><span class="text-blue-300">\documentclass</span><span class="text-gray-300">{article}</span></div>
          <div><span class="text-blue-300">\begin</span><span class="text-gray-300">{document}</span></div>
          <div class="mt-2"><span class="text-blue-300">\section</span><span class="text-gray-300">{Introduction}</span></div>
          <div><span class="text-gray-300">Welcome to my interactive book!</span></div>
          <div><span class="text-blue-300">\end</span><span class="text-gray-300">{document}</span></div>
        </div>

        <h3 class="text-lg font-semibold font-plex mb-3">Project Structure</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          For larger projects, split your content across multiple files:
        </p>
        <pre class="code-block mb-6">book/                    # Project root
  main.tex               # Entry point
  chapters/
    intro.tex
    chapter1.tex
  assets/
    images/
      diagram.png</pre>

        <h3 class="text-lg font-semibold font-plex mb-3">File Inclusion</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Use <code class="code-inline">\include{path}</code> to include external files. The path is relative to the main <code class="code-inline">.tex</code> file, and the <code class="code-inline">.tex</code> extension is optional:
        </p>
        <div class="code-block mb-4">
          <div><span class="text-blue-300">\include</span><span class="text-gray-300">{chapters/intro}</span></div>
          <div class="mt-2"><span class="text-blue-300">\include</span><span class="text-gray-300">{chapters/chapter1}</span></div>
        </div>
        <p class="text-gray-600 text-sm mb-8">
          Included files are resolved recursively before parsing. You can nest includes across multiple levels.
        </p>

        <h3 class="text-lg font-semibold font-plex mb-3">Using the Compiler</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Run the parser from the compiler directory:
        </p>
        <div class="code-block mb-4">
          <div><span class="text-green-400">python</span><span class="text-gray-300"> -m larex </span><span class="text-yellow-300">path/to/document.tex</span></div>
        </div>
        <p class="text-gray-600 text-sm mb-4 leading-relaxed">
          Output the JSON AST to stdout, or use the <code class="code-inline">-f</code> flag to save the output to <code class="code-inline">examples/dist/</code>:
        </p>
        <div class="code-block mb-4">
          <span class="text-green-400">python</span><span class="text-gray-300"> -m larex </span><span class="text-yellow-300">document.tex</span><span class="text-gray-300"> -f</span>
        </div>
      </section>

      <hr class="border-gray-200 mb-14" />

      <!-- How Elements Are Read -->
      <section id="element-types" class="mb-14">
        <h2 class="text-2xl font-bold font-plex mb-2">How Elements Are Read</h2>
        <p class="text-sm text-gray-400 mb-6">Understanding raw vs kv vs parsed content</p>

        <p class="text-gray-700 mb-6 leading-relaxed">
          The parser handles different elements in different ways depending on their type. Understanding these modes helps you write correct LaTeX and avoid common mistakes.
        </p>

        <h3 class="text-lg font-semibold font-plex mb-3">Raw Mode</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          In <strong>raw mode</strong>, content is collected as plain text and passed directly to the renderer without further processing. This is used for:
        </p>
        <ul class="list-disc list-inside text-gray-600 mb-4 space-y-1">
          <li>Math environments (<code class="code-inline">equation</code>, <code class="code-inline">align</code>, <code class="code-inline">cases</code>, <code class="code-inline">pmatrix</code>)</li>
          <li>The <code class="code-inline">verbatim</code> environment</li>
          <li>Image paths in <code class="code-inline">\includegraphics</code></li>
          <li>URLs in <code class="code-inline">\url</code></li>
        </ul>
        <div class="code-block mb-4">
          <div><span class="text-blue-300">\begin</span><span class="text-gray-300">{equation}</span></div>
          <div><span class="text-yellow-300">  \int_a^b f(x)\,dx = F(b) - F(a)</span></div>
          <div><span class="text-blue-300">\end</span><span class="text-gray-300">{equation}</span></div>
          <div class="mt-3"><span class="text-blue-300">\includegraphics</span><span class="text-gray-300">{assets/diagram.png}</span></div>
        </div>
        <p class="text-gray-600 text-sm mb-8">
          Inside raw environments, you cannot use other LaTeX commands or formatting. The content is passed directly to KaTeX (for math) or rendered as-is (for verbatim).
        </p>

        <h3 class="text-lg font-semibold font-plex mb-3">Key-Value Mode (kv)</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          <strong>Key-value mode</strong> is used by custom environments like <code class="code-inline">theorem</code>, <code class="code-inline">definition</code>, etc. Parameters are passed in a single bracket block with <code class="code-inline">key=value</code> syntax:
        </p>
        <div class="code-block mb-4">
          <span class="text-blue-300">\begin</span><span class="text-gray-300">{theorem}[</span><span class="text-green-300">label</span><span class="text-gray-300">=</span><span class="text-yellow-300">main-thm</span><span class="text-gray-300">, </span><span class="text-green-300">title</span><span class="text-gray-300">=</span><span class="text-yellow-300">Pythagorean Theorem</span><span class="text-gray-300">]</span>
        </div>
        <p class="text-gray-600 text-sm mb-4 leading-relaxed">
          Available keys:
        </p>
        <ul class="list-disc list-inside text-gray-600 mb-4 space-y-1">
          <li><code class="code-inline">label</code> — identifier for cross-references</li>
          <li><code class="code-inline">title</code> — display name shown in the header</li>
          <li><code class="code-inline">aside</code> — lateral annotation text</li>
        </ul>
        <p class="text-gray-600 text-sm mb-8">
          If no brackets are provided, an empty parameter dictionary is used. Keys without values (e.g., <code class="code-inline">[highlight]</code>) are treated as boolean flags set to <code class="code-inline">true</code>.
        </p>

        <h3 class="text-lg font-semibold font-plex mb-3">Parsed Mode</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          In <strong>parsed mode</strong>, the content inside braces is processed as regular LaTeX. You can use formatting commands, inline math, and nested structures:
        </p>
        <div class="code-block mb-4">
          <div><span class="text-blue-300">\textbf</span><span class="text-gray-300">{This is }</span><span class="text-blue-300">\textit</span><span class="text-gray-300">{formatted}</span><span class="text-gray-300"> text.</span></div>
          <div><span class="text-gray-300">The formula $a^2 + b^2 = c^2$ uses inline math.</span></div>
        </div>
        <p class="text-gray-600 text-sm mb-8">
          Text formatting commands like <code class="code-inline">\textbf</code>, <code class="code-inline">\textit</code>, and inline math work inside parsed content.
        </p>

        <h3 class="text-lg font-semibold font-plex mb-3">Inline-Only Elements</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Some elements are restricted to <strong>inline-only</strong> content. This means:
        </p>
        <ul class="list-disc list-inside text-gray-600 mb-4 space-y-1">
          <li>Display math (<code class="code-inline">$$...$$</code>) is not allowed</li>
          <li>Environments cannot be nested inside them</li>
          <li>Inline math (<code class="code-inline">$...$</code>) is allowed</li>
        </ul>
        <p class="text-gray-600 text-sm mb-4">
          The <code class="code-inline">\note</code> command is inline-only by design — tooltips cannot contain large blocks of content.
        </p>
        <div class="doc-block mb-8">
          <p class="doc-block-title">Why inline-only?</p>
          <p class="text-gray-700 text-sm leading-relaxed">
            Elements like notes are designed for small annotations. Display math or environments inside them would produce unwieldy tooltips. The parser enforces this constraint to ensure a consistent reading experience.
          </p>
        </div>
      </section>

      <hr class="border-gray-200 mb-14" />

      <!-- Environments -->
      <section id="environments" class="mb-14">
        <h2 class="text-2xl font-bold font-plex mb-2">Environments</h2>
        <p class="text-sm text-gray-400 mb-6">Mathematical and structural environments</p>

        <p class="text-gray-700 mb-8 leading-relaxed">
          Environments wrap content between <code class="code-inline">\begin{name}</code> and <code class="code-inline">\end{name}</code>. Custom environments use key-value parameters; standard LaTeX environments use their native syntax.
        </p>

        <h3 class="text-lg font-semibold font-plex mb-3">Math Environments (Raw)</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Math environments collect their content as raw LaTeX and pass it directly to KaTeX. No nested commands or formatting are processed inside them.
        </p>

        <div class="flex flex-col gap-4 mb-8">
          <div class="rounded-xl border border-gray-200 bg-white p-5">
            <p class="font-mono font-semibold text-gray-800 mb-2"><code class="code-inline">equation</code></p>
            <p class="text-gray-600 text-sm mb-3">Single-line display equation. Content is raw LaTeX for KaTeX.</p>
            <div class="code-block">
              <div><span class="text-blue-300">\begin</span><span class="text-gray-300">{equation}</span></div>
              <div><span class="text-yellow-300">  E = mc^2</span></div>
              <div><span class="text-blue-300">\end</span><span class="text-gray-300">{equation}</span></div>
            </div>
          </div>

          <div class="rounded-xl border border-gray-200 bg-white p-5">
            <p class="font-mono font-semibold text-gray-800 mb-2"><code class="code-inline">align</code></p>
            <p class="text-gray-600 text-sm mb-3">Multi-line aligned equations. Use <code class="code-inline">&</code> for alignment points.</p>
            <div class="code-block">
              <div><span class="text-blue-300">\begin</span><span class="text-gray-300">{align}</span></div>
              <div><span class="text-yellow-300">  (a+b)^2 &= a^2 + 2ab + b^2 \\</span></div>
              <div><span class="text-yellow-300">  (a-b)^2 &= a^2 - 2ab + b^2</span></div>
              <div><span class="text-blue-300">\end</span><span class="text-gray-300">{align}</span></div>
            </div>
          </div>

          <div class="rounded-xl border border-gray-200 bg-white p-5">
            <p class="font-mono font-semibold text-gray-800 mb-2"><code class="code-inline">cases</code></p>
            <p class="text-gray-600 text-sm mb-3">Piecewise function definitions.</p>
            <div class="code-block">
              <div><span class="text-blue-300">\begin</span><span class="text-gray-300">{cases}</span></div>
              <div><span class="text-yellow-300">  f(x) = x^2 \quad \text{if } x \geq 0 \\</span></div>
              <div><span class="text-yellow-300">  f(x) = 0 \quad \text{otherwise}</span></div>
              <div><span class="text-blue-300">\end</span><span class="text-gray-300">{cases}</span></div>
            </div>
          </div>

          <div class="rounded-xl border border-gray-200 bg-white p-5">
            <p class="font-mono font-semibold text-gray-800 mb-2"><code class="code-inline">pmatrix</code></p>
            <p class="text-gray-600 text-sm mb-3">Parenthesized matrix.</p>
            <div class="code-block">
              <div><span class="text-blue-300">\begin</span><span class="text-gray-300">{pmatrix}</span></div>
              <div><span class="text-yellow-300">  1 & 0 & 0 \\</span></div>
              <div><span class="text-yellow-300">  0 & 1 & 0 \\</span></div>
              <div><span class="text-yellow-300">  0 & 0 & 1</span></div>
              <div><span class="text-blue-300">\end</span><span class="text-gray-300">{pmatrix}</span></div>
            </div>
          </div>
        </div>

        <h3 class="text-lg font-semibold font-plex mb-3">Display Math Shorthand</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          You can also use shorthand syntax for display math. All three forms are equivalent:
        </p>
        <div class="code-block mb-4">
          <div><span class="text-yellow-300">$$ \int_a^b f(x)\,dx $$</span></div>
          <div class="mt-3"><span class="text-yellow-300">\[ \sum_{n=1}^{\infty} \frac{1}{n^2} \]</span></div>
          <div class="mt-3"><span class="text-blue-300">\begin</span><span class="text-gray-300">{equation}</span></div>
          <div><span class="text-yellow-300">  \lim_{x \to \infty} f(x)</span></div>
          <div><span class="text-blue-300">\end</span><span class="text-gray-300">{equation}</span></div>
        </div>

        <h3 class="text-lg font-semibold font-plex mb-3">Mathematical Environments (Key-Value)</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          These environments accept optional key-value parameters. All share the same parameter system with <code class="code-inline">label</code>, <code class="code-inline">title</code>, and <code class="code-inline">aside</code> keys.
        </p>

        <div class="overflow-x-auto mb-6">
          <table class="w-full text-sm text-left border-collapse">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="py-2 pr-6 font-semibold text-gray-700">Environment</th>
                <th class="py-2 font-semibold text-gray-700">Description</th>
              </tr>
            </thead>
            <tbody class="text-gray-600">
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">theorem</code></td>
                <td class="py-2">Formal theorem statement</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">definition</code></td>
                <td class="py-2">Formal definition</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">axiom</code></td>
                <td class="py-2">Axiom or postulate</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">lemma</code></td>
                <td class="py-2">Auxiliary lemma</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">proposition</code></td>
                <td class="py-2">Mathematical proposition</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">corollary</code></td>
                <td class="py-2">Corollary derived from a theorem</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">proof</code></td>
                <td class="py-2">Proof of a statement</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">exercise</code></td>
                <td class="py-2">Practice exercise or problem</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">convention</code></td>
                <td class="py-2">Convention or notation agreement</td>
              </tr>
              <tr>
                <td class="py-2 pr-6"><code class="code-inline">block</code></td>
                <td class="py-2">Multi-tab content container (each <code class="code-inline">\item</code> becomes a tab)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="text-gray-700 mb-4 leading-relaxed">
          Example with full parameters:
        </p>
        <div class="code-block mb-4">
          <div><span class="text-blue-300">\begin</span><span class="text-gray-300">{theorem}[</span><span class="text-green-300">label</span><span class="text-gray-300">=</span><span class="text-yellow-300">pythagorean</span><span class="text-gray-300">, </span><span class="text-green-300">title</span><span class="text-gray-300">=</span><span class="text-yellow-300">Pythagorean Theorem</span><span class="text-gray-300">]</span></div>
          <div><span class="text-gray-300">  In a right triangle, $a^2 + b^2 = c^2$ where $c$ is the hypotenuse.</span></div>
          <div><span class="text-blue-300">\end</span><span class="text-gray-300">{theorem}</span></div>
          <div class="mt-3"><span class="text-gray-300">See </span><span class="text-blue-300">\ref</span><span class="text-gray-300">{pythagorean} for details.</span></div>
        </div>

        <p class="text-gray-700 mb-4 leading-relaxed">
          Without parameters (uses default styling):
        </p>
        <div class="code-block mb-4">
          <div><span class="text-blue-300">\begin</span><span class="text-gray-300">{lemma}</span></div>
          <div><span class="text-gray-300">  If $f$ is continuous on $[a,b]$, then $f$ is bounded.</span></div>
          <div><span class="text-blue-300">\end</span><span class="text-gray-300">{lemma}</span></div>
        </div>

        <h3 class="text-lg font-semibold font-plex mb-3">List Environments</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Use <code class="code-inline">enumerate</code> for numbered lists and <code class="code-inline">itemize</code> for bullet lists. Each item starts with <code class="code-inline">\item</code>. A new <code class="code-inline">\item</code> automatically closes the previous one.
        </p>
        <div class="code-block mb-4">
          <div><span class="text-blue-300">\begin</span><span class="text-gray-300">{enumerate}</span></div>
          <div><span class="text-blue-300">  \item</span><span class="text-gray-300"> First step</span></div>
          <div><span class="text-blue-300">  \item</span><span class="text-gray-300"> Second step</span></div>
          <div><span class="text-blue-300">  \item</span><span class="text-gray-300"> Third step</span></div>
          <div><span class="text-blue-300">\end</span><span class="text-gray-300">{enumerate}</span></div>
          <div class="mt-3"><span class="text-blue-300">\begin</span><span class="text-gray-300">{itemize}</span></div>
          <div><span class="text-blue-300">  \item</span><span class="text-gray-300"> Apple</span></div>
          <div><span class="text-blue-300">  \item</span><span class="text-gray-300"> Banana</span></div>
          <div><span class="text-blue-300">  \item</span><span class="text-gray-300"> Cherry</span></div>
          <div><span class="text-blue-300">\end</span><span class="text-gray-300">{itemize}</span></div>
        </div>

        <h3 class="text-lg font-semibold font-plex mb-3">Figure Environment</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Wrap images with <code class="code-inline">\includegraphics</code> and <code class="code-inline">\caption</code> inside a <code class="code-inline">figure</code> environment. The <code class="code-inline">figure</code> accepts an optional <code class="code-inline">[width=N]</code> parameter.
        </p>
        <div class="code-block mb-4">
          <div><span class="text-blue-300">\begin</span><span class="text-gray-300">{figure}[</span><span class="text-green-300">width</span><span class="text-gray-300">=</span><span class="text-yellow-300">60</span><span class="text-gray-300">]</span></div>
          <div><span class="text-blue-300">  \includegraphics</span><span class="text-gray-300">{assets/diagram.png}</span></div>
          <div><span class="text-blue-300">  \caption</span><span class="text-gray-300">{Architecture diagram}</span></div>
          <div><span class="text-blue-300">\end</span><span class="text-gray-300">{figure}</span></div>
        </div>
        <p class="text-gray-600 text-sm mb-8">
          Image paths are relative to the book's asset folder. The width is a percentage value (e.g., <code class="code-inline">60</code> means 60% of the container width).
        </p>

        <h3 class="text-lg font-semibold font-plex mb-3">Verbatim Environment</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Use <code class="code-inline">verbatim</code> for pre-formatted text where LaTeX commands should not be processed:
        </p>
        <div class="code-block mb-4">
          <div><span class="text-blue-300">\begin</span><span class="text-gray-300">{verbatim}</span></div>
          <div><span class="text-yellow-300">  \documentclass{article}</span></div>
          <div><span class="text-yellow-300">  \begin{document}</span></div>
          <div><span class="text-yellow-300">    Hello World</span></div>
          <div><span class="text-yellow-300">  \end{document}</span></div>
          <div><span class="text-blue-300">\end</span><span class="text-gray-300">{verbatim}</span></div>
        </div>

        <h3 class="text-lg font-semibold font-plex mb-3">Tabular Environment</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Create tables with the <code class="code-inline">tabular</code> environment. Column alignment is specified in braces: <code class="code-inline">l</code> (left), <code class="code-inline">c</code> (center), <code class="code-inline">r</code> (right). Use <code class="code-inline">|</code> for vertical borders and <code class="code-inline">\hline</code> for horizontal lines.
        </p>
        <div class="code-block mb-4">
          <div><span class="text-blue-300">\begin</span><span class="text-gray-300">{tabular}{</span><span class="text-yellow-300">|l|c|r|</span><span class="text-gray-300">}</span></div>
          <div><span class="text-yellow-300">  \hline</span></div>
          <div><span class="text-yellow-300">  Name & Age & City \\</span></div>
          <div><span class="text-yellow-300">  \hline</span></div>
          <div><span class="text-yellow-300">  Alice & 25 & NYC \\</span></div>
          <div><span class="text-yellow-300">  Bob & 30 & LA \\</span></div>
          <div><span class="text-yellow-300">  \hline</span></div>
          <div><span class="text-blue-300">\end</span><span class="text-gray-300">{tabular}</span></div>
        </div>
        <p class="text-gray-600 text-sm mb-8">
          Cells can contain inline math: <code class="code-inline">$x^2$</code>. However, environments and complex formatting inside cells are not supported.
        </p>
      </section>

      <hr class="border-gray-200 mb-14" />

      <!-- Math -->
      <section id="math" class="mb-14">
        <h2 class="text-2xl font-bold font-plex mb-2">Math Expressions</h2>
        <p class="text-sm text-gray-400 mb-6">Inline and display math via KaTeX</p>

        <p class="text-gray-700 mb-6 leading-relaxed">
          Math content is rendered using <code class="code-inline">KaTeX</code>. Both inline and display modes are fully supported. Math content is passed directly to KaTeX without further processing.
        </p>

        <h3 class="text-lg font-semibold font-plex mb-3">Inline Math</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Wrap expressions in single dollar signs: <code class="code-inline">$...$</code>
        </p>
        <div class="code-block mb-6">
          <div><span class="text-gray-300">The formula </span><span class="text-yellow-300">$e^{i\pi} + 1 = 0$</span><span class="text-gray-300"> is Euler's identity.</span></div>
          <div class="mt-3"><span class="text-gray-300">If $x \in \mathbb{R}$ and $x > 0$, then $\sqrt{x}$ exists.</span></div>
        </div>

        <h3 class="text-lg font-semibold font-plex mb-3">Display Math</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          For centered, prominent equations, use display math. Three equivalent forms are supported:
        </p>
        <div class="code-block mb-4">
          <div><span class="text-yellow-300">$$\int_a^b f(x)\,dx = F(b) - F(a)$$</span></div>
          <div class="mt-3"><span class="text-yellow-300">\[ \sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6} \]</span></div>
          <div class="mt-3"><span class="text-blue-300">\begin</span><span class="text-gray-300">{equation}</span></div>
          <div><span class="text-yellow-300">  \lim_{x \to 0} \frac{\sin x}{x} = 1</span></div>
          <div><span class="text-blue-300">\end</span><span class="text-gray-300">{equation}</span></div>
        </div>

        <h3 class="text-lg font-semibold font-plex mb-3">Common Math Commands</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          KaTeX supports most standard LaTeX math commands. Here are some common ones:
        </p>
        <div class="overflow-x-auto mb-6">
          <table class="w-full text-sm text-left border-collapse">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="py-2 pr-6 font-semibold text-gray-700">Expression</th>
                <th class="py-2 pr-6 font-semibold text-gray-700">LaTeX</th>
                <th class="py-2 font-semibold text-gray-700">Description</th>
              </tr>
            </thead>
            <tbody class="text-gray-600">
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><span class="math-expr">x<sup>2</sup></span></td>
                <td class="py-2 pr-6"><code class="code-inline">x^2</code></td>
                <td class="py-2">Superscript</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><span class="math-expr">x<sub>i</sub></span></td>
                <td class="py-2 pr-6"><code class="code-inline">x_i</code></td>
                <td class="py-2">Subscript</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><span class="math-expr">&frac12;</span></td>
                <td class="py-2 pr-6"><code class="code-inline">\frac{1}{2}</code></td>
                <td class="py-2">Fraction</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><span class="math-expr">&radic;x</span></td>
                <td class="py-2 pr-6"><code class="code-inline">\sqrt{x}</code></td>
                <td class="py-2">Square root</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><span class="math-expr">&sum;</span></td>
                <td class="py-2 pr-6"><code class="code-inline">\sum</code></td>
                <td class="py-2">Summation</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><span class="math-expr">&int;</span></td>
                <td class="py-2 pr-6"><code class="code-inline">\int</code></td>
                <td class="py-2">Integral</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><span class="math-expr">&in;</span></td>
                <td class="py-2 pr-6"><code class="code-inline">\in</code></td>
                <td class="py-2">Element of</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><span class="math-expr">&forall;</span></td>
                <td class="py-2 pr-6"><code class="code-inline">\forall</code></td>
                <td class="py-2">For all</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><span class="math-expr">&exist;</span></td>
                <td class="py-2 pr-6"><code class="code-inline">\exists</code></td>
                <td class="py-2">Exists</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><span class="math-expr">&real;</span></td>
                <td class="py-2 pr-6"><code class="code-inline">\mathbb{R}</code></td>
                <td class="py-2">Blackboard bold (sets)</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><span class="math-expr">&rarr;</span></td>
                <td class="py-2 pr-6"><code class="code-inline">\rightarrow</code></td>
                <td class="py-2">Implication arrow</td>
              </tr>
              <tr>
                <td class="py-2 pr-6"><span class="math-expr">&harr;</span></td>
                <td class="py-2 pr-6"><code class="code-inline">\leftrightarrow</code></td>
                <td class="py-2">Equivalence arrow</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="doc-block">
          <p class="doc-block-title">Note on math parsing</p>
          <p class="text-gray-700 text-sm leading-relaxed">
            Inside math environments, the content is passed directly to KaTeX. You cannot use text formatting commands like <code class="code-inline">\textbf</code> inside math. Use <code class="code-inline">\text{...}</code> for regular text within math mode.
          </p>
        </div>
      </section>

      <hr class="border-gray-200 mb-14" />

      <!-- Commands -->
      <section id="commands" class="mb-14">
        <h2 class="text-2xl font-bold font-plex mb-2">Text Commands</h2>
        <p class="text-sm text-gray-400 mb-6">Formatting, structure, and special elements</p>

        <p class="text-gray-700 mb-8 leading-relaxed">
          Commands follow standard LaTeX syntax: a backslash followed by the command name and its arguments in braces. Optional arguments use brackets.
        </p>

        <h3 class="text-lg font-semibold font-plex mb-3">Headings</h3>
        <div class="overflow-x-auto mb-6">
          <table class="w-full text-sm text-left border-collapse">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="py-2 pr-6 font-semibold text-gray-700">Command</th>
                <th class="py-2 font-semibold text-gray-700">Description</th>
              </tr>
            </thead>
            <tbody class="text-gray-600">
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\chapter{title}</code></td>
                <td class="py-2">Level 0 heading (chapter)</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\section{title}</code></td>
                <td class="py-2">Level 1 heading</td>
              </tr>
              <tr>
                <td class="py-2 pr-6"><code class="code-inline">\subsection{title}</code></td>
                <td class="py-2">Level 2 heading</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-lg font-semibold font-plex mb-3">Text Formatting</h3>
        <div class="overflow-x-auto mb-6">
          <table class="w-full text-sm text-left border-collapse">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="py-2 pr-6 font-semibold text-gray-700">Command</th>
                <th class="py-2 font-semibold text-gray-700">Description</th>
              </tr>
            </thead>
            <tbody class="text-gray-600">
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\textbf{text}</code></td>
                <td class="py-2">Bold text</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\textit{text}</code></td>
                <td class="py-2">Italic text</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\emph{text}</code></td>
                <td class="py-2">Emphasized (typically italic)</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\underline{text}</code></td>
                <td class="py-2">Underlined text</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\texttt{text}</code></td>
                <td class="py-2">Monospace (typewriter) text</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\textsf{text}</code></td>
                <td class="py-2">Sans-serif text</td>
              </tr>
              <tr>
                <td class="py-2 pr-6"><code class="code-inline">\psc{text}</code></td>
                <td class="py-2">Small caps text</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-lg font-semibold font-plex mb-3">Special Elements</h3>
        <div class="overflow-x-auto mb-6">
          <table class="w-full text-sm text-left border-collapse">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="py-2 pr-6 font-semibold text-gray-700">Command</th>
                <th class="py-2 font-semibold text-gray-700">Description</th>
              </tr>
            </thead>
            <tbody class="text-gray-600">
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\url{path}</code></td>
                <td class="py-2">Hyperlink URL (raw, not parsed)</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\note[key=val]{text}</code></td>
                <td class="py-2">Inline tooltip note. Accepts <code class="code-inline">title</code> and <code class="code-inline">aside</code> keys.</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\alert{text}</code></td>
                <td class="py-2">Highlighted alert/warning box</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\includegraphics[width=N]{path}</code></td>
                <td class="py-2">Image with optional width percentage</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\caption{text}</code></td>
                <td class="py-2">Figure caption (inside figure environment)</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\label{id}</code></td>
                <td class="py-2">Define a label for cross-referencing</td>
              </tr>
              <tr>
                <td class="py-2 pr-6"><code class="code-inline">\ref{label}</code></td>
                <td class="py-2">Cross-reference to a labeled element</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-lg font-semibold font-plex mb-3">Self-Closing Commands</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          These commands take no arguments and are written without braces:
        </p>
        <div class="overflow-x-auto mb-6">
          <table class="w-full text-sm text-left border-collapse">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="py-2 pr-6 font-semibold text-gray-700">Command</th>
                <th class="py-2 font-semibold text-gray-700">Description</th>
              </tr>
            </thead>
            <tbody class="text-gray-600">
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\newline</code> or <code class="code-inline">\n</code></td>
                <td class="py-2">Line break</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\\</code></td>
                <td class="py-2">Alternative line break</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\newpage</code></td>
                <td class="py-2">Page break</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\noindent</code></td>
                <td class="py-2">Suppress paragraph indentation</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\qed</code></td>
                <td class="py-2">End-of-proof symbol (tombstone)</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\obs</code></td>
                <td class="py-2">Observation marker</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\dem</code></td>
                <td class="py-2">Proof/demonstration marker</td>
              </tr>
              <tr>
                <td class="py-2 pr-6"><code class="code-inline">\backslash</code></td>
                <td class="py-2">Literal backslash character</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-lg font-semibold font-plex mb-3">Escaped Characters</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          These characters have special meaning in LaTeX. Use a backslash to produce them literally:
        </p>
        <div class="overflow-x-auto mb-8">
          <table class="w-full text-sm text-left border-collapse">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="py-2 pr-6 font-semibold text-gray-700">Character</th>
                <th class="py-2 pr-6 font-semibold text-gray-700">Escaped</th>
              </tr>
            </thead>
            <tbody class="text-gray-600">
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">{ }</code></td>
                <td class="py-2"><code class="code-inline">\{ \}</code></td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">$</code></td>
                <td class="py-2"><code class="code-inline">\$</code></td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">%</code></td>
                <td class="py-2"><code class="code-inline">\%</code></td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">&</code></td>
                <td class="py-2"><code class="code-inline">\&</code></td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">#</code></td>
                <td class="py-2"><code class="code-inline">\#</code></td>
              </tr>
              <tr>
                <td class="py-2 pr-6"><code class="code-inline">_</code></td>
                <td class="py-2"><code class="code-inline">\_</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-lg font-semibold font-plex mb-3">Comments</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Lines starting with <code class="code-inline">%</code> are treated as comments and stripped before parsing:
        </p>
        <div class="code-block mb-8">
          <div><span class="text-gray-500">% This entire line is ignored</span></div>
          <div><span class="text-gray-300">This text appears.</span></div>
          <div><span class="text-gray-500">% So is this line.</span></div>
          <div><span class="text-gray-300">But this appears.</span></div>
        </div>
      </section>

      <hr class="border-gray-200 mb-14" />

      <!-- Cross-References -->
      <section id="cross-references" class="mb-14">
        <h2 class="text-2xl font-bold font-plex mb-2">Cross-References</h2>
        <p class="text-sm text-gray-400 mb-6">Label and reference elements within your document</p>

        <p class="text-gray-700 mb-6 leading-relaxed">
          You can create clickable cross-references to theorems, definitions, equations, and other labeled elements. This requires two steps: labeling and referencing.
        </p>

        <h3 class="text-lg font-semibold font-plex mb-3">Creating Labels</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Add a <code class="code-inline">label</code> key to any environment that supports key-value parameters:
        </p>
        <div class="code-block mb-4">
          <div><span class="text-blue-300">\begin</span><span class="text-gray-300">{theorem}[</span><span class="text-green-300">label</span><span class="text-gray-300">=</span><span class="text-yellow-300">main-theorem</span><span class="text-gray-300">, </span><span class="text-green-300">title</span><span class="text-gray-300">=</span><span class="text-yellow-300">Main Result</span><span class="text-gray-300">]</span></div>
          <div><span class="text-gray-300">  The statement of your theorem...</span></div>
          <div><span class="text-blue-300">\end</span><span class="text-gray-300">{theorem}</span></div>
        </div>

        <p class="text-gray-700 mb-4 leading-relaxed">
          Or use the <code class="code-inline">\label</code> command after an equation:
        </p>
        <div class="code-block mb-4">
          <div><span class="text-blue-300">\begin</span><span class="text-gray-300">{equation}</span></div>
          <div><span class="text-yellow-300">  E = mc^2</span></div>
          <div><span class="text-blue-300">\end</span><span class="text-gray-300">{equation}</span></div>
          <div><span class="text-blue-300">\label</span><span class="text-gray-300">{eq-einstein}</span></div>
        </div>

        <h3 class="text-lg font-semibold font-plex mb-3">Referencing Labels</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Use <code class="code-inline">\ref{label}</code> to create a reference:
        </p>
        <div class="code-block mb-4">
          <div><span class="text-gray-300">As shown in </span><span class="text-blue-300">\ref</span><span class="text-gray-300">{main-theorem}, we have...</span></div>
          <div class="mt-2"><span class="text-gray-300">From equation </span><span class="text-blue-300">\ref</span><span class="text-gray-300">{eq-einstein}...</span></div>
        </div>

        <div class="doc-block">
          <p class="doc-block-title">Labels must be unique</p>
          <p class="text-gray-700 text-sm leading-relaxed">
            Each label must be unique within the document. Using the same label twice will produce an error during parsing.
          </p>
        </div>
      </section>

      <hr class="border-gray-200 mb-14" />

      <!-- Complete Example -->
      <section id="complete-example" class="mb-14">
        <h2 class="text-2xl font-bold font-plex mb-2">Complete Example</h2>
        <p class="text-sm text-gray-400 mb-6">A full document demonstrating common patterns</p>

        <div class="code-block" style="max-height: 500px; overflow-y: auto;">
          <div><span class="text-blue-300">\documentclass</span><span class="text-gray-300">{article}</span></div>
          <div><span class="text-blue-300">\begin</span><span class="text-gray-300">{document}</span></div>
          <div class="mt-2"><span class="text-blue-300">\section</span><span class="text-gray-300">{Introduction to Real Analysis}</span></div>
          <div class="mt-2"><span class="text-gray-300">In this section we introduce the concept of </span><span class="text-blue-300">\textit</span><span class="text-gray-300">{continuity}</span><span class="text-gray-300">.</span></div>
          <div class="mt-2"><span class="text-gray-300">A function $f: \mathbb{R} \to \mathbb{R}$ is continuous at $a$ if:</span></div>
          <div class="mt-3"><span class="text-blue-300">\begin</span><span class="text-gray-300">{definition}[</span><span class="text-green-300">label</span><span class="text-gray-300">=</span><span class="text-yellow-300">def-continuity</span><span class="text-gray-300">, </span><span class="text-green-300">title</span><span class="text-gray-300">=</span><span class="text-yellow-300">Continuity</span><span class="text-gray-300">]</span></div>
          <div><span class="text-gray-300">  $\forall \epsilon > 0, \exists \delta > 0$ such that</span></div>
          <div><span class="text-gray-300">  $|x - a| < \delta \implies |f(x) - f(a)| < \epsilon$.</span></div>
          <div><span class="text-blue-300">\end</span><span class="text-gray-300">{definition}</span></div>
          <div class="mt-3"><span class="text-blue-300">\begin</span><span class="text-gray-300">{theorem}[</span><span class="text-green-300">label</span><span class="text-gray-300">=</span><span class="text-yellow-300">thm-intermediate</span><span class="text-gray-300">]</span></div>
          <div><span class="text-gray-300">  If $f$ is continuous on $[a,b]$ and $f(a) \neq f(b)$,</span></div>
          <div><span class="text-gray-300">  then $f$ takes every value between $f(a)$ and $f(b)$.</span></div>
          <div><span class="text-blue-300">\end</span><span class="text-gray-300">{theorem}</span></div>
          <div class="mt-3"><span class="text-blue-300">\begin</span><span class="text-gray-300">{proof}</span></div>
          <div><span class="text-gray-300">  Consider the set $S = \{x \in [a,b] : f(x) \leq c\}$...</span></div>
          <div><span class="text-blue-300">\qed</span></div>
          <div><span class="text-blue-300">\end</span><span class="text-gray-300">{proof}</span></div>
          <div class="mt-3"><span class="text-gray-300">See </span><span class="text-blue-300">\ref</span><span class="text-gray-300">{def-continuity} and </span><span class="text-blue-300">\ref</span><span class="text-gray-300">{thm-intermediate} for details.</span></div>
          <div class="mt-3"><span class="text-blue-300">\begin</span><span class="text-gray-300">{enumerate}</span></div>
          <div><span class="text-blue-300">  \item</span><span class="text-gray-300"> Define continuity carefully</span></div>
          <div><span class="text-blue-300">  \item</span><span class="text-gray-300"> State the Intermediate Value Theorem</span></div>
          <div><span class="text-blue-300">  \item</span><span class="text-gray-300"> Provide a proof</span></div>
          <div><span class="text-blue-300">\end</span><span class="text-gray-300">{enumerate}</span></div>
          <div class="mt-3"><span class="text-blue-300">\end</span><span class="text-gray-300">{document}</span></div>
        </div>
      </section>

      <hr class="border-gray-200 mb-14" />

      <!-- Parser Output -->
      <section id="parser-output" class="mb-14">
        <h2 class="text-2xl font-bold font-plex mb-2">Parser Output</h2>
        <p class="text-sm text-gray-400 mb-6">JSON AST structure and node types</p>

        <p class="text-gray-700 mb-6 leading-relaxed">
          The parser outputs a JSON object with three main keys:
        </p>

        <div class="overflow-x-auto mb-8">
          <table class="w-full text-sm text-left border-collapse">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="py-2 pr-6 font-semibold text-gray-700">Key</th>
                <th class="py-2 font-semibold text-gray-700">Description</th>
              </tr>
            </thead>
            <tbody class="text-gray-600">
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">content</code></td>
                <td class="py-2">Array of AST nodes (headings, paragraphs, environments, etc.)</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">refs</code></td>
                <td class="py-2">Dictionary mapping label IDs to their indices</td>
              </tr>
              <tr>
                <td class="py-2 pr-6"><code class="code-inline">chapters</code></td>
                <td class="py-2">Dictionary of chapter metadata (index, title)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-lg font-semibold font-plex mb-3">Node Types (kind field)</h3>
        <div class="overflow-x-auto mb-8">
          <table class="w-full text-sm text-left border-collapse">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="py-2 pr-6 font-semibold text-gray-700">Kind</th>
                <th class="py-2 font-semibold text-gray-700">Description</th>
              </tr>
            </thead>
            <tbody class="text-gray-600">
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">heading</code></td>
                <td class="py-2">Chapter/Section. Has <code class="code-inline">level</code> (0=chapter, 1=section, 2=subsection)</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">bold</code>, <code class="code-inline">italic</code>, etc.</td>
                <td class="py-2">Text formatting nodes. Contain <code class="code-inline">content</code> array</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">math</code></td>
                <td class="py-2">Math expression. Has <code class="code-inline">mode</code> (inline/display) and <code class="code-inline">raw</code> (LaTeX for KaTeX)</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">list</code></td>
                <td class="py-2">Ordered/unordered list. Has <code class="code-inline">ordered</code> bool and <code class="code-inline">content</code> array</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">item</code></td>
                <td class="py-2">List item. Contains <code class="code-inline">content</code> array</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">theorem</code>, <code class="code-inline">definition</code>, etc.</td>
                <td class="py-2">Mathematical environments. Contain <code class="code-inline">content</code> array and optional <code class="code-inline">params</code></td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">note</code></td>
                <td class="py-2">Tooltip note. Has <code class="code-inline">params</code> and <code class="code-inline">content</code>. Inline-only.</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">figure</code></td>
                <td class="py-2">Image container. Contains <code class="code-inline">image</code> and <code class="code-inline">caption</code> nodes</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">image</code></td>
                <td class="py-2">Image node. Has <code class="code-inline">params</code> with <code class="code-inline">width</code></td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">table</code></td>
                <td class="py-2">Table. Has <code class="code-inline">columns</code> array and <code class="code-inline">rows</code> array</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">verbatim</code></td>
                <td class="py-2">Pre-formatted text. Has <code class="code-inline">content</code> with raw text string</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">label</code></td>
                <td class="py-2">Label definition. Has <code class="code-inline">id</code> and <code class="code-inline">index</code></td>
              </tr>
              <tr>
                <td class="py-2 pr-6"><code class="code-inline">ref</code></td>
                <td class="py-2">Cross-reference. Has <code class="code-inline">target</code> and <code class="code-inline">index</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr class="border-gray-200 mb-14" />

      <!-- Limitations -->
      <section id="limitations" class="mb-14">
        <h2 class="text-2xl font-bold font-plex mb-2">Parser Limitations</h2>
        <p class="text-sm text-gray-400 mb-6">What the parser currently does not support</p>

        <p class="text-gray-700 mb-8 leading-relaxed">
          The parser covers a curated subset of LaTeX optimized for mathematical content. The following are known gaps:
        </p>

        <div class="flex flex-col gap-4">
          <div class="doc-block">
            <p class="doc-block-title">No macro definitions</p>
            <p class="text-gray-700 text-sm leading-relaxed">
              <code class="code-inline">\newcommand</code> and <code class="code-inline">\renewcommand</code> are not supported. Define macros in your document class or style file instead.
            </p>
          </div>

          <div class="doc-block">
            <p class="doc-block-title">No deep heading nesting</p>
            <p class="text-gray-700 text-sm leading-relaxed">
              Only three levels are recognized: <code class="code-inline">\chapter</code>, <code class="code-inline">\section</code>, and <code class="code-inline">\subsection</code>. <code class="code-inline">\subsubsection</code> and deeper are not supported.
            </p>
          </div>

          <div class="doc-block">
            <p class="doc-block-title">No footnotes</p>
            <p class="text-gray-700 text-sm leading-relaxed">
              <code class="code-inline">\footnote</code> is not supported. Use <code class="code-inline">\note</code> for inline annotations instead.
            </p>
          </div>

          <div class="doc-block">
            <p class="doc-block-title">No hyperlinks beyond \url</p>
            <p class="text-gray-700 text-sm leading-relaxed">
              <code class="code-inline">\href</code> and <code class="code-inline">\hyperref</code> are not supported. <code class="code-inline">\url{path}</code> produces a <code class="code-inline">url</code> node; rendering as a clickable link depends on the frontend.
            </p>
          </div>

          <div class="doc-block">
            <p class="doc-block-title">No TikZ or external graphics</p>
            <p class="text-gray-700 text-sm leading-relaxed">
              <code class="code-inline">\tikz</code> and similar drawing packages are not supported. Use pre-rendered images for diagrams.
            </p>
          </div>

          <div class="doc-block">
            <p class="doc-block-title">No \input support</p>
            <p class="text-gray-700 text-sm leading-relaxed">
              <code class="code-inline">\input</code> is not supported. Use <code class="code-inline">\include{path}</code> instead.
            </p>
          </div>

          <div class="doc-block">
            <p class="doc-block-title">Unknown commands are silently skipped</p>
            <p class="text-gray-700 text-sm leading-relaxed">
              Any command not in the registry is consumed along with its arguments but produces no output. There is no warning during parsing.
            </p>
          </div>
        </div>
      </section>

    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeSection = ref('overview')

const sections = [
  { id: 'overview', title: 'Overview' },
  { id: 'quick-start', title: 'Quick Start' },
  { id: 'element-types', title: 'Element Types' },
  { id: 'environments', title: 'Environments' },
  { id: 'math', title: 'Math' },
  { id: 'commands', title: 'Text Commands' },
  { id: 'cross-references', title: 'Cross-References' },
  { id: 'complete-example', title: 'Complete Example' },
  { id: 'parser-output', title: 'Parser Output' },
  { id: 'limitations', title: 'Limitations' },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

let observer = null

onMounted(() => {
  const targets = document.querySelectorAll('section[id]')
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) activeSection.value = entry.target.id
      }
    },
    { rootMargin: '-20% 0px -70% 0px' }
  )
  targets.forEach(el => observer.observe(el))
})

onUnmounted(() => observer?.disconnect())
</script>

<style scoped>
@reference "tailwindcss";
.code-inline {
  @apply bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-[0.85em] font-mono;
}

.code-inline-heading {
  @apply text-gray-800 text-[0.95em] font-mono;
}

.code-block {
  @apply bg-gray-900 text-gray-300 font-mono text-sm px-5 py-4 rounded-xl leading-7 overflow-x-auto;
}

.doc-block {
  @apply border-l-4 border-blue-400 pl-5 py-1 bg-blue-50 rounded-r-xl;
}

.doc-block-title {
  @apply font-semibold text-blue-700 mb-2;
}

.math-expr {
  font-family: KaTeX_Main, Times New Roman, serif;
}
</style>
