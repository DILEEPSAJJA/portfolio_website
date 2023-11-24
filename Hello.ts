const html = require('./sample.html');

export function getHtml() {
  return `
    <section class="freelancer">
      <div id="header">
        ${html}
      </div>
    </section>
  `;
}
