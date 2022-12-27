var express = require('express');
const contractController = require('../../controllers/contractController');

let router = express.Router();

let hopDongRoutes = (app) => {
    router.get('/api/contract', contractController.handelGetAllContract);
    router.get('/api/contract/:id', contractController.handelGetContractById);
    router.post('/api/contract', contractController.handelCreateNewContract);
    router.put('/api/contract', contractController.handelUpdateContract);
    router.put('/api/contractdate', contractController.handleUpdateDateContract);
    router.delete('/api/contract/:id', contractController.handelDeleteContract)
    return app.use("/", router)
}

module.exports = hopDongRoutes;