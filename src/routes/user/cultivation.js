var express = require('express');
const cultivation = require('../../controllers/cultivationController');

let router = express.Router();

let cultivationUserRoutes = (app) => {
    router.get('/user/cultivation', cultivation.handelGetAllCultivationOfUser);
    // router.get('/api/cultivation/:id', cultivation.handelGetCultivationById);
    // router.post('/api/cultivation', cultivation.handelCreateNewCultivation);
    // router.put('/api/cultivation', cultivation.handelUpdateCultivation);
    // router.delete('/api/cultivation/:id', cultivation.handelDeleteCultivation);
    return app.use("/", router)
}

module.exports = cultivationUserRoutes;