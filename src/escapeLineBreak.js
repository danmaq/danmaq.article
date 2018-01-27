'use strict';

const { JSDOM } = require('jsdom');

/**
 * @param {string} body 
 * @returns {Promise<string>}
 */
const escapeLineBreak =
    async (body = '') => {
        const { document } = new JSDOM(body).window;
        Array.prototype.forEach.call(
            document.getElementsByTagName('code'),
            e =>
                e.innerHTML =
                e.innerHTML
                    .replace(/\n/gm, '<br />')
                    .replace(/ {2}/gm, '&nbsp;&nbsp;'));
        const result =
            document
                .getElementsByTagName('body')
                .item(0)
                .innerHTML;
        return result;
    };

module.exports = require('./task')(escapeLineBreak);