const knex = require("knex")(require("../knexfile"));

const getMaterialsWorkoder = (req, res) => {
  knex("Material")
    .join("Location", "Location.location_id", "Material.location_id")
    .where(" work_order_id", req.params.workOrderId)
    .then((materials) => {
      res.status(200).json(materials);
    })
    .catch(() => {
      res.status(500).json({
        message: "Internal server error",
      });
    });
};

const getMaterials = (req, res) => {
  knex("Material")
    .join("Location", "Location.location_id", "Material.location_id")
    .then((materials) => {
      res.status(200).json(materials);
    })
    .catch(() => {
      res.status(500).json({
        message: "Internal server error",
      });
    });
};

const updateMaterialStatus = (req, res) => {
  knex("Material")
    .where("material_id", req.params.id)
    .update({
      status: req.body.status,
      receive_date: new Date(),
    })
    .then(() => {
      return knex("Material").where("material_id", req.params.id);
    })
    .then((updatedMaterial) => {
      res.json(updatedMaterial[0]);
    })
    .catch(() => {
      res.status(500).json({
        message: "Internal server error",
      });
    });
};

const updateMaterialLocation = (req, res) => {
  knex("Material")
    .where("material_number", req.params.id)
    .update({
      location_id: req.body.location,
    })
    .then(() => {
      return knex("Material")
        .where("material_number", req.params.id)
        .then((result) => {
          if (result.length === 0) {
            throw new Error("Material not found");
          }
          res.status(200).json(result[0]);
        });
    })
    .catch(() => {
      res.status(500).json({
        message: "Internal server error",
      });
    });
};

const updateMaterialQuantity = async (req, res) => {
  const { quantity, material_number, size, issued_employee, work_order_id } =
    req.body;

  try {
    const result = await knex("Material").where("material_id", req.params.id);
    if (result.length === 0) {
      return res.status(404).json({ msg: "Material not found" });
    }
    let material = result[0];
    material.quantity -= quantity;
    if (material.quantity <= 0) {
      await knex("Material").where("material_id", req.params.id).del();
    } else {
      // Else, update the material quantity
      await knex("Material")
        .where("material_id", req.params.id)
        .update({ quantity: material.quantity });
    }
    await knex("IssuanceLog").insert({
      material_number: material_number,
      quantity: quantity,
      size: size,
      issued_date: new Date(),
      issued_time: new Date().toTimeString().slice(0, 8),
      issued_employee: issued_employee,
      work_order_id: work_order_id,
    });
    res.status(200).json({ msg: "Material issued successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const getIssuedMaterial = async (_req, res) => {
  try {
    const result = await knex("IssuanceLog");
    res.json(result);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the issued material." });
  }
};

module.exports = {
  getMaterialsWorkoder,
  getMaterials,
  updateMaterialStatus,
  updateMaterialLocation,
  updateMaterialQuantity,
  getIssuedMaterial,
};
