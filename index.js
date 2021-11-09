'use strict';

require('dotenv').config();
const fastify = require('fastify')({ logger: { level: 'info', prettyPrint: true }, disableRequestLogging: true });

//build server

//log requests
fastify.addHook("onRequest", (req, res, next) => {
    req.log.info({ url: req.raw.url, authorized: req.headers.authorization ? true : false }, "received request");
    next();
});

//plugins
fastify
    .register(require('fastify-formbody'))
    .register(require('fastify-express')).then(() => {
        //middlewares
        fastify.use(require('cors')());
    })

//routes
fastify
    .register(require('./routes/home'), { prefix: '/home' })

//start fastify server
fastify.listen(process.env.PORT);