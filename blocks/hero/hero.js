export default function decorate(block) {
  const elements = block.querySelectorAll(':scope > div');
  const [title, subtitle, description, cta, image] = elements;
  console.log('elements loaded: ', elements);

  const backgroundWrapper = document.createElement('div');
  backgroundWrapper.className = 'hero-background';

  const content = document.createElement('div');
  content.className = 'hero-content';

  if (title) content.append(...title.childNodes);
  if (subtitle) subtitle.classList.add('subtitle'); content.append(...subtitle.childNodes);
  if (description) content.append(...description.childNodes);
  if (cta) content.append(...cta.childNodes);

  backgroundWrapper.append(content);
  block.textContent = '';
  block.append(backgroundWrapper);

  if (image) {
    const picture = image.querySelector('picture');
    if (picture) {
      picture.classList.add('hero-bg-image');
      block.append(picture);
    }
  }
}
