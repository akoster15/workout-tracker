  
const router = require("express").Router();
const apiRoutes = require("./apiRoutes");
const homeRoutes = require("./htmlRoutes");

router.use("/", htmlRoutes);
router.use("/", apiRoutes);

module.exports = router;