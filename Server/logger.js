const log4js = require('log4js');
log4js.configure({
    appenders: { NGMBack: { type: 'stdout' } },
    categories: { default: { appenders: ['NGMBack'], level: 'debug' } }
});

const logger = log4js.getLogger('NGMBack');

module.exports = logger;