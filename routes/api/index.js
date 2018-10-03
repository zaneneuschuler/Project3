const router = require("express").Router();
const listingRoutes = require("./listingRoutes");
const userRoutes = require("./userRoutes");
const yardSaleRoutes = require("./yardSaleRoutes");


// Book routes
router.use("/user", userRoutes);
router.use("/listings", listingRoutes);
router.use("/yardSales", yardSaleRoutes);

module.exports = router;
