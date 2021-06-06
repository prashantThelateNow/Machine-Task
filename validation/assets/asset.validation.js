const schema = require('./asset.schema');
const Joi = require('@hapi/joi');

module.exports = {
    addAssetValidation: async (req, res, next) => {
        try{
            if(!req.body){ throw err; }
            let asset = Joi.object().keys(schema);
            let validateArrItems = Joi.array().items(asset);
            const response = await Joi.validate(req.body, validateArrItems);
            if(response.error){ throw response; }
            // const message = { status: 0, message: 'All fields validated successfully!' }
            // res.status(200).send(message);
            next();
        }catch(err){
            console.log(err);
            const message = { status: -1, message: err.details[0].message }
            res.status(400).send(message);
        }
    }
}