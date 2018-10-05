const router = require("express").Router();
const yardSaleController = require("../../controllers/yardSaleController");

// Matches with "/api/yardSale"
router.route("/")
  .get(yardSaleController.findAll)
  .post(yardSaleController.create);

// Matches with "/api/yardSale/:id"
router
  .route("/:id")
  .get(yardSaleController.findById)
  .post(yardSaleController.createNewListing)
  .put(yardSaleController.update)
  .delete(yardSaleController.remove);

module.exports = router;
