---
layout: page
title: frnds & nghbrs
permalink: /frndsNnghbrs/
---

<ul style="list-style: none;">
{% for frnd in site.data.frnds %}
  <li>
    <a href="{{ frnd.link }}">
      {{ frnd.name }}
    </a>
  </li>
{% endfor %}
</ul>