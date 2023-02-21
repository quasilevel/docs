---
title: PI CLUB
layout: base.njk
---

![our club]({{ piclub }})

## Purpose of this document

Detail the purpose of this document under this heading...remove this text and write your document, making headings as may be necessary. Lastly, don’t forget to fill in the Appendix and Changelog.

## Unordered List should look like this

* Item 1
* Item 2
    * Sub-item 1
* Item 3

## Ordered List should look like this

1. Item 1
2. Item 2
    * Sub-item
3. Item 3

{% for page in collections.pages %}
-[{{ page.data.title }}]({{ page.url }})
{% endfor %}

## Tables should look like this

|Table heading 1|  Table heading 2|
|-|-|
| Table Item | Table Item |

## Appendix

Created by :  < contact email>

Date of creation: < month-name date, year :: eg. Feb 8th, 2022>

Last Modified: < month-name date, year :: eg. Feb 8th, 2022>

Version: 1.0.0

## Change log

|Change description| Changes made by |
|:--------------------|:-------------------|
| Created the first version | < contact email>
| Created the second version | < contact email>
