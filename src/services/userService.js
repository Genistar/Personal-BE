var db = require('../models/index');
var jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs/dist/bcrypt');
var salt = bcrypt.genSaltSync(10);
let checkUserEmail = (username) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { username: username }
            })
            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (e) {
            reject(e)
        }
    })
}
let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword)
        } catch (e) {
            reject(e)
        }
    })
}
let userLogin = (username, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkUserEmail(username);
            if (isExist) {
                //user already exist
                let user = await db.User.findOne({

                    where: { username: username },
                    include: [
                        { model: db.Can_bo_giang_day }
                    ],
                    raw: true,
                    nest: true
                })
                if (user) {
                    let check = await bcrypt.compareSync(password, user.password);
                    if (check) {
                        const accessToken = jwt.sign({ username: username }, process.env.ACCESS_TOKEN_SECRET)
                        userData.errCode = 0;
                        userData.errMessage = 'OK';
                        userData.token = accessToken
                        delete user.password;
                        userData.user = user;
                    }
                    else {
                        userData.errCode = 3;
                        userData.errMessage = 'Wrong password'
                    }
                    console.log(user)
                } else {
                    userData.errCode = 2;
                    userData.errMessage = 'Kh??ng tim th???y T??i kho???n'
                }
            } else {
                userData.errCode = 1;
                userData.errMessage = 'T??i kho???n kh??ng t???n t???i,H??y th??? l???i';

            }
            resolve(userData)
        } catch (e) {
            reject(e)
        }
    })
}
let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.User.findAll({
                include: [
                    { model: db.Can_bo_giang_day },
                    { model: db.Vai_tro }
                ],
                raw: true,
                nest: true
            })
            if (data) {
                resolve(data)
            } else {
                resolve([])
            }
        } catch (error) {
            reject(error)
        }
    })
}
let getUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.User.findOne({
                where: {
                    id: id
                },
                include: [
                    { model: db.Can_bo_giang_day },
                    { model: db.Vai_tro }
                ],
                raw: true,
                nest: true
            })
            if (data) {
                resolve(data)
            }
            else {
                resolve({
                    errCode: 1,
                    errMessage: 'T??i kho???n n??y kh??ng t???n t???i'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}
let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.username || !data.password || !data.cbId || !data.role) {
                resolve({
                    errCode: 1,
                    errMessage: 'Ch??a nh???p ?????y ????? th??ng tin !!'
                })
            } else {
                let hashPasswordFromBcrypt = await hashUserPassword(data.password);
                await db.User.create({
                    username: data.username,
                    password: hashPasswordFromBcrypt,
                    cbId: data.cbId,
                    role: data.role
                })
                resolve({
                    errCode: 0,
                    errMessage: 'Th??m t??i kho???n th??nh c??ng'
                })
            }


        } catch (e) {
            reject(e)
        }
    })
}
let updateUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.username || !data.password || !data.cbId || !data.role) {
                resolve({
                    errCode: 1,
                    errMessage: 'Ch??a nh???p ?????y ????? th??ng tin !!'
                })
            }
            if (!data.id) {
                resolve({
                    errCode: 1,
                    errMessage: `Missing required parameter!`
                })
            } else {
                let hashPasswordFromBcrypt = await hashUserPassword(data.password);
                let user = await db.User.findOne({
                    where: { id: data.id },
                    raw: false
                })
                if (user) {
                    user.username = data.username;
                    user.password = hashPasswordFromBcrypt;
                    user.role = data.role;
                    await user.save();
                    resolve({
                        errCode: 0,
                        errMessage: 'C???p nh???t t??i kho???n th??nh c??ng'
                    })
                } else {
                    resolve({
                        errCode: 2,
                        errMessage: `T??i kh???an kh??ng t???n t???i!`
                    })
                }

            }
        } catch (e) {
            reject(e)
        }
    })
}
let deleteUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {
                    id: id
                }
            });
            if (!user) {
                resolve({
                    errCode: 2,
                    errMessage: 'T??i kho???n n??y kh??ng t???n t???i'
                })
            }
            else {
                await db.User.destroy({
                    where: {
                        id: id
                    },
                    individualHooks: true
                })
                resolve({
                    errCode: 0,
                    errMessage: 'X??a t??i kho???n th??nh c??ng'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    userLogin: userLogin,
    getAllUser,
    getUser,
    createNewUser,
    deleteUser,
    updateUser
}