/**
 * Do Not Touch
 * This only Renders panel.html, in there you can point to a different js file
 */

chrome.devtools.panels.create('M11Y-Devtools', 'icon.png', '/panel.html', () =>
  console.log('')
);
