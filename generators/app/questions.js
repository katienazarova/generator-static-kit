module.exports = [{
    type    : 'input',
    name    : 'name',
    message : 'Your project name',
    default : process.cwd().split('/').pop(),
    store   : true
}, {
    type    : 'input',
    name    : 'version',
    message : 'Version',
    default : '1.0.0'
}, {
    type    : 'input',
    name    : 'description',
    message : 'Description',
    default : ''
}, {
    type    : 'input',
    name    : 'entry_point',
    message : 'Entry point',
    default : ''
}, {
    type    : 'input',
    name    : 'test_command',
    message : 'Test command',
    default : 'echo \"Error: no test specified\" && exit 1'
}, {
    type    : 'input',
    name    : 'git_repository',
    message : 'Git repository',
    default : ''
}, {
    type    : 'input',
    name    : 'keywords',
    message : 'Keywords',
    default : ''
}, {
    type    : 'input',
    name    : 'author',
    message : 'Author',
    default : ''
}, {
    type    : 'input',
    name    : 'license',
    message : 'License',
    default : 'ISC'
}];
