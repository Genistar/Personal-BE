var express = require('express');
const cultivation = require('../../controllers/cultivationController');

let router = express.Router();

let cultivationRoutes = (app) => {
    router.get('/api/cultivation', cultivation.handelGetAllCultivation);
    router.get('/api/cultivation/:id', cultivation.handelGetCultivationById);
    router.post('/api/cultivation', cultivation.handelCreateNewCultivation);
    router.put('/api/cultivation', cultivation.handelUpdateCultivation);
    router.delete('/api/cultivation/:id', cultivation.handelDeleteCultivation);
    return app.use("/", router)
}

module.exports = cultivationRoutes;