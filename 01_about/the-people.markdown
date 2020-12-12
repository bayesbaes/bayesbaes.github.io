---
layout: page
title: Who Are We?
permalink: /people/
---

Howdy friends, we're the Baes.

You can find the source code for Bayes' Baes on GitHub:
[bayesbaes](https://github.com/bayesbaes/bayesbaes.github.io)

Or you can find the Baes on Github and at their personal sites:

[Helen's Github](https://github.com/helenfyan) /
[Helen's Personal Site](https://helenfyan.weebly.com) /
[Hannah's Github](https://github.com/hannahvwatkins) /
[Hannah's Personal Site](https://hannahvwatkins.weebly.com)

<ul>
  {% for author in site.authors %}
    <li>
      <h2>{{ author.name }}</h2>
      <h3>{{ author.position }}</h3>
      <p>{{ author.content | markdownify }}</p>
    </li>
  {% endfor %}
</ul>

