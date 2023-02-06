var db = require('../models/index');
var jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs/dist/bcrypt');
var salt = bcrypt.genSaltSync(10);

let getAllRole = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Vai_tro.findAll({
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
let getRole = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Vai_tro.findOne({
                where: {
                    id: id
                },
                raw: true,
                nest: true
            })
            if (data) {
                resolve(data)
            }
            else {
                resolve({
                    errCode: 1,
                    errMessage: 'Tài khoản này không tồn tại'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}
let createNewRole = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.tenVaiTro) {
                resolve({
                    errCode: 1,
                    errMessage: 'Chưa nhập đầy đủ thông tin !!'
                })
            } else {
                await db.Vai_tro.create({
                    tenVaiTro: data.tenVaiTro,
                    chucNang: data.chucNang
                })
                resolve({
                    errCode: 0,
                    errMessage: 'Thêm vai trò thành công'
                })
            }


        } catch (e) {
            reject(e)
        }
    })
}
let updateRole = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.tenVaiTro) {
                resolve({
                    errCode: 1,
                    errMessage: 'Chưa nhập đầy đủ thông tin !!'
                })
            }
            if (!data.id) {
                resolve({
                    errCode: 1,
                    errMessage: `Missing required parameter!`
                })
            } else {
                let Role = await db.Vai_tro.findOne({
                    where: { id: data.id },
                    raw: false
                })
                if (Role) {
                    Role.tenVaiTro = data.tenVaiTro;
                    Role.chucNang = data.chucNang;
                    await Role.save();
                    resolve({
                        errCode: 0,
                        errMessage: 'Cập nhật vai trò thành công'
                    })
                } else {
                    resolve({
                        errCode: 2,
                        errMessage: `Vai trò không tồn tại!`
                    })
                }

            }
        } catch (e) {
            reject(e)
        }
    })
}
let deleteRole = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let Role = await db.Vai_tro.findOne({
                where: {
                    id: id
                }
            });
            if (!Role) {
                resolve({
                    errCode: 2,
                    errMessage: 'Vai trò này không tồn tại'
                })
            }
            else {
                await db.Vai_tro.destroy({
                    where: {
                        id: id
                    },
                    individualHooks: true
                })
                resolve({
                    errCode: 0,
                    errMessage: 'Xóa vai trò thành công'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    getAllRole,
    getRole,
    createNewRole,
    deleteRole,
    updateRole
}