---
layout: page
title: Who Are We?
permalink: /people/
---
<h2>Meet the team!</h2>
Bayes' Baes is a resource run by and for biologists. Collaboration is the key to our success - if you'd like to contribute to this work (through writing tutorials, editing, etc.), please <a href="mailto:bayesbaes@gmail.com">get in touch</a>! You can learn more about how to contribute to this project on our <a href="https://github.com/bayesbaes/bayesbaes.github.io/tree/main/templates">Github</a>.

<h3>The Founders</h3>
<div class = "row">
  <div class = "col-6">
    <ul>
      {% for author in site.authors %}
          {% assign mod = forloop.index | modulo: 2 %}
          {% if mod != 0 %}
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
</div>
<h3>Guest Baes</h3>
<div class = "row">
    <ul>
      {% for author in site.authors %}
          {% assign mod = forloop.index %}
          {% if mod > 2 %}
        <div>
           <h4>{{ author.name }}</h4>
            <h5>{{ author.position }}</h5>
            <p>{{ author.content | markdownify }}</p>
        </div>
      {% endif %}
      {% endfor %}
    </ul>
</div>
