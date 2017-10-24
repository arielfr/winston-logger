/**
 * Created by arey on 8/24/17.
 */
const winston = require('winston');
const { LOG_LEVEL } = process.env;

const defaultLogLevel = 'info';
const logMethods = [
  'info', 'warn', 'error',
  'verbose', 'debug', 'silly',
];

module.exports = (name) => {
  const logger = new winston.Logger({
    level: LOG_LEVEL || defaultLogLevel,
    exitOnError: false,
    transports: [
      new winston.transports.Console({
        timestamp: true,
        handleExceptions: true,
        humanReadableUnhandledException: true,
      }),
    ],
  });

  logMethods.forEach((method) => {
    const oldMethod = logger[method];

    logger[method] = function (msg, tags = {}) {
      if (this.name) {
        tags.name = this.name;
      }
      tags.level = method.toUpperCase();
      oldMethod(`${msg} [from: ${name}]`, tags);
    };
  });

  return logger;
};