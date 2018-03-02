const path = require('path');
const gulp = require('gulp');
const debug = require('gulp-debug');
const frontMatter = require('gulp-front-matter');
const marked = require('gulp-marked');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');

const createRenameCallback = require('./src/createRenameCallback');
const escapeLineBreak = require('./src/escapeLineBreak');
const translate = require('./src/translate');
const toMarkdown = require('./src/toMarkdown');
const unEscapeLineBreak = require('./src/unEscapeLineBreak');

const SOURCES = 'posts/**/*.ja.md';

/**
 * Create translate pipeline.
 * @param {string} source Source path, or Gulp wildcard.
 * @returns {NodeJS.ReadWriteStream}
 */
const translatePipe =
  (source, from, to) => gulp
    .src(source)
    .pipe(plumber())
    .pipe(frontMatter({ property: 'frontmatter' }))
    .pipe(marked({ xhtml: true, langPrefix: 'language-' }))
    .pipe(escapeLineBreak())
    .pipe(translate({ from, to }))
    .pipe(unEscapeLineBreak())
    .pipe(toMarkdown())
    .pipe(rename(createRenameCallback(from, to)))
    .pipe(debug())
    .pipe(gulp.dest(path.dirname(source)));

gulp.task(
  'translate',
  () => {
    gulp.src(SOURCES)
      .pipe(debug());
  },
);

gulp.task(
  'translate:all',
  () => translatePipe(SOURCES, 'ja', 'en'),
);

gulp.task(
  'watch',
  () =>
    gulp
      .watch(SOURCES)
      .on('change', ({ path: p }) => translatePipe(p, 'ja', 'en')),
);
