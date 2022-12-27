var express = require('express');
import userController from '../../controllers/userController';

let router = express.Router();

let accountRoutes = (app) => {
    router.get('/api/account', userController.handleGetAllUser);
    router.get('/api/account/:id', userController.handleGetUser)
    router.post('/api/account', userController.handleCreateNewUser);
    router.delete('/api/account/:id', userController.handleDeleteUser);
    router.put('/api/account', userController.handleUpdateUser)
    return app.use("/", router)
}

module.exports = accountRoutes;