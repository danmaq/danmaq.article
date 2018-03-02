const through = require('through2');

/**
 * Create task pipe for Gulp.
 * @param {{(body: string, frontmatter: Object) => Promise<string>}} action Custom action.
 * @returns {{(options: Object) => void}} Task function for Gulp pipe.
 */
const task = action =>
  (options = {}) =>
    through.obj(async (file, encoding, done) => {
      if (file.isBuffer()) {
        const { contents, frontmatter } = file;
        const body = contents.toString(encoding);
        const result = await action(body, frontmatter, options, file.history[0]);
        file.contents = Buffer.from(result, 'utf8');
      } else if (file.isStream()) {
        throw new Error('Not implemented');
      }
      done(null, file);
    });

module.exports = task;
