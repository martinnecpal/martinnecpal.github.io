# From GAMS to GAMSPy – optimization modelling in Python, from model to interactive web page

**Spoken text — guest lecture** · Martin Necpal · MTF STU Trnava

Presentation: gamspy.html (80 slides) · Duration: 120 minutes

> [!TIP]
> **How to use this text**
>
> - Each block corresponds to one slide: [number · title · time].
> - Lines starting with 🗒️ are presenter cues and are not read aloud.
> - Expected speaking pace: about 110–120 words per minute. Slides marked LIVE contain only a short introduction and wrap-up; the live demonstration fills the rest of the time.

## Slide overview

| # | Slide | Time |
|--:|---|---|
| | **[OPENING](#opening-000--005)** | **0:00 – 0:05** |
| 1 | [Title slide](#slide-1--title-slide) | 0:00–0:02 |
| 2 | [About me](#slide-2--about-me) | 0:02–0:03 |
| | **[PART 1 — INTRODUCTION TO GAMS](#part-1--introduction-to-gams-005--025)** | **0:05 – 0:25** |
| 3 | [Part 1 — Introduction to GAMS](#slide-3--part-1--introduction-to-gams) | 0:05 |
| 4 | [What is GAMS?](#slide-4--what-is-gams) | 0:05–0:07 |
| 5 | [The GAMS ecosystem](#slide-5--the-gams-ecosystem) | 0:08–0:09 |
| 6 | [How GAMS works](#slide-6--how-gams-works) | 0:09–0:11 |
| 7 | [Problem types and solvers](#slide-7--problem-types-and-solvers) | 0:11–0:13 |
| 8 | [Where is GAMS used?](#slide-8--where-is-gams-used) | 0:13–0:14 |
| 9 | [GAMS in chemical engineering](#slide-9--gams-in-chemical-engineering) | 0:14–0:15 |
| 10 | [GAMS in mechanical & manufacturing engineering](#slide-10--gams-in-mechanical--manufacturing-engineering) | 0:15–0:16 |
| 11 | [Why should engineers use GAMS?](#slide-11--why-should-engineers-use-gams) | 0:16–0:17 |
| 12 | [Resources](#slide-12--resources) | 0:17–0:18 |
| 13 | [Installing GAMS](#slide-13--installing-gams) | 0:18–0:19 |
| 14 | [GAMS Studio at a glance](#slide-14--gams-studio-at-a-glance) | 0:19–0:20 |
| 15 | [Your first run in 5 steps](#slide-15--your-first-run-in-5-steps) | 0:20–0:21 |
| 16 | [Reading the output](#slide-16--reading-the-output) | 0:21–0:22 |
| 17 | [Finding and fixing errors](#slide-17--finding-and-fixing-errors) | 0:22–0:23 |
| 18 | [More useful Studio tools](#slide-18--more-useful-studio-tools) | 0:23–0:24 |
| 19 | [Handy shortcuts](#slide-19--handy-shortcuts) | 0:24–0:25 |
| 20 | [Links](#slide-20--links) | 0:25 |
| | **[PART 2 — EXAMPLE 1 IN GAMS](#part-2--example-1-in-gams-025--040)** | **0:25 – 0:40** |
| 21 | [Part 2 — Example 1 in GAMS](#slide-21--part-2--example-1-in-gams) | 0:25 |
| 22 | [The problem](#slide-22--the-problem) | 0:25–0:27 |
| 23 | [Graphical solution](#slide-23--graphical-solution) | 0:27–0:30 |
| 24 | [The same model in GAMS](#slide-24--the-same-model-in-gams) | 0:30–0:32 |
| 25 | [Reading the code line by line](#slide-25--reading-the-code-line-by-line) | 0:32–0:34 |
| 26 | [Running it in GAMS Studio (LIVE)](#slide-26--running-it-in-gams-studio-live) | 0:34–0:37 |
| 27 | [Results in the listing file](#slide-27--results-in-the-listing-file) | 0:37–0:38 |
| 28 | [Try it yourself](#slide-28--try-it-yourself) | 0:38–0:40 |
| | **[PART 3 — FROM GAMS TO GAMSPY](#part-3--from-gams-to-gamspy-040--055)** | **0:40 – 0:55** |
| 29 | [Part 3 — From GAMS to GAMSPy](#slide-29--part-3--from-gams-to-gamspy) | 0:40 |
| 30 | [What is GAMSPy?](#slide-30--what-is-gamspy) | 0:40–0:41 |
| 31 | [Step 1 – Install Python](#slide-31--step-1--install-python) | 0:41–0:42 |
| 32 | [Step 2 – Create a virtual environment](#slide-32--step-2--create-a-virtual-environment) | 0:42–0:43 |
| 33 | [Step 3 – Install GAMSPy](#slide-33--step-3--install-gamspy) | 0:43–0:44 |
| 34 | [Step 4 – Solvers](#slide-34--step-4--solvers) | 0:44–0:45 |
| 35 | [Step 5 – License (optional)](#slide-35--step-5--license-optional) | 0:45–0:46 |
| 36 | [Step 6 – Test it](#slide-36--step-6--test-it) | 0:46–0:47 |
| 37 | [Quick reference](#slide-37--quick-reference) | 0:47–0:48 |
| 38 | [Step 1 – Install VS Code](#slide-38--step-1--install-vs-code) | 0:48–0:49 |
| 39 | [Step 2 – Python extension](#slide-39--step-2--python-extension) | 0:49–0:50 |
| 40 | [Step 3 – Open your project folder](#slide-40--step-3--open-your-project-folder) | 0:50–0:51 |
| 41 | [Step 4 – Select the Python environment](#slide-41--step-4--select-the-python-environment) | 0:51–0:52 |
| 42 | [Step 5 – Install GAMSPy in the environment](#slide-42--step-5--install-gamspy-in-the-environment) | 0:52–0:53 |
| 43 | [Step 6 – Run your first script](#slide-43--step-6--run-your-first-script) | 0:53–0:54 |
| 44 | [VS Code shortcuts for this lecture](#slide-44--vs-code-shortcuts-for-this-lecture) | 0:54–0:55 |
| | **[PART 4 — EXAMPLE 1 IN GAMSPY](#part-4--example-1-in-gamspy-055--105)** | **0:55 – 1:05** |
| 45 | [Part 4 — Example 1 in GAMSPy](#slide-45--part-4--example-1-in-gamspy) | 0:55 |
| 46 | [GAMS → GAMSPy: the dictionary](#slide-46--gams--gamspy-the-dictionary) | 0:55–0:57 |
| 47 | [Side by side](#slide-47--side-by-side) | 0:57–0:59 |
| 48 | [How to convert – step by step](#slide-48--how-to-convert--step-by-step) | 0:59–1:00 |
| 49 | [Run it in VS Code (LIVE)](#slide-49--run-it-in-vs-code-live) | 1:00–1:02 |
| 50 | [Results](#slide-50--results) | 1:02–1:03 |
| 51 | [The Python way – shorter](#slide-51--the-python-way--shorter) | 1:03–1:04 |
| 52 | [Bonus: back to GAMS and LaTeX](#slide-52--bonus-back-to-gams-and-latex) | 1:04–1:05 |
| | **[PART 5 — EXAMPLE 3: MIXING OF STREAMS](#part-5--example-3-mixing-of-streams-105--120)** | **1:05 – 1:20** |
| 53 | [Part 5 — Example 3: Mixing of streams](#slide-53--part-5--example-3-mixing-of-streams) | 1:05 |
| 54 | [The problem](#slide-54--the-problem) | 1:05–1:06 |
| 55 | [Mathematical formulation](#slide-55--mathematical-formulation) | 1:06–1:08 |
| 56 | [Step 1 – direct translation](#slide-56--step-1--direct-translation) | 1:08–1:10 |
| 57 | [Problem: numbers are inside the equations](#slide-57--problem-numbers-are-inside-the-equations) | 1:10–1:11 |
| 58 | [Step 2 – general (indexed) formulation](#slide-58--step-2--general-indexed-formulation) | 1:11–1:13 |
| 59 | [Sets and data](#slide-59--sets-and-data) | 1:13–1:14 |
| 60 | [Variables, equations, model](#slide-60--variables-equations-model) | 1:14–1:16 |
| 61 | [Results](#slide-61--results) | 1:16–1:17 |
| 62 | [What-if: change the water limit (LIVE)](#slide-62--what-if-change-the-water-limit-live) | 1:17–1:19 |
| 63 | [Try it yourself](#slide-63--try-it-yourself) | 1:19–1:20 |
| | **[PART 6 — FROM MODEL TO WEB PAGE](#part-6--from-model-to-web-page-120--140)** | **1:20 – 1:40** |
| 64 | [Part 6 — From model to web page](#slide-64--part-6--from-model-to-web-page) | 1:20 |
| 65 | [What we are going to build](#slide-65--what-we-are-going-to-build) | 1:20–1:22 |
| 66 | [Step 1 – Install Matplotlib and Flask](#slide-66--step-1--install-matplotlib-and-flask) | 1:22–1:23 |
| 67 | [Step 2 – Model as a reusable function](#slide-67--step-2--model-as-a-reusable-function) | 1:23–1:25 |
| 68 | [Step 3 – What-if chart with Matplotlib](#slide-68--step-3--what-if-chart-with-matplotlib) | 1:25–1:27 |
| 69 | [Step 4 – The smallest Flask app](#slide-69--step-4--the-smallest-flask-app) | 1:27–1:29 |
| 70 | [Step 5 – A form that solves the model](#slide-70--step-5--a-form-that-solves-the-model) | 1:29–1:31 |
| 71 | [Step 6 – Add the Matplotlib chart](#slide-71--step-6--add-the-matplotlib-chart) | 1:31–1:33 |
| 72 | [Step 7 – Interactive page: JSON API](#slide-72--step-7--interactive-page-json-api) | 1:33–1:35 |
| 73 | [Step 7 – Interactive page: sliders + JavaScript](#slide-73--step-7--interactive-page-sliders--javascript) | 1:35–1:36 |
| 74 | [The result (LIVE)](#slide-74--the-result-live) | 1:36–1:39 |
| 75 | [Summary & next steps](#slide-75--summary--next-steps) | 1:39–1:40 |
| | **[SUMMARY AND QUESTIONS](#summary-and-questions-140--200)** | **1:40 – 2:00** |
| 76 | [What we learned today](#slide-76--what-we-learned-today) | 1:40–1:43 |
| 77 | [Review questions](#slide-77--review-questions) | 1:43–1:52 |
| 78 | [Where to continue](#slide-78--where-to-continue) | 1:52–1:53 |
| 79 | [Acknowledgements](#slide-79--acknowledgements) | 1:53–1:54 |
| 80 | [Thank you – questions?](#slide-80--thank-you--questions) | 1:54–2:00 |

---

## OPENING 0:00 – 0:05

### Slide 1 · Title slide

⏱️ `0:00–0:02`

Good morning, and welcome. Thank you very much for the invitation – I am really glad to be here with you today.

The title of today's lecture is From GAMS to GAMSPy: optimization modelling in Python, from the model all the way to an interactive web page.

What will you take home from the next two hours? Three things. First, you will write a small optimization model in GAMS, the classic algebraic modelling language. Second, you will write exactly the same model in Python, with the package GAMSPy. And third, you will turn such a model into a small web page, where anybody can move a slider and immediately see the new optimal solution.

The picture on the right shows where we will end: a page that mixes two chemical streams at minimum cost. Everything you see there is computed by an optimization model running in the background.

### Slide 2 · About me

⏱️ `0:02–0:03`

A few words about me. My name is Martin Necpal, I am a university lecturer at the Institute of Production Technology, Faculty of Materials Science and Technology in Trnava, which is part of the Slovak University of Technology in Bratislava.

My PhD was about automated process planning and its integration into computer-aided systems. I teach CAD and CAM applications and NC programming, I work on FEM modelling and simulation of machining and forming processes, and I work with laser machining on a five-axis LASERTEC 80 Shape machine. In recent years I spend a lot of time with Python, data science and machine learning.

Why optimization? Because process planning and manufacturing are full of optimization problems – cutting parameters, the order of operations, nesting of parts. That is exactly where tools like GAMS and GAMSPy help.

---

## PART 1 — INTRODUCTION TO GAMS 0:05 – 0:25

### Slide 3 · Part 1 — Introduction to GAMS

⏱️ `0:05`

Let us start with part one: GAMS, the General Algebraic Modeling System. In the next twenty minutes we look at what it is, where it is used, and how to install and run it.

On the slide you see the About page of the company, at www dot gams dot com. GAMS is one of the leading tool providers for the optimization industry, with offices in the US and Germany. It has customers in more than one hundred and twenty countries – multinational companies, universities, research institutions and governments – in the energy and chemical industries, in economic modelling, agricultural planning and manufacturing.

### Slide 4 · What is GAMS?

⏱️ `0:05–0:07`

So what is GAMS?

GAMS is a high-level algebraic modelling language for mathematical optimization. The important word is algebraic. You do not write an algorithm, you do not write loops that build a matrix. You write the model the same way you would write it on paper, as mathematics: you define sets, parameters, variables and equations.

GAMS then compiles this model and passes it to a solver. The solver is a separate program that contains the numerical algorithm – for example the simplex method for linear problems, or an interior point method for nonlinear ones.

And because the model and the solver are separate, the same model can be solved with different solvers without rewriting a single equation. GAMS handles linear, nonlinear, discrete, stochastic and equilibrium models, also at a very large scale, with millions of variables.

Look at the box on the right, because this is the key idea of the whole lecture: separate what the problem is – the model – from how it is solved – the solver. You, as engineers, describe the physics, the economics, the technology. The solver takes care of the mathematics of finding the optimum.

### Slide 5 · The GAMS ecosystem

⏱️ `0:08–0:09`

Today, GAMS is not just one program, it is a small ecosystem of four products.

The GAMS language itself, together with the GAMS Studio environment. GAMSPy, the Python-native interface, which gives you the same modelling power inside Python. GAMS MIRO, which turns a model into an interactive web application for people who are not optimization experts. And GAMS Engine, which runs optimization jobs at scale – in parallel, in the cloud, with large memory.

Today we will work in depth with the first two, marked in red. And the idea behind MIRO – a model with a friendly web interface – we will build ourselves at the end of the lecture, with plain Python.

### Slide 6 · How GAMS works

⏱️ `0:09–0:11`

How does GAMS work? Follow the four boxes from left to right.

On the left is the model file, with the extension dot gms. This is the file you write: sets, data, variables and equations.

The GAMS compiler reads this file, checks the syntax and generates the concrete model instance – all the numbers the solver needs.

The solver – for example CPLEX, CONOPT or BARON – then runs the numerical algorithm and finds the optimum.

And finally, GAMS writes the listing file, with the extension dot lst. This is the file you read: the solver status, the model status and the values of all variables.

At the bottom you see the fixed order of every GAMS model. First the sets, then the data – parameters, tables and scalars – then the variables, the equations, the model statement, the solve statement and finally the display of results. Remember this order. You will see it in every example today, in GAMS and also in GAMSPy.

### Slide 7 · Problem types and solvers

⏱️ `0:11–0:13`

GAMS can solve many types of problems. The table shows the most important ones.

LP – linear programming – everything is linear, typical solvers are CPLEX, HiGHS, Gurobi or XPRESS. MIP – mixed-integer programming – a linear model where some variables must be integers, for example yes or no decisions. NLP – nonlinear programming – solved by CONOPT, IPOPT, SNOPT or KNITRO. MINLP – mixed-integer nonlinear – the hardest common class, with solvers like DICOPT, SBB, SHOT or BARON. Then models with quadratic constraints, equilibrium and complementarity problems, and finally global optimization.

That last row is important. A nonlinear problem can have several local optima. Solvers like CONOPT or IPOPT find a local optimum – a good point, but not necessarily the best one. Global solvers like BARON or SCIP prove that the solution is the global optimum.

And now the beauty of GAMS: switching the solver is one single line, for example option NLP equals BARON. The model itself does not change at all.

### Slide 8 · Where is GAMS used?

⏱️ `0:13–0:14`

Where is GAMS used? Practically everywhere where decisions are made under constraints.

In energy systems: power plant planning, unit commitment, carbon capture and storage. In economics and policy: computable general equilibrium models and international trade, for example the METRO model of the OECD. In agriculture, water and forestry: allocation of land, water and other resources. In finance: portfolio and risk optimization. In logistics: transport, scheduling, vehicle routing. And in engineering: chemical processes, mechanical design and manufacturing.

On the GAMS website you can find case studies from the OECD, TotalEnergies, Alpro or the Rhodium Group. Let us look at the two engineering fields more closely.

### Slide 9 · GAMS in chemical engineering

⏱️ `0:14–0:15`

Chemical engineering is the classic field of application, strongly developed by Professor Grossmann at Carnegie Mellon University and many others.

Process synthesis decides the structure of the whole flowsheet – which units to build and how to connect them – and this is typically a mixed-integer nonlinear problem. Then heat exchanger networks, distillation sequencing, reactor networks and kinetics, pooling and blending in refineries, and the design and scheduling of batch plants.

On the right you see examples from the GAMS Model Library. All of them can be opened directly in GAMS Studio. And our Example 3 today, the mixing of two streams, is the simplest possible case of a blending problem.

### Slide 10 · GAMS in mechanical & manufacturing engineering

⏱️ `0:15–0:16`

And mechanical and manufacturing engineering, which is closer to my own field.

Design of machine elements like gears, springs and bearings. Structural optimization of trusses and shapes. Optimal control, for example the trajectory of a robot arm. Manufacturing problems like cutting stock and trim loss, production planning and flow shop scheduling. And energy in production, where machines are scheduled to reduce energy costs.

Again, the Model Library has ready examples for all of them: gear train design, a coil compression spring, bearings, truss topology, cam shape, robot arm, cutting and scheduling. In machining, for example, choosing the cutting parameters is a nonlinear problem, and the sequence of operations is a mixed-integer problem.

### Slide 11 · Why should engineers use GAMS?

⏱️ `0:16–0:17`

So why should you, as engineers, use GAMS?

Because the model reads like the mathematical formulation on paper. Because you can use the same model with many solvers and compare local and global results. Because it scales from classroom examples to industrial models. Because there are more than four hundred and fifty ready models in the library to learn from. Because a free demo license comes with every download, and academic licenses are available. And because with GAMSPy, the model can live inside Python, next to your data, your plots and your web applications.

Next, we take one example and solve it first in GAMS and later in GAMSPy.

### Slide 12 · Resources

⏱️ `0:17–0:18`

Here are the most important resources: the GAMS homepage, the documentation, the Model Library, the GAMSPy documentation and the GAMSPy examples on GitHub, and the classic book GAMS – A User's Guide by Brooke, Kendrick, Meeraus and Raman. You do not need to write them down – all links are in the PDF of this presentation.

### Slide 13 · Installing GAMS

⏱️ `0:18–0:19`

Now, how to install GAMS. There are three steps.

First, download the installer from gams dot com slash download. It exists for Windows, Linux and macOS.

Second, run the installer. GAMS Studio is installed automatically together with GAMS. On Windows you may see a SmartScreen warning – click More info and then Run anyway.

Third, the license. A free demo license, limited in model size, comes with every download, and it is enough for today. Free academic licenses are available on the GAMS website. In GAMS Studio, you can paste or check the license under Help, GAMS Licensing.

### Slide 14 · GAMS Studio at a glance

⏱️ `0:19–0:20`

This is GAMS Studio. Let us look at the main areas.

On the left, the Project Explorer with all files of the project. The main file – the one that will be run – is marked with a green triangle. In the centre, the code editor for the model file, with syntax highlighting and code completion. After a run, the listing file opens with the results. At the bottom, the Process Log shows the run messages and errors, with clickable links. And at the top, the toolbar, with the most important button: Run, or the key F9.

### Slide 15 · Your first run in 5 steps

⏱️ `0:20–0:21`

Your first run in five steps.

One: create a project with File, New Project, and choose a working folder. Two: open a model, for example from the Model Library Explorer with F6 – try the classic transport model trnsport – or create a new file. Three: check the main file, the green triangle in the Project Explorer. Four: run with the green button or F9. Five: read the results in the Process Log and in the listing file, which opens automatically.

One important warning: GAMS Studio runs the main file of the project, not necessarily the file that is currently open in the editor. This confuses many beginners.

### Slide 16 · Reading the output

⏱️ `0:21–0:22`

How to read the output. In the Process Log, the colour of a line tells you what happens when you double-click it. A blue line opens the listing file at that place. A red line is an error and jumps directly to the line in your source code. A green line opens a created file, for example a GDX file.

The listing file has a navigation tree on the left: compilation, equation listing, model statistics, the solution report and the display output.

What should you check first? Three lines: SOLVER STATUS 1, Normal Completion; MODEL STATUS 1, Optimal; and the OBJECTIVE VALUE.

### Slide 17 · Finding and fixing errors

⏱️ `0:22–0:23`

Errors. They appear as red lines in the Process Log. The golden rule: always start with the first error. The later errors are very often only consequences of the first one.

Click the red line and the cursor jumps to the error in your model file. In the listing file, the error position is marked with a dollar sign and an error number.

The most common beginner errors are: a missing semicolon, a symbol that was not declared, a misspelled set element, or an equals sign written instead of equals-e-equals.

### Slide 18 · More useful Studio tools

⏱️ `0:23–0:24`

GAMS Studio has more useful tools. The GDX Viewer shows sets, parameters and solution values as tables, and can export them to Excel – you will use this one a lot. The Model Library Explorer with more than four hundred models. A solver option editor, where you create option files with a form instead of typing. Integrated help with F1 for the keyword under the cursor. A debugger with breakpoints. And the possibility to solve your model remotely, on the NEOS server or on GAMS Engine.

### Slide 19 · Handy shortcuts

⏱️ `0:24–0:25`

A few shortcuts. F9 runs the model, Shift F9 only compiles it. F6 opens the Model Library, F1 the help. Control space gives code completion, and Control star comments or uncomments lines. If you remember only one, remember F9.

Next, our first example, written in GAMS.

### Slide 20 · Links

⏱️ `0:25`

These are the links for download, installation and the GAMS Studio manual and tutorial – again, you will find them in the PDF.

---

## PART 2 — EXAMPLE 1 IN GAMS 0:25 – 0:40

### Slide 21 · Part 2 — Example 1 in GAMS

⏱️ `0:25`

Part two: Example 1, a simple linear program. This example is adapted from the lecture of Professor Elvis Ahmetović from the University of Tuzla.

### Slide 22 · The problem

⏱️ `0:25–0:27`

Here is the problem. We want to maximize Z equals three x one plus two x two.

Subject to two constraints: x one plus three x two is less than or equal to four, and x one plus x two is less than or equal to two. And both variables must be non-negative.

This is a linear program: the objective is linear and all constraints are linear. And it has only two variables. That is great for learning, because we can draw it in a plane and solve it graphically. Then we check that GAMS gives us the same answer. This is a good habit in general: whenever you start with a new tool, first solve a problem where you already know the answer.

The picture on the right shows the feasible region – the set of all points that satisfy all constraints. We look at it in detail on the next slide.

### Slide 23 · Graphical solution

⏱️ `0:27–0:30`

The graphical solution. Each constraint is a half-plane bounded by a straight line. The blue line is x one plus three x two equals four, the orange line is x one plus x two equals two. Together with the two axes, they enclose the feasible region, the blue polygon with corners A, B, C and D.

A fundamental property of linear programming: if an optimum exists, it lies in a corner point of the feasible region. So we only need to evaluate the objective in the four corners.

In A, the origin, Z equals zero. In B, the point two, zero, Z equals six. In C, Z equals five. And in D, the point zero, four thirds, Z equals eight thirds.

How did we find point C? It is the intersection of the two lines. Subtract the second equation from the first, and you get two x two equals two, so x two equals one, and then x one equals one.

So the optimum is in point B: x one equals two, x two equals zero, Z equals six.

You can also see it in the picture: the dashed lines are lines of constant Z. As we push the line Z equals constant further to the upper right, the last point of the region it touches is B. Remember this result – six – because we will now check it in GAMS.

### Slide 24 · The same model in GAMS

⏱️ `0:30–0:32`

And here is the same model in GAMS. Look at how close it is to the mathematics.

The first line is just a title. Then we declare the variables: x one and x two as positive variables, which means greater than or equal to zero, and Z as a free variable.

Then we declare the names of three equations: obj, eq one and eq two. And then we define them. Obj says Z equals three x one plus two x two. Eq one says x one plus three x two is less than or equal to four. Eq two says x one plus x two is less than or equal to two.

The model statement says that the model Example01 consists of all equations. The solve statement says: solve Example01 by maximizing Z, using LP. And the display statement prints the results.

Practically every line of the mathematical formulation has its line in the code.

### Slide 25 · Reading the code line by line

⏱️ `0:32–0:34`

Let us read the code line by line, because these few statements are the core of GAMS.

Positive Variables declares decision variables with the lower bound zero. Free Variable Z declares the objective variable. In GAMS, the objective must be a free variable, without any sign restriction.

The keyword Equations only declares the names. The definition comes later, with two dots: the name, two dots, and then the body of the equation.

Equals-e-equals means equal, equals-l-equals means less than or equal, and equals-g-equals means greater than or equal.

Model Example01 slash all slash says that the model contains all declared equations. The Solve statement contains three pieces of information: the direction, maximizing or minimizing, the objective variable, and the model type, here LP.

Display x one dot l prints the level of the variable, which is its optimal value. Besides dot l, variables also have dot lo and dot up for the bounds, and dot m for the marginal value, which for equations is the shadow price.

And please notice: every statement ends with a semicolon. A missing semicolon is the most common beginner error of all.

### Slide 26 · Running it in GAMS Studio (LIVE)

⏱️ `0:34–0:37`

Now let us run it, live in GAMS Studio. The steps are on the slide.

Create a new project, for example in a folder called GAMS underscore lecture. Create a new file Example01 dot gms and type or paste the code. Save it with Control S and check the green main-file marker. Press F9. The Process Log shows the run, and the listing file opens automatically.

> 🗒️ *LIVE DEMO in GAMS Studio. First delete one semicolon on purpose and run: show the red line in the Process Log, double-click it, show the dollar marker and error number in the listing file. Then fix the semicolon and run again. About 2 minutes.*

So, you have seen what an error looks like and how quickly you find it when you start from the first red line. Now let us look at the results of the correct run.

### Slide 27 · Results in the listing file

⏱️ `0:37–0:38`

These are the results from the listing file, copied from a real run with GAMS 54.

The solve summary tells us: model Example01, type LP, direction maximize, solver CPLEX. Solver status one, normal completion. Model status one, optimal. Objective value six.

And the display output on the right: x one equals two, x two equals zero, Z equals six.

Exactly the same as the graphical solution. Note also that we did not choose a solver – CPLEX is simply the default LP solver.

### Slide 28 · Try it yourself

⏱️ `0:38–0:40`

Now it is your turn. Four small exercises.

First, change the objective to Z equals two x one plus three x two. Which corner wins now?

Second, look at the marginals of the equations, eq one dot m and eq two dot m. Which constraint is binding?

Third, switch the solver: add the line option LP equals HiGHS before the solve statement, and compare.

And fourth, change maximizing to minimizing. What happens, and why?

> 🗒️ *Give students about one minute, then reveal the answers.*

The answers. With the new objective, point C, one, one, wins with Z equals five, while D gives only four. The constraint eq two is binding at point B, its marginal is three, while eq one has slack and its marginal is zero. HiGHS gives the same optimum. And minimizing gives the trivial solution in the origin, A, with Z equals zero – of course, if you want the smallest value and all coefficients are positive, you produce nothing.

Next, the same model in Python, with GAMSPy.

---

## PART 3 — FROM GAMS TO GAMSPY 0:40 – 0:55

### Slide 29 · Part 3 — From GAMS to GAMSPy

⏱️ `0:40`

Part three: from GAMS to GAMSPy. First we need to install Python, GAMSPy and Visual Studio Code on Windows.

### Slide 30 · What is GAMSPy?

⏱️ `0:40–0:41`

What is GAMSPy? It is a Python package for algebraic modelling. Sets, parameters, variables and equations become Python objects. In the background, it uses the GAMS engine and the GAMS solvers.

You do not need a separate GAMS installation: pip install gamspy brings its own GAMS core. And because it is Python, it works with pandas, NumPy, Matplotlib, Jupyter and web applications. A demo license is included, and GAMSPy is free for academics through the GAMS Academic Program.

One warning: GAMS and GAMSPy licenses are different. A GAMS license cannot be used for GAMSPy.

### Slide 31 · Step 1 – Install Python

⏱️ `0:41–0:42`

Step one: Python. GAMSPy needs Python 3.11 or newer. Download it from python dot org. In the installer, do not forget to tick Add python dot exe to PATH. Then open PowerShell and check it with python dash dash version. If you already use Anaconda, you can use the Anaconda Prompt instead – the rest of the steps are the same.

### Slide 32 · Step 2 – Create a virtual environment

⏱️ `0:42–0:43`

Step two: a virtual environment. It keeps the GAMSPy packages separate from your other Python projects.

Open PowerShell in your working folder, for example C colon GAMS underscore lecture. Type python dash m venv dot gamspy underscore venv to create it, and then run the activate script. When the prompt starts with the environment name in brackets, it works.

If PowerShell refuses to run the script because running scripts is disabled, run the Set-ExecutionPolicy command shown on the slide once, and try again.

### Slide 33 · Step 3 – Install GAMSPy

⏱️ `0:43–0:44`

Step three: install GAMSPy. One command: pip install gamspy.

Then check it with gamspy dash dash version. You should see the GAMSPy version, 1.29, and the version of the GAMS core that came with it, 54.6. Later, you can update with pip install gamspy dash dash upgrade.

### Slide 34 · Step 4 – Solvers

⏱️ `0:44–0:45`

Step four: solvers. The command gamspy list solvers shows the installed ones. By default you get CPLEX for linear and mixed-integer problems, CONOPT for nonlinear problems, SBB for mixed-integer nonlinear problems, and PATH for complementarity problems.

You can install more on demand, for example gamspy install solver highs ipopt. And in Python, you choose the solver with one argument: model dot solve, solver equals highs.

### Slide 35 · Step 5 – License (optional)

⏱️ `0:45–0:46`

Step five, the license, is optional. The demo license works out of the box for small models, and that is enough for this lecture.

If you have an academic or full license, you get a thirty-six character access code. Install it with gamspy install license and the code, and check it with gamspy show license. To go back to the demo license, use gamspy uninstall license.

### Slide 36 · Step 6 – Test it

⏱️ `0:46–0:47`

Step six: test it. This is the smallest possible GAMSPy model.

We import gamspy as gp, create a Container, one variable x and one equation e, which says x is greater than or equal to one. The model minimizes x, so the answer must be one. We solve it and print the status and the objective value.

Save it as test underscore gamspy dot py and run it. If you see ModelStatus OptimalGlobal and one point zero, GAMSPy is ready.

### Slide 37 · Quick reference

⏱️ `0:47–0:48`

This table is a quick reference of all the commands from the installation: create and activate the environment, install GAMSPy, check the version, list and add solvers, and install and show the license. You do not need to remember them – keep this slide from the PDF next to your computer when you install at home.

### Slide 38 · Step 1 – Install VS Code

⏱️ `0:48–0:49`

Now the editor. We will use Visual Studio Code, which is free, light and runs on Windows, macOS and Linux.

Download it from code dot visualstudio dot com and run the installer. The screenshot on the right shows the download page – the website offers the installer for your operating system automatically. Two ticks are important: Add Open with Code to the Explorer context menu, and Add to PATH. Then start VS Code.

### Slide 39 · Step 2 – Python extension

⏱️ `0:49–0:50`

Step two: the Python extension. Open the Extensions view with Control Shift X, search for Python and install the extension by Microsoft. The Python Debugger is installed automatically with it. Optionally, you can add the Jupyter extension for notebooks.

But remember: the extension does not contain Python itself. Python 3.11 or newer must already be installed, as we did a moment ago.

### Slide 40 · Step 3 – Open your project folder

⏱️ `0:50–0:51`

Step three: open your project folder – File, Open Folder, and choose C colon GAMS underscore lecture. Or right-click the folder in Windows Explorer and choose Open with Code. Confirm that you trust the authors.

The rule is: one folder is one project. Your Python files and your virtual environment live in this folder. Always open the whole folder, not just a single file.

### Slide 41 · Step 4 – Select the Python environment

⏱️ `0:51–0:52`

Step four: select the Python environment. Open the Command Palette with Control Shift P. There are three ways.

Option A: if the environment already exists, because you created it in PowerShell, choose Python: Select Interpreter and pick dot gamspy underscore venv.

Option B: if you skipped the PowerShell steps, choose Python: Create Environment, then Venv, then your Python version. VS Code creates the environment in the folder and activates it automatically. This is the easiest path.

Option C: create it yourself in the integrated terminal, with python dash m venv dot gamspy underscore venv. On macOS and Linux the command is usually python3. Then select it as in option A.

The table shows how to activate the environment in a terminal. In Windows PowerShell, run the script Activate dot ps1 in the Scripts folder of the environment. In the classic Windows command prompt, run activate dot bat in the same folder. On macOS and Linux, type source, and the path to the environment, slash bin slash activate. To leave the environment, on every system, just type deactivate.

The selected environment is shown in the status bar at the bottom right.

### Slide 42 · Step 5 – Install GAMSPy in the environment

⏱️ `0:52–0:53`

Step five: install GAMSPy in this environment. Open the integrated terminal with Terminal, New Terminal. The prompt should start with the name of the environment – check this before you install anything.

Then type pip install gamspy matplotlib, and check the version again. We install Matplotlib already now, because later we will use it for plotting the results.

### Slide 43 · Step 6 – Run your first script

⏱️ `0:53–0:54`

Step six: run your first script. Create the file test underscore gamspy dot py, paste the test model and save it.

Now there are three ways to run it. Click the Run Python File button at the top right of the editor. Or right-click and choose Run Python File in Terminal. Or select a few lines and press Shift Enter to run only the selection.

The output appears in the Terminal panel – and again, ModelStatus OptimalGlobal and one point zero means everything works.

### Slide 44 · VS Code shortcuts for this lecture

⏱️ `0:54–0:55`

And the VS Code shortcuts we need today. The most important one is Control Shift P, the Command Palette – from there you can do everything. Control Shift X for extensions, Control Shift backtick for a new terminal, Shift Enter to run a selection, F5 to start the debugger, Control slash to comment a line, and Control P to quickly open a file.

Now we are ready: Example 1, written in GAMSPy.

---

## PART 4 — EXAMPLE 1 IN GAMSPY 0:55 – 1:05

### Slide 45 · Part 4 — Example 1 in GAMSPy

⏱️ `0:55`

Part four: the same model as before, now in Python.

### Slide 46 · GAMS → GAMSPy: the dictionary

⏱️ `0:55–0:57`

To translate from GAMS to GAMSPy, we need a small dictionary. Here it is.

The whole GAMS file corresponds to one Container in GAMSPy. Every symbol lives inside this container.

A GAMS set becomes gp dot Set, with the container, the name and the records. A parameter becomes gp dot Parameter, with a domain and records. A positive variable becomes gp dot Variable with type equals positive, and a free variable with type equals free. An equation becomes gp dot Equation.

The definition with two dots becomes an assignment with square brackets and three dots: e, bracket, dot dot dot, bracket, equals left-hand side, double equals, right-hand side. Equals-l-equals and equals-g-equals become the Python operators less or equal and greater or equal. The GAMS sum becomes gp dot Sum.

The model statement becomes gp dot Model with the list of equations, and the solve statement is split: the problem type, the sense and the objective are arguments of the model, and then we call the method solve. And instead of Display, we use print, with toValue or records.

The key idea: every GAMS symbol becomes a Python object that lives in a Container. And the three dots in square brackets mean: for all elements of the domain.

### Slide 47 · Side by side

⏱️ `0:57–0:59`

Here are both versions side by side, as screenshots from the two programs – GAMS Studio on the left, and VS Code with GAMSPy on the right. Let us go block by block.

The GAMS file starts with dollar title, a title for the model. The Python file starts with a short description in quotes, and imports sys and gamspy. Then we create the Container, and comments mark every block of the Python code.

Variables: in GAMS one line declares x one and x two as positive. In Python each variable is a separate object, with type equals positive, and z with type equals free.

Equations: in GAMS one line declares the three names. In Python we create eq one and eq two with gp dot Equation and define them with the three dots in square brackets. The relations are written with Python operators, less or equal, and there is no semicolon at the end. The objective is a separate equation named obj: z double equals three x one plus two x two.

Model and solve: in GAMS two statements. In Python one gp dot Model call, with the name Primjer01 – primjer means example in Bosnian – and equations equals m dot getEquations, which is the equivalent of slash all slash. Then problem LP, sense gp dot Sense dot MAX, and objective z. We call solve with output equals sys dot stdout, so we see the same solver log as in GAMS Studio.

And finally, instead of Display, three print lines: x one and x two with toValue, and the objective value of the model.

The Python version is a bit longer, but every line has a direct partner on the left.

### Slide 48 · How to convert – step by step

⏱️ `0:59–1:00`

The conversion as a recipe in seven steps. Import gamspy and create a Container. Each variable declaration becomes gp dot Variable with a type. Equations are declared with gp dot Equation and defined with the three dots in brackets. Relations become Python operators, and there are no semicolons. The model gets the list of equations, the problem type, the sense and the objective. You call solve – the default LP solver is again CPLEX. And you read results with toValue for scalars or records, a pandas DataFrame, for indexed symbols.

The warning at the bottom is the most common pitfall. If you write eq one equals, without the brackets and the three dots, you do not define the equation. You simply overwrite the Python variable eq one with an expression, and the model silently loses its constraint.

### Slide 49 · Run it in VS Code (LIVE)

⏱️ `1:00–1:02`

Let us run it, live in VS Code. Open the folder, check the environment, create the file example01 dot py, paste the code, save it and click Run Python File. The result appears in the terminal.

If you want to see the full solver log, as you know it from GAMS Studio, pass output equals sys dot stdout to the solve method.

> 🗒️ *LIVE DEMO: run example01.py in VS Code, then once more with output=sys.stdout to show the solver log. About 1.5 minutes.*

So the model runs in Python, and the log is the same log as in GAMS – because underneath it is the same engine.

### Slide 50 · Results

⏱️ `1:02–1:03`

The results. The solve method returns a summary table, a pandas DataFrame: solver status normal completion, model status optimal global, objective six, model type LP, solver CPLEX, and solver time a few milliseconds.

The values: x one equals two, x two equals zero, Z equals six.

And if you print x one dot records, you get the full record of the variable – the level, the marginal, the lower and upper bound, and the scale.

Once again the same result as on paper and in GAMS: x one equals two, x two equals zero, Z equals six.

### Slide 51 · The Python way – shorter

⏱️ `1:03–1:04`

In GAMSPy we can write it shorter. The objective does not need a variable Z and an equation obj. We can pass the expression three x one plus two x two directly as the objective of the model.

Then we print the model status, the objective value, and the marginals of the two constraints, which we read from the records.

The output: optimal, six, and the marginals zero and three. This answers one of the exercise questions from part two: eq two is binding, with a shadow price of three, and eq one has slack. If we could relax the second constraint by one unit, the objective would grow by three.

### Slide 52 · Bonus: back to GAMS and LaTeX

⏱️ `1:04–1:05`

A small bonus. A GAMSPy model can be exported back to GAMS with toGams, and to LaTeX with toLatex. On the right you see the generated GAMS file – the same model we wrote by hand at the beginning.

This is useful if you want to open the model in GAMS Studio, or if you write a paper or a thesis and need the equations in LaTeX.

Next, more realistic data: Example 3.

---

## PART 5 — EXAMPLE 3: MIXING OF STREAMS 1:05 – 1:20

### Slide 53 · Part 5 — Example 3: Mixing of streams

⏱️ `1:05`

Part five: Example 3, the mixing of streams. Here we learn sets, parameters and data in GAMSPy. The example is again after Professor Ahmetović, and the problem comes from the book of Eden.

### Slide 54 · The problem

⏱️ `1:05–1:06`

The problem. Two feed streams are mixed to produce a mixture of MEA and water. MEA is monoethanolamine, a solvent used for example in carbon dioxide capture.

Feed one contains eighty percent MEA and twenty percent water, and costs eighty cents per kilogram. Feed two contains sixty-eight percent MEA and thirty-two percent water, and costs sixty cents per kilogram.

The product may contain at most twenty-five mass percent of water. The question: which mixing ratio gives the minimum cost per one kilogram of mixture? Feed two is cheaper, but it has too much water – so we need to find the right balance.

### Slide 55 · Mathematical formulation

⏱️ `1:06–1:08`

The mathematical formulation, on the basis of one kilogram of mixture.

The variables are m one and m two, the masses of feed one and feed two in kilograms, and z, the cost of one kilogram of mixture in cents.

We minimize z equals eighty m one plus sixty m two. Subject to the water content: zero point two m one plus zero point three two m two is less than or equal to zero point two five. And the mass balance: m one plus m two equals one. Both masses are non-negative.

The picture on the right shows the graphical solution. Because of the mass balance, all feasible points lie on the thick line segment. The water constraint cuts this segment, and the cheapest feasible point is where the water content is exactly twenty-five percent: m one equals zero point five eight three, m two equals zero point four one seven, and the cost is seventy-one point six seven cents per kilogram.

A small discussion point: in the original GAMS lecture this model was solved as NLP. But all equations are linear, so LP is the correct model type. Always choose the simplest model type that fits your equations.

### Slide 56 · Step 1 – direct translation

⏱️ `1:08–1:10`

Step one: a direct translation, exactly in the style of Example 1. The screenshot shows the file mixing of streams dot py in VS Code.

We create a container and two positive variables, m one and m two. New here is the description argument – a short text that documents the meaning and the unit of each variable, here mass of feed one and mass of feed two in kilograms. It is good practice and it appears in the results.

Then two equations: water and balance. The water content, zero point two m one plus zero point three two m two, must be less or equal to zero point two five. And the balance, m one plus m two double equals one. Double equals is used for an equality constraint.

Notice that there is no variable z and no objective equation. We pass the cost, eighty m one plus sixty m two, directly as the objective of the model – the shorter Python way we saw in Example 1. Problem LP, sense min, and solve. Then we print the objective value and the values of m one and m two.

The result: seventy-one point six six seven cents per kilogram, m one zero point five eight three, m two zero point four one seven. Exactly the graphical solution. New are only the double equals for the balance and the descriptions.

### Slide 57 · Problem: numbers are inside the equations

⏱️ `1:10–1:11`

But this model has a problem. All the numbers – the costs and the compositions – are hard-coded inside the equations. If you want a third feed or a third component, you have to rewrite the whole model. And real models have hundreds of streams, with data that come from Excel files or databases.

The solution is to separate the model from the data. That is what sets and parameters are for. The table shows the concepts: an index set, data as a parameter, a two-dimensional table, an indexed variable, and a sum over a set – each one in GAMS and in GAMSPy.

### Slide 58 · Step 2 – general (indexed) formulation

⏱️ `1:11–1:13`

So here is the general, indexed formulation.

We have two sets: f, the feeds, and c, the components. Parameters: cost of f, the cost of each feed; w of f and c, the mass fraction of component c in feed f; wmax of c, the maximum allowed fraction of component c in the product; and M, the product amount. And one indexed variable: x of f, the mass of feed f in the product.

We minimize the sum over f of cost times x. Subject to: for every component c that has a limit, the sum over f of w times x is less than or equal to wmax times M. And the sum of all x equals M.

Compare it with the two-variable version. There, each number was written in an equation. Here the equations contain only symbols. And this is the big advantage: the model does not change when you add feeds or components. Only the data change.

### Slide 59 · Sets and data

⏱️ `1:13–1:14`

This is how we enter the sets and the data in GAMSPy.

The set f has the records feed one and feed two, and the set c has the records MEA and water.

The composition is a pandas DataFrame, with one row for each combination of feed and component and its value. In practice it could come directly from Excel – that would be one line, pandas read excel.

Then the parameters: w with the domain f and c, filled from the DataFrame; cost with the domain f; wmax with the domain c – notice that we give a limit only for water; and the scalar M, equal to one.

### Slide 60 · Variables, equations, model

⏱️ `1:14–1:16`

Now the variables, equations and the model.

The variable x is positive and has the domain f – so it is really two variables, one for each feed.

The equation spec has the domain c – one equation for each component. And balance is a single equation.

Look at the definition of spec. Spec of c, dot where, wmax of c. This means: create the equation only for those components where wmax has a value. For MEA we have no limit, so there is no equation; for water there is one. In GAMS this is the dollar condition. And then the sum over f of w times x, less or equal to wmax times M. The balance says that the sum of all x equals M.

The model minimizes the sum over f of cost times x, and we solve it.

The small table at the bottom repeats the three new things and their GAMS equivalents: the indexed equation, the where condition, and the sum.

### Slide 61 · Results

⏱️ `1:16–1:17`

The results. The minimum cost is again seventy-one point six six seven cents per kilogram. Because x is indexed, x dot records gives a small table with one row per feed: feed one zero point five eight three, feed two zero point four one seven.

And we can compute derived values directly in GAMSPy. Here we create a parameter product and calculate the composition of the product: seventy-five percent MEA and twenty-five percent water. The water content is exactly at the limit – the constraint is active. That is why the optimum lies exactly on this boundary.

### Slide 62 · What-if: change the water limit (LIVE)

⏱️ `1:17–1:19`

And now the real power of Python. A what-if analysis: how does the optimum change if we change the water limit?

We write a simple loop over several limits. In each step we set new records for wmax, solve the model again and print the results. We change only the data – the model is not rewritten.

> 🗒️ *LIVE: run mixing_ind_formulation.py and show the what-if table in the terminal. About 1 minute.*

Look at the table. With a twenty percent limit, the cost is eighty, and only feed one is used. As the limit grows, more of the cheap feed two can be used and the cost falls. At thirty-two percent only feed two is used, at sixty cents.

Below twenty percent the problem is infeasible, because even pure feed one already contains twenty percent water. And above thirty-two percent the limit is no longer active, and the cheaper feed two is used alone.

Next, we turn this table into a plot with Matplotlib.

### Slide 63 · Try it yourself

⏱️ `1:19–1:20`

Some exercises for you. Add a third feed with ninety percent MEA, ten percent water and a cost of ninety-five cents per kilogram – you will see that only the data change. Add a minimum MEA content of seventy-two percent, with a parameter wmin and a greater-or-equal equation. Produce one thousand kilograms instead of one. And try a water limit of zero point one five – and check mixing dot status. You will see the model is infeasible, which is a good moment to learn how to read the model status in Python.

---

## PART 6 — FROM MODEL TO WEB PAGE 1:20 – 1:40

### Slide 64 · Part 6 — From model to web page

⏱️ `1:20`

Part six: from model to web page. GAMSPy, Matplotlib and Flask, in seven steps, each of which you can test before you continue.

### Slide 65 · What we are going to build

⏱️ `1:20–1:22`

First, let us look at what we are going to build. Follow one request through the diagram.

The user moves a slider in the browser. JavaScript sends a request to Flask, a small web server written in Python, in the file app dot py. Flask calls our GAMSPy model, in the file mixing underscore model dot py, which passes the problem to the solver, CPLEX. The result comes back to Flask. Flask also asks Matplotlib, in plot underscore mixing dot py, to draw a chart. And then Flask sends back to the browser the numbers as JSON and the chart as a PNG image.

The table shows the files and the step in which we create each one: the model as a function in step two, the chart in step three, Flask growing from step four to step six, and the final interactive page in step seven.

### Slide 66 · Step 1 – Install Matplotlib and Flask

⏱️ `1:22–1:23`

Step one: in the VS Code terminal, with our environment active, install Matplotlib and Flask with pip.

Every step has a test. Here it is a one-line Python command that imports gamspy, matplotlib and flask, and prints all OK. If you see all OK, continue.

On the right is the folder structure we are going to create: a folder webapp with the model, the plot script, three intermediate Flask apps, the final app and a templates folder with the HTML page.

### Slide 67 · Step 2 – Model as a reusable function

⏱️ `1:23–1:25`

Step two: we wrap Example 3 into a reusable function, solve mixing. Its inputs are the water limit, the two costs and the amount. Its output is a dictionary with the results.

Inside, we create a new container for every call, then the sets, parameters, variables and equations, exactly as before, and we solve. If the status is not optimal, we return ok false and the status. Otherwise we return ok true, the cost and the two feed amounts.

Why a function? Because the web server will call it with different inputs for every request. And why a dictionary? Because a dictionary is very easy to send to the browser as JSON.

The test: run python mixing underscore model dot py. You should see one optimal result for twenty-five percent, and one infeasible result for fifteen percent.

### Slide 68 · Step 3 – What-if chart with Matplotlib

⏱️ `1:25–1:27`

Step three: the what-if chart with Matplotlib.

The first two lines are important for web applications. Matplotlib use Agg means: no window, draw only into a file or into memory. A web server has no screen.

Then we solve the model for thirteen water limits, from twenty to thirty-two percent, and draw two charts: the cost on the left, and the feed amounts on the right.

Why two separate charts? Because the cost is in cents per kilogram and the amounts are in kilograms – different units. Never put them on one chart with two y-axes; it is confusing. In the code we also use a cache, so that the thirteen solves are remembered for each combination of costs and the page stays fast.

The test: run plot underscore mixing dot py and open the PNG file. It should look like the picture on the right.

### Slide 69 · Step 4 – The smallest Flask app

⏱️ `1:27–1:29`

Step four: the smallest possible Flask application, only a few lines.

We import Flask and create the app. The decorator app dot route with a slash connects the address – the root of the web page – with a Python function. The function home returns a piece of HTML, a heading Hello from Flask. And app dot run with debug equals true starts the server; in debug mode it restarts automatically every time you save a change.

The test: run python app underscore step four dot py and open the address one two seven dot zero dot zero dot one, colon five thousand, in your browser. You should see the greeting. Stop the server with Control C before the next step.

### Slide 70 · Step 5 – A form that solves the model

⏱️ `1:29–1:31`

Step five: a form that solves the model. Now the browser sends a number, and Flask calls GAMSPy.

The page is a small template in a Python string. It has a form with one number input for the maximum water content and a button Solve. Below the form there is a condition: if the result is ok, show the minimum cost; otherwise show No feasible mixture with the status. The double curly braces print a value, and the curly brace with percent signs is a decision – this is the Jinja template language used by Flask.

The route now accepts both GET and POST. It reads the number from the form, calls solve mixing with the water limit divided by one hundred, and renders the page with the result.

The test: enter twenty-two, and you get seventy-six point six seven cents per kilogram. Enter fifteen, and you get no feasible mixture.

### Slide 71 · Step 6 – Add the Matplotlib chart

⏱️ `1:31–1:33`

Step six: we add the chart. A second route, slash plot dot png, returns the Matplotlib chart as an image.

The function reads the water limit from the address, solves the model, and draws the figure with the current case marked. Then it saves the figure not to a disk, but into memory – into a BytesIO object, which behaves like a file in memory. We close the figure to free memory – this is important on a server that runs for days. And we return the bytes with the type image slash png.

In the page we simply use an image tag whose source is this address, with the water limit as a parameter.

The test: open the plot address directly in the browser, with water equals twenty-two, and you should see the chart. Then open the main page – the chart is now under the form.

### Slide 72 · Step 7 – Interactive page: JSON API

⏱️ `1:33–1:35`

Step seven is the final interactive page, and it has two parts. First, the server side, app dot py.

There are three routes. The root returns the HTML page from the templates folder. The route slash api slash solve returns the results as JSON: it reads the water limit and both costs from the address, calls solve mixing and converts the dictionary with jsonify. And the route slash plot dot png returns the chart, as in step six.

This is a small API – an application programming interface. The page asks for data, and the server answers with numbers, not with a whole page.

The test: open the API address with water twenty-five and costs eighty and sixty. You should see the JSON on the slide: cost seventy-one point six seven, feed one zero point five eight three, feed two zero point four one seven, ok true.

### Slide 73 · Step 7 – Interactive page: sliders + JavaScript

⏱️ `1:35–1:36`

The second part is the browser side, the file index dot html. There are three sliders – for the water limit and the two costs – and an image for the chart.

A small JavaScript function update runs on every change of a slider. It builds the query from the slider values, fetches the JSON from our API – that is where GAMSPy solves the model – and writes the cost into the page. Then it changes the source of the image, so Matplotlib draws the new chart.

The test: run python app dot py and move the sliders. The numbers and the chart should update.

### Slide 74 · The result (LIVE)

⏱️ `1:36–1:39`

And this is the result: an interactive mixing optimizer. On the left the sliders for the water limit and the cost of feed one and feed two. At the top the cards with the minimum cost, the feed ratio as a bar, and the water content of the product. And the what-if chart, with the current case marked by the dashed line. If the input is infeasible, below twenty percent water, a red warning appears instead of numbers.

> 🗒️ *LIVE DEMO: python app.py in webapp, open http://127.0.0.1:5000. Set feed 1 cheaper than feed 2 (70 vs 90): the water limit is no longer active and only feed 1 is used. Then move the water limit below 20 %. About 2.5 minutes.*

So, with about one hundred lines of Python and a short HTML page, an optimization model became a tool that anybody can use in a browser, without knowing anything about GAMS.

### Slide 75 · Summary & next steps

⏱️ `1:39–1:40`

Let us summarise the web part as four layers. The optimization model is GAMSPy, in mixing underscore model dot py. The visualization is Matplotlib, in plot underscore mixing dot py. The web server is Flask, in app dot py. And the user interface is HTML and JavaScript, in index dot html.

How to continue? Add a third feed or a minimum MEA content – only the model file changes. Read the feed data from Excel with pandas. And deploy the app for students, on a university server, or use GAMS MIRO if you want a ready-made interface. The same pattern works for any GAMSPy model: a function, a JSON route and a page.

---

## SUMMARY AND QUESTIONS 1:40 – 2:00

### Slide 76 · What we learned today

⏱️ `1:40–1:43`

What did we learn today? Let us compare GAMS and GAMSPy row by row.

The language: GAMS has its own algebraic language in dot gms files, while GAMSPy is a Python package.

The environment: GAMS Studio for GAMS, and VS Code or Jupyter for GAMSPy.

The results: in GAMS the listing file and GDX files; in GAMSPy pandas DataFrames and the toValue method.

The data: in GAMS, tables in the model or GDX files; in GAMSPy, pandas, Excel and databases – the whole Python world.

Applications: GAMS has MIRO; with GAMSPy you can use Matplotlib, Flask or any other Python tool, as we did today.

And the solvers are the same: CPLEX, CONOPT, BARON, HiGHS and many others.

So: the same algebraic model, two ways to write it. Choose GAMS when you do pure modelling, and GAMSPy when the model is a part of a bigger Python workflow – with data, plots and web pages.

### Slide 77 · Review questions

⏱️ `1:43–1:52`

Let us check what stayed in your head. I will ask the questions one by one – try to answer before I continue.

> 🗒️ *Read each question, wait for answers from the students, then confirm with the expected answer.*

**Question one:** What is the key idea of an algebraic modelling language like GAMS?

> ✅ **Expected:** You write the model as mathematics – sets, parameters, variables, equations – and it is separated from the solver; the same model can be solved by different solvers.

**Question two:** Why must the objective variable Z be declared Free in GAMS?

> ✅ **Expected:** The objective may take any value, positive or negative; GAMS requires the objective to be a free variable without sign restriction.

**Question three:** What do equals-e-equals, equals-l-equals and equals-g-equals mean, and what are they in GAMSPy?

> ✅ **Expected:** Equal, less than or equal, greater than or equal; in GAMSPy double equals, less or equal and greater or equal.

**Question four:** Which constraint is binding at the optimum of Example 1, and how do you see it?

> ✅ **Expected:** Eq two, x one plus x two less or equal to two; its marginal is three, while eq one has marginal zero and slack.

**Question five:** What do the three dots in square brackets do in eq one, bracket, dot dot dot, equals – and what happens without them?

> ✅ **Expected:** They define the equation over its whole domain; without them you overwrite the Python variable and the constraint is lost.

**Question six:** Why is LP, not NLP, the correct model type for Example 3?

> ✅ **Expected:** All equations are linear; always choose the simplest model type that fits.

**Question seven:** Why do we separate the model from the data with sets and parameters?

> ✅ **Expected:** New feeds or components change only the data, not the equations; data can come from Excel or databases, and what-if analyses only change data.

**Question eight:** Why is a water limit below twenty percent infeasible?

> ✅ **Expected:** Even pure feed one, the feed with the least water, contains twenty percent water, so no mixture can have less.

Thank you. These were the most important points of today.

### Slide 78 · Where to continue

⏱️ `1:52–1:53`

Where to continue? The GAMS Model Library, with more than four hundred models, many of them from chemical and mechanical engineering. The GAMSPy examples on GitHub. The guide GAMSPy for GAMS users. And all the code from today, which you can download as a zip file from the link on this slide.

And a homework idea: extend Example 3 with a third feed and a minimum MEA content, and then show the result in the web app.

### Slide 79 · Acknowledgements

⏱️ `1:53–1:54`

Acknowledgements. Examples 1 and 3 are adapted from the lecture of Professor Elvis Ahmetović from the University of Tuzla, Mathematical modelling in GAMS, which he gave as an Erasmus+ lecture at our university in November 2025. The Example 3 problem comes from the book of Eden, Process Synthesis, Simulation and Optimization. And many thanks to our hosts for the invitation.

### Slide 80 · Thank you – questions?

⏱️ `1:54–2:00`

> 🗒️ *Keep this slide on the screen during the questions.*

Thank you very much for your attention. On the slide you find my contact and the sources and further reading: the lecture of Professor Ahmetović, the book of Eden, the GAMS User's Guide, the GAMS and GAMSPy documentation, and the documentation of VS Code, Matplotlib and Flask.

Now I am happy to answer your questions.

---

*End of text*
