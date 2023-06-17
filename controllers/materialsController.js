const knex = require("knex")(require("../knexfile"));

const getMaterialsWorkoder = (req,res) =>{
knex('Material')
.join('Location','Location.location_id', 'Material.location_id')
.where(' work_order_id', req.params.workOrderId)
.then((materials)=>{
   res.status(200).json(materials)
})
}


const getMaterials = (req,res) =>{
    knex('Material')
.join('Location','Location.location_id', 'Material.location_id')
.then((materials)=>{
   res.status(200).json(materials)
})
}

const updateMaterialStatus = (req,res) =>{
    knex('Material')
    .where('material_id',req.params.id)
    .update({
        status : req.body.status
    })
    .then(() =>{
        return knex('Material')
        .where('material_id',req.params.id)
    })
    .then((updatedMaterial) =>{
        res.json(updatedMaterial[0])
    })
}

module.exports = {
    getMaterialsWorkoder,
    getMaterials,
    updateMaterialStatus
}