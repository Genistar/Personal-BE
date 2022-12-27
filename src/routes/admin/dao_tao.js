var express = require('express');
const trainingController = require('../../controllers/trainingController');

let router = express.Router();

let trainingRoutes = (app) => {
    router.get('/api/training', trainingController.handelGetAllTraining);
    router.get('/api/training/:id', trainingController.handelGetTrainingById);
    router.post('/api/training', trainingController.handelCreateNewTraining);
    router.put('/api/training', trainingController.handelUpdateTraining);
    router.delete('/api/training/:id', trainingController.handelDeleteTraining);
    return app.use("/", router)
}

module.exports = trainingRoutes;