const Joi = require('@hapi/joi');

const schema = {
    assetCategoryId : Joi.number().required(),
    assetTypeId : Joi.number().required(),
    assetNumber : Joi.string().max(30).required(),
    manufacturerName : Joi.string().max(50).required(),
    manufacturerSerialNo : Joi.string().max(50).required(),
    buildYear : Joi.number().required(),
    grossWeight : Joi.number().precision(2).required(),
    tareWeight : Joi.number().precision(2).required(),
    netWeight : Joi.number().precision(2).required(),
    ownershipType : Joi.string().max(20).required(),
    leaseId : Joi.number().default(null),
    ownershipDate : Joi.date().raw().required(),
    locationId : Joi.number().default(null),
    depotId : Joi.number().required(),
    assetStatusId : Joi.number().required(),
    firstHydroTestDate: Joi.date().raw().required(),
    lastHydroTestDate : Joi.date().raw().required(),
    nextTestDate: Joi.date().raw().required()
}

module.exports = schema