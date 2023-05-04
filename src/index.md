---
title: Dashboard
layout: base.njk
---

## Purpose of this document

This document lists out all the documents created by Pi Club, related to all things Pi Club. This includes the meta documents defining Pi Club itself, and the documents related to all the projects undertaken and the events organized by the club.

### Meta 1

{% for page in collections.meta1 %}
- [{{ page.data.title }}]({{ page.url }})
  - {{ page.data.project }}
{% endfor %}

### Meta 2

{% for page in collections.meta2 %}
- [{{ page.data.title }}]({{ page.url }})
  - {{ page.data.tags }}
{% endfor %}

