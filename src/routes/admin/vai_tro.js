var express = require('express');
import roleController from '../../controllers/roleController';

let router = express.Router();

let roleRoutes = (app) => {
    router.get('/api/role', roleController.handleGetAllRole);
    router.get('/api/role/:id', roleController.handleGetRole)
    router.post('/api/role', roleController.handleCreateNewRole);
    router.delete('/api/role/:id', roleController.handleDeleteRole);
    router.put('/api/role', roleController.handleUpdateRole)
    return app.use("/", router)
}

module.exports = roleRoutes;