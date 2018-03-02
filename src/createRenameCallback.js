/**
 * Rename dest filename.
 * @param {string} from From language.
 * @param {string} to TO language.
 * @returns {{(p: {basename: string, dirname: string extname: string}) => void}} Callback for gulp-rename.
 */
const createRenameCallback =
  (from, to) =>
    (p) => {
      p.extname = '.md';
      p.basename = p.basename.replace(`.${from}`, `.${to}`);
    };

module.exports = createRenameCallback;
