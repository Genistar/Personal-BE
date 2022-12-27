var express = require('express');
const rewardController = require('../../controllers/rewardController');

let router = express.Router();

let rewardUserRoutes = (app) => {
    router.get('/user/reward', rewardController.handleGetAllRewardOfUser);
    // router.get('/user/reward/:id', rewardController.handelGetAllRewardById);
    // router.post('/user/reward', rewardController.handelCreateNewReward);
    // router.put('/user/reward', rewardController.handelUpdateReward);
    // router.delete('/user/reward/:id', rewardController.handelDeleteReward)
    return app.use("/", router)
}

module.exports = rewardUserRoutes;