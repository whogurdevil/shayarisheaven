const express = require("express");
const router = express.Router();
const Sheyar = require("../models/UserInfo").Sheyar;
// Endpoint to create a new sheyar
router.post("/newSheyar", async (req, res) => {
  try {
    const newSheyar = new Sheyar(req.body);
    await newSheyar.save();
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Endpoint to get sheyars with pagination
router.get("/getSheyars", async (req, res) => {
  try {
    const { page = 1, limit = 20, language, category } = req.query;
    const skip = (page - 1) * limit;

    const filter = {};
    if (language) filter.language = language;
    if (category) filter.category = category;

    const sheyars = await Sheyar.find(filter).skip(skip).limit(parseInt(limit));
    const total = await Sheyar.countDocuments(filter);

    res.status(200).json({
      sheyars,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
