const router = require("express").Router();
const listingRoutes = require("./listingRoutes");
const userRoutes = require("./userRoutes");
const yardSaleRoutes = require("./yardSaleRoutes");
const gmapsRoutes = require("./gmapsRoutes");
const mailRoute = require("./mailRoute");


// Book routes
router.use("/user", userRoutes);
router.use("/listings", listingRoutes);
router.use("/yardSales", yardSaleRoutes);
router.use("/gMaps", gmapsRoutes);
router.use("/mail", mailRoute);

module.exports = router;
