(() => {
  const filters = Array.from(document.querySelectorAll('[data-project-filter]'));
  const cards = Array.from(document.querySelectorAll('[data-project-category]'));
  const count = document.querySelector('.projects-count');
  filters.forEach(button => button.addEventListener('click', () => {
    const selected = button.dataset.projectFilter;
    filters.forEach(item => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    let visible = 0;
    cards.forEach(card => {
      const show = selected === 'all' || card.dataset.projectCategory === selected;
      card.hidden = !show;
      if (show) visible++;
    });
    if (count) count.textContent = `${visible} ${visible === 1 ? 'PROJECT' : 'PROJECTS'}`;
  }));
})();
