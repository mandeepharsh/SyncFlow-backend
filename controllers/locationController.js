const knex = require("knex")(require("../knexfile"));
const getLocations = ((_req,res) =>{
    knex("Location")
    .then((result) =>{
     res.json(result)
    })
 })

 const getLocationMaterials = (req,res) =>{
    knex('Material')
.join('Location','Location.location_id', 'Material.location_id')
.where('location', req.params.location)
.then((result) =>{
  res.json(result)
})
}






module.exports = {
    getLocationMaterials,
    getLocations
}