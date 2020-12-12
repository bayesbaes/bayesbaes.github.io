---
layout: page
title: Who Are We?
permalink: /people/
---

Howdy friends, we're the Baes.

<ul>
  {% for author in site.authors %}
    <div>
      <h4>{{ author.name }}</h4>
      <h5>{{ author.position }}</h5>
      <p>{{ author.content | markdownify }}</p>
    </div>
  {% endfor %}
</ul>

