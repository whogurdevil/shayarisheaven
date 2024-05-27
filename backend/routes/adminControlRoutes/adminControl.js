const express = require("express");
const router = express.Router();
const fetchuser = require("../../middleware/fetchUser");
const isAdmin = require("../../middleware/isAdmin");
const Sheyar = require("../../models/UserInfo").Sheyar;

router.post("/newSheyar", fetchuser, isAdmin, async (req, res) => {
  try {
    const { language, category, sheyar } = req.body;

    const newSheyar = await Sheyar.create({
      text: sheyar,
      category: category,
      language: language,
    });

    await newSheyar.save();

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
