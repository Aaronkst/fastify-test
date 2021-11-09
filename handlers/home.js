const handlers = {
    home: async (req, res) => {
        res.code(200).send(req.body)
    }
}

module.exports = handlers