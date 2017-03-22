var router = require('koa-router')();

// 设定路由规则
// page
router.get('/', function *(next) {
  // 输出内容
  yield this.render('pages/index', {
    title: 'Hello World Koa!'
  });
});

// page/
router.get('/appointment', function *(next) {
  // 输出内容
  yield this.render('pages/appointment', {
    title: 'Hello World Koa!'
  });
});

// page/
router.get('/appointment/contract', function *(next) {
  // 输出内容
  yield this.render('pages/appointment_contract');
});

// page/
router.get('/help', function *(next) {
  // 输出内容
  yield this.render('pages/help');
});

module.exports = router;