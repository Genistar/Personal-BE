const db = require("../models")

let getAllDiscipline = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let discipline = await db.Ky_luat.findAll({
                include: [
                    { model: db.DM_ky_luat }
                ],
                raw: true,
                nest: true
            })
            if (discipline) {
                resolve(discipline)
            }
            else {
                resolve([])
            }
        } catch (e) {
            reject(e)
        }
    })
}
let getDisciplineById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let discipline = await db.Ky_luat.findOne({
                where: {
                    id: id
                },
                include: [
                    { model: db.DM_ky_luat }
                ],
                raw: true,
                nest: true
            })
            if (!discipline) {
                resolve({
                    errCode: 1,
                    errMessage: 'Không tồn tại'
                })
            } else {
                resolve(discipline)
            }
        } catch (e) {
            reject(e)
        }
    })
}
let createNewDiscipline = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.namBiKyLuat || !data.namXoaHieuLucKyLuat || !data.coQuan || !data.coQuanKhac
                || !data.soThangBiKyLuat || !data.soCongVan || !data.fkMaCanBo) {
                resolve({
                    errCode: 1,
                    errMessage: 'Chưa nhập đầy đủ thông tin !!'
                })
            } else {
                await db.Ky_luat.create({
                    namBiKyLuat: data.namBiKyLuat,
                    namXoaHieuLucKyLuat: data.namXoaHieuLucKyLuat,
                    fkMaKyLuat: data.fkMaKyLuat,
                    coQuan: data.coQuan,
                    coQuanKhac: data.coQuanKhac,
                    ghiChu: data.ghiChu,
                    fkMaCanBo: data.fkMaCanBo,
                    soThangBiKyLuat: data.soThangBiKyLuat,
                    soCongVan: data.soCongVan
                })
                resolve({
                    errCode: 0,
                    errMessage: 'Thêm mục kỷ luật thành công'
                })
            }

        } catch (e) {
            reject(e)
        }
    })
}
let updateDiscipline = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.namBiKyLuat || !data.namXoaHieuLucKyLuat || !data.coQuan || !data.coQuanKhac
                || !data.soThangBiKyLuat || !data.soCongVan || !data.fkMaCanBo) {
                resolve({
                    errCode: 1,
                    errMessage: 'Chưa nhập đầy đủ thông tin !!'
                })
            }
            if (!data.id) {
                resolve({
                    errCode: 1,
                    errMessage: 'Không tìm thấy mục kỷ luật này!!'
                })
            } else {
                let discipline = await db.Ky_luat.findOne({
                    where: { id: data.id },
                    raw: false
                })
                if (discipline) {
                    discipline.namBiKyLuat = data.namBiKyLuat;
                    discipline.namXoaHieuLucKyLuat = data.namXoaHieuLucKyLuat;
                    discipline.ghiChu = data.ghiChu;
                    discipline.coQuan = data.coQuan;
                    discipline.coQuanKhac = data.coQuanKhac;
                    discipline.soCongVan = data.soCongVan;
                    discipline.soThangBiKyLuat = parseInt(data.soThangBiKyLuat);
                    await discipline.save();
                    resolve({
                        errCode: 0,
                        errMessage: 'Cập nhật thành công...'
                    })

                } else {
                    resolve({
                        errCode: 2,
                        errMessage: 'Mục kỷ luật này không tồn tại !!!'
                    })
                }
            }
        } catch (e) {
            reject(e)
        }
    })
}
let deleteDiscipline = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let discipline = await db.Ky_luat.findOne({
                where: { id: id }
            });
            if (!discipline) {
                resolve({
                    errCode: 2,
                    errMessage: 'Mục kỷ luật này không tồn tại!!'
                })
            } else {
                await db.Ky_luat.destroy({
                    where: {
                        id: id
                    }
                })
                resolve({
                    errCode: 0,
                    errMessage: 'Xóa Thành công'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}
let getAllDisciplineOfUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let discipline = await db.Ky_luat.findAll({
                where: {
                    fkMaCanBo: id
                },
                include: [
                    { model: db.DM_ky_luat }
                ],
                raw: true,
                nest: true
            })
            if (discipline) {
                resolve(discipline)
            }
            else {
                resolve([])
            }
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    getAllDiscipline,
    getDisciplineById,
    createNewDiscipline,
    updateDiscipline,
    deleteDiscipline,
    getAllDisciplineOfUser
}