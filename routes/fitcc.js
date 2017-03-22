var router = require('koa-router')();

var appName = "fitcc";

// 设定路由规则
router.get('/', function*(next) {

    var model = {
        appName: "石川岛",
        appFolder: appName
    };

    yield this.render(
        "fitcc/index",
        model
    );
});

router.get('/home', function*(next) {

    var model = {
        appName: appName
    };

    yield this.render(
        "fitcc/home",
        model
    );
});

router.get('/tasks', function*(next) {

    var model = {
        appName: appName
    };

    yield this.render(
        "fitcc/tasks",
        model
    );
});

router.get('/pending', function*(next) {

    var model = {
        appName: appName
    };

    yield this.render(
        "fitcc/pending",
        model
    );
});

router.get('/setting', function*(next) {

    var model = {
        appName: appName
    };

    yield this.render(
        "fitcc/setting",
        model
    );
});

module.exports = router;