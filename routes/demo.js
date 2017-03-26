var router = require('koa-router')();

// 设定路由规则
router.get('/', function*(next) {

    var model = {
        appName: "demo",
        appFolder: "demo"
    };

    yield this.render(
        "demo/index",
        model
    );
});

router.get('/vis_timeline', function*(next) {

    var model = {};

    yield this.render(
        "demo/vis/timeline",
        model
    );
});

module.exports = router;