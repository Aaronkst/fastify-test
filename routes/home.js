const { auth } = require('../middlewares/auth');
const { home } = require('../handlers/home')

const routes = async(fastify) => {
    fastify.route({
        method: 'POST',
        url: '/',
        schema: {
            body: {
                type: 'object',
                additionalProperties: false,
                properties: {
                    name: { type: 'string' },
                    excitement: { type: 'integer'}
                },
                required: [ 'name', 'excitement' ]
            }
        },
        onRequest: auth,
        handler: home
    }),
    fastify.route({
        method: 'GET',
        url: '/:name',
        handler: function (req, res) {
            return res.send(req.params.name)
        }
    })
};

module.exports = routes