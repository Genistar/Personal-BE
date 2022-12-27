var express = require('express');
const business = require('../../controllers/businessController');

let router = express.Router();

let businessUserRoutes = (app) => {
    router.get('/user/business', business.handleGetAllBusinessOfUser);
    // router.get('/api/business/:id', business.handleGetBusinessById);
    // router.post('/api/business', business.handleCreateNewBusiness);
    // router.put('/api/business', business.handleUpdateBusiness);
    // router.delete('/api/business/:id', business.handleDeleteBusiness);
    return app.use("/", router)
}

module.exports = businessUserRoutes;