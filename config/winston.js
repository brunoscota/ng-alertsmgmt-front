const winston = require('winston');

var options = {
    console: {
        level: process.env.CONSOLE_LOGLEVEL,
        handleExceptions: true,
        json: false,
        colorize: true,
    }  
};

var logger = winston.createLogger({
    transports: [
        new winston.transports.Console(options.console)
    ],
    exitOnError: false, // do not exit on handled exceptions
});

logger.stream = {
    write: function (message, encoding) {
        logger.info(message);
    },
};


module.exports = logger;