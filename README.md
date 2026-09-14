# will-rutherford.github.io

**STAT1301 — Advanced Analysis of Scientific Data** exam study pack (UQ, final exam ~November 2026).
A multi-page static site, published via GitHub Pages, built to train the one skill the exam rewards:
**reading a question, recognising the method, and executing it cleanly.** The formula sheet and
statistical tables are provided in the exam, so the pack drills method-recognition, not memorisation.

## Exam at a glance
- **80 marks · 5 multi-part questions · 120 minutes** (+ 10 min planning).
- Casio FX82 calculator only; **formula sheet + Normal/t/χ²/F tables are supplied**.
- Instruction on every paper: *"Show your working and state conclusions where appropriate. Give at least 3 significant figures."*
- Marks concentrate on Ch 6–11 (CIs, testing, ANOVA, regression, chi-squared).

## The question → chapter pattern (2023–2025)
The paper's structure is remarkably stable:

| Slot | Reliable theme |
|------|----------------|
| Q1 | Probability / a single random variable (pdf → k, E, Var, CDF, median/mode) |
| Q2 | Estimator theory or joint distributions (unbiasedness, Var, CLT, covariance/correlation) |
| Q3 | Two-sample / paired inference — CI **and** hypothesis test (+ a claim, + assumptions) |
| Q4 | ANOVA — complete the table, F-test, assumptions, post-hoc / R² |
| Q5 | Regression — read `lm()`, prediction/residual, CI for slope, diagnostics |
| + | χ² test of association rides inside another question (5–6 marks); occasional study-design/ethics MCQ |

## Pages

**Hub**
- `index.html` — command hub: chapter directory, **the Master Decision Engine** (a whole-course
  wording-trigger table + an inference-procedure decision tree), the exam-day strategy playbook, and the
  question→chapter map.

**Chapters** (each: concepts in depth · key formulas & when to use them · worked examples · exam question
types · wording triggers · traps · self-check)
- `ch01-02-probability.html` — Ch 1–2: probability, counting, RVs, common distributions
- `ch03-multiple-rvs.html` — Ch 3: joint distributions, covariance/correlation, CLT, estimators
- `ch04-05-data-descriptives.html` — Ch 4–5: study design, sampling, ethics, descriptive statistics
- `ch06-estimation-cis.html` — Ch 6: point estimation & confidence intervals
- `ch07-hypothesis-testing.html` — Ch 7: hypothesis testing
- `ch08-anova.html` — Ch 8: ANOVA *(pre-lecture — verify against 2026 lectures)*
- `ch09-10-regression.html` — Ch 9–10: regression & the linear model *(pre-lecture)*
- `ch11-chi-squared.html` — Ch 11: chi-squared tests *(pre-lecture)*

**Reference & past papers**
- `formulas.html` — guided tour of the provided formula sheet & statistical tables
- `exam-2021.html` … `exam-2025.html` — fully worked past papers

## Conventions
- Standalone HTML, dark theme, shared visual system; MathJax (CDN) for maths.
- Every published number is verified by computation.
- Ch 8–11 are **pre-lecture** builds — check them against lecture content when it is released for 2026.
