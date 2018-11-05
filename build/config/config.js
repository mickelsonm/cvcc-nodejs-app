'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

require('dotenv/config');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// Check for required env variables and their types.
const envVarsSchema = _joi2.default
  .object({
    NODE_ENV: _joi2.default
      .string()
      .valid(['development', 'production', 'test', 'provision'])
      .required(),
    PORT: _joi2.default.number().required(),
    HOST: _joi2.default
      .string()
      .hostname()
      .trim()
      .default('localhost')
  })
  .required();

// Load environment variables from the `.env` file.

const { error, value: envVars } = _joi2.default.validate(
  process.env,
  envVarsSchema,
  {
    abortEarly: false,
    convert: true,
    allowUnknown: true
  }
);
if (error) {
  throw new Error(`Environment variables validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
  isTest: envVars.NODE_ENV === 'test',
  isDevelopment: envVars.NODE_ENV === 'development',
  logger: {
    level: envVars.LOGGER_LEVEL,
    enabled: envVars.LOGGER_ENABLED
  },
  server: {
    port: envVars.PORT,
    host: envVars.HOST
    // ...
  }
};

exports.default = config;
//# sourceMappingURL=config.js.map
