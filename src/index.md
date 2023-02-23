---
title: Dashboard
layout: base.njk
---

## Purpose of this document
This document lists out all the documents created by Pi Club, related to all things Pi Club.
This includes the meta documents defining Pi Club itself, and the documents related to all the projects undertaken and the events organized by the club.

## Meta Documents
{% for page in collections.all %}
- [Pi Club - {{ page.data.title }}]({{ page.url }})
{% endfor %}
