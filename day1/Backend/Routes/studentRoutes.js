const express = require("express");
const router = express.Router();
const Student = require("../Shemas/studentSchemas");


router.use(express.json())
router.get("/", async (req, res) => {
  try {

    const users = await Student.find();
    res.status(200).json({
      status: "Sucess",
      data: users,
    });
  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: e.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {

    const users = await Student.find({ classId: req.params.id });
    res.status(201).json({
      status: "Sucess",
      data: users,
    });
  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: e.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const users = await Student.create(req.body);

    res.status(200).json({
      status: "Sucess",
      users,
    });
  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: e.message,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {

    console.log(req.params);
    const users = await Student.updateOne({ id: req.params.id },{$set: req.body});

    res.status(200).json({
      status: "Sucess",
      users,
    });
  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: e.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {

    const users = await Student.deleteOne({ id: req.params.id });

    res.status(204).json({
      status: "Sucess",
      users,
    });
  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: e.message,
    });
  }
});

module.exports = router;
