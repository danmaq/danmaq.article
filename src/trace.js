/**
 * @param {string} body
 * @param {{title: string}} frontmatter
 * @returns {Promise<string>}
 */
const trace = async (body, frontmatter, options, name) => {
  console.debug(name);
  return body;
};

module.exports = require('./task')(trace);
