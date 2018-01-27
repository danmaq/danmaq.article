'use strict';

const Turndown = require('turndown');
const yaml = require('js-yaml');

/**
 * @param {string} body 
 * @param {{title: string}} frontmatter
 * @returns {Promise<string>}
 */
const toMarkdown =
    async (body, frontmatter) => {
        const params = { codeBlockStyle: 'fenced', headingStyle: 'atx' };
        const turndown = new Turndown(params);
        const result = turndown.turndown(body);
        const fm = `---\n${yaml.safeDump(frontmatter)}---\n\n`;
        return fm + result;
    };

module.exports = require('./task')(toMarkdown);