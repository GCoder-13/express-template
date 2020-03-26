import { createLogger, transports, format, config } from 'winston';

export default createLogger({
  level: process.env.LOGGING_LEVEL || 'silly',
  levels: config.npm.levels,
  format: format.combine(
    format.colorize(),
    format.splat(),
    format.simple(),
  ),
  transports: [
    new transports.Console(),
  ],
});
