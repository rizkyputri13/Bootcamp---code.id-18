import { sequelize } from "../models/init-models"

const findAll = async (req,res)=>{
    try {
        const location = await req.context.models.locations.findAll()
        return res.send(location)
    } catch (error) {
        return res.status(404).send(error)
    }
}
const findOne = async (req,res)=>{
    try {
        const location = await req.context.models.locations.findOne({
            where:{location_id : req.params.id}
        })
        return res.send(location)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const create = async (req,res)=>{
    try {
        const location = await req.context.models.locations.create({
            location_id : req.body.location_id,
            location_name : req.body.location_name,
            region_id : req.body.region_id
        })
        return res.send(location)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const update = async (req,res)=>{
    console.log();
    try {
        const location = await req.context.models.locations.update({
            location_name : req.body.location_name,
            region_id : req.body.region_id
        },{ returning : true , where:{location_id : req.params.id}})
        return res.send(location)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const deleted = async (req,res)=>{
    try {
        const location = await req.context.models.locations.destroy({
            where:{location_id : req.params.id}
        })
        return res.send('delete '+location+' rows')
    } catch (error) {
        return res.status(404).send(error)
    }
}

const querySQL = async(req,res)=>{
    try {
        await sequelize.query('SELECT * from locations where location_id = :locationId',
        {replacements : {locationId : req.params.id},type : sequelize.QueryTypes.SELECT})
        .then(result =>{
            return res.send(result)
        })
    } catch (error) {
        return res.status(404).send(error)
    }
}

export default {
    findAll,
    findOne,
    create,
    update,
    deleted,
    querySQL
}