var express = require('express');
const contract = require('../../controllers/contractController');

let router = express.Router();

let contractUserRoutes = (app) => {
    router.get('/user/contract', contract.handelGetAllContractOfUser);
    router.put('/user/contract', contract.handleUpdateDate);
    // router.get('/api/contract/:id', contract.handleGetcontractById);
    // router.post('/api/contract', contract.handleCreateNewcontract);
    // router.put('/api/contract', contract.handleUpdatecontract);
    // router.delete('/api/contract/:id', contract.handleDeletecontract);
    return app.use("/", router)
}

module.exports = contractUserRoutes;