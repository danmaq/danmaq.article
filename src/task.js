'use strict';

const through = require('through2');

module.exports =
    (action = (async (body = '', frontmatter = {}) => body)) =>
        (options = {}) =>
            through.obj(
                async (file, encoding, done) => {
                    if (file.isBuffer()) {
                        const body = file.contents.toString(encoding);
                        const frontmatter = file.frontmatter;
                        const result = await action(body, frontmatter, options, file.history[0]);
                        file.contents = new Buffer(result);
                    }
                    else if (file.isStream()) {
                        throw new Error('Not implemented');
                    }
                    done(null, file);
                });
