'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _hbs = require('hbs');

var _hbs2 = _interopRequireDefault(_hbs);

var _handlebarsLayouts = require('handlebars-layouts');

var _handlebarsLayouts2 = _interopRequireDefault(_handlebarsLayouts);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

var _add = require('./routes/add');

var _add2 = _interopRequireDefault(_add);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const app = (0, _express2.default)();
app.disable('x-powered-by');

// view engine setup
_hbs2.default.registerHelper(
  (0, _handlebarsLayouts2.default)(_hbs2.default.handlebars)
);
const mainLayout = _fs2.default.readFileSync(
  _path2.default.join(__dirname, '../views/layouts/main.hbs'),
  'utf-8'
);

_hbs2.default.registerPartial('main', mainLayout);
app.set('views', _path2.default.join(__dirname, '../views'));
app.set('view engine', 'hbs');
app.set('view options', {
  layout: false
});
app.engine('html', _hbs2.default.__express);

app.use(
  (0, _morgan2.default)('dev', {
    skip: () => app.get('env') === 'test'
  })
);
app.use(_bodyParser2.default.json());
app.use(
  _bodyParser2.default.urlencoded({
    extended: true
  })
);
app.use(
  '/assets',
  _express2.default.static(_path2.default.join(__dirname, '../assets'))
);
app.use(
  '/assets/lib/jquery',
  _express2.default.static(
    _path2.default.join(__dirname, '../node_modules/jquery/dist/')
  )
);
app.use(
  '/assets/lib/bootstrap',
  _express2.default.static(
    _path2.default.join(__dirname, '../node_modules/bootstrap/dist')
  )
);

// Routes
app.use('/', _index2.default);
app.use('/add', _add2.default);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(err.status || 500).render('error', {
    message: err.message
  });
});

exports.default = app;
//# sourceMappingURL=app.js.map
