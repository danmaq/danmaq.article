const path = require('path');
const gulp = require('gulp');
const debug = require('gulp-debug');
const frontMatter = require('gulp-front-matter');
const marked = require('gulp-marked');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');

const escapeLineBreak = require('./src/escapeLineBreak');
const translate = require('./src/translate');
const toMarkdown = require('./src/toMarkdown');
const unEscapeLineBreak = require('./src/unEscapeLineBreak');

const SOURCES = 'posts/**/*.ja.md';

const getTranslateedFile = filename => filename.replace(/\.ja/, '.en');

/**
 * Create translate pipeline.
 * @param {string} source Source path, or Gulp wildcard.
 * @param {string} [dest] Dest path.
 * @returns {NodeJS.ReadWriteStream}
 */
const translatePipe =
  (source, dest) => gulp
    .src(source)
    .pipe(plumber())
    .pipe(frontMatter({ property: 'frontmatter' }))
    .pipe(marked({ xhtml: true, langPrefix: 'language-' }))
    .pipe(escapeLineBreak())
    .pipe(translate({ from: 'ja', to: 'en' }))
    .pipe(unEscapeLineBreak())
    .pipe(toMarkdown())
    .pipe(rename((p) => {
      p.basename = getTranslateedFile(p.basename);
      p.extname = '.md';
    }))
    .pipe(debug())
    .pipe(gulp.dest(dest || path.dirname(source)));

gulp.task(
  'translate:all',
  () => translatePipe(SOURCES),
);

gulp.task(
  'watch',
  () =>
    gulp
      .watch(SOURCES)
      .on('change', ({ path }) => translatePipe(path)),
);
