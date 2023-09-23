const knex = require("knex")(require("../knexfile"));
const getLocations = (_req, res) => {
  knex("Location").then((result) => {
    res.json(result);
  });
};

const getLocationMaterials = (req, res) => {
  knex("Material")
    .join("Location", "Location.location_id", "Material.location_id")
    .where("location", req.params.location)
    .then((result) => {
      const recivedMaterial = result.filter(
        (material) => material.status === "received"
      );
      res.json(recivedMaterial);
    })
    .catch(() => {
      res.status(500).json({
        message: "Internal server error",
      });
    });
};

module.exports = {
  getLocationMaterials,
  getLocations,
};
