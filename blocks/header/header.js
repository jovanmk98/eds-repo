export default function decorate(block) {
  console.log('Decorating hero block');

  // 1. Create containers for text and image
  const textDiv = document.createElement('div');
  textDiv.classList.add('hero-text');

  const imageDiv = document.createElement('div');
  imageDiv.classList.add('hero-image');

  // 2. Loop through all children of the block
  const children = [...block.children];
  const pictures = [];

  children.forEach((el) => {
    if (el.tagName.toLowerCase() === 'picture') {
      pictures.push(el);
    } else {
      textDiv.appendChild(el); // Move headings, text, and CTA link
    }
  });

  // 3. Add styling class to CTA button
  const ctaLink = textDiv.querySelector('a');
  if (ctaLink) {
    ctaLink.classList.add('hero-cta');
  }

  // 4. Append first picture to image block, hide the rest
  if (pictures.length > 0) {
    imageDiv.appendChild(pictures[0]);
    for (let i = 1; i < pictures.length; i++) {
      pictures[i].classList.add('hidden-image');
      imageDiv.appendChild(pictures[i]);
    }
  }

  // 5. Clear the block and rebuild with new structure
  block.textContent = '';
  const wrapper = document.createElement('div');
  wrapper.classList.add('hero');
  wrapper.appendChild(textDiv);
  wrapper.appendChild(imageDiv);
  block.appendChild(wrapper);
}
