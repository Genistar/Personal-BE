const officerService = require("../services/officerService")

let handelGetAllOfficer = async (req, res) => {
    let data = await officerService.getAllOfficer();
    return res.status(200).json(data)
}
let handelGetOfficerById = async (req, res) => {
    let id = req.params.id;
    let data = await officerService.getOfficerById(id);
    return res.status(200).json(data)
}
let handelCreateNewOfficer = async (req, res) => {
    let data = req.body;
    let file = req.file;
    let message = await officerService.createNewOfficer(data, file);
    return res.status(200).json(message)
}
let handelDeleteOfficer = async (req, res) => {
    let id = req.params.id;
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameter!'
        })
    } else {
        let message = await officerService.deleteOfficer(id);
        return res.status(200).json(message)
    }
}
let handelUpdateOfficer = async (req, res) => {
    let data = req.body;
    let file = req.file;
    let message = await officerService.updateOfficer(data, file);
    return res.status(200).json(message)
}
module.exports = {
    handelGetAllOfficer: handelGetAllOfficer,
    handelCreateNewOfficer: handelCreateNewOfficer,
    handelDeleteOfficer: handelDeleteOfficer,
    handelUpdateOfficer: handelUpdateOfficer,
    handelGetOfficerById: handelGetOfficerById
}