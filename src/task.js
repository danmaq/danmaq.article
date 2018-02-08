const through = require('through2');

/**
 * @param {{(body: string, frontmatter: Object) => Promise<string>}} action
 * @returns {{(options: Object) => void}}
 */
const task =
  action =>
    (options = {}) =>
      through.obj(async (file, encoding, done) => {
        if (file.isBuffer()) {
          const { contents, frontmatter } = file;
          const body = contents.toString(encoding);
          const result = await action(body, frontmatter, options, file.history[0]);
          file.contents = new Buffer(result);
        } else if (file.isStream()) {
          throw new Error('Not implemented');
        }
        done(null, file);
      });

module.exports = task;
