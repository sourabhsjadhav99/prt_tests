const express = require("express");
const router = express.Router();
const Classes = require("../Shemas/classSchemas");


router.use(express.json())
router.get("/", async (req, res) => {
  try {

    const users = await Classes.find();
    res.status(200).json({
      status: "Sucess",
      data: users,
    });
  } catch (e) {
    res.status(404).json({
      status: "failed",
      message: e.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {

    const users = await Classes.find({ id: req.params.id });
    res.status(201).json({
      status: "Sucess",
      data: users,
    });
  } catch (e) {
    res.status(404).json({
      status: "failed",
      message: e.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const users = await Classes.create(req.body);

    res.status(200).json({
      status: "Sucess",
      users,
    });
  } catch (e) {
    res.status(404).json({
      status: "failed",
      message: e.message,
    });
  }
});


router.delete("/:id", async (req, res) => {
  try {

    const users = await Classes.deleteOne({ id: req.params.id });

    res.status(204).json({
      status: "Sucess",
      users,
    });
  } catch (e) {
    res.status(404).json({
      status: "failed",
      message: e.message,
    });
  }
});


// router.put("/:id", async (req, res) => {
//   try {

//     console.log(req.params);
//     const users = await Classes.updateOne({ id: req.params.id },{$set: req.body});

//     res.status(200).json({
//       status: "Sucess",
//       users,
//     });
//   } catch (e) {
//     res.status(404).json({
//       status: "failed",
//       message: e.message,
//     });
//   }
// });


router.get("/", async (req, res) => {
  try {

    const users = await Classes.find();
    res.status(200).json({
      status: "Sucess",
      data: users,
    });
  } catch (e) {
    res.status(404).json({
      status: "failed",
      message: e.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {

    const users = await Classes.find({ id: req.params.id });
    res.status(201).json({
      status: "Sucess",
      data: users,
    });
  } catch (e) {
    res.status(404).json({
      status: "failed",
      message: e.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const users = await Classes.create(req.body);

    res.status(200).json({
      status: "Sucess",
      users,
    });
  } catch (e) {
    res.status(404).json({
      status: "failed",
      message: e.message,
    });
  }
});


router.delete("/:id", async (req, res) => {
  try {

    const users = await Classes.deleteOne({ id: req.params.id });

    res.status(204).json({
      status: "Sucess",
      users,
    });
  } catch (e) {
    res.status(404).json({
      status: "failed",
      message: e.message,
    });
  }
});


router.put("/:id", async (req, res) => {
  try {

    console.log(req.params);
    const users = await Classes.updateOne({ id: req.params.id },{$set: req.body});

    res.status(200).json({
      status: "Sucess",
      users,
    });
  } catch (e) {
    res.status(404).json({
      status: "failed",
      message: e.message,
    });
  }
});

module.exports = router;
