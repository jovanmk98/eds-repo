export default function decorate(block) {
  const title = block.querySelector('h2, strong')?.textContent || '';
  const desc = block.querySelector('p')?.textContent || '';
  const cta = block.querySelector('a');
  const img = block.querySelector('img');

  block.innerHTML = `
    <div class="hero">
      <div class="hero-content">
        <h2>${title}</h2>
        <p>${desc}</p>
        ${cta ? `<div class="hero-cta"><a href="${cta.getAttribute('href')}">${cta.textContent}</a></div>` : ''}
      </div>
      <div class="hero-image">
        ${img ? `<img src="${img.src}" alt="${img.alt || 'Hero Image'}">` : ''}
      </div>
    </div>
  `;
}
