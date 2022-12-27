var cultivationService = require('../services/cultivationService')

let handelGetAllCultivation = async (req, res) => {
    let message = await cultivationService.getAllCultivation();
    return res.status(200).json(message)
}
let handelGetCultivationById = async (req, res) => {
    let id = req.params.id;
    let message = await cultivationService.getCultivationById(id);
    return res.status(200).json(message)
}
let handelCreateNewCultivation = async (req, res) => {
    let data = req.body;
    let message = await cultivationService.createNewCultivation(data);
    return res.status(200).json(message);
}
let handelUpdateCultivation = async (req, res) => {
    let data = req.body;
    let message = await cultivationService.updateCultivation(data);
    return res.status(200).json(message);
}
let handelDeleteCultivation = async (req, res) => {
    let id = req.params.id;
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Id không tồn tại'
        })
    } else {
        let message = await cultivationService.deleteCultivation(id);
        return res.status(200).json(message);
    }
}
let handelGetAllCultivationOfUser = async (req, res) => {
    let id = req.query.cbId;
    let message = await cultivationService.getAllCultivationOfUser(id);
    console.log(id)
    return res.status(200).json(message)
}

module.exports = {
    handelGetAllCultivation,
    handelGetCultivationById,
    handelCreateNewCultivation,
    handelUpdateCultivation,
    handelDeleteCultivation,
    handelGetAllCultivationOfUser
}