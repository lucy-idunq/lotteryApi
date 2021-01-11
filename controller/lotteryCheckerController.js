const dao = require('../dao/lottery_db')

module.exports.getLottery = (req, res, next) => {
    const query = req.query
    console.log(query,'query')
    try {
        dao.getLottery()
            .then((data) => {
                return res.status(200).json
                    ({
                        meta: { total: data[0].length },
                        payload: data[0],
                        message: "lottery get successfully",
                        links: {
                            self: req.originalUrl
                        }
                    })
            })
            .catch((err) => {
                return next({ status: 400, error: err });
            })
    } catch (error) {
        return next({ status: 500, error: error });
    }
}