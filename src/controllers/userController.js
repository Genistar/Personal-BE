const userService = require("../services/userService");


let handleUserLogin = async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    if (!username || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!'
        })
    }

    let userData = await userService.userLogin(username, password)
    return res.status(200).json({
        errCode: userData.errCode,
        errMassage: userData.errMessage,
        user: userData.user ? userData.user : {},
        token: userData.token
    })
}
let handleGetAllUser = async (req, res) => {
    let data = await userService.getAllUser();
    return res.status(200).json(data)
}
let handleGetUser = async (req, res) => {
    let id = req.params.id;
    let data = await userService.getUser(parseInt(id));
    return res.status(200).json(data)
}
let handleCreateNewUser = async (req, res) => {
    let data = req.body;
    let message = await userService.createNewUser(data);
    return res.status(200).json(message)
}
let handleUpdateUser = async (req, res) => {
    let data = req.body;
    let message = await userService.updateUser(data);
    return res.status(200).json(message)
}
let handleDeleteUser = async (req, res) => {
    let id = req.params.id;
    if (!id) {
        let message = {
            errCode: 1,
            errMessage: 'Không tồn tại Id này'
        }
        return res.status(200).json(message)
    } else {
        let message = await userService.deleteUser(id);
        return res.status(200).json(message)
    }


}
module.exports = {
    handleUserLogin: handleUserLogin,
    handleGetAllUser,
    handleGetUser,
    handleCreateNewUser,
    handleUpdateUser,
    handleDeleteUser
}