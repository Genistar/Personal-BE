var express = require('express');
const dailyController = require('../controllers/dailyController');

let router = express.Router();

let dailyRoutes = (app) => {
    router.get('/api/daily', dailyController.handelGetAllDaily);
    router.get('/api/daily/:id', dailyController.handelGetAllDailyById);
    router.post('/api/daily', dailyController.handelCreateNewDaily);
    router.put('/api/daily', dailyController.handelUpdateDaily);
    router.delete('/api/daily/:id', dailyController.handelDeleteDaily)
    return app.use("/", router)
}

module.exports = dailyRoutes;