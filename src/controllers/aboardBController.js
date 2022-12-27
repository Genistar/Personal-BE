var aboardBService = require('../services/aboardBService')
let handleGetAllAboardB = async (req, res) => {
    let message = await aboardBService.getAllAboardB();
    return res.status(200).json(message)
}
let handleGetAboardBById = async (req, res) => {
    let id = req.params.id;
    let message = await aboardBService.getAboardBById(id);
    return res.status(200).json(message)
}
let handleCreateNewAboardB = async (req, res) => {
    let data = req.body;
    let message = await aboardBService.createNewAboardB(data);
    return res.status(200).json(message);
}
let handleUpdateAboardB = async (req, res) => {
    let data = req.body;
    let message = await aboardBService.updateAboardB(data);
    return res.status(200).json(message);
}
let handleDeleteAboardB = async (req, res) => {
    let id = req.params.id;
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Id không tồn tại'
        })
    } else {
        let message = await aboardBService.deleteAboardB(id);
        return res.status(200).json(message);
    }
}
let handleGetAllAboardBOfUser = async (req, res) => {
    let id = req.query.cbId;
    let message = await aboardBService.getAllAboardBOfUser(id);
    return res.status(200).json(message)
}
module.exports = {
    handleGetAllAboardB,
    handleGetAboardBById,
    handleCreateNewAboardB,
    handleUpdateAboardB,
    handleDeleteAboardB,
    handleGetAllAboardBOfUser
}