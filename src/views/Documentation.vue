<template>
  <div class="flex min-h-[100dvh] bg-gray-50">

    <!-- Sidebar -->
    <aside class="hidden lg:flex flex-col w-64 shrink-0 border-r border-gray-200 bg-white sticky top-0 h-[100dvh] overflow-y-auto py-10 px-6">
      <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Documentación</p>
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
        <p class="text-4xl font-bold font-plex mb-4">Documentación de EduWords</p>
        <p class="text-lg text-gray-600">
          Guía completa para escribir libros matemáticos interactivos con LaTeX.
        </p>

        <!-- 3 feature cards -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <button
            @click="scrollTo('quick-start')"
            class="flex flex-col justify-between p-5 rounded-xl bg-gradient-to-br from-green-400 to-blue-500 text-white text-left transition-opacity hover:opacity-90 active:opacity-80"
          >
            <span class="flex items-center text-xl mb-3">
              <i class="icon icon-book"></i>
              <p class="font-bold font-plex ml-3 text-base">Inicio Rápido</p>
            </span>
            <p class="font-nunito text-sm opacity-90 mb-3">Aprende lo básico y escribe tu primer documento.</p>
          </button>
          <button
            @click="scrollTo('environments')"
            class="flex flex-col justify-between p-5 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 text-white text-left transition-opacity hover:opacity-90 active:opacity-80"
          >
            <span class="flex items-center text-xl mb-3">
              <i class="icon icon-file"></i>
              <p class="font-bold font-plex ml-3 text-base">Entornos</p>
            </span>
            <p class="font-nunito text-sm opacity-90">Teoremas, demostraciones, definiciones y más.</p>
          </button>
          <button
            @click="scrollTo('math')"
            class="flex flex-col justify-between p-5 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 text-white text-left transition-opacity hover:opacity-90 active:opacity-80"
          >
            <span class="flex items-center text-xl mb-3">
              <i class="icon icon-code"></i>
              <p class="font-bold font-plex ml-3 text-base">Matemáticas</p>
            </span>
            <p class="font-nunito text-sm opacity-90">Matemáticas en línea y en bloque con KaTeX.</p>
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
            <p class="font-semibold text-gray-800 group-hover:text-red-700 text-sm">Curso de LaTeX en YouTube</p>
            <p class="text-xs text-gray-500 mt-0.5">¿Nuevo en LaTeX? Este curso es un excelente punto de partida para aprender la sintaxis básica.</p>
          </div>
          <i class="icon icon-arrow_right text-gray-400 group-hover:text-red-400 shrink-0"></i>
        </a>

        <!-- Project intro -->
        <div class="mt-10 flex flex-col gap-4 text-gray-700 leading-relaxed">
          <p>
            <code class="code-inline">larex</code> es un analizador de LaTeX que convierte tus documentos en libros web interactivos. Si ya conoces LaTeX, puedes escribir contenido de inmediato, sin aprender nueva sintaxis. El analizador soporta un subconjunto cuidadosamente seleccionado de comandos LaTeX optimizado para contenido matemático y educativo.
          </p>
          <p>
            Los documentos se renderizan con KaTeX para las matemáticas e incluyen funciones interactivas como notas clicables, referencias cruzadas y entornos de teoremas estructurados.
          </p>
        </div>
      </section>

      <hr class="border-gray-200 mb-14" />

      <!-- Quick Start -->
      <section id="quick-start" class="mb-14">
        <h2 class="text-2xl font-bold font-plex mb-2">Inicio Rápido</h2>
        <p class="text-sm text-gray-400 mb-6">Escribe tu primer libro interactivo</p>

        <h3 class="text-lg font-semibold font-plex mb-3">Documento Mínimo</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Un documento válido requiere al menos la declaración <code class="code-inline">\documentclass</code> y el envoltorio <code class="code-inline">\begin{document}</code> / <code class="code-inline">\end{document}</code>:
        </p>
        <div class="code-block mb-8">
          <div><span class="text-blue-300">\documentclass</span><span class="text-gray-300">{article}</span></div>
          <div><span class="text-blue-300">\begin</span><span class="text-gray-300">{document}</span></div>
          <div class="mt-2"><span class="text-blue-300">\section</span><span class="text-gray-300">{Introduction}</span></div>
          <div><span class="text-gray-300">Welcome to my interactive book!</span></div>
          <div><span class="text-blue-300">\end</span><span class="text-gray-300">{document}</span></div>
        </div>

        <h3 class="text-lg font-semibold font-plex mb-3">Estructura del Proyecto</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Para proyectos más grandes, divide tu contenido en varios archivos:
        </p>
        <pre class="code-block mb-6">book/                    # Project root
  main.tex               # Entry point
  chapters/
    intro.tex
    chapter1.tex
  assets/
    images/
      diagram.png</pre>

        <h3 class="text-lg font-semibold font-plex mb-3">Inclusión de Archivos</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Usa <code class="code-inline">\include{path}</code> para incluir archivos externos. La ruta es relativa al archivo <code class="code-inline">.tex</code> principal y la extensión <code class="code-inline">.tex</code> es opcional:
        </p>
        <div class="code-block mb-4">
          <div><span class="text-blue-300">\include</span><span class="text-gray-300">{chapters/intro}</span></div>
          <div class="mt-2"><span class="text-blue-300">\include</span><span class="text-gray-300">{chapters/chapter1}</span></div>
        </div>
        <p class="text-gray-600 text-sm mb-8">
          Los archivos incluidos se resuelven recursivamente antes del análisis. Puedes anidar includes en múltiples niveles.
        </p>

        <h3 class="text-lg font-semibold font-plex mb-3">Usando el Compilador</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Ejecuta el analizador desde el directorio del compilador:
        </p>
        <div class="code-block mb-4">
          <div><span class="text-green-400">python</span><span class="text-gray-300"> -m larex </span><span class="text-yellow-300">path/to/document.tex</span></div>
        </div>
        <p class="text-gray-600 text-sm mb-4 leading-relaxed">
          Muestra el AST JSON en stdout, o usa la bandera <code class="code-inline">-f</code> para guardar la salida en <code class="code-inline">examples/dist/</code>:
        </p>
        <div class="code-block mb-4">
          <span class="text-green-400">python</span><span class="text-gray-300"> -m larex </span><span class="text-yellow-300">document.tex</span><span class="text-gray-300"> -f</span>
        </div>
      </section>

      <hr class="border-gray-200 mb-14" />

      <!-- How Elements Are Read -->
      <section id="element-types" class="mb-14">
        <h2 class="text-2xl font-bold font-plex mb-2">Cómo se Leen los Elementos</h2>
        <p class="text-sm text-gray-400 mb-6">Entendiendo los modos raw, kv y parsed</p>

        <p class="text-gray-700 mb-6 leading-relaxed">
          El analizador procesa distintos elementos de diferentes maneras según su tipo. Entender estos modos te ayuda a escribir LaTeX correcto y evitar errores comunes.
        </p>

        <h3 class="text-lg font-semibold font-plex mb-3">Modo Raw</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          En el <strong>modo raw</strong>, el contenido se recopila como texto plano y se pasa directamente al renderizador sin procesamiento adicional. Se usa para:
        </p>
        <ul class="list-disc list-inside text-gray-600 mb-4 space-y-1">
          <li>Entornos matemáticos (<code class="code-inline">equation</code>, <code class="code-inline">align</code>, <code class="code-inline">cases</code>, <code class="code-inline">pmatrix</code>)</li>
          <li>El entorno <code class="code-inline">verbatim</code></li>
          <li>Rutas de imágenes en <code class="code-inline">\includegraphics</code></li>
          <li>URLs en <code class="code-inline">\url</code></li>
        </ul>
        <div class="code-block mb-4">
          <div><span class="text-blue-300">\begin</span><span class="text-gray-300">{equation}</span></div>
          <div><span class="text-yellow-300">  \int_a^b f(x)\,dx = F(b) - F(a)</span></div>
          <div><span class="text-blue-300">\end</span><span class="text-gray-300">{equation}</span></div>
          <div class="mt-3"><span class="text-blue-300">\includegraphics</span><span class="text-gray-300">{assets/diagram.png}</span></div>
        </div>
        <p class="text-gray-600 text-sm mb-8">
          Dentro de entornos raw no puedes usar otros comandos LaTeX ni formato. El contenido se pasa directamente a KaTeX (para matemáticas) o se renderiza tal cual (para verbatim).
        </p>

        <h3 class="text-lg font-semibold font-plex mb-3">Modo Clave-Valor (kv)</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          El <strong>modo clave-valor</strong> lo usan los entornos personalizados como <code class="code-inline">theorem</code>, <code class="code-inline">definition</code>, etc. Los parámetros se pasan en un bloque de corchetes con sintaxis <code class="code-inline">clave=valor</code>:
        </p>
        <div class="code-block mb-4">
          <span class="text-blue-300">\begin</span><span class="text-gray-300">{theorem}[</span><span class="text-green-300">label</span><span class="text-gray-300">=</span><span class="text-yellow-300">main-thm</span><span class="text-gray-300">, </span><span class="text-green-300">title</span><span class="text-gray-300">=</span><span class="text-yellow-300">Pythagorean Theorem</span><span class="text-gray-300">]</span>
        </div>
        <p class="text-gray-600 text-sm mb-4 leading-relaxed">
          Claves disponibles:
        </p>
        <ul class="list-disc list-inside text-gray-600 mb-4 space-y-1">
          <li><code class="code-inline">label</code> — identificador para referencias cruzadas</li>
          <li><code class="code-inline">title</code> — nombre mostrado en el encabezado</li>
          <li><code class="code-inline">aside</code> — texto de anotación lateral</li>
        </ul>
        <p class="text-gray-600 text-sm mb-8">
          Si no se proveen corchetes, se usa un diccionario de parámetros vacío. Las claves sin valor (p.ej., <code class="code-inline">[highlight]</code>) se tratan como banderas booleanas con valor <code class="code-inline">true</code>.
        </p>

        <h3 class="text-lg font-semibold font-plex mb-3">Modo Parsed</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          En el <strong>modo parsed</strong>, el contenido entre llaves se procesa como LaTeX normal. Puedes usar comandos de formato, matemáticas en línea y estructuras anidadas:
        </p>
        <div class="code-block mb-4">
          <div><span class="text-blue-300">\textbf</span><span class="text-gray-300">{This is }</span><span class="text-blue-300">\textit</span><span class="text-gray-300">{formatted}</span><span class="text-gray-300"> text.</span></div>
          <div><span class="text-gray-300">The formula $a^2 + b^2 = c^2$ uses inline math.</span></div>
        </div>
        <p class="text-gray-600 text-sm mb-8">
          Los comandos de formato como <code class="code-inline">\textbf</code>, <code class="code-inline">\textit</code> y las matemáticas en línea funcionan dentro del contenido parsed.
        </p>

        <h3 class="text-lg font-semibold font-plex mb-3">Elementos Solo en Línea</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Algunos elementos están restringidos a contenido <strong>solo en línea</strong>. Esto significa:
        </p>
        <ul class="list-disc list-inside text-gray-600 mb-4 space-y-1">
          <li>Las matemáticas en bloque (<code class="code-inline">$$...$$</code>) no están permitidas</li>
          <li>No se pueden anidar entornos dentro de ellos</li>
          <li>Las matemáticas en línea (<code class="code-inline">$...$</code>) sí están permitidas</li>
        </ul>
        <p class="text-gray-600 text-sm mb-4">
          El comando <code class="code-inline">\note</code> es solo en línea por diseño: los tooltips no pueden contener bloques grandes de contenido.
        </p>
        <div class="doc-block mb-8">
          <p class="doc-block-title">¿Por qué solo en línea?</p>
          <p class="text-gray-700 text-sm leading-relaxed">
            Elementos como las notas están diseñados para anotaciones pequeñas. Matemáticas en bloque o entornos dentro de ellos producirían tooltips poco manejables. El analizador impone esta restricción para garantizar una experiencia de lectura coherente.
          </p>
        </div>
      </section>

      <hr class="border-gray-200 mb-14" />

      <!-- Environments -->
      <section id="environments" class="mb-14">
        <h2 class="text-2xl font-bold font-plex mb-2">Entornos</h2>
        <p class="text-sm text-gray-400 mb-6">Entornos matemáticos y estructurales</p>

        <p class="text-gray-700 mb-8 leading-relaxed">
          Los entornos envuelven contenido entre <code class="code-inline">\begin{nombre}</code> y <code class="code-inline">\end{nombre}</code>. Los entornos personalizados usan parámetros clave-valor; los entornos LaTeX estándar usan su sintaxis nativa.
        </p>

        <h3 class="text-lg font-semibold font-plex mb-3">Entornos Matemáticos (Raw)</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Los entornos matemáticos recopilan su contenido como LaTeX raw y lo pasan directamente a KaTeX. No se procesan comandos anidados ni formato dentro de ellos.
        </p>

        <div class="flex flex-col gap-4 mb-8">
          <div class="rounded-xl border border-gray-200 bg-white p-5">
            <p class="font-mono font-semibold text-gray-800 mb-2"><code class="code-inline">equation</code></p>
            <p class="text-gray-600 text-sm mb-3">Ecuación en bloque de una línea. El contenido es LaTeX raw para KaTeX.</p>
            <div class="code-block">
              <div><span class="text-blue-300">\begin</span><span class="text-gray-300">{equation}</span></div>
              <div><span class="text-yellow-300">  E = mc^2</span></div>
              <div><span class="text-blue-300">\end</span><span class="text-gray-300">{equation}</span></div>
            </div>
          </div>

          <div class="rounded-xl border border-gray-200 bg-white p-5">
            <p class="font-mono font-semibold text-gray-800 mb-2"><code class="code-inline">align</code></p>
            <p class="text-gray-600 text-sm mb-3">Ecuaciones alineadas de múltiples líneas. Usa <code class="code-inline">&</code> para los puntos de alineación.</p>
            <div class="code-block">
              <div><span class="text-blue-300">\begin</span><span class="text-gray-300">{align}</span></div>
              <div><span class="text-yellow-300">  (a+b)^2 &= a^2 + 2ab + b^2 \\</span></div>
              <div><span class="text-yellow-300">  (a-b)^2 &= a^2 - 2ab + b^2</span></div>
              <div><span class="text-blue-300">\end</span><span class="text-gray-300">{align}</span></div>
            </div>
          </div>

          <div class="rounded-xl border border-gray-200 bg-white p-5">
            <p class="font-mono font-semibold text-gray-800 mb-2"><code class="code-inline">cases</code></p>
            <p class="text-gray-600 text-sm mb-3">Definiciones de funciones por partes.</p>
            <div class="code-block">
              <div><span class="text-blue-300">\begin</span><span class="text-gray-300">{cases}</span></div>
              <div><span class="text-yellow-300">  f(x) = x^2 \quad \text{if } x \geq 0 \\</span></div>
              <div><span class="text-yellow-300">  f(x) = 0 \quad \text{otherwise}</span></div>
              <div><span class="text-blue-300">\end</span><span class="text-gray-300">{cases}</span></div>
            </div>
          </div>

          <div class="rounded-xl border border-gray-200 bg-white p-5">
            <p class="font-mono font-semibold text-gray-800 mb-2"><code class="code-inline">pmatrix</code></p>
            <p class="text-gray-600 text-sm mb-3">Matriz entre paréntesis.</p>
            <div class="code-block">
              <div><span class="text-blue-300">\begin</span><span class="text-gray-300">{pmatrix}</span></div>
              <div><span class="text-yellow-300">  1 & 0 & 0 \\</span></div>
              <div><span class="text-yellow-300">  0 & 1 & 0 \\</span></div>
              <div><span class="text-yellow-300">  0 & 0 & 1</span></div>
              <div><span class="text-blue-300">\end</span><span class="text-gray-300">{pmatrix}</span></div>
            </div>
          </div>
        </div>

        <h3 class="text-lg font-semibold font-plex mb-3">Abreviaciones para Matemáticas en Bloque</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          También puedes usar sintaxis abreviada para matemáticas en bloque. Las tres formas son equivalentes:
        </p>
        <div class="code-block mb-4">
          <div><span class="text-yellow-300">$$ \int_a^b f(x)\,dx $$</span></div>
          <div class="mt-3"><span class="text-yellow-300">\[ \sum_{n=1}^{\infty} \frac{1}{n^2} \]</span></div>
          <div class="mt-3"><span class="text-blue-300">\begin</span><span class="text-gray-300">{equation}</span></div>
          <div><span class="text-yellow-300">  \lim_{x \to \infty} f(x)</span></div>
          <div><span class="text-blue-300">\end</span><span class="text-gray-300">{equation}</span></div>
        </div>

        <h3 class="text-lg font-semibold font-plex mb-3">Entornos Matemáticos (Clave-Valor)</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Estos entornos aceptan parámetros clave-valor opcionales. Todos comparten el mismo sistema de parámetros con las claves <code class="code-inline">label</code>, <code class="code-inline">title</code> y <code class="code-inline">aside</code>.
        </p>

        <div class="overflow-x-auto mb-6">
          <table class="w-full text-sm text-left border-collapse">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="py-2 pr-6 font-semibold text-gray-700">Entorno</th>
                <th class="py-2 font-semibold text-gray-700">Descripción</th>
              </tr>
            </thead>
            <tbody class="text-gray-600">
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">theorem</code></td>
                <td class="py-2">Enunciado formal de un teorema</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">definition</code></td>
                <td class="py-2">Definición formal</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">axiom</code></td>
                <td class="py-2">Axioma o postulado</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">lemma</code></td>
                <td class="py-2">Lema auxiliar</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">proposition</code></td>
                <td class="py-2">Proposición matemática</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">corollary</code></td>
                <td class="py-2">Corolario derivado de un teorema</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">proof</code></td>
                <td class="py-2">Demostración de un enunciado</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">exercise</code></td>
                <td class="py-2">Ejercicio o problema de práctica</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">convention</code></td>
                <td class="py-2">Convención o acuerdo de notación</td>
              </tr>
              <tr>
                <td class="py-2 pr-6"><code class="code-inline">block</code></td>
                <td class="py-2">Contenedor con pestañas (cada <code class="code-inline">\item</code> se convierte en una pestaña)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="text-gray-700 mb-4 leading-relaxed">
          Ejemplo con parámetros completos:
        </p>
        <div class="code-block mb-4">
          <div><span class="text-blue-300">\begin</span><span class="text-gray-300">{theorem}[</span><span class="text-green-300">label</span><span class="text-gray-300">=</span><span class="text-yellow-300">pythagorean</span><span class="text-gray-300">, </span><span class="text-green-300">title</span><span class="text-gray-300">=</span><span class="text-yellow-300">Pythagorean Theorem</span><span class="text-gray-300">]</span></div>
          <div><span class="text-gray-300">  In a right triangle, $a^2 + b^2 = c^2$ where $c$ is the hypotenuse.</span></div>
          <div><span class="text-blue-300">\end</span><span class="text-gray-300">{theorem}</span></div>
          <div class="mt-3"><span class="text-gray-300">See </span><span class="text-blue-300">\ref</span><span class="text-gray-300">{pythagorean} for details.</span></div>
        </div>

        <p class="text-gray-700 mb-4 leading-relaxed">
          Sin parámetros (usa el estilo por defecto):
        </p>
        <div class="code-block mb-4">
          <div><span class="text-blue-300">\begin</span><span class="text-gray-300">{lemma}</span></div>
          <div><span class="text-gray-300">  If $f$ is continuous on $[a,b]$, then $f$ is bounded.</span></div>
          <div><span class="text-blue-300">\end</span><span class="text-gray-300">{lemma}</span></div>
        </div>

        <h3 class="text-lg font-semibold font-plex mb-3">Entornos de Lista</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Usa <code class="code-inline">enumerate</code> para listas numeradas e <code class="code-inline">itemize</code> para listas con viñetas. Cada elemento comienza con <code class="code-inline">\item</code>. Un nuevo <code class="code-inline">\item</code> cierra automáticamente el anterior.
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

        <h3 class="text-lg font-semibold font-plex mb-3">Entorno Figure</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Envuelve imágenes con <code class="code-inline">\includegraphics</code> y <code class="code-inline">\caption</code> dentro de un entorno <code class="code-inline">figure</code>. El entorno acepta un parámetro opcional <code class="code-inline">[width=N]</code>.
        </p>
        <div class="code-block mb-4">
          <div><span class="text-blue-300">\begin</span><span class="text-gray-300">{figure}[</span><span class="text-green-300">width</span><span class="text-gray-300">=</span><span class="text-yellow-300">60</span><span class="text-gray-300">]</span></div>
          <div><span class="text-blue-300">  \includegraphics</span><span class="text-gray-300">{assets/diagram.png}</span></div>
          <div><span class="text-blue-300">  \caption</span><span class="text-gray-300">{Architecture diagram}</span></div>
          <div><span class="text-blue-300">\end</span><span class="text-gray-300">{figure}</span></div>
        </div>
        <p class="text-gray-600 text-sm mb-8">
          Las rutas de imagen son relativas a la carpeta de assets del libro. El ancho es un valor porcentual (p.ej., <code class="code-inline">60</code> significa el 60% del ancho del contenedor).
        </p>

        <h3 class="text-lg font-semibold font-plex mb-3">Entorno Verbatim</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Usa <code class="code-inline">verbatim</code> para texto preformateado donde los comandos LaTeX no deben procesarse:
        </p>
        <div class="code-block mb-4">
          <div><span class="text-blue-300">\begin</span><span class="text-gray-300">{verbatim}</span></div>
          <div><span class="text-yellow-300">  \documentclass{article}</span></div>
          <div><span class="text-yellow-300">  \begin{document}</span></div>
          <div><span class="text-yellow-300">    Hello World</span></div>
          <div><span class="text-yellow-300">  \end{document}</span></div>
          <div><span class="text-blue-300">\end</span><span class="text-gray-300">{verbatim}</span></div>
        </div>

        <h3 class="text-lg font-semibold font-plex mb-3">Entorno Tabular</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Crea tablas con el entorno <code class="code-inline">tabular</code>. La alineación de columnas se especifica entre llaves: <code class="code-inline">l</code> (izquierda), <code class="code-inline">c</code> (centro), <code class="code-inline">r</code> (derecha). Usa <code class="code-inline">|</code> para bordes verticales y <code class="code-inline">\hline</code> para líneas horizontales.
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
          Las celdas pueden contener matemáticas en línea: <code class="code-inline">$x^2$</code>. Sin embargo, no se admiten entornos ni formato complejo dentro de las celdas.
        </p>
      </section>

      <hr class="border-gray-200 mb-14" />

      <!-- Math -->
      <section id="math" class="mb-14">
        <h2 class="text-2xl font-bold font-plex mb-2">Expresiones Matemáticas</h2>
        <p class="text-sm text-gray-400 mb-6">Matemáticas en línea y en bloque con KaTeX</p>

        <p class="text-gray-700 mb-6 leading-relaxed">
          El contenido matemático se renderiza con <code class="code-inline">KaTeX</code>. Se admiten completamente los modos en línea y en bloque. El contenido matemático se pasa directamente a KaTeX sin procesamiento adicional.
        </p>

        <h3 class="text-lg font-semibold font-plex mb-3">Matemáticas en Línea</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Envuelve las expresiones entre signos de dólar simples: <code class="code-inline">$...$</code>
        </p>
        <div class="code-block mb-6">
          <div><span class="text-gray-300">The formula </span><span class="text-yellow-300">$e^{i\pi} + 1 = 0$</span><span class="text-gray-300"> is Euler's identity.</span></div>
          <div class="mt-3"><span class="text-gray-300">If $x \in \mathbb{R}$ and $x > 0$, then $\sqrt{x}$ exists.</span></div>
        </div>

        <h3 class="text-lg font-semibold font-plex mb-3">Matemáticas en Bloque</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Para ecuaciones centradas y destacadas, usa matemáticas en bloque. Se admiten tres formas equivalentes:
        </p>
        <div class="code-block mb-4">
          <div><span class="text-yellow-300">$$\int_a^b f(x)\,dx = F(b) - F(a)$$</span></div>
          <div class="mt-3"><span class="text-yellow-300">\[ \sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6} \]</span></div>
          <div class="mt-3"><span class="text-blue-300">\begin</span><span class="text-gray-300">{equation}</span></div>
          <div><span class="text-yellow-300">  \lim_{x \to 0} \frac{\sin x}{x} = 1</span></div>
          <div><span class="text-blue-300">\end</span><span class="text-gray-300">{equation}</span></div>
        </div>

        <h3 class="text-lg font-semibold font-plex mb-3">Comandos Matemáticos Comunes</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          KaTeX soporta la mayoría de los comandos matemáticos LaTeX estándar. Aquí algunos comunes:
        </p>
        <div class="overflow-x-auto mb-6">
          <table class="w-full text-sm text-left border-collapse">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="py-2 pr-6 font-semibold text-gray-700">Expresión</th>
                <th class="py-2 pr-6 font-semibold text-gray-700">LaTeX</th>
                <th class="py-2 font-semibold text-gray-700">Descripción</th>
              </tr>
            </thead>
            <tbody class="text-gray-600">
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><span class="math-expr">x<sup>2</sup></span></td>
                <td class="py-2 pr-6"><code class="code-inline">x^2</code></td>
                <td class="py-2">Superíndice</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><span class="math-expr">x<sub>i</sub></span></td>
                <td class="py-2 pr-6"><code class="code-inline">x_i</code></td>
                <td class="py-2">Subíndice</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><span class="math-expr">&frac12;</span></td>
                <td class="py-2 pr-6"><code class="code-inline">\frac{1}{2}</code></td>
                <td class="py-2">Fracción</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><span class="math-expr">&radic;x</span></td>
                <td class="py-2 pr-6"><code class="code-inline">\sqrt{x}</code></td>
                <td class="py-2">Raíz cuadrada</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><span class="math-expr">&sum;</span></td>
                <td class="py-2 pr-6"><code class="code-inline">\sum</code></td>
                <td class="py-2">Sumatoria</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><span class="math-expr">&int;</span></td>
                <td class="py-2 pr-6"><code class="code-inline">\int</code></td>
                <td class="py-2">Integral</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><span class="math-expr">&in;</span></td>
                <td class="py-2 pr-6"><code class="code-inline">\in</code></td>
                <td class="py-2">Elemento de</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><span class="math-expr">&forall;</span></td>
                <td class="py-2 pr-6"><code class="code-inline">\forall</code></td>
                <td class="py-2">Para todo</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><span class="math-expr">&exist;</span></td>
                <td class="py-2 pr-6"><code class="code-inline">\exists</code></td>
                <td class="py-2">Existe</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><span class="math-expr">&real;</span></td>
                <td class="py-2 pr-6"><code class="code-inline">\mathbb{R}</code></td>
                <td class="py-2">Negrita de pizarrón (conjuntos)</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><span class="math-expr">&rarr;</span></td>
                <td class="py-2 pr-6"><code class="code-inline">\rightarrow</code></td>
                <td class="py-2">Flecha de implicación</td>
              </tr>
              <tr>
                <td class="py-2 pr-6"><span class="math-expr">&harr;</span></td>
                <td class="py-2 pr-6"><code class="code-inline">\leftrightarrow</code></td>
                <td class="py-2">Flecha de equivalencia</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="doc-block">
          <p class="doc-block-title">Nota sobre el análisis matemático</p>
          <p class="text-gray-700 text-sm leading-relaxed">
            Dentro de los entornos matemáticos, el contenido se pasa directamente a KaTeX. No puedes usar comandos de formato como <code class="code-inline">\textbf</code> dentro de matemáticas. Usa <code class="code-inline">\text{...}</code> para texto normal dentro del modo matemático.
          </p>
        </div>
      </section>

      <hr class="border-gray-200 mb-14" />

      <!-- Commands -->
      <section id="commands" class="mb-14">
        <h2 class="text-2xl font-bold font-plex mb-2">Comandos de Texto</h2>
        <p class="text-sm text-gray-400 mb-6">Formato, estructura y elementos especiales</p>

        <p class="text-gray-700 mb-8 leading-relaxed">
          Los comandos siguen la sintaxis estándar de LaTeX: una barra invertida seguida del nombre del comando y sus argumentos entre llaves. Los argumentos opcionales usan corchetes.
        </p>

        <h3 class="text-lg font-semibold font-plex mb-3">Encabezados</h3>
        <div class="overflow-x-auto mb-6">
          <table class="w-full text-sm text-left border-collapse">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="py-2 pr-6 font-semibold text-gray-700">Comando</th>
                <th class="py-2 font-semibold text-gray-700">Descripción</th>
              </tr>
            </thead>
            <tbody class="text-gray-600">
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\chapter{title}</code></td>
                <td class="py-2">Encabezado nivel 0 (capítulo)</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\section{title}</code></td>
                <td class="py-2">Encabezado nivel 1</td>
              </tr>
              <tr>
                <td class="py-2 pr-6"><code class="code-inline">\subsection{title}</code></td>
                <td class="py-2">Encabezado nivel 2</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-lg font-semibold font-plex mb-3">Formato de Texto</h3>
        <div class="overflow-x-auto mb-6">
          <table class="w-full text-sm text-left border-collapse">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="py-2 pr-6 font-semibold text-gray-700">Comando</th>
                <th class="py-2 font-semibold text-gray-700">Descripción</th>
              </tr>
            </thead>
            <tbody class="text-gray-600">
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\textbf{text}</code></td>
                <td class="py-2">Texto en negrita</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\textit{text}</code></td>
                <td class="py-2">Texto en cursiva</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\emph{text}</code></td>
                <td class="py-2">Énfasis (normalmente cursiva)</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\underline{text}</code></td>
                <td class="py-2">Texto subrayado</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\texttt{text}</code></td>
                <td class="py-2">Texto monoespaciado (máquina de escribir)</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\textsf{text}</code></td>
                <td class="py-2">Texto sin serifa</td>
              </tr>
              <tr>
                <td class="py-2 pr-6"><code class="code-inline">\psc{text}</code></td>
                <td class="py-2">Texto en versalitas</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-lg font-semibold font-plex mb-3">Elementos Especiales</h3>
        <div class="overflow-x-auto mb-6">
          <table class="w-full text-sm text-left border-collapse">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="py-2 pr-6 font-semibold text-gray-700">Comando</th>
                <th class="py-2 font-semibold text-gray-700">Descripción</th>
              </tr>
            </thead>
            <tbody class="text-gray-600">
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\url{path}</code></td>
                <td class="py-2">URL de hipervínculo (raw, no analizado)</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\note[key=val]{text}</code></td>
                <td class="py-2">Nota tooltip en línea. Acepta las claves <code class="code-inline">title</code> y <code class="code-inline">aside</code>.</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\alert{text}</code></td>
                <td class="py-2">Caja de alerta o advertencia destacada</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\includegraphics[width=N]{path}</code></td>
                <td class="py-2">Imagen con porcentaje de ancho opcional</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\caption{text}</code></td>
                <td class="py-2">Leyenda de figura (dentro del entorno figure)</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\label{id}</code></td>
                <td class="py-2">Define una etiqueta para referencias cruzadas</td>
              </tr>
              <tr>
                <td class="py-2 pr-6"><code class="code-inline">\ref{label}</code></td>
                <td class="py-2">Referencia cruzada a un elemento etiquetado</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-lg font-semibold font-plex mb-3">Comandos Autocerrados</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Estos comandos no toman argumentos y se escriben sin llaves:
        </p>
        <div class="overflow-x-auto mb-6">
          <table class="w-full text-sm text-left border-collapse">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="py-2 pr-6 font-semibold text-gray-700">Comando</th>
                <th class="py-2 font-semibold text-gray-700">Descripción</th>
              </tr>
            </thead>
            <tbody class="text-gray-600">
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\newline</code> o <code class="code-inline">\n</code></td>
                <td class="py-2">Salto de línea</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\\</code></td>
                <td class="py-2">Salto de línea alternativo</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\newpage</code></td>
                <td class="py-2">Salto de página</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\noindent</code></td>
                <td class="py-2">Suprime la sangría del párrafo</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\qed</code></td>
                <td class="py-2">Símbolo de fin de demostración (cuadrado)</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\obs</code></td>
                <td class="py-2">Marcador de observación</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">\dem</code></td>
                <td class="py-2">Marcador de demostración</td>
              </tr>
              <tr>
                <td class="py-2 pr-6"><code class="code-inline">\backslash</code></td>
                <td class="py-2">Carácter de barra invertida literal</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-lg font-semibold font-plex mb-3">Caracteres Escapados</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Estos caracteres tienen significado especial en LaTeX. Usa una barra invertida para producirlos literalmente:
        </p>
        <div class="overflow-x-auto mb-8">
          <table class="w-full text-sm text-left border-collapse">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="py-2 pr-6 font-semibold text-gray-700">Carácter</th>
                <th class="py-2 pr-6 font-semibold text-gray-700">Escapado</th>
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

        <h3 class="text-lg font-semibold font-plex mb-3">Comentarios</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Las líneas que empiezan con <code class="code-inline">%</code> se tratan como comentarios y se eliminan antes del análisis:
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
        <h2 class="text-2xl font-bold font-plex mb-2">Referencias Cruzadas</h2>
        <p class="text-sm text-gray-400 mb-6">Etiqueta y referencia elementos dentro de tu documento</p>

        <p class="text-gray-700 mb-6 leading-relaxed">
          Puedes crear referencias cruzadas clicables a teoremas, definiciones, ecuaciones y otros elementos etiquetados. Esto requiere dos pasos: etiquetar y referenciar.
        </p>

        <h3 class="text-lg font-semibold font-plex mb-3">Crear Etiquetas</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Agrega una clave <code class="code-inline">label</code> a cualquier entorno que soporte parámetros clave-valor:
        </p>
        <div class="code-block mb-4">
          <div><span class="text-blue-300">\begin</span><span class="text-gray-300">{theorem}[</span><span class="text-green-300">label</span><span class="text-gray-300">=</span><span class="text-yellow-300">main-theorem</span><span class="text-gray-300">, </span><span class="text-green-300">title</span><span class="text-gray-300">=</span><span class="text-yellow-300">Main Result</span><span class="text-gray-300">]</span></div>
          <div><span class="text-gray-300">  The statement of your theorem...</span></div>
          <div><span class="text-blue-300">\end</span><span class="text-gray-300">{theorem}</span></div>
        </div>

        <p class="text-gray-700 mb-4 leading-relaxed">
          O usa el comando <code class="code-inline">\label</code> después de una ecuación:
        </p>
        <div class="code-block mb-4">
          <div><span class="text-blue-300">\begin</span><span class="text-gray-300">{equation}</span></div>
          <div><span class="text-yellow-300">  E = mc^2</span></div>
          <div><span class="text-blue-300">\end</span><span class="text-gray-300">{equation}</span></div>
          <div><span class="text-blue-300">\label</span><span class="text-gray-300">{eq-einstein}</span></div>
        </div>

        <h3 class="text-lg font-semibold font-plex mb-3">Referenciar Etiquetas</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Usa <code class="code-inline">\ref{label}</code> para crear una referencia:
        </p>
        <div class="code-block mb-4">
          <div><span class="text-gray-300">As shown in </span><span class="text-blue-300">\ref</span><span class="text-gray-300">{main-theorem}, we have...</span></div>
          <div class="mt-2"><span class="text-gray-300">From equation </span><span class="text-blue-300">\ref</span><span class="text-gray-300">{eq-einstein}...</span></div>
        </div>

        <div class="doc-block">
          <p class="doc-block-title">Las etiquetas deben ser únicas</p>
          <p class="text-gray-700 text-sm leading-relaxed">
            Cada etiqueta debe ser única dentro del documento. Usar la misma etiqueta dos veces producirá un error durante el análisis.
          </p>
        </div>
      </section>

      <hr class="border-gray-200 mb-14" />

      <!-- Complete Example -->
      <section id="complete-example" class="mb-14">
        <h2 class="text-2xl font-bold font-plex mb-2">Ejemplo Completo</h2>
        <p class="text-sm text-gray-400 mb-6">Un documento completo que demuestra los patrones más comunes</p>

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
        <h2 class="text-2xl font-bold font-plex mb-2">Salida del Analizador</h2>
        <p class="text-sm text-gray-400 mb-6">Estructura JSON del AST y tipos de nodos</p>

        <p class="text-gray-700 mb-6 leading-relaxed">
          El analizador genera un objeto JSON con tres claves principales:
        </p>

        <div class="overflow-x-auto mb-8">
          <table class="w-full text-sm text-left border-collapse">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="py-2 pr-6 font-semibold text-gray-700">Clave</th>
                <th class="py-2 font-semibold text-gray-700">Descripción</th>
              </tr>
            </thead>
            <tbody class="text-gray-600">
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">content</code></td>
                <td class="py-2">Array de nodos AST (encabezados, párrafos, entornos, etc.)</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">refs</code></td>
                <td class="py-2">Diccionario que mapea IDs de etiquetas a sus índices</td>
              </tr>
              <tr>
                <td class="py-2 pr-6"><code class="code-inline">chapters</code></td>
                <td class="py-2">Diccionario de metadatos de capítulos (índice, título)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-lg font-semibold font-plex mb-3">Tipos de Nodo (campo kind)</h3>
        <div class="overflow-x-auto mb-8">
          <table class="w-full text-sm text-left border-collapse">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="py-2 pr-6 font-semibold text-gray-700">Kind</th>
                <th class="py-2 font-semibold text-gray-700">Descripción</th>
              </tr>
            </thead>
            <tbody class="text-gray-600">
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">heading</code></td>
                <td class="py-2">Capítulo/Sección. Tiene <code class="code-inline">level</code> (0=capítulo, 1=sección, 2=subsección)</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">bold</code>, <code class="code-inline">italic</code>, etc.</td>
                <td class="py-2">Nodos de formato de texto. Contienen un array <code class="code-inline">content</code></td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">math</code></td>
                <td class="py-2">Expresión matemática. Tiene <code class="code-inline">mode</code> (inline/display) y <code class="code-inline">raw</code> (LaTeX para KaTeX)</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">list</code></td>
                <td class="py-2">Lista ordenada/no ordenada. Tiene booleano <code class="code-inline">ordered</code> y array <code class="code-inline">content</code></td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">item</code></td>
                <td class="py-2">Elemento de lista. Contiene array <code class="code-inline">content</code></td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">theorem</code>, <code class="code-inline">definition</code>, etc.</td>
                <td class="py-2">Entornos matemáticos. Contienen array <code class="code-inline">content</code> y <code class="code-inline">params</code> opcional</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">note</code></td>
                <td class="py-2">Nota tooltip. Tiene <code class="code-inline">params</code> y <code class="code-inline">content</code>. Solo en línea.</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">figure</code></td>
                <td class="py-2">Contenedor de imagen. Contiene nodos <code class="code-inline">image</code> y <code class="code-inline">caption</code></td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">image</code></td>
                <td class="py-2">Nodo de imagen. Tiene <code class="code-inline">params</code> con <code class="code-inline">width</code></td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">table</code></td>
                <td class="py-2">Tabla. Tiene arrays <code class="code-inline">columns</code> y <code class="code-inline">rows</code></td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">verbatim</code></td>
                <td class="py-2">Texto preformateado. Tiene <code class="code-inline">content</code> con cadena de texto raw</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-2 pr-6"><code class="code-inline">label</code></td>
                <td class="py-2">Definición de etiqueta. Tiene <code class="code-inline">id</code> e <code class="code-inline">index</code></td>
              </tr>
              <tr>
                <td class="py-2 pr-6"><code class="code-inline">ref</code></td>
                <td class="py-2">Referencia cruzada. Tiene <code class="code-inline">target</code> e <code class="code-inline">index</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr class="border-gray-200 mb-14" />

      <!-- Limitations -->
      <section id="limitations" class="mb-14">
        <h2 class="text-2xl font-bold font-plex mb-2">Limitaciones del Analizador</h2>
        <p class="text-sm text-gray-400 mb-6">Lo que el analizador actualmente no soporta</p>

        <p class="text-gray-700 mb-8 leading-relaxed">
          El analizador cubre un subconjunto seleccionado de LaTeX optimizado para contenido matemático. Las siguientes son limitaciones conocidas:
        </p>

        <div class="flex flex-col gap-4">
          <div class="doc-block">
            <p class="doc-block-title">Sin definición de macros</p>
            <p class="text-gray-700 text-sm leading-relaxed">
              <code class="code-inline">\newcommand</code> y <code class="code-inline">\renewcommand</code> no son soportados. Define las macros en tu clase de documento o archivo de estilo.
            </p>
          </div>

          <div class="doc-block">
            <p class="doc-block-title">Sin anidamiento profundo de encabezados</p>
            <p class="text-gray-700 text-sm leading-relaxed">
              Solo se reconocen tres niveles: <code class="code-inline">\chapter</code>, <code class="code-inline">\section</code> y <code class="code-inline">\subsection</code>. <code class="code-inline">\subsubsection</code> y más profundos no están soportados.
            </p>
          </div>

          <div class="doc-block">
            <p class="doc-block-title">Sin notas al pie</p>
            <p class="text-gray-700 text-sm leading-relaxed">
              <code class="code-inline">\footnote</code> no está soportado. Usa <code class="code-inline">\note</code> para anotaciones en línea.
            </p>
          </div>

          <div class="doc-block">
            <p class="doc-block-title">Sin hipervínculos más allá de \url</p>
            <p class="text-gray-700 text-sm leading-relaxed">
              <code class="code-inline">\href</code> y <code class="code-inline">\hyperref</code> no están soportados. <code class="code-inline">\url{path}</code> produce un nodo <code class="code-inline">url</code>; renderizarlo como enlace clicable depende del frontend.
            </p>
          </div>

          <div class="doc-block">
            <p class="doc-block-title">Sin TikZ ni gráficos externos</p>
            <p class="text-gray-700 text-sm leading-relaxed">
              <code class="code-inline">\tikz</code> y paquetes de dibujo similares no están soportados. Usa imágenes prerenderizadas para los diagramas.
            </p>
          </div>

          <div class="doc-block">
            <p class="doc-block-title">Sin soporte para \input</p>
            <p class="text-gray-700 text-sm leading-relaxed">
              <code class="code-inline">\input</code> no está soportado. Usa <code class="code-inline">\include{path}</code> en su lugar.
            </p>
          </div>

          <div class="doc-block">
            <p class="doc-block-title">Los comandos desconocidos se omiten silenciosamente</p>
            <p class="text-gray-700 text-sm leading-relaxed">
              Cualquier comando que no esté en el registro se consume junto con sus argumentos pero no produce salida. No hay advertencia durante el análisis.
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
  { id: 'overview', title: 'Resumen' },
  { id: 'quick-start', title: 'Inicio Rápido' },
  { id: 'element-types', title: 'Tipos de Elementos' },
  { id: 'environments', title: 'Entornos' },
  { id: 'math', title: 'Matemáticas' },
  { id: 'commands', title: 'Comandos de Texto' },
  { id: 'cross-references', title: 'Referencias Cruzadas' },
  { id: 'complete-example', title: 'Ejemplo Completo' },
  { id: 'parser-output', title: 'Salida del Analizador' },
  { id: 'limitations', title: 'Limitaciones' },
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
