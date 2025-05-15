export default function decorate(block) {
  const elements = block.querySelectorAll(':scope > div');
  const [title, subtitle, description, cta, image] = elements;

  const layout = document.createElement('div');
  layout.className = 'hero-innerjovan';

  const text = document.createElement('div');
  text.className = 'hero-text';

  if (title) text.append(...title.childNodes);
  if (subtitle) subtitle.classList.add('subtitle'); text.append(...subtitle.childNodes);
  if (description) text.append(...description.childNodes);
  if (cta) text.append(...cta.childNodes);

  const visual = document.createElement('div');
  visual.className = 'hero-image';
  if (image) visual.append(...image.childNodes);

  layout.append(text, visual);

  block.textContent = '';
  block.append(layout);
}
