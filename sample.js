var redactkit = require('redactkit');
var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam\nvarius suscipit commodo. $
console.log(redactkit.redact(text));
