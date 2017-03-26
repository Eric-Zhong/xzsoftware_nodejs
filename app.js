/**
 * 初始化一些变量
 */
var app = require('koa')(),
    koa = require('koa-router')(),
    logger = require('koa-logger'),
    json = require('koa-json'),
    views = require('koa-views'),
    onerror = require('koa-onerror'),
    Sequelize = require("sequelize"),
    config = require("./config"),
    models = require("./models");

var reids = require("./redis");

var index = require('./routes/index');
var users = require('./routes/users');
var appRoute = require('./routes/app');
var pageRoute = require('./routes/page');
var weddingcarRoute = require("./routes/weddingcar");
var ganttRoute = require("./routes/gantt");
var fitccRoute = require("./routes/fitcc");
var demoRoute = require("./routes/demo");

// global middlewares
// 定义Koa中，默认读取view文件的基础路径
app.use(views('views', {
    root: __dirname + '/views',
    default: 'ejs'
}));

app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

app.use(function*(next) {
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms);
});


// 设置哪个目录是公开目录
app.use(require('koa-static')(__dirname + '/public'));

// routes definition
koa.use('/', index.routes(), index.allowedMethods());
koa.use('/users', users.routes(), users.allowedMethods());
koa.use('/app', appRoute.routes(), appRoute.allowedMethods());
koa.use('/page', pageRoute.routes(), pageRoute.allowedMethods());
koa.use('/weddingcar', weddingcarRoute.routes(), weddingcarRoute.allowedMethods());
koa.use('/gantt', ganttRoute.routes(), ganttRoute.allowedMethods());
koa.use('/fitcc', fitccRoute.routes(), fitccRoute.allowedMethods());
koa.use('/demo', demoRoute.routes(), demoRoute.allowedMethods());

// mount root routes  
app.use(koa.routes());

app.on('error', function(err, ctx) {
    logger.error('server error', err, ctx);
});


models.sync();

module.exports = app;