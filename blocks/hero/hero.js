export default function decorate(block) {
  console.log("BLOCK", block);
  const elements = block.querySelectorAll(':scope > div');

  const [title, subtitle, description, cta, image] = elements;

  const heroWrapper = document.createElement('div');
heroWrapper.className = 'hero-inner';

  console.log("TITLE", title);
    console.log("elements", elements);
  const textContainer = document.createElement('div');
  textContainer.className = 'hero-text';

  if (title) textContainer.append(title);
  if (subtitle) textContainer.append(subtitle);
  if (description) textContainer.append(description);
  if (cta) textContainer.append(cta);

  const imageContainer = document.createElement('div');
  imageContainer.className = 'hero-image';
  if (image) imageContainer.append(image);

  heroWrapper.append(textContainer, imageContainer);

  block.textContent = '';
  block.append(heroWrapper);
} 