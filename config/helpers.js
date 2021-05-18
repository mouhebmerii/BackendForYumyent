const MySqli = require('mysqli');
let conn = new MySqli({
 host: 'localhost',
    post: 3306,
    user: 'superadmin',
    passwd: '12345',
    db: 'restaurant'
});
let db = conn.emit(false, '');

module.exports = {
    database: db
};
