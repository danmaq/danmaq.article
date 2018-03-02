const Turndown = require('turndown');
const yaml = require('js-yaml');

/**
 * Convert to Markdown from HTML document.
 * @param {string} body HTML document.
 * @param {{title: string}} frontmatter Object for Frontmatter metadata.
 * @param {{from: string, to: string}} options Language translation option.
 * @returns {Promise<string>} Markdown document.
 */
const toMarkdown = async (body, frontmatter, options) => {
  const params = { codeBlockStyle: 'fenced', headingStyle: 'atx' };
  const turndown = new Turndown(params);
  const regexp = new RegExp(`.${options.from}.md`, 'g');
  const fm = `---\n${yaml.safeDump(frontmatter)}---\n\n`;
  return fm + turndown.turndown(body.replace(regexp, `.${options.to}.md`));
};

module.exports = require('./task')(toMarkdown);
