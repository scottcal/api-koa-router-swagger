// Import koa
const koa = require("koa")
// import koa router
const koaRouter = require("koa-router")
// import koa bodyparser
const bodyParser = require("koa-bodyparser")


//create the koa application
const app = new koa()
// create a router for building routes
const router = koaRouter()
const postsRoute = require('./routes/posts');
const timeRoute = require('./routes/time');

//swagger
const swaggerUi = require('swagger-ui-koa');
const swaggerJSDoc = require('swagger-jsdoc');
const convert = require('koa-convert');
const mount = require('koa-mount');
const options = require('./swagger-options');
const swaggerSpec = swaggerJSDoc(options);
app.use(swaggerUi.serve);
app.use(convert(mount('/swagger', swaggerUi.setup(swaggerSpec, true)))); //mount endpoint for access

// Register the bodyparser (must be before routes, or routes will run before body is parsed)
app.use(bodyParser())
// Register routes
app.use(postsRoute.routes());
app.use(timeRoute.routes());
app.use(router.allowedMethods());

// Turn on the server
app.listen(4000, () => console.log("Server Listening on Port 4000"))
