# Minjae Kim — Academic Homepage

Personal academic homepage based on [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io), customized as a lightweight Jekyll website.

## Local preview

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://127.0.0.1:4000`.

## Notes

- Home content: `_pages/about.md`
- Header navigation: `_data/navigation.yml` and `_includes/header.html`
- Publications: `_data/publications.yml` supplies both the Home list and `_pages/publication.html`. Add a paper once here, including its figure and alternative text.
- Projects: `_data/projects.json` supplies the overview and individual project pages in `_pages/` using `_layouts/project.html`.
- Activities: `_pages/etc.html`. Teaching & Mentoring and Student Council link to their respective websites.
- Profile/site metadata: `_config.yml`
- Styling: `assets/css/main-v2.css`
- Based on AcadHomepage (MIT License).

## Publication figures

- `assets/images/publications/memrefine.png`: Figure 1 from [MemRefine](https://arxiv.org/html/2606.13177v1), the original `concept_fig.png`.
- `assets/images/publications/rag-graph-rag.png`: Figure 2 (system architecture), extracted from page 4 of the existing `pdfs/HCLT_논문.pdf`.
- The figures link to their full-size image. Authors, titles, and venues are shared with the Home publication list.
