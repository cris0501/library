# EduWords Library

A Vue 3 web reader for interactive math books built with LaTeX. Write your content in LaTeX, compile it with [larex](https://github.com/cris0501/larex), and read it as an interactive web book.

## What is this?

EduWords Library renders LaTeX documents as interactive web books. Mathematical content is rendered with KaTeX, and documents include interactive features like:

- Clickable tooltip notes
- Cross-references between theorems and definitions
- Structured theorem environments (theorem, proof, definition, lemma, etc.)
- Tab-based content blocks
- Clean, readable typography

## How it works

```
Your LaTeX source (.tex)
        │
        ▼
   larex compiler
        │
        ▼
   JSON AST document
        │
        ▼
   EduWords Library (this project)
        │
        ▼
   Interactive web book
```

You write content in LaTeX using standard commands. The `larex` compiler parses your `.tex` files and produces a JSON document tree. This library consumes that JSON and renders it as a web page.

## Quick Start

### 1. Write your LaTeX document

Create a `.tex` file:

```latex
\documentclass{article}

\begin{document}
\section{Introduction}

A \textit{metric space} is a pair $(X, d)$ where $d: X \times X \to \mathbb{R}$ satisfies:

\begin{enumerate}
    \item $d(x, y) \geq 0$ (non-negativity)
    \item $d(x, y) = 0 \iff x = y$ (identity of indiscernibles)
    \item $d(x, y) = d(y, x)$ (symmetry)
    \item $d(x, z) \leq d(x, y) + d(y, z)$ (triangle inequality)
\end{enumerate}

\begin{definition}[label=def-metric, title=The Euclidean Metric]
    The distance $d(x, y) = \sqrt{(x_1 - y_1)^2 + (x_2 - y_2)^2}$ defines a metric on $\mathbb{R}^2$.
\end{definition}

See \ref{def-metric} for an example.
\end{document}
```

### 2. Compile with larex

From the compiler directory:

```bash
python -m larex your-document.tex -f
```

This outputs a JSON file to `examples/dist/`.

### 3. Serve with this library

Place the JSON file in `library/public/doc/` and run:

```bash
npm install
npm run dev
```

Open `http://localhost:5173/doc/your-document.json` in your browser.

## Writing Content

### Document Structure

Your `.tex` file should have a standard structure:

```latex
\documentclass{article}

\begin{document}
  % Your content here
\end{document}
```

### Headings

```latex
\chapter{Chapter Title}      % Level 0
\section{Section Title}       % Level 1
\subsection{Subsection Title} % Level 2
```

### Mathematical Environments

**Display math:**

```latex
\begin{equation}
\int_a^b f(x)\,dx = F(b) - F(a)
\end{equation}
```

Or use shorthand:

```latex
$$ E = mc^2 $$

\[ \sum_{n=1}^{\infty} \frac{1}{n^2} \]
```

**Inline math:** Use single dollar signs: `$x^2 + y^2 = z^2$`

### Theorem Environments

Custom environments with key-value parameters:

```latex
\begin{definition}[label=def-name, title=My Definition]
  The content of your definition...
\end{definition}

\begin{theorem}[label=thm-name, title=Pythagorean Theorem]
  In a right triangle: $a^2 + b^2 = c^2$
\end{theorem}

\begin{Proof}
  The proof content...
  \qed
\end{Proof}

\begin{exercise}
  Practice problem here.
\end{exercise}
```

Available environments: `theorem`, `definition`, `axiom`, `lemma`, `proposition`, `corollary`, `proof`, `exercise`, `convention`, `block`

### Lists

```latex
\begin{enumerate}
  \item First item
  \item Second item
  \item Third item
\end{enumerate}

\begin{itemize}
  \item Bullet point
  \item Another point
\end{itemize}
```

### Cross-References

Label environments with `label=id` in the key-value block:

```latex
\begin{theorem}[label=main-thm]
  ...
\end{theorem}
```

Reference them anywhere:

```latex
See \ref{main-thm} for the proof.
```

### Inline Notes

Add tooltip notes:

```latex
\note[title=Note]{This is the note content.}
```

### Images

```latex
\begin{figure}[width=60]
  \includegraphics{assets/diagram.png}
  \caption{A descriptive caption.}
\end{figure}
```

### Tables

```latex
\begin{tabular}{|l|c|r|}
  \hline
  Header 1 & Header 2 & Header 3 \\
  \hline
  Cell 1   & Cell 2   & Cell 3   \\
  Cell 4   & Cell 5   & Cell 6   \\
  \hline
\end{tabular}
```

### Text Formatting

| Command | Effect |
|---------|--------|
| `\textbf{text}` | **Bold** |
| `\textit{text}` | *Italic* |
| `\underline{text}` | Underlined |
| `\texttt{text}` | `Monospace` |
| `\textsf{text}` | Sans-serif |
| `\psc{text}` | Small caps |

## Key-Value Parameters

Custom environments accept parameters in bracket syntax:

```latex
\begin{environment}[key1=value1, key2=value2]
  Content
\end{environment}
```

Available keys:
- `label` — identifier for cross-references
- `title` — display name in the header
- `aside` — lateral annotation text

If no brackets are provided, defaults are used.

## File Organization

For larger projects:

```
book/
  main.tex          # Entry point
  chapters/
    intro.tex
    chapter1.tex
  assets/
    images/
      diagram.png
```

Use `\include{chapters/intro}` to include external files. Paths are relative to the main `.tex` file.

## Supported LaTeX

- Standard text formatting commands
- Inline and display math (via KaTeX)
- Mathematical environments (theorem, proof, definition, etc.)
- Lists (enumerate, itemize)
- Figures with images
- Tables
- Cross-references
- Tooltip notes

## Limitations

- No TikZ or drawing commands (use pre-rendered images)
- No footnotes (use `\note` instead)
- No macro definitions (`\newcommand`)
- Unknown commands are silently ignored

## See Also

- [larex compiler](https://github.com/cris0501/larex) — LaTeX to JSON transpiler
- [Documentation](http://localhost:5173) — Full syntax reference

## Development

```bash
npm install
npm run dev      # Start dev server
npm run build    # Production build
```
