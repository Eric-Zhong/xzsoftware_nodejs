var router = require('koa-router')();

// 设定路由规则
router.get('/', function*(next) {

    var model = {};

    yield this.render(
        "gantt/index",
        model
    );
});

module.exports = router;