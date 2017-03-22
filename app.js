/**
 * 初始化一些变量
 */
var app = require('koa')()
  , koa = require('koa-router')()
  , logger = require('koa-logger')
  , json = require('koa-json')
  , views = require('koa-views')
  , onerror = require('koa-onerror')
  , Sequelize = require("sequelize");

var index = require('./routes/index');
var users = require('./routes/users');
var appRoute = require('./routes/app');
var pageRoute = require('./routes/page');
var weddingcarRoute = require("./routes/weddingcar")

// global middlewares
// 定义Koa中，默认读取view文件的基础路径
app.use(views('views', {
  root: __dirname + '/views',
  default: 'ejs'
}));

app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

app.use(function *(next){
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

// mount root routes  
app.use(koa.routes());

app.on('error', function(err, ctx){
  logger.error('server error', err, ctx);
});


/**
 * 初始化数据库
 * 
 */
var sequelize = new Sequelize('test_db_dev', 'testuser', 'password01!', {
  host: "xuzhong.imwork.net",
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  timezone: '+08:00',
  logging: console.log
});

/**
 * 测试数据库连接用
 */
sequelize
  .authenticate()
  .then(function(err) {
    console.log('>>数据库连接：正常');
  })
  .catch(function (err) {
    console.error(">>数据库连接：异常");
    console.error(err);
  });


/**
 * 定义Model
 */
var DB = sequelize.import("./models/index");


/**
 * 同步数据库，将定义好的Model同步到数据库存表
 */
sequelize.sync({force: true}).then(function () {
  // Table created
  console.log("数据库初始化完毕");

  /**
   * 初始化一些基础数据
   */
  DB.users.create({
    username: "xuzhong",
    password: "password01!"  
  });

  DB.users.create({
    username: "admin",
    password: "admin000"  
  });


});




module.exports = app;
