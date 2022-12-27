var express = require('express');
const disciplineController = require('../../controllers/disciplineController');

let router = express.Router();

let disciplineRoutes = (app) => {
    router.get('/api/discipline', disciplineController.handelGetAllDiscipline);
    router.get('/api/discipline/:id', disciplineController.handelGetDisciplineById);
    router.post('/api/discipline', disciplineController.handelCreateNewDiscipline);
    router.put('/api/discipline', disciplineController.handelUpdateDiscipline);
    router.delete('/api/discipline/:id', disciplineController.handelDeleteDiscipline)
    return app.use("/", router)
}

module.exports = disciplineRoutes;