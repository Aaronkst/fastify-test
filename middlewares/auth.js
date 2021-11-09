const middlewares = {
    auth: async (req, res, next) => {
        if(!req.headers.authorization) return res.code(403).send('Forbidden');
        next();
    }
}

module.exports = middlewares