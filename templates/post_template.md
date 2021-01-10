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
base.dir <- "/your/working/directory"
base.url <- "/"
fig.path <- "figures/your_tutorial_name/"

knitr::opts_knit$set(base.dir = base.dir, base.url = base.url)
knitr::opts_chunk$set(fig.path = fig.path) 
```

To see this file with the proper syntax, make sure to select "Raw" when viewing it. Please include all of the information listed above at the very start of any tutorial post you make in markdown, filling in the relevant info for your specific post. 

#### Front matter

This is the part inside the dashes, which is necessary for the website to read your tutorial in as a post. Keep the *layout* and *output* sections exactly as written here, then customize the *title*, *authors*, and *tags*. For the tags, you can search our site to see how we categorize our posts, or use your own tags as you see fit. We may change these as our site grows and we reorganize things. If you have more than one author on a post, add additional authors with a space and a new set of quotation marks.

#### Markdown setup

This is the part inside the backticks. This part seems weird, but it's **super** important if you have any images or figures in your markdown! When you knit your RMarkdown to a .md file, it will create a folder of images that the markdown refers to. If you don't include this setup bit, that folder will be created automatically and Github Pages won't properly reference it, so your tutorial will appear without images. To reference this folder properly, you'll need to define your base directory, base url, and figure path. Your base directory is just your working directory, which you can check with getwd() (mine all look like "C:/Users/hannah/etc/etc/etc"). Then, manually set base.url to "/". This will put a / in front of all the filepaths that your markdown references, which is important for Github Pages. Finally, you'll create the figure path, which **must** start with "figures/". You can make up a name in the "your_tutorial_name/" section and make sure to include the / at the end. Below that, you'll then use the knitr package to set the defaults for the base directory and image path.

#### Putting your files in our repo

All of that weird code will create a folder (*your_tutorial_name*) of all your figures in your working directory that is located inside a folder named *figures*. You can copy the entire folder ("your_tutorial_name") and put it in our own **figures** folder in our repo.

Then you can put your .md file in the **_posts** folder. Please follow the naming convention: YYYY-MM-DD-name-of-your-tutorial.md . Doing so will automatically upload it to our website in the proper format once we approve your pull request!

If these instructions don't work for you, please send an email to bayesbaes@gmail.com! Worst case scenario, you can upload your post as an html, but the formatting will look weird and we won't be able to fix it without going through hundreds of lines of your html code. 
