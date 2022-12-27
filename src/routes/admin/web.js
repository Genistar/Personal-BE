var express = require('express');
import officerController from '../../controllers/officerController';
import userController from '../../controllers/userController';

let router = express.Router();

let initWebRoutes = (app) => {
    router.post('/login', userController.handleUserLogin)
    router.get('/api/officer', officerController.handelGetAllOfficer);
    router.get('/api/officer/:id', officerController.handelGetOfficerById)
    router.post('/api/officer', officerController.handelCreateNewOfficer);
    router.delete('/api/officer/:id', officerController.handelDeleteOfficer);
    router.put('/api/officer', officerController.handelUpdateOfficer)
    return app.use("/", router)
}

module.exports = initWebRoutes;