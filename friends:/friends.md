---
layout: paper
title: friends
permalink: /friends/
---

<h2>Friends</h2>
<ul style="list-style: none;">
{% for frnd in site.data.frnds %}
<li>
<a href="{{ frnd.link }}">
{{ frnd.name }}
</a>
</li>
{% endfor %}
</ul>