const dao = require('../dao/lottery_db')

module.exports.getTimes = (req, res, next) => {
    try {
       dao.getTimes()
            .then((data) => {
                return res.status(200).json
                    ({
                        meta:{total:data[0].length},
                        payload: data[0],
                        message: "Times get successfully",
                        links:{
                            self:req.originalUrl
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