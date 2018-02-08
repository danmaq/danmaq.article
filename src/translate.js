require('dotenv').config();
const Translate = require('@google-cloud/translate');

/**
 * @param {string} body
 * @param {{title: string}} frontmatter
 * @returns {Promise<string>}
 */
const translate =
  async (body, frontmatter, options) => {
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
