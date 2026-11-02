const $ = (q) => [...document.querySelectorAll(q)];
const closeAll = () => { $('.menu, .sheet').forEach(m => m.hidden = true); $('[aria-controls]').forEach(b => b.setAttribute('aria-expanded', 'false')); document.documentElement.classList.remove('lock'); };
$('[aria-controls]').forEach(b => b.addEventListener('click', e => {
  e.stopPropagation();
  const m = document.getElementById(b.getAttribute('aria-controls')), open = m.hidden;
  closeAll(); m.hidden = !open; b.setAttribute('aria-expanded', open);
  document.documentElement.classList.toggle('lock', open && m.id === 'm-sheet');
}));
document.addEventListener('click', closeAll);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAll(); });

$('.thread').forEach(t => [...t.children].forEach((c, i) => c.style.setProperty('--d', i + 2)));
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .15 });
$('.intro, .win, .card, .plan, .entry, .cat, .chips, .loop, .thread > *, .cta h2, .cta .acts, .qr').forEach(el => { el.setAttribute('data-r', ''); io.observe(el); });
