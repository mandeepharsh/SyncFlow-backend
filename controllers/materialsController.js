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
        status : req.body.status,
        receive_date : new Date()
    })
    .then(() =>{
        return knex('Material')
        .where('material_id',req.params.id)
    })
    .then((updatedMaterial) =>{
        res.json(updatedMaterial[0])
    })
}

const updateMaterialLocation = (req, res) => {
    knex('Material')
      .where('material_number', req.params.id)
      .update({
        location_id: req.body.location
      })
      .then(() => {
        return knex('Material')
          .where('material_number', req.params.id)
          .then((result) => {
            if (result.length === 0) {
              throw new Error('Material not found');
            }
            console.log(result);
            res.status(200).json(result[0]);
          });
      })
      .catch((err) => {
        console.error(err); // Log the error for debugging purposes
  
        res.status(500).json({
          message: 'Internal server error'
        });
      });
  };



module.exports = {
    getMaterialsWorkoder,
    getMaterials,
    updateMaterialStatus,
    updateMaterialLocation
}