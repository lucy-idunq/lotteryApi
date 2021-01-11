const dao = require('../dao/lottery_db')

module.exports.getAlphabet = (req, res, next) => {
    try {
       dao.getAlphabet()
            .then((data) => {
                return res.status(200).json
                    ({
                        meta:{total:data[0].length},
                        payload: data[0],
                        message: "alphabets get successfully",
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