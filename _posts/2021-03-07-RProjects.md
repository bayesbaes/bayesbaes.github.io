---
layout: post
title: "RStudio Projects"
authors: "Helen Yan"
tags: good-habits fundamentals organization
output: 
  md_document:
      variant: gfm
      preserve_yaml: true
---

# Why you should be using RStudio projects

## AKA please save your collaborators the trouble and use RStudio projects

This is going to be short and sweet and will hopefully help you develop
some good habits. By the end of this mini-tutorial, you’ll get a better
understanding of what an RStudio project is and why you should use them
(especially if you’re collaborating with other coders).

## What the fork are RStudio projects?

Well, RStudio projects basically allow you to keep a bunch of different
files together within a project. You might be thinking: “That’s fine and
dandy, but why bother? Can’t I achieve the same thing by simply keeping
all my files within a single folder?”. In short, no, it’s not the same.

The biggest benefit to using RStudio Projects is that it
<b>automatically defaults your working directory to the project
location</b>. What this means, is that you don’t need to
<span class="package-style">setwd()</span> at the beginning of every
script This is ESPECIALLY helpful when you collaborate with other
people. Despite the fact that different people can keep their projects
in different places (e.g., you might have Desktop\>School\>R while
someone else might have Desktop\>Projects\>Work), the project will
recognize these discrepancies and operate seamlessly, despite these
differences.That means that you don’t have to have multiple lines at the
beginning of the script with different working directories and running
the ones that you want to use (and then you avoid annoying errors when
different directories don’t align). Honestly, if you ask me, that’s the
biggest win for using projects (and you can honestly just stop reading
here).

## Ok, you’ve convinced me, how do I set-up an RStudio Project?

Well I’m glad you asked\! It’s actually quite simple, you just go File
\> New Project. Bam, it’s that simple\! From there, you’ll be given a
choice to create a project (1) in a new directory (it will create a new
folder), (2) in an existing directory (in an existing folder), or (3) by
cloning a version control repository (e.g., GitHub).

<img src="/figures/RProjects/ProjectsPic.png" width="60%" />

And there you go\! You can create new R scripts, RMarkdown files, text
files, etc. and save them in the project. Now, everything is centralized
to your project working directory. But how do you navigate between your
files?

## File organization

A simple and effective way to organize your files is group all of your
similar files together.

<img src="/figures/RProjects/FileOrganization.png" width="80%" />

In this case, when you go into the R folder, you’ll see our project
there (called SizeSpectra.Rproj), and a number of files. Let’s say that
we have created a figure in your Figures.R script and we want to save it
in the Figures folder. To do so, we can simply run:

``` r
ggsave('../Figures/Figure_name.png', Figure_name)
```

In this case, the ‘..’ means that we want to go back a folder. Because
we are currently in the R folder, we go back into the main folder with
‘..’ and then forward to the Figures folder with ‘/’.

And voilà\! Now, you can fully utilize this wonderful organizational
approach and run an analysis in the Analysis.R script, save the model to
the Model\_outputs folder, call on the model from the Figures.R script,
and then save your beautiful figure in the Figures folder\! HOW
SOPHISTICATED\!

You can find some more info re: RStudio Projects
href=“<https://support.rstudio.com/hc/en-us/articles/200526207-Using-Projects>”
target="\_blank"\>here</a>.
