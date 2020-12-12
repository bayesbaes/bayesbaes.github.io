---
layout: page
title: Who Are We?
permalink: /people/
---

Howdy friends, we're the Baes.

<div class = "row">
  <div class = "col-6">
    <ul>
      {% for author in site.authors %}
          {% assign mod = forloop.index | modulo: 2 %}
          {% if mod == 0 %}
        <div>
           <h4>{{ author.name }}</h4>
            <h5>{{ author.position }}</h5>
            <p>{{ author.content | markdownify }}</p>
        </div>
      {% endif %}
      {% endfor %}
    </ul>
  </div>
  <div class = "col-6">
    <ul>
      {% for author in site.authors %}
        <div>
           <h4>{{ author.name }}</h4>
            <h5>{{ author.position }}</h5>
            <p>{{ author.content | markdownify }}</p>
        </div>
      {% endfor %}
    </ul>
   </div> 
</div>
`
