# MATH1052 — Multivariate Calculus & Ordinary Differential Equations

UQ **MATH1052** exam study pack (Semester 2 2026 final). This is a multi-page static site, published via GitHub Pages as a sister pack
to `../stat1301/`. It trains two skills. The first is **recognising which routine a question wants**. The second is
**writing the answer up so every method and justification mark is visible**. There is no calculator, and the formula sheet has only eight items.

## Exam at a glance
- **100 marks · 8 multi-part questions · 120 minutes** (+ 10 min planning). Recent mark split: 12, 12, 10, 12, 12, 12, 12, 18 (2025 S2).
- **No calculator, no notes.** Every paper says: *"You must justify all answers."*
- A **one-page formula sheet is printed on the last page**: linear/quadratic approximation, directional derivative, chain rule,
  implicit differentiation, Hessian determinant, Lagrange ∇f = λ∇g, work ∫F(r(t))·r′(t)dt, arc length ∫‖r′‖dt.
  You must know everything else cold, including limits, continuity, the conservative test, potentials, the D-classification rules and all ODE methods.
- The 2021–2025 papers are **100% multivariable calculus** (Ch 3–7).

## The question → chapter pattern (2023 S1 – 2025 S2, 8-question format)
All three **Semester 1** papers use the same slot order. The **Semester 2** papers keep the same eight topics but shuffle Q1–Q6.

| Slot | S1 template (2023/24/25 S1) | Hit rate (6 papers) |
|------|-----------------------------|---------------------|
| Q1 | Gradient / directional derivative / steepest ascent (incl. reverse "find ∇f") — Ch 5 | 3/6 |
| Q2 | 2-D limit & continuity (two-path test, polar, f_x by definition) — Ch 4 | 4/6 (Ch 4: 5/6) |
| Q3 | Contours: complete the square, sketch, extreme value — Ch 3 | 3/6 |
| Q4 | Chain rule: tree diagram / related rates — Ch 5 | 3/6 |
| Q5 | Critical points or global extrema on a closed region — Ch 6 | 3/6 |
| Q6 | Lagrange multipliers — Ch 6 | 3/6 (Lagrange in Q5 or Q6: 5/6) |
| Q7 | Particle motion: integrate a → v → r, speed, arc length — Ch 7 | **5/6** |
| Q8 | Conservative field → potential → work (13–18 marks) — Ch 7 | **5/6** |

The S2 papers ran: 2023 S2 = crit pts · Lagrange · gradient · contours · arc length · conservative work · reverse ∇f · limit;
2024 S2 = contour · limits · implicit tangent · gradient · Lagrange · chain rule · velocity/arc · conservative;
2025 S2 = contours · tangent plane/approx · "show that" · continuity + partials · Lagrange · crit pts · projectile · conservative.
Approximate marks per chapter per paper: Ch 7 ≈ 24–30, Ch 6 ≈ 24 (12–29), Ch 5 ≈ 24 (10–36), Ch 4 ≈ 12 (24 in 2025 S2), Ch 3 ≈ 12.

## The ODE-yield note (Ch 1–2)
ODEs made up 6 of the 20 questions in the **2020** papers (Ch 1: 4, Ch 2: 2). They have **not appeared in any of the ten
final papers from 2021 to 2025**. They are still in the course summary, tutorials T01–T03 and the posters, so the
Ch 1–2 pages are kept complete. Treat them as insurance, not as core study time.

## Pages

**Hub**
- `index.html`: the command hub. It has the chapter directory with honest yield badges and **the Master Decision Engine** (a whole-course
  wording-trigger table plus a multivariable decision tree: limit → partials → approximation → gradient → chain/implicit → critical
  points → Lagrange → curves → line integrals). It also has the exam-day strategy (planning, time per mark, marks-for-sentences, rituals,
  sketches) and the year-by-year question → chapter map.

