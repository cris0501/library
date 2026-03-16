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
    <main class="flex-1 max-w-3xl mx-auto px-6 py-16 lg:py-12">

      <!-- Header -->
      <section id="overview" class="mb-14">
        <p class="text-4xl font-bold font-plex mb-4">EduWords Documentation</p>
        <p class="text-lg text-gray-600">
          EduWords is an innovative language for students to create, share, and collaborate on educational content with full LaTeX support.
        </p>

        <!-- 3 feature cards -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <button
            @click="scrollTo('getting-started')"
            class="flex flex-col justify-between p-5 rounded-xl bg-gradient-to-br from-green-400 to-blue-500 text-white text-left transition-opacity hover:opacity-90 active:opacity-80"
          >
            <span class="flex items-center text-xl mb-3">
              <i class="icon icon-book"></i>
              <p class="font-bold font-plex ml-3 text-base">Getting Started</p>
            </span>
            <p class="font-nunito text-sm opacity-90 mb-3">Install the esfm packages and write your first document.</p>
            <span class="inline-flex items-center self-start bg-white/20 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              🚧 Under construction
            </span>
          </button>
          <button
            @click="scrollTo('key-value-params')"
            class="flex flex-col justify-between p-5 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 text-white text-left transition-opacity hover:opacity-90 active:opacity-80"
          >
            <span class="flex items-center text-xl mb-3">
              <i class="icon icon-file"></i>
              <p class="font-bold font-plex ml-3 text-base">Syntax Reference</p>
            </span>
            <p class="font-nunito text-sm opacity-90">Commands and environments supported by the larex parser.</p>
          </button>
          <button
            @click="scrollTo('limitations')"
            class="flex flex-col justify-between p-5 rounded-xl bg-gradient-to-br from-green-400 to-cyan-500 text-white text-left transition-opacity hover:opacity-90 active:opacity-80"
          >
            <span class="flex items-center text-xl mb-3">
              <i class="icon icon-code"></i>
              <p class="font-bold font-plex ml-3 text-base">Parser Limitations</p>
            </span>
            <p class="font-nunito text-sm opacity-90">What the parser currently does not understand or support.</p>
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
            <code class="code-inline">larex</code> is an experimental LaTeX parser built to extend LaTeX's reach into web-based educational publishing. The goal is to give students and educators who already write in LaTeX a path to publish interactive, shareable content online — without abandoning their existing tooling or rewriting their documents.
          </p>
          <p>
            This is an experimental project with a development window of a couple of months. If the community finds it useful and engages with it, development will continue. Otherwise it may be put on hold. Think of it as a bet on the community.
          </p>
          <p>
            The parser is actively growing. New commands, environments, and broader LaTeX compatibility are being integrated on an ongoing basis. The current state of the parser is documented here; see the <button @click="scrollTo('limitations')" class="text-blue-600 hover:underline font-medium">Parser Limitations</button> section for an honest picture of what is not yet supported.
          </p>
        </div>
      </section>

      <hr class="border-gray-200 mb-14" />

      <!-- Getting Started -->
      <section id="getting-started" class="mb-14">
        <h2 class="text-2xl font-bold font-plex mb-2">Getting Started</h2>
        <p class="text-sm text-gray-400 mb-6">Installation and workflow overview</p>

        <div class="doc-block mb-8">
          <p class="doc-block-title">Under construction</p>
          <p class="text-gray-700 text-sm leading-relaxed">
            The esfm LaTeX packages are not yet publicly released in their final form. Once released, this section will walk through installation, package setup, and writing your first document. For now, the workflow overview below applies.
          </p>
        </div>

        <h3 class="text-lg font-semibold font-plex mb-3">The origin is always a <code class="code-inline-heading">.tex</code> file</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">
          Everything starts with a standard LaTeX document. You write your content in a <code class="code-inline">.tex</code> file using the supported commands and environments. From there, you have two independent paths — you can use one or both.
        </p>

        <div class="flex flex-col gap-5 mb-10">
          <!-- Path 1 -->
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <div class="flex items-center gap-3 mb-3">
              <span class="flex items-center justify-center w-7 h-7 rounded-full bg-purple-100 text-purple-700 text-xs font-bold shrink-0">1</span>
              <p class="font-semibold font-plex text-gray-800">PDF export via LaTeX</p>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed">
              Compile your <code class="code-inline">.tex</code> file as you normally would using any LaTeX engine (<code class="code-inline">pdflatex</code>, <code class="code-inline">xelatex</code>, <code class="code-inline">lualatex</code>). The esfm packages provide all custom environments as proper LaTeX definitions. This path is fully functional and does not involve <code class="code-inline">larex</code> at all — LaTeX is the render engine.
            </p>
          </div>

          <!-- Path 2 -->
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <div class="flex items-center gap-3 mb-3">
              <span class="flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-700 text-xs font-bold shrink-0">2</span>
              <p class="font-semibold font-plex text-gray-800">Virtual book via larex</p>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              Run the <code class="code-inline">larex</code> compiler on your <code class="code-inline">.tex</code> file to produce a JSON document tree. This JSON is consumed by the EduWords web reader to render an interactive virtual book in the browser — with math, cross-references, tooltip notes, and tab blocks.
            </p>
            <div class="code-block">
              <span class="text-green-400">python</span><span class="text-gray-300"> -m larex </span><span class="text-yellow-300">document.tex</span><span class="text-gray-400"> -o </span><span class="text-yellow-300">output.json</span>
            </div>
          </div>
        </div>

        <p class="text-gray-600 text-sm leading-relaxed">
          The two paths share the same <code class="code-inline">.tex</code> source. A document written for esfm + LaTeX can be compiled to PDF and to a virtual book from the same file, as long as it stays within the commands and environments supported by both.
        </p>
      </section>

      <hr class="border-gray-200 mb-14" />

      <!-- Key-Value Parameter System -->
      <section id="key-value-params" class="mb-14">
        <h2 class="text-2xl font-bold font-plex mb-2">Key-Value Parameter System</h2>
        <p class="text-sm text-gray-400 mb-6">Applies to: larex parser, esfm LaTeX packages</p>

        <p class="text-gray-700 mb-6 leading-relaxed">
          All custom environments in the <code class="code-inline">esfm</code> / <code class="code-inline">larex</code> ecosystem accept an optional parameter block using key-value syntax inside a single pair of brackets. This replaces the previous positional optional argument system based on <code class="code-inline">xargs</code>.
        </p>

        <div class="doc-block mb-8">
          <p class="doc-block-title">Motivation</p>
          <p class="text-gray-700 leading-relaxed">
            The original <code class="code-inline">esfm</code> packages used positional optional arguments where each optional parameter required its own bracket pair in a fixed order. This caused two problems: authors had to remember argument positions and fill in placeholder values for unused earlier positions, and the <code class="code-inline">larex</code> parser could not unambiguously resolve which optional argument was being provided when earlier ones were omitted.
          </p>
          <p class="text-gray-700 leading-relaxed mt-3">
            Key-value parameters solve both issues. A single bracket pair carries all options as named pairs, in any order. Omitted keys use defaults. The same syntax is parseable without ambiguity by both LaTeX (via <code class="code-inline">pgfkeys</code>) and <code class="code-inline">larex</code> (via simple string splitting).
          </p>
        </div>

        <h3 class="text-lg font-semibold font-plex mb-3">Syntax</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          After any <code class="code-inline">\begin{environment}</code>, an optional bracket block may follow containing comma-separated <code class="code-inline">key=value</code> pairs:
        </p>
        <div class="code-block mb-4">
          <span class="text-blue-300">\begin</span><span class="text-gray-300">{environment}[</span><span class="text-green-300">key1</span><span class="text-gray-300">=</span><span class="text-yellow-300">value1</span><span class="text-gray-300">, </span><span class="text-green-300">key2</span><span class="text-gray-300">=</span><span class="text-yellow-300">value2</span><span class="text-gray-300">]</span>
        </div>
        <p class="text-gray-600 text-sm mb-8">
          If no parameters are needed, the brackets are omitted entirely. Keys without a value are treated as boolean flags set to <code class="code-inline">true</code>.
        </p>

        <h3 class="text-lg font-semibold font-plex mb-3">Contract Keys</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          The shared contract currently defines three keys. All are optional and default to empty.
        </p>
        <div class="overflow-x-auto mb-8">
          <table class="w-full text-sm text-left border-collapse">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="py-2 pr-6 font-semibold text-gray-700">Key</th>
                <th class="py-2 pr-6 font-semibold text-gray-700">Type</th>
                <th class="py-2 font-semibold text-gray-700">Description</th>
              </tr>
            </thead>
            <tbody class="text-gray-600">
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">label</code></td>
                <td class="py-2 pr-6">string</td>
                <td class="py-2">Identifier for cross-references via <code class="code-inline">\ref</code></td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">title</code></td>
                <td class="py-2 pr-6">string</td>
                <td class="py-2">Display name shown alongside the environment heading</td>
              </tr>
              <tr>
                <td class="py-2 pr-6"><code class="code-inline">aside</code></td>
                <td class="py-2 pr-6">string</td>
                <td class="py-2">Lateral annotation, used primarily by the <code class="code-inline">note</code> command</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-lg font-semibold font-plex mb-3">Parser Behavior</h3>
        <p class="text-gray-700 mb-8 leading-relaxed">
          When <code class="code-inline">larex</code> finishes parsing a <code class="code-inline">\begin</code> token, it performs a lookahead on the next non-whitespace character. If that character is <code class="code-inline">[</code>, it consumes the bracket block and parses key-value pairs. If it is anything else, it produces an empty parameter dictionary and proceeds to parse the environment body. This means the bracket block is never <em>expected</em>, only consumed when present.
        </p>

        <h3 class="text-lg font-semibold font-plex mb-3">LaTeX Implementation</h3>
        <p class="text-gray-700 mb-8 leading-relaxed">
          On the LaTeX side, <code class="code-inline">pgfkeys</code> handles the parsing. Each environment definition receives a single optional argument <code class="code-inline">#1</code> defaulting to empty, which is passed to <code class="code-inline">\pgfkeys</code> for resolution. This replaces <code class="code-inline">xargs</code> and <code class="code-inline">\newenvironmentx</code> entirely.
        </p>

        <h3 class="text-lg font-semibold font-plex mb-3">Examples</h3>
        <div class="code-block">
          <div><span class="text-blue-300">\begin</span><span class="text-gray-300">{theorem}[</span><span class="text-green-300">label</span><span class="text-gray-300">=</span><span class="text-yellow-300">bw</span><span class="text-gray-300">, </span><span class="text-green-300">title</span><span class="text-gray-300">=</span><span class="text-yellow-300">Bolzano-Weierstrass</span><span class="text-gray-300">]</span></div>
          <div><span class="text-blue-300">\begin</span><span class="text-gray-300">{definition}[</span><span class="text-green-300">title</span><span class="text-gray-300">=</span><span class="text-yellow-300">Metric space</span><span class="text-gray-300">]</span></div>
          <div><span class="text-blue-300">\begin</span><span class="text-gray-300">{lemma}[</span><span class="text-green-300">label</span><span class="text-gray-300">=</span><span class="text-yellow-300">lem-aux</span><span class="text-gray-300">]</span></div>
          <div><span class="text-blue-300">\begin</span><span class="text-gray-300">{theorem}</span></div>
        </div>
      </section>

      <hr class="border-gray-200 mb-14" />

      <!-- Commands -->
      <section id="commands" class="mb-14">
        <h2 class="text-2xl font-bold font-plex mb-2">Commands</h2>
        <p class="text-sm text-gray-400 mb-6">All commands recognized by the larex parser</p>

        <p class="text-gray-700 mb-6 leading-relaxed">
          Commands follow standard LaTeX syntax: a backslash followed by the command name and its arguments in braces. Optional arguments use brackets.
        </p>

        <div class="overflow-x-auto mb-8">
          <table class="w-full text-sm text-left border-collapse">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="py-2 pr-6 font-semibold text-gray-700">Command</th>
                <th class="py-2 font-semibold text-gray-700">Description</th>
              </tr>
            </thead>
            <tbody class="text-gray-600">
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6 whitespace-nowrap"><code class="code-inline">\chapter{title}</code></td>
                <td class="py-2">Level 0 heading (chapter)</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6 whitespace-nowrap"><code class="code-inline">\section{title}</code></td>
                <td class="py-2">Level 1 heading</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6 whitespace-nowrap"><code class="code-inline">\subsection{title}</code></td>
                <td class="py-2">Level 2 heading</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6 whitespace-nowrap"><code class="code-inline">\textbf{text}</code></td>
                <td class="py-2">Bold text</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6 whitespace-nowrap"><code class="code-inline">\textit{text}</code></td>
                <td class="py-2">Italic text</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6 whitespace-nowrap"><code class="code-inline">\includegraphics[width=N]{path}</code></td>
                <td class="py-2"><code class="code-inline">width</code> is optional, as a percentage (e.g. <code class="code-inline">width=60</code>). Path is relative to the book's asset folder.</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6 whitespace-nowrap"><code class="code-inline">\caption{text}</code></td>
                <td class="py-2">Caption inside a <code class="code-inline">figure</code> environment</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6 whitespace-nowrap"><code class="code-inline">\newline</code> · <code class="code-inline">\n</code></td>
                <td class="py-2">Line break</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6 whitespace-nowrap"><code class="code-inline">\backslash</code></td>
                <td class="py-2">Literal backslash character</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6 whitespace-nowrap"><code class="code-inline">\qed</code></td>
                <td class="py-2">End-of-proof marker</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6 whitespace-nowrap"><code class="code-inline">\note[key=val]{text}</code></td>
                <td class="py-2">Inline tooltip note. Accepts <code class="code-inline">title</code> and <code class="code-inline">aside</code> keys. Cannot contain display math or environments.</td>
              </tr>
              <tr>
                <td class="py-2 pr-6 whitespace-nowrap"><code class="code-inline">\ref{label}</code></td>
                <td class="py-2">Cross-reference to a labeled esfm environment</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-lg font-semibold font-plex mb-3">Examples</h3>
        <div class="code-block">
          <div><span class="text-blue-300">\section</span><span class="text-gray-300">{Introduction}</span></div>
          <div class="mt-2"><span class="text-gray-300">See </span><span class="text-blue-300">\ref</span><span class="text-gray-300">{bw} for the full proof.</span></div>
          <div class="mt-2"><span class="text-blue-300">\note</span><span class="text-gray-300">[</span><span class="text-green-300">title</span><span class="text-gray-300">=</span><span class="text-yellow-300">Warning</span><span class="text-gray-300">]{This step requires continuity.}</span></div>
          <div class="mt-2"><span class="text-blue-300">\textbf</span><span class="text-gray-300">{important} and </span><span class="text-blue-300">\textit</span><span class="text-gray-300">{emphasis}</span></div>
        </div>
      </section>

      <hr class="border-gray-200 mb-14" />

      <!-- Environments -->
      <section id="environments" class="mb-14">
        <h2 class="text-2xl font-bold font-plex mb-2">Environments</h2>
        <p class="text-sm text-gray-400 mb-6">All environments recognized by the larex parser</p>

        <p class="text-gray-700 mb-6 leading-relaxed">
          Environments are opened with <code class="code-inline">\begin{name}</code> and closed with <code class="code-inline">\end{name}</code>. Custom esfm environments accept an optional key-value block; standard LaTeX environments accept positional optional arguments as usual.
        </p>

        <h3 class="text-lg font-semibold font-plex mb-3">Standard Environments</h3>
        <div class="overflow-x-auto mb-8">
          <table class="w-full text-sm text-left border-collapse">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="py-2 pr-6 font-semibold text-gray-700">Environment</th>
                <th class="py-2 font-semibold text-gray-700">Description</th>
              </tr>
            </thead>
            <tbody class="text-gray-600">
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">itemize</code></td>
                <td class="py-2">Unordered list. Items introduced with <code class="code-inline">\item</code>.</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">enumerate</code></td>
                <td class="py-2">Ordered list. Items introduced with <code class="code-inline">\item</code>.</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">figure</code></td>
                <td class="py-2">Image container. Accepts optional <code class="code-inline">[width=N]</code>. Place <code class="code-inline">\includegraphics</code> and <code class="code-inline">\caption</code> inside.</td>
              </tr>
              <tr>
                <td class="py-2 pr-6"><code class="code-inline">equation</code></td>
                <td class="py-2">Display math block. Content is passed as raw LaTeX to KaTeX.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-lg font-semibold font-plex mb-3">Custom esfm Environments</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          All of the following accept the <code class="code-inline">label</code>, <code class="code-inline">title</code>, and <code class="code-inline">aside</code> keys.
        </p>
        <div class="overflow-x-auto mb-8">
          <table class="w-full text-sm text-left border-collapse">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="py-2 pr-6 font-semibold text-gray-700">Environment</th>
                <th class="py-2 font-semibold text-gray-700">Description</th>
              </tr>
            </thead>
            <tbody class="text-gray-600">
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">definition</code></td>
                <td class="py-2">Definition block</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">axiom</code></td>
                <td class="py-2">Axiom block</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">theorem</code></td>
                <td class="py-2">Theorem block</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">lemma</code></td>
                <td class="py-2">Lemma block</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">proposition</code></td>
                <td class="py-2">Proposition block</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">corollary</code></td>
                <td class="py-2">Corollary block</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">exercise</code></td>
                <td class="py-2">Exercise block</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">convention</code></td>
                <td class="py-2">Convention block</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">proof</code></td>
                <td class="py-2">Proof block</td>
              </tr>
              <tr>
                <td class="py-2 pr-6"><code class="code-inline">block</code></td>
                <td class="py-2">Tab-based content block. Each <code class="code-inline">\item</code> becomes a separate tab.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-lg font-semibold font-plex mb-3">Examples</h3>
        <div class="code-block">
          <div><span class="text-blue-300">\begin</span><span class="text-gray-300">{theorem}[</span><span class="text-green-300">label</span><span class="text-gray-300">=</span><span class="text-yellow-300">bw</span><span class="text-gray-300">, </span><span class="text-green-300">title</span><span class="text-gray-300">=</span><span class="text-yellow-300">Bolzano-Weierstrass</span><span class="text-gray-300">]</span></div>
          <div><span class="text-gray-300">  Every bounded sequence in $\mathbb{R}^n$ has a convergent subsequence.</span></div>
          <div><span class="text-blue-300">\end</span><span class="text-gray-300">{theorem}</span></div>
          <div class="mt-3"><span class="text-blue-300">\begin</span><span class="text-gray-300">{figure}[width=60]</span></div>
          <div><span class="text-blue-300">  \includegraphics</span><span class="text-gray-300">{diagram.png}</span></div>
          <div><span class="text-blue-300">  \caption</span><span class="text-gray-300">{A visual proof.}</span></div>
          <div><span class="text-blue-300">\end</span><span class="text-gray-300">{figure}</span></div>
          <div class="mt-3"><span class="text-blue-300">\begin</span><span class="text-gray-300">{itemize}</span></div>
          <div><span class="text-blue-300">  \item</span><span class="text-gray-300"> First item</span></div>
          <div><span class="text-blue-300">  \item</span><span class="text-gray-300"> Second item</span></div>
          <div><span class="text-blue-300">\end</span><span class="text-gray-300">{itemize}</span></div>
        </div>
      </section>

      <hr class="border-gray-200 mb-14" />

      <!-- Math -->
      <section id="math" class="mb-14">
        <h2 class="text-2xl font-bold font-plex mb-2">Math Expressions</h2>
        <p class="text-sm text-gray-400 mb-6">Inline and display math via KaTeX</p>

        <p class="text-gray-700 mb-6 leading-relaxed">
          Math content is rendered using <code class="code-inline">KaTeX</code>. Both inline and display modes are supported. The parser treats math content as raw text and passes it directly to KaTeX — no parsing is applied inside math blocks.
        </p>

        <h3 class="text-lg font-semibold font-plex mb-3">Inline Math</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Wrap expressions in single dollar signs: <code class="code-inline">$...$</code>
        </p>
        <div class="code-block mb-8">
          <span class="text-gray-300">The formula </span><span class="text-yellow-300">$e^{i\pi} + 1 = 0$</span><span class="text-gray-300"> is Euler's identity.</span>
        </div>

        <h3 class="text-lg font-semibold font-plex mb-3">Display Math</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Use double dollar signs <code class="code-inline">$$...$$</code> for centered display math, or the <code class="code-inline">equation</code> environment:
        </p>
        <div class="code-block mb-4">
          <div><span class="text-yellow-300">$$\int_a^b f(x)\,dx = F(b) - F(a)$$</span></div>
          <div class="mt-3"><span class="text-blue-300">\begin</span><span class="text-gray-300">{equation}</span></div>
          <div><span class="text-yellow-300">  \sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}</span></div>
          <div><span class="text-blue-300">\end</span><span class="text-gray-300">{equation}</span></div>
        </div>
        <p class="text-gray-600 text-sm">
          Both forms produce display-mode math. The <code class="code-inline">equation</code> environment is equivalent to <code class="code-inline">$$...$$</code> in the current parser.
        </p>
      </section>

      <hr class="border-gray-200 mb-14" />

      <!-- Parser Limitations -->
      <section id="limitations" class="mb-14">
        <h2 class="text-2xl font-bold font-plex mb-2">Parser Limitations</h2>
        <p class="text-sm text-gray-400 mb-6">What larex currently does not support</p>

        <p class="text-gray-700 mb-8 leading-relaxed">
          The <code class="code-inline">larex</code> parser covers a curated subset of LaTeX. The following are known gaps in the current implementation.
        </p>

        <div class="flex flex-col gap-4">
          <div class="doc-block">
            <p class="doc-block-title">No multi-line math environments</p>
            <p class="text-gray-700 text-sm leading-relaxed">
              Only <code class="code-inline">equation</code> and <code class="code-inline">$$...$$</code> are supported. Environments such as <code class="code-inline">align</code>, <code class="code-inline">gather</code>, <code class="code-inline">multline</code>, and <code class="code-inline">aligned</code> are not recognized.
            </p>
          </div>

          <div class="doc-block">
            <p class="doc-block-title">No table environments</p>
            <p class="text-gray-700 text-sm leading-relaxed">
              <code class="code-inline">tabular</code>, <code class="code-inline">array</code>, and <code class="code-inline">table</code> are not supported. There is no way to render tabular data.
            </p>
          </div>

          <div class="doc-block">
            <p class="doc-block-title">No verbatim or code blocks</p>
            <p class="text-gray-700 text-sm leading-relaxed">
              <code class="code-inline">verbatim</code> and <code class="code-inline">lstlisting</code> are not recognized. There is no mechanism for displaying literal code or pre-formatted text.
            </p>
          </div>

          <div class="doc-block">
            <p class="doc-block-title">No hyperlinks</p>
            <p class="text-gray-700 text-sm leading-relaxed">
              <code class="code-inline">\href</code>, <code class="code-inline">\url</code>, and <code class="code-inline">\hyperref</code> are not supported. Links cannot be expressed in the document.
            </p>
          </div>

          <div class="doc-block">
            <p class="doc-block-title">Limited text formatting</p>
            <p class="text-gray-700 text-sm leading-relaxed">
              Only <code class="code-inline">\textbf</code> and <code class="code-inline">\textit</code> are recognized. <code class="code-inline">\emph</code>, <code class="code-inline">\underline</code>, <code class="code-inline">\texttt</code>, and other formatting commands are not supported.
            </p>
          </div>

          <div class="doc-block">
            <p class="doc-block-title">No footnotes</p>
            <p class="text-gray-700 text-sm leading-relaxed">
              <code class="code-inline">\footnote</code> is not supported. Footnote content will be silently discarded.
            </p>
          </div>

          <div class="doc-block">
            <p class="doc-block-title">Headings cannot be referenced</p>
            <p class="text-gray-700 text-sm leading-relaxed">
              <code class="code-inline">\ref</code> and the <code class="code-inline">label</code> key only work within custom esfm environments. <code class="code-inline">\chapter</code>, <code class="code-inline">\section</code>, and <code class="code-inline">\subsection</code> cannot be labeled or cross-referenced.
            </p>
          </div>

          <div class="doc-block">
            <p class="doc-block-title">No display math inside \note</p>
            <p class="text-gray-700 text-sm leading-relaxed">
              The <code class="code-inline">\note</code> command is <code class="code-inline">inline_only</code>: its content cannot contain display math (<code class="code-inline">$$...$$</code>) or any environment. Inline math (<code class="code-inline">$...$</code>) is allowed.
            </p>
          </div>

          <div class="doc-block">
            <p class="doc-block-title">Unknown commands are silently skipped</p>
            <p class="text-gray-700 text-sm leading-relaxed">
              Any command not listed in the registry is consumed along with its brace arguments and produces no output. There is no warning or error at parse time.
            </p>
          </div>

          <div class="doc-block">
            <p class="doc-block-title">No macro definitions</p>
            <p class="text-gray-700 text-sm leading-relaxed">
              <code class="code-inline">\newcommand</code> and <code class="code-inline">\renewcommand</code> are not supported. Macros cannot be defined within the document.
            </p>
          </div>

          <div class="doc-block">
            <p class="doc-block-title">Single-file documents only</p>
            <p class="text-gray-700 text-sm leading-relaxed">
              <code class="code-inline">\input</code> and <code class="code-inline">\include</code> are not supported. Each book must be contained in a single <code class="code-inline">.tex</code> file.
            </p>
          </div>

          <div class="doc-block">
            <p class="doc-block-title">No deep heading nesting</p>
            <p class="text-gray-700 text-sm leading-relaxed">
              Only three levels are recognized: <code class="code-inline">\chapter</code>, <code class="code-inline">\section</code>, and <code class="code-inline">\subsection</code>. <code class="code-inline">\subsubsection</code> and deeper are not supported.
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
  { id: 'getting-started', title: 'Getting Started' },
  {
    id: 'key-value-params', title: 'Syntax Reference',
    children: [
      { id: 'key-value-params', title: 'Key-Value Parameters' },
      { id: 'commands', title: 'Commands' },
      { id: 'environments', title: 'Environments' },
      { id: 'math', title: 'Math' },
    ]
  },
  { id: 'limitations', title: 'Parser Limitations' },
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
</style>
