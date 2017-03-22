var router = require('koa-router')();

// 设定路由规则
router.get('/', function* (next) {

    var model = {};

    yield this.render(
        "weddingcar/app",
        model
    );
});

router.get('/index', function* (next) {

    var model = {};

    yield this.render(
        "weddingcar/index",
        model
    );
});

router.get('/appointment', function* (next) {

    var model = {};

    yield this.render(
        "weddingcar/appointment",
        model
    );
});

router.get('/order/create', function* (next) {

    var model = {};

    yield this.render(
        "weddingcar/order_create",
        model
    );
});

router.get('/help', function* (next) {

    var model = {};

    yield this.render(
        "weddingcar/help",
        model
    );
});

module.exports = router;