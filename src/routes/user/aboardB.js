var express = require('express');
const aboardB = require('../../controllers/aboardBController');

let router = express.Router();

let aboardBUserRoutes = (app) => {
    router.get('/user/aboardb', aboardB.handleGetAllAboardBOfUser);
    // router.get('/api/aboardb/:id', aboardB.handleGetAboardBById);
    // router.post('/api/aboardb', aboardB.handleCreateNewAboardB);
    // router.put('/api/aboardb', aboardB.handleUpdateAboardB);
    // router.delete('/api/aboardb/:id', aboardB.handleDeleteAboardB);
    return app.use("/", router)
}

module.exports = aboardBUserRoutes;