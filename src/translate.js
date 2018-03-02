require('dotenv').config();
const Translate = require('@google-cloud/translate');

/**
 * Translate document with Google Translate.
 * @param {string} body HTML document.
 * @param {{title: string}} frontmatter Object for Frontmatter metadata.
 * @param {{from: string, to: string}} options Options for translation.
 * @returns {Promise<string>} Translated HTML document.
 */
const translate = async (body, frontmatter, options) => {
  const tr = new Translate({ projectId: 'danmaq-article' });
  const hparams = { format: 'html', ...options };
  const tparams = { format: 'text', ...options };
  while (true) {
    try {
      const [title] = await tr.translate(frontmatter.title, tparams);
      frontmatter.title = title;
      return (await tr.translate(body, hparams))[0];
    } catch (e) {
      console.warn(e);
      console.info('Retry after 100 sec...');
      await new Promise(r => setTimeout(100000, r));
    }
  }
};

module.exports = require('./task')(translate);
