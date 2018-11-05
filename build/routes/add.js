'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _express = require('express');

const router = (0, _express.Router)();

/**
 * GET home page
 */
router.get('/', (req, res) => {
  res.render('add', {
    title: 'CVCC - Quote Registry'
  });
});

exports.default = router;
//# sourceMappingURL=add.js.map
