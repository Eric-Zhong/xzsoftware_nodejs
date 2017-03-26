const db = require('../db');

module.exports = db.defineModel('logs', {
    category: db.STRING(50),
    message: db.STRING(100),
    app: db.STRING(50),
    module: db.STRING(50)
});