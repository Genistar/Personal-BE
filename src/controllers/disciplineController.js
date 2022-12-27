var disciplineService = require('../services/disciplineService')

let handelGetAllDiscipline = async (req, res) => {
    let data = await disciplineService.getAllDiscipline()
    return res.status(200).json(data)
}

let handelGetDisciplineById = async (req, res) => {
    let id = req.params.id;
    let data = await disciplineService.getDisciplineById(id);
    return res.status(200).json(data)
}
let handelCreateNewDiscipline = async (req, res) => {
    let data = req.body;
    let message = await disciplineService.createNewDiscipline(data);
    return res.status(200).json(message);
}
let handelUpdateDiscipline = async (req, res) => {
    let data = req.body;
    let message = await disciplineService.updateDiscipline(data);
    return res.status(200).json(message);
}
let handelDeleteDiscipline = async (req, res) => {
    let id = req.params.id;
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Chưa nhập id'
        })
    } else {
        let message = await disciplineService.deleteDiscipline(id);
        return res.status(200).json(message)
    }

}
let handelGetAllDisciplineOfUser = async (req, res) => {
    let id = req.query.cbId;
    let data = await disciplineService.getAllDisciplineOfUser(id)
    return res.status(200).json(data)
}
module.exports = {
    handelGetAllDiscipline,
    handelGetDisciplineById,
    handelCreateNewDiscipline,
    handelUpdateDiscipline,
    handelDeleteDiscipline,
    handelGetAllDisciplineOfUser
}