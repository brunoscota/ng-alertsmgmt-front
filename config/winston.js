const winston = require('winston');
const appRoot = require('app-root-path');
const Log2gelf = require('winston-log2gelf');

var options = {
    file: {
        level: 'info',
        filename: `${appRoot}/logs/app.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true,
    },
    gelfPro: {
        level: 'debug',
        host: '172.25.48.110',
        port: 5142,
        protocol: 'tcp'
      }    
};

var logger = winston.createLogger({
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console),
        new Log2gelf(options.gelfPro)
    ],
    exitOnError: false, // do not exit on handled exceptions
});

logger.stream = {
    write: function (message, encoding) {
        logger.info(message);
    },
};


module.exports = logger;