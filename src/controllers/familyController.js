var familyService = require('../services/familyService')
let handelGetAllFamily = async (req, res) => {
    let fkMaCanBo = req.query.fkMaCanBo
    let data = await familyService.getAllFamily(fkMaCanBo)
    return res.status(200).json(data)
}
let handelGetAllFamilyById = async (req, res) => {
    let id = req.params.id
    let data = await familyService.getAllFamilyById(id);
    return res.status(200).json(data)
}
let handelCreateNewFamily = async (req, res) => {
    let data = req.body;
    let message = await familyService.createNewFamily(data);
    return res.status(200).json(message)
}
let handelUpdateFamily = async (req, res) => {
    let data = req.body;
    let message = await familyService.updateFamily(data);
    return res.status(200).json(message)
}
let handelDeleteFamily = async (req, res) => {
    let id = req.params.id;
    if (!id) {
        let message = {
            errCode: 1,
            errMessage: 'Không tồn tại Id này'
        }
        return res.status(200).json(message)
    } else {
        let message = await familyService.deleteFamily(id);
        return res.status(200).json(message)
    }


}
module.exports = {
    handelGetAllFamily,
    handelGetAllFamilyById,
    handelCreateNewFamily,
    handelUpdateFamily,
    handelDeleteFamily
}