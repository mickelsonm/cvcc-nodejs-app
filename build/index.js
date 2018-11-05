'use strict';

var _address = require('address');

var _address2 = _interopRequireDefault(_address);

var _browserSync = require('browser-sync');

var _browserSync2 = _interopRequireDefault(_browserSync);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _config = require('./config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

let localUrlForTerminal = `http://${_config2.default.server.host}:${
  _config2.default.server.port
}/`;
let lanUrlForTerminal = `http://${_config2.default.server.host}:${
  _config2.default.server.port
}/`;
if (
  _config2.default.server.host === 'localhost' &&
  _config2.default.isDevelopment
) {
  lanUrlForTerminal = `http://${_address2.default.ip()}:${
    _config2.default.server.port
  }/`;
}

_app2.default.listen(_config2.default.server.port, () => {
  // If in local environment override
  if (_config2.default.isDevelopment) {
    return (0, _browserSync2.default)({
      files: ['assets/**/*.{html,js,css}', 'views/**/*.{hbs}'],
      online: true,
      open: false,
      port: _config2.default.server.port + 1,
      proxy: 'localhost:' + _config2.default.server.port,
      ui: false
    });
  }

  // eslint-disable-next-line no-console
  console.log(`Server started:
------------------------------------
    Local: ${localUrlForTerminal}
 External: ${lanUrlForTerminal}
------------------------------------
`);
});
//# sourceMappingURL=index.js.map
