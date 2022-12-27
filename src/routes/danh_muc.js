var express = require('express');
const directoryController = require('../controllers/directoryController');

let router = express.Router();


module.exports = function (app) {
    app.get('/api/dm_dan_toc', directoryController.handleGetAllNationD);
    app.get('/api/dm_he_dao_tao', directoryController.handleGetAllTypeOfTrainingD);
    app.get('/api/dm_hinh_thuc_bd', directoryController.handleGetAllCultivationFormD);
    app.get('/api/dm_khen_thuong', directoryController.handleGetAllRewardD);
    app.get('/api/dm_ky_luat', directoryController.handleGetAllDisciplineD);
    app.get('/api/dm_ton_giao', directoryController.handleGetAllReligionD);
    app.get('/api/dm_hoc_ham', directoryController.handleGetAllAcademicRank);
    app.get('/api/dm_hoc_vi', directoryController.handleGetAllDegree);
    app.get('/api/dm_nganh', directoryController.handleGetAllMajors);
    app.get('/api/dm_bo_mon', directoryController.handleGetAllSubject);
    app.get('/api/dm_bac_dao_tao', directoryController.handleGetTrainingLevel);
    app.get('/api/quan_he', directoryController.handleGetAllRelationShip);
    app.get('/api/loai_can_bo', directoryController.handleGetAllTypeOfOfficer)
};