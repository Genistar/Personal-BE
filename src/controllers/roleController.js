const roleService = require("../services/roleService");


let handleGetAllRole = async (req, res) => {
    let data = await roleService.getAllRole();
    return res.status(200).json(data)
}
let handleGetRole = async (req, res) => {
    let id = req.params.id;
    let data = await roleService.getRole(parseInt(id));
    return res.status(200).json(data)
}
let handleCreateNewRole = async (req, res) => {
    let data = req.body;
    let message = await roleService.createNewRole(data);
    return res.status(200).json(message)
}
let handleUpdateRole = async (req, res) => {
    let data = req.body;
    let message = await roleService.updateRole(data);
    return res.status(200).json(message)
}
let handleDeleteRole = async (req, res) => {
    let id = req.params.id;
    if (!id) {
        let message = {
            errCode: 1,
            errMessage: 'Không tồn tại Id này'
        }
        return res.status(200).json(message)
    } else {
        let message = await roleService.deleteRole(id);
        return res.status(200).json(message)
    }


}
module.exports = {
    handleGetAllRole,
    handleGetRole,
    handleCreateNewRole,
    handleUpdateRole,
    handleDeleteRole
}