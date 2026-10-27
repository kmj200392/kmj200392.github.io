{% for publication in site.data.publications %}
{% assign paper_url = publication.paper_url %}{% unless paper_url contains '://' %}{% assign paper_url = paper_url | relative_url %}{% endunless %}
- [**{{ publication.title }}**]({{ paper_url }})<br>
  {{ publication.authors }}<br>
  *{{ publication.venue }}*
{% endfor %}
