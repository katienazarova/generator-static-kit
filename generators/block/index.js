const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts)

        this.option('name', {
            type: String,
            default: 'block'
        });

        this.option('tag', {
            type: String,
            default: 'div'
        });
    }

    writing() {
        this.log('Creating block');

        this.fs.copyTpl(
            this.templatePath('block.pug.ejs'),
            this.destinationPath(`./src/blocks/${this.options.name}/${this.options.name}.pug`),
            { name: this.options.name, tag: this.options.tag }
        );

        this.fs.copyTpl(
            this.templatePath('block.scss.ejs'),
            this.destinationPath(`./src/blocks/${this.options.name}/${this.options.name}.scss`),
            { name: this.options.name }
        );
    }
};
