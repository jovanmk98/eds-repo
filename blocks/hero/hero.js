export default function decorate(block) {
  // 1. Find the default content wrapper inside the hero block
  const wrapper = block.querySelector('.default-content-wrapper');
  if (!wrapper) return; // Exit if no default content found

  // 2. Create containers for text and image
  const textDiv = document.createElement('div');
  textDiv.classList.add('hero-text');
  const imageDiv = document.createElement('div');
  imageDiv.classList.add('hero-image');

  // 3. Sort child elements into text vs. images
  const children = [...wrapper.children];
  const pictures = [];  // to collect <picture> elements (images)
  children.forEach((el) => {
    if (el.tagName.toLowerCase() === 'picture') {
      pictures.push(el);
    } else {
      textDiv.appendChild(el); // move heading, paragraph, link, etc. into text container
    }
  });

  // If there's a CTA link inside text, add a class for styling
  const ctaLink = textDiv.querySelector('a');
  if (ctaLink) {
    ctaLink.classList.add('hero-cta');
  }

  // 4. Append the first image to the image container, hide others
  if (pictures.length > 0) {
    imageDiv.appendChild(pictures[0]); // first image stays visible
    for (let i = 1; i < pictures.length; i++) {
      pictures[i].classList.add('hidden-image'); // mark others as hidden
      imageDiv.appendChild(pictures[i]);         // keep them in DOM (appended but hidden)
    }
  }

  // 5. Remove the old wrapper and append new containers
  wrapper.remove();                     // remove empty default-content-wrapper
  block.appendChild(textDiv);
  block.appendChild(imageDiv);
}
