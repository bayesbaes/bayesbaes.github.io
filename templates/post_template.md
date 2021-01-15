---
layout: post
title: "Your Title"
authors: "Firstname Lastname"
tags: tag1 tag2
output: 
  md_document:
      variant: markdown_github
      preserve_yaml: true
---

```{r setup, include=FALSE}
base.dir <- "your/working/directory"
base.url <- "/"
fig.path <- "figures/your_tutorial_name/"

knitr::opts_knit$set(base.dir = base.dir, base.url = base.url)
knitr::opts_chunk$set(fig.path = fig.path) 
knitr::opts_chunk$set(dpi = 300) #this line is optional
```

**To see this file with the proper syntax, make sure to select "Raw" when viewing it. Please include all of the information listed above at the very start of any tutorial post you make in markdown, filling in the relevant info for your specific post.**

### Front matter

This is the part inside the dashes, which is necessary for the website to read your tutorial in as a post. Keep the *layout* and *output* sections exactly as written here, then customize the *title*, *authors*, and *tags*. For the tags, you can search our site to see how we categorize our posts, or use your own tags as you see fit. We may change these as our site grows and we reorganize things. If you have more than one author on a post, add additional authors with a space and a new set of quotation marks.

### Markdown setup

This is the part inside the backticks. This part seems weird, but it's **super** important if you have any images or figures in your markdown! For our site to be able to reference any figures you have properly, you'll need to define your base directory, base url, and figure path before knitting your markdown. Your base directory is just your working directory, which you can check with getwd() (mine all look like "C:/Users/hannah/etc/etc/etc"). Then, manually set base.url to "/" (this just puts a / in front of all the filepaths that your markdown references, which we need because Github Pages is finnicky). Finally, you'll create the figure path, which **must** start with "figures/". You can make up a name in the "your_tutorial_name/" section and make sure to include the / at the end. Below that, you'll then use the knitr package to set the defaults for the base directory and image path. You can also optionally set a resolution size for any of your figures by adjusting the dpi and changing the width and height, as I find the defaults aren't a great quality.

### Putting your files in our repo

All of that weird code will create a folder (*your_tutorial_name*) of all your figures in your working directory that is located inside a folder named **figures**. You can copy the entire folder ("your_tutorial_name") and put it in *our* own **figures** folder in our repo.

Then you can put your .md file in our **_posts** folder. Please follow the naming convention: *YYYY-MM-DD-name-of-your-tutorial.md* . Doing so will automatically upload it to our website in the proper format once we approve your pull request! You are also welcome and encouraged to put your .RMd file in here too if you have any code in your tutorial so others can use it.

Sorry these instructions are so specific, but Github Pages is very picky! If these instructions don't work for you, please send an email to bayesbaes@gmail.com. If you send us your .RMd we can complete this part for you. Worst case scenario, you can upload your post as an html, but the formatting will look weird and we won't be able to fix it without going through hundreds of lines of your html code. 
