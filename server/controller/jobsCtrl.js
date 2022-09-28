import { sequelize } from "../models/init-models"

const findAll = async (req,res)=>{
    try {
        const job = await req.context.models.jobs.findAll()
        return res.send(job)
    } catch (error) {
        return res.status(404).send(error)
    }
}
const findOne = async (req,res)=>{
    try {
        const job = await req.context.models.jobs.findOne({
            where:{job_id : req.params.id}
        })
        return res.send(job)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const create = async (req,res)=>{
    try {
                    const job = await req.context.models.jobs.create({
job_id : req.body.job_id,
            job_name : req.body.job_name,
            region_id : req.body.region_id
        })
        return res.send(job)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const update = async (req,res)=>{
    console.log();
    try {
        const job = await req.context.models.jobs.update({
            job_name : req.body.job_name,
            region_id : req.body.region_id
        },{ returning : true , where:{job_id : req.params.id}})
        return res.send(job)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const deleted = async (req,res)=>{
    try {
        const job = await req.context.models.jobs.destroy({
            where:{job_id : req.params.id}
        })
        return res.send('delete '+job+' rows')
    } catch (error) {
        return res.status(404).send(error)
    }
}

const querySQL = async(req,res)=>{
    try {
        await sequelize.query('SELECT * from jobs where job_id = :jobId',
        {replacements : {jobId : req.params.id},type : sequelize.QueryTypes.SELECT})
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