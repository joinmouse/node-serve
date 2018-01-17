const winston = require('winston')
const { Logger, transports} = winston
const logger = new Logger({
  transports: [
    new (transports.File)({
      name: 'info_logger',
      filename: 'logs/info.log',
      level: 'info'
    }),
    new (transports.File)({
      name: 'error_logger',
      filename: 'logs/error.log',
      level: 'error'
    }),
    new transports.Console({
      level: 'error'
    }),
  ]
})

logger.info('my first log with winston')
logger.error('my first error log with winston')