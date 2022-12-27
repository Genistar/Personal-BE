var contractService = require('../services/contractService')

let handelGetAllContract = async (req, res) => {
    let message = await contractService.getAllContract();
    return res.status(200).json(message)
}
let handelGetContractById = async (req, res) => {
    let id = req.params.id;
    let message = await contractService.getContractById(id);
    return res.status(200).json(message)
}
let handelCreateNewContract = async (req, res) => {
    let data = req.body;
    let message = await contractService.createNewContract(data);
    return res.status(200).json(message);
}
let handelUpdateContract = async (req, res) => {
    let data = req.body;
    let message = await contractService.updateContract(data);
    return res.status(200).json(message);
}
let handelDeleteContract = async (req, res) => {
    let id = req.params.id;
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Id không tồn tại'
        })
    } else {
        let message = await contractService.deleteContract(id);
        return res.status(200).json(message);
    }
}
let handelGetAllContractOfUser = async (req, res) => {
    let id = req.query.BenB;
    let message = await contractService.getContractByUser(id);
    console.log(id)
    return res.status(200).json(message)
}
let handleUpdateDate = async (req, res) => {
    let data = req.body
    let message = await contractService.updateGiaHan(data);
    return res.status(200).json(message)
}
let handleUpdateDateContract = async (req, res) => {
    let data = req.body
    console.log(data)
    let message = await contractService.updateDateContract(data);
    return res.status(200).json(message)
}

module.exports = {
    handelGetAllContract,
    handelGetContractById,
    handelCreateNewContract,
    handelUpdateContract,
    handelDeleteContract,
    handelGetAllContractOfUser,
    handleUpdateDate,
    handleUpdateDateContract
}