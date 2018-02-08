const gulp = require('gulp');
const frontMatter = require('gulp-front-matter');
const marked = require('gulp-marked');

const escapeLineBreak = require('./src/escapeLineBreak');
const translate = require('./src/translate');
const toMarkdown = require('./src/toMarkdown');
const trace = require('./src/trace');
const unEscapeLineBreak = require('./src/unEscapeLineBreak');

gulp.task(
  'translate',
  () =>
    gulp
      .src('posts/ja/**/*.md')
      // .src('posts/ja/blog/2017/04/25-problem-of-homebrew-cask-from-ansible.md')
      .pipe(frontMatter({ property: 'frontmatter' }))
      .pipe(marked({ xhtml: true, langPrefix: 'language-' }))
      .pipe(escapeLineBreak())
      .pipe(translate({ from: 'ja', to: 'en' }))
      .pipe(unEscapeLineBreak())
      .pipe(toMarkdown())
      .pipe(trace())
      .pipe(gulp.dest('posts/en')),
);
