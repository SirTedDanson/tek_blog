const router = require("express").Router();

const apiRoutes = require("./api/");
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');

router.use('/', homeRoutes);
router.use("/api", apiRoutes);
router.use('/dashboard', dashboardRoutes);

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;
