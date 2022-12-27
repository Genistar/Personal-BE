var rewardService = require('../services/rewardService')
let handelGetAllReward = async (req, res) => {
    let data = await rewardService.getAllReward()
    return res.status(200).json(data)
}
let handelGetAllRewardById = async (req, res) => {
    let id = req.params.id
    let data = await rewardService.getAllRewardById(id);
    return res.status(200).json(data)
}
let handelCreateNewReward = async (req, res) => {
    let data = req.body;
    let message = await rewardService.createNewReward(data);
    return res.status(200).json(message)
}
let handelUpdateReward = async (req, res) => {
    let data = req.body;
    let message = await rewardService.updateReward(data);
    return res.status(200).json(message)
}
let handelDeleteReward = async (req, res) => {
    let id = req.params.id;
    if (!id) {
        let message = {
            errCode: 1,
            errMessage: 'Không tồn tại Id này'
        }
        return res.status(200).json(message)
    } else {
        let message = await rewardService.deleteReward(id);
        return res.status(200).json(message)
    }


}
let handleGetAllRewardOfUser = async (req, res) => {
    let id = req.query.cbId;

    let data = await rewardService.getAllRewardOfUser(id)
    console.log(data)
    return res.status(200).json(data)
}
module.exports = {
    handelGetAllReward,
    handelGetAllRewardById,
    handelCreateNewReward,
    handelUpdateReward,
    handelDeleteReward,
    handleGetAllRewardOfUser
}