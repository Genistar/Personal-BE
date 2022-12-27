var express = require('express');
const aboardB = require('../../controllers/aboardBController');

let router = express.Router();

let aboardBRoutes = (app) => {
    router.get('/api/aboardb', aboardB.handleGetAllAboardB);
    router.get('/api/aboardb/:id', aboardB.handleGetAboardBById);
    router.post('/api/aboardb', aboardB.handleCreateNewAboardB);
    router.put('/api/aboardb', aboardB.handleUpdateAboardB);
    router.delete('/api/aboardb/:id', aboardB.handleDeleteAboardB);
    return app.use("/", router)
}

module.exports = aboardBRoutes;