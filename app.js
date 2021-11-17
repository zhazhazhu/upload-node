const Koa = require('koa');
const serve = require('koa-static');

const app = new Koa();

app.use(serve(__dirname + "/upload"));

app.listen(3100);
