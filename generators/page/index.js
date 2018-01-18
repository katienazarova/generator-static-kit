const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts)

        this.option('name', {
            type: String,
            default: 'index'
        });
    }

    writing() {
        this.log('Creating page');

        this.fs.copyTpl(
            this.templatePath('index.pug.ejs'),
            this.destinationPath(`./src/pages/${this.options.name}.pug`),
            {}
        );
    }
};
