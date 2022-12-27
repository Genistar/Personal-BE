const directoryController = require('../controllers/directoryController');


module.exports = function (app) {
    app.get('/api/loai_hop_dong', directoryController.handleGetAllContractType);
    app.get('/api/ngach_cong_chuc', directoryController.handleGetAllCivilServantRank);
    app.get('/api/bac_luong', directoryController.handleGetAllSalaryScale);
    app.get('/api/chuc_vu', directoryController.handleGetAllPosition)
};