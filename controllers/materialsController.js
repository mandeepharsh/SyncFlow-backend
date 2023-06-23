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
            res.status(200).json(result[0]);
          });
      })
      .catch(() => {
  
        res.status(500).json({
          message: 'Internal server error'
        });
      });
  };


const updateMaterialQuantity = async (req, res) => {
  const { quantity } = req.body;

  knex('Material')
    .where('material_id',req.params.id)
    .then((result) =>{
      if (result.length === 0) {
        return res.status(404).send('Material not found');
      }

      let material = result[0];
      material.quantity -= quantity;

      if (material.quantity <= 0) {
        return knex('Material').where('material_id',req.params.id).del();
      } else {
        return knex('Material').where('material_id',req.params.id).update({ quantity: material.quantity });
      }
    }).then(() =>{
      return knex('Material').where('material_id',req.params.id)
    }).then((result) =>{
      if (result.length === 0) {
        res.status(200).send('Material successfully deleted');
      } else {
        res.json(result);
      }
    })
    .catch((err) =>{
      res.status(500).json({
        "msg": err
      });
    });
};

module.exports = {
    getMaterialsWorkoder,
    getMaterials,
    updateMaterialStatus,
    updateMaterialLocation,
    updateMaterialQuantity
}