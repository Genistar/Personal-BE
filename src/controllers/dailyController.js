var dailyService = require('../services/dailyService')
let handelGetAllDaily = async (req, res) => {
    let data = await dailyService.getAllDaily()
    return res.status(200).json(data)
}
let handelGetAllDailyById = async (req, res) => {
    let id = req.params.id
    let data = await dailyService.getAllDailyById(id);
    return res.status(200).json(data)
}
let handelCreateNewDaily = async (req, res) => {
    let data = req.body;
    let message = await dailyService.createNewDaily(data);
    return res.status(200).json(message)
}
let handelUpdateDaily = async (req, res) => {
    let data = req.body;
    let message = await dailyService.updateDaily(data);
    return res.status(200).json(message)
}
let handelDeleteDaily = async (req, res) => {
    let id = req.params.id;
    if (!id) {
        let message = {
            errCode: 1,
            errMessage: 'Không tồn tại Id này'
        }
        return res.status(200).json(message)
    } else {
        let message = await dailyService.deleteDaily(id);
        return res.status(200).json(message)
    }


}
let handleGetAllDailyOfUser = async (req, res) => {
    let id = req.query.cbId;

    let data = await dailyService.getAllDailyOfUser(id)
    console.log(data)
    return res.status(200).json(data)
}
module.exports = {
    handelGetAllDaily,
    handelGetAllDailyById,
    handelCreateNewDaily,
    handelUpdateDaily,
    handelDeleteDaily,
    handleGetAllDailyOfUser
}