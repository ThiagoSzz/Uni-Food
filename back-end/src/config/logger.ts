import winston from "winston";
import colors from "colors/safe";

interface LogColors {
  [key: string]: (text: string) => string;
}

const logColors: LogColors = {
  info: colors.blue,
  warn: colors.yellow,
  error: colors.red,
};

export const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ level, message, timestamp }) => {
      const coloredLevel = logColors[level.toLowerCase()](level.toUpperCase());
      return `[${timestamp}] ${coloredLevel}: ${message}`;
    })
  ),
  transports: [new winston.transports.Console()],
});