**Chapters** (each has concepts · key methods · worked examples · exam question types mined from the papers · wording triggers ·
traps · self-check · Practice Arena with hidden solutions)
- `ch01-first-order-odes.html`: Ch 1, separable, linear/integrating factor, substitution, equilibria & stability, Euler, models
- `ch02-second-order-odes.html`: Ch 2, characteristic equation, undetermined coefficients, reduction of order, springs & damping
- `ch03-surfaces-contours.html`: Ch 3, conics, contours, cross-sections, quadrics, sketching, graph matching
- `ch04-limits-partials-tangent-planes.html`: Ch 4, 2-D limits, continuity, partials by definition, tangent planes, approximation
- `ch05-gradient-chain-rule.html`: Ch 5, gradient, directional derivatives, reverse problems, chain rule, implicit differentiation
- `ch06-optimisation.html`: Ch 6, critical points & Hessian, closed-region extrema, Lagrange multipliers
- `ch07-curves-vector-fields.html`: Ch 7, parametrised curves, motion, arc length, conservative fields, potentials, work

**Reference**
- `foundations.html`: single-variable skills (derivatives, integrals, trig, exp/log, vectors, complex roots) for a paper with no calculator
- `formulas.html`: the 8-item formula sheet explained item by item, and everything that is *not* on it
- `notebook.html`: the crib. It has one line per crucial rule for each chapter, the top 10, and the exam-day write-up rituals

**Past papers** (both semesters per page, every question fully worked)
- `exam-2020.html`: the older ODE-heavy syllabus (10 × 10 marks, online)
- `exam-2021.html`, `exam-2022.html`: 10-question (2022 S2: 9-question) papers, all multivariable
- `exam-2023.html`, `exam-2024.html`, `exam-2025.html`: the current 8-question format and the best mock exams

**Totals:** 7 chapters · 12 papers worked · 161 worked examples (65 in the §3 sections + 96 in the Practice Arenas) · 207 practice questions.

## Conventions
- Standalone HTML pages that share the STAT1301 visual system. The MATH1052 accent is violet (`#a78bfa`). MathJax v3 is loaded from a CDN.
- Every page's first nav item is `⇄ Switch subject` (`../index.html`), followed by `🏠 Hub`.
- Every published result (derivative, limit, critical point, Lagrange extremum, potential, work, arc length) was recomputed with
  SymPy. The verification scripts live outside the site (`verify/*.py` in the build scratchpad).
- Past-paper questions are quoted as they appear on the question paper and cited as "(2024 S2 Q5, 12 marks)". Where the solutions file
  disagrees with the paper, the pages quote the paper.

## Source problems found
The builders found these errors and inconsistencies in the official materials. The pages point them out where they occur, so
don't copy them:
- **2020 S2 Q6**: the solution writes g_xx = 60 (it copied 12x). The correct value is g_xx = 6x = 30. The classification is unchanged.
- **2022 S1 Q6**: the unit vector has a sign typo, −5/3 (2i − j − 2k). With v = (2, 1, −2) the correct answer is ∇f = (−10/3, −5/3, 10/3).
- **2022 S1 Q10(b)**: the solution writes W = f(1,1) − f(0,1). The start point is (1,0), so it should be f(1,1) − f(1,0). The value e² is unaffected.
- **2022 S1 Q1**: partials are written with y = 1 already substituted (harmless here, dangerous in general).
- **2022 S1 Q7(a)**: "f_x = 0 ⇒ x = 2y" should say f_y.
- **2023 S1 Q6**: the solution writes "y = ±5" in the x = −2y case. The correct value is y = ±√5, and the final values 125 and 0 are right.
- **2025 S2 Q2(c)**: the solution contains the typo "f(−0.95, 1.95)". Copy the point from the question.
- **Mark splits that differ between paper and solutions file**: the 2025 S2 solutions were typed on an earlier draft
  (Q2 4/5/4 vs the paper's 4/4/4; Q3 7+3 vs 5+5; Q4 8+2 vs 7+5; Q7(b)/(c) 3+2). The questions and answers are identical, and the
  pages use the question paper's marks.
- **2024 S1**: the solutions file prints slightly different wording from the clean paper (e.g. Q5 as a single 13-mark question,
  Q1(c) "moving from (1,1,1)"). It says to refer to the clean exam, and the pages do.
- **Formula sheet (2023 S1, 2024 S1, 2025 S1)**: the Hessian item has a typo, f_{x,y} for f_xy.
- **2022 S2**: only a scanned, hand-marked solutions file exists. The questions were transcribed from that scan.
