var express = require('express');
const familyController = require('../../controllers/familyController');

let router = express.Router();

let familyRoutes = (app) => {
    router.get('/user/family', familyController.handelGetAllFamily);
    router.get('/user/family/:id', familyController.handelGetAllFamilyById);
    router.post('/user/family', familyController.handelCreateNewFamily);
    router.put('/user/family', familyController.handelUpdateFamily);
    router.delete('/user/family/:id', familyController.handelDeleteFamily)
    return app.use("/", router)
}

module.exports = familyRoutes;