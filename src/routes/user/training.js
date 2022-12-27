var express = require('express');
const trainingController = require('../../controllers/trainingController');

let router = express.Router();

let trainingUserRoutes = (app) => {
    router.get('/user/training', trainingController.handelGetAllTrainingOfUser);
    // router.get('/api/training/:id', trainingController.handelGetTrainingById);
    // router.post('/api/training', trainingController.handelCreateNewTraining);
    // router.put('/api/training', trainingController.handelUpdateTraining);
    // router.delete('/api/training/:id', trainingController.handelDeleteTraining);
    return app.use("/", router)
}

module.exports = trainingUserRoutes;