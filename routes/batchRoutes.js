const {
  getAllBatches,
  postBatch,
  getBatchValue,
} = require("../controllers/batchControllers");

const router = require("express").Router();

router.get("/batches", getAllBatches);
router.post("/batch", postBatch);
router.get("/batchValue/:id", getBatchValue);

module.exports = router;
