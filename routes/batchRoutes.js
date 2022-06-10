const { getAllBatches, postBatch } = require("../controllers/batchControllers");

const router = require("express").Router();

router.get("/batches", getAllBatches);
router.post("/batch", postBatch);

module.exports = router;
