const { JSDOM } = require('jsdom');

/**
 * The &lt;br /&gt; element of the part indicating the source code is
 * reverse escaped to a line break.
 * @param {string} body HTML document.
 * @returns {Promise<string>} Converted HTML document.
 */
const escapeLineBreak = async (body = '') => {
  const { document } = new JSDOM(body).window;
  Array.prototype.forEach.call(
    document.getElementsByTagName('pre'),
    (e) => { e.innerHTML = e.innerHTML.trim(); },
  );
  Array.prototype.forEach.call(
    document.getElementsByTagName('code'),
    (e) => {
      e.innerHTML = e.innerHTML
        .replace(/<br[^>]*>/gm, '\n')
        .replace(/&nbsp;&nbsp;/gm, '  ');
    },
  );
  const result =
    document
      .getElementsByTagName('body')
      .item(0)
      .innerHTML;
  return result;
};

module.exports = require('./task')(escapeLineBreak);
