var router = require('koa-router')();

// 设定路由规则
router.get('/', function *(next) {
  yield this.render('app', {
    title: 'Hello World Koa!'
  });
});

router.get('/home', function *(next) {
  yield this.render('app', {
    title: 'Hello World Koa!'
  });
});

module.exports = router;
