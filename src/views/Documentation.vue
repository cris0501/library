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
          <div class="flex flex-col justify-between p-5 rounded-xl bg-gradient-to-br from-green-400 to-blue-500 text-white">
            <span class="flex items-center text-xl mb-3">
              <i class="icon icon-book"></i>
              <p class="font-bold font-plex ml-3 text-base">Getting Started</p>
            </span>
            <p class="font-nunito text-sm opacity-90">Create your first EduWords document and set up your environment.</p>
          </div>
          <div class="flex flex-col justify-between p-5 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 text-white">
            <span class="flex items-center text-xl mb-3">
              <i class="icon icon-file"></i>
              <p class="font-bold font-plex ml-3 text-base">Math Expressions</p>
            </span>
            <p class="font-nunito text-sm opacity-90">Use LaTeX syntax to write complex mathematical formulas.</p>
          </div>
          <div class="flex flex-col justify-between p-5 rounded-xl bg-gradient-to-br from-green-400 to-cyan-500 text-white">
            <span class="flex items-center text-xl mb-3">
              <i class="icon icon-server"></i>
              <p class="font-bold font-plex ml-3 text-base">API Reference</p>
            </span>
            <p class="font-nunito text-sm opacity-90">Explore the EduWords API to extend and integrate functionality.</p>
          </div>
        </div>
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
                <td class="py-2">Lateral annotation, used primarily by the <code class="code-inline">note</code> environment</td>
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

    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeSection = ref('overview')

const sections = [
  { id: 'overview', title: 'Overview' },
  {
    id: 'key-value-params', title: 'Syntax Reference',
    children: [
      { id: 'key-value-params', title: 'Key-Value Parameters' }
    ]
  }
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
.code-inline {
  @apply bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-[0.85em] font-mono;
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
