
const {sequelize, db} = require('../models/dbCon');
const Assets = db.assets;

//getAssetCallback method definition
let getAssetCallback = async (req, res) => {
    // const res = await Assets.create({});
    // console.log(res.dataValues);
    try{
        let inserted_records = [];
        let failed_records = [];
        if(!req.body){ throw res; }
        console.log('JSON Payload',req.body);
        const response = await Assets.bulkCreate(req.body, {returning: true, transaction: t});
        console.log('Bulk response', response);
        if(response.dataValues){ 
            await t.commit();
            inserted_records.push(response.dataValues);
        }else{
            await t.rollback();
            failed_records.push(response.dataValues);
        }

        const _responsedata = {
            totalData: `${req.body.length}`,
            rejectionDataLength: `${failed_records.length}`,
            validatedDataLength: `${inserted_records.length}`,
            rejectionData: `${failed_records}`,
            validatedData: `${inserted_records}`
        }

       res.status(200).send({status: 0, _responsedata});

    }catch(error){
        console.log('controller error',error);
        const _errmessage = error ? error : 'Something went wrong!';
        res.status(400).send({ status: -1, statusDes: _errmessage});
    }
}

module.exports = getAssetCallback