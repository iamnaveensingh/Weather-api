import winston from "winston";

const logger = winston.createLogger({
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "api.log" }),
  ],
});

export default logger;
