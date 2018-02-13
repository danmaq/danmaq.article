const gulp = require('gulp');
const frontMatter = require('gulp-front-matter');
const marked = require('gulp-marked');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');

const escapeLineBreak = require('./src/escapeLineBreak');
const translate = require('./src/translate');
const toMarkdown = require('./src/toMarkdown');
const trace = require('./src/trace');
const unEscapeLineBreak = require('./src/unEscapeLineBreak');

const SOURCES = 'posts/**/*.ja.md';

/**
 * Create translate pipeline.
 * @param {string} source Source path, or Gulp wildcard.
 * @returns {NodeJS.ReadWriteStream}
 */
const translatePipe =
  source =>
    gulp
      .src(source)
      .pipe(plumber())
      .pipe(frontMatter({ property: 'frontmatter' }))
      .pipe(marked({ xhtml: true, langPrefix: 'language-' }))
      .pipe(escapeLineBreak())
      // .pipe(translate({ from: 'ja', to: 'en' }))
      .pipe(unEscapeLineBreak())
      .pipe(toMarkdown())
      .pipe(rename((p) => {
        console.log(p);
      }));
// .pipe(trace());
// .pipe(gulp.dest('posts/en'));

gulp.task(
  'translate',
  // .src('posts/ja/blog/2017/04/25-problem-of-homebrew-cask-from-ansible.md')
  () => translatePipe(SOURCES),
);

gulp.task(
  'watch',
  () =>
    gulp
      .watch(SOURCES)
      .on('change', ({ path }) => translatePipe(path)),
);
