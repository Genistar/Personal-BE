var trainingService = require('../services/trainingService')
let handelGetAllTraining = async (req, res) => {
    let data = await trainingService.getAllTraining();
    return res.status(200).json(data)
}
let handelGetTrainingById = async (req, res) => {
    let id = req.params.id;
    let data = await trainingService.getTrainingById(id);
    return res.status(200).json(data);
}
let handelCreateNewTraining = async (req, res) => {
    let data = req.body;
    let message = await trainingService.createNewTraining(data);
    return res.status(200).json(message);
}
let handelUpdateTraining = async (req, res) => {
    let data = req.body;
    let message = await trainingService.updateTraining(data);
    return res.status(200).json(message);
}
let handelDeleteTraining = async (req, res) => {
    let id = req.params.id;
    if (!id) {
        let message = {
            errCode: 1,
            errMessage: 'Không tồn tại Id này'
        }
        return res.status(200).json(message)
    } else {
        let message = await trainingService.deleteTraining(id);
        return res.status(200).json(message);
    }

}
let handelGetAllTrainingOfUser = async (req, res) => {
    let id = req.query.cbId;
    let data = await trainingService.getAllTrainingOfUser(id);
    return res.status(200).json(data)
}
module.exports = {
    handelGetAllTraining,
    handelGetTrainingById,
    handelCreateNewTraining,
    handelUpdateTraining,
    handelDeleteTraining,
    handelGetAllTrainingOfUser
}