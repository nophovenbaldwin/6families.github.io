---
layout: default
title: writings
permalink: /writings/
---

<div class="home">

  <p>six families is a collection of musicians that aims to create opportunities for both performers and listeners to participate in honest, thoughtful, and compelling experiences relating to sound/silence/song.. six families was created because good music exists in all communities. we aim to equalize the presentation of worthy music (both old and new), to honor the tradition it comes from, and to create opportunity for those traditions to evolve. the organization has over a year of experience in music programming in which it has engaged audiences and artists with a unique and challenging creative music experience.

  <h1 class="page-heading">Posts</h1>

  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
      </li>
    {% endfor %}
  </ul>

</div>


