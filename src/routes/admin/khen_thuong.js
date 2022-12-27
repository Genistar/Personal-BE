var express = require('express');
const rewardController = require('../../controllers/rewardController');

let router = express.Router();

let khenThuongRoutes = (app) => {
    router.get('/api/reward', rewardController.handelGetAllReward);
    router.get('/api/reward/:id', rewardController.handelGetAllRewardById);
    router.post('/api/reward', rewardController.handelCreateNewReward);
    router.put('/api/reward', rewardController.handelUpdateReward);
    router.delete('/api/reward/:id', rewardController.handelDeleteReward)
    return app.use("/", router)
}

module.exports = khenThuongRoutes;