const db = require("../models");

let getAllFamily = (fkMaCanBo) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Qhe_gia_dinh.findAll({
                where: { fkMaCanBo: fkMaCanBo },
                include: [
                    { model: db.Can_bo_giang_day },
                    { model: db.Quan_he }
                ],
                raw: true,
                nest: true
            })
            if (data) {
                resolve(data)
            } else {
                resolve([])
            }
        } catch (e) {
            reject(e)
        }
    })
}
let getAllFamilyById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Qhe_gia_dinh.findOne({
                where: {
                    id: id
                },
                include: [
                    { model: db.Can_bo_giang_day },
                    { model: db.Quan_he }
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
                    errMessage: 'Không tồn tại'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}
let createNewFamily = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.hovaten || !data.fkMaCanBo || !data.namSinh || !data.ngheNghiep || !data.donViCongTacHocTap) {
                resolve({
                    errCode: 1,
                    errMessage: 'Chưa nhập đầy đủ thông tin'
                })
            } else {
                await db.Qhe_gia_dinh.create({
                    hovaten: data.hovaten,
                    fkMaCanBo: data.fkMaCanBo,
                    namSinh: data.namSinh,
                    queQuan: data.queQuan,
                    ngheNghiep: data.ngheNghiep,
                    donViCongTacHocTap: data.donViCongTacHocTap,
                    noiO: data.noiO,
                    fkMaQuanHe: data.fkMaQuanHe
                })
                resolve({
                    errCode: 0,
                    errMessage: 'Thêm mối quan hệ gia đình thành công'
                })
            }


        } catch (e) {
            reject(e)
        }
    })
}
let updateFamily = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 1,
                    errMessage: `Missing required parameter!`
                })
            } else {
                let family = await db.Qhe_gia_dinh.findOne({
                    where: { id: data.id },
                    raw: false
                })
                if (family) {
                    family.hovaten = data.hovaten;
                    family.fkMaCanBo = data.fkMaCanBo;
                    family.namSinh = data.namSinh;
                    family.queQuan = data.queQuan;
                    family.ngheNghiep = data.ngheNghiep;
                    family.donViCongTacHocTap = data.donViCongTacHocTap;
                    family.noiO = data.noiO;
                    family.fkMaQuanHe = data.fkMaQuanHe
                    await family.save();
                    resolve({
                        errCode: 0,
                        errMessage: 'Cập nhật mối quan hệ thành công '
                    })
                } else {
                    resolve({
                        errCode: 2,
                        errMessage: `Mối quan hệ không tồn tại!`
                    })
                }

            }
        } catch (e) {
            reject(e)
        }
    })
}
let deleteFamily = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let family = await db.Qhe_gia_dinh.findOne({
                where: {
                    id: id
                }
            });
            if (!family) {
                resolve({
                    errCode: 2,
                    errMessage: 'Quan hệ này không tồn tại'
                })
            }
            else {
                await db.Qhe_gia_dinh.destroy({
                    where: {
                        id: id
                    }
                })
                resolve({
                    errCode: 0,
                    errMessage: 'Xóa thành công'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    getAllFamily,
    getAllFamilyById,
    createNewFamily,
    updateFamily,
    deleteFamily
}