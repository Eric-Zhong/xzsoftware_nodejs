var router = require('koa-router')();

// 设定路由规则
router.get('/', function*(next) {

    var model = {};

    yield this.render(
        "weddingcar/app",
        model
    );
});

router.get('/index', function*(next) {

    var model = {};

    yield this.render(
        "weddingcar/index",
        model
    );
});

router.get('/appointment', function*(next) {

    var model = {};

    yield this.render(
        "weddingcar/appointment",
        model
    );
});

router.get('/order/create', function*(next) {

    var model = {};

    yield this.render(
        "weddingcar/order_create",
        model
    );
});

router.get('/help', function*(next) {

    var model = {};

    yield this.render(
        "weddingcar/help",
        model
    );
});

/**
 * 主车（驾驶员）登录后的首页
 */
router.get('/driver/index', function*(next) {

    var model = {};

    yield this.render(
        "weddingcar/driver/index",
        model
    );
});

router.get('/driver/main', function*(next) {

    var model = {};

    yield this.render(
        "weddingcar/driver/main",
        model
    );
});

router.get('/swiper', function*(next) {

    var model = {};

    yield this.render(
        "weddingcar/swiper",
        model
    );
});

/**
 * 应用底部菜单
 * footbar
 * URL:/weddingcar/footbar
 */
router.get('/footbar', function*(next) {

    var model = {};

    yield this.render(
        "weddingcar/footbar",
        model
    );
});

module.exports = router;