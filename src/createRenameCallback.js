/**
 * @param {string} from
 * @param {string} to
 * @returns {{(p: {basename: string, dirname: string extname: string}) => void}}
 */
const createRenameCallback =
  (from, to) =>
    (p) => {
      p.extname = '.md';
      p.basename = p.basename.replace(`.${from}`, `.${to}`);
      console.warn(p.basename);
    };

module.exports = createRenameCallback;
