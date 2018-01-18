const Generator = require('yeoman-generator');
const fs = require('fs');
const rimraf = require('rimraf-promise');

const questions = require('./questions.js');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts)

        this.initFolderStructure = function () {
            fs.mkdirSync('./html');

            fs.mkdirSync('./src');
            fs.mkdirSync('./src/blocks');
            fs.mkdirSync('./src/includes');
            fs.mkdirSync('./src/pages');
            fs.mkdirSync('./src/scss');

            this.fs.copyTpl(this.templatePath('gulpfile.js.ejs'), this.destinationPath('./gulpfile.js'), {});
            this.fs.copyTpl(this.templatePath('.gitignore.ejs'), this.destinationPath('./.gitignore'), {});
            this.fs.copyTpl(this.templatePath('scss'), this.destinationPath('./src/scss/common'), {});
            this.fs.copyTpl(this.templatePath('pixel-glass'), this.destinationPath('./src/pixel-glass'), {});
            this.fs.copyTpl(
                this.templatePath('includes/head.pug.ejs'),
                this.destinationPath('./src/includes/head.pug'),
                { name: this.config.get('name') }
            );
        };
    }

    prompting() {
        return this.prompt(questions)
            .then((answers) => {
                this.log('Creating a package.json file');

                answers.keywords = answers.keywords
                    ? '[' + answers.keywords.split(',').map(item => `"${item.trim()}"`) + ']'
                    : '[]';

                this.fs.copyTpl(
                    this.templatePath('package.json.ejs'),
                    this.destinationPath('./package.json'),
                    answers
                );
            });
    }

    writing() {
        this.log('Creating folder structure');

        rimraf('./html')
            .then(() => rimraf('./src'))
            .then(() => {
                this.initFolderStructure()
            })
            .catch(console.error);
    }

    install() {
        this.log('Installing dependencies');

        this.npmInstall([
            'gulpjs/gulp#4.0',
            'gulp-autoprefixer',
            'gulp-concat',
            'gulp-load-plugins',
            'gulp-minify-css',
            'gulp-pug',
            'gulp-sass',
            'gulp-uglify',
            'gulp-wrap-js',
            'gulp-insert-lines',
            'del',
            'browser-sync',
            'pixel-glass'
        ], { 'save-dev': true });
    }
};
