var businessService = require('../services/businessService')
let handleGetAllBusiness = async (req, res) => {
    let message = await businessService.getAllBusiness();
    return res.status(200).json(message)
}
let handleGetBusinessById = async (req, res) => {
    let id = req.params.id;
    let message = await businessService.getBusinessById(id);
    return res.status(200).json(message)
}
let handleCreateNewBusiness = async (req, res) => {
    let data = req.body;
    let message = await businessService.createNewBusiness(data);
    return res.status(200).json(message);
}
let handleUpdateBusiness = async (req, res) => {
    let data = req.body;
    let message = await businessService.updateBusiness(data);
    return res.status(200).json(message);
}
let handleDeleteBusiness = async (req, res) => {
    let id = req.params.id;
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Id không tồn tại'
        })
    } else {
        let message = await businessService.deleteBusiness(id);
        return res.status(200).json(message);
    }
}
let handleGetAllBusinessOfUser = async (req, res) => {
    let id = req.query.cbId;
	console.log(id)
    let message = await businessService.getAllBusinessOfUser(id);
    return res.status(200).json(message)
}
module.exports = {
    handleGetAllBusiness,
    handleGetBusinessById,
    handleCreateNewBusiness,
    handleUpdateBusiness,
    handleDeleteBusiness,
    handleGetAllBusinessOfUser
}