const db = require("../models")
let checkId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let training = await db.Dao_tao.findOne({
                where: { id: id }
            })
            if (training) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (e) {
            reject(e)
        }
    })
}
let getAllTraining = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Dao_tao.findAll({
                include: [
                    { model: db.Bac_dao_tao },
                    { model: db.DM_he_dao_tao }
                ],
                raw: true,
                nest: true
            })
            if (data) {
                resolve(data)
            }
            else {
                resolve([])
            }
        } catch (e) {
            reject(e)
        }
    })
}
let getTrainingById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = db.Dao_tao.findOne({
                where: { id: id },
                include: [
                    { model: db.Bac_dao_tao },
                    { model: db.DM_he_dao_tao }
                ],
                raw: true,
                nest: true
            })
            if (data) {
                resolve(data)
            } else {
                resolve('Không tìm thấy thông tin đào tạo')
            }
        } catch (e) {
            reject(e)
        }
    })
}
let createNewTraining = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.fkMaBac || !data.fkMaHeDaoTao || !data.fkMaCanBo || !data.nganhDaoTao || !data.quocGia
                || !data.tenLuanAn || !data.thoiGianBD || !data.thoiGianKT) {
                resolve({
                    errCode: 1,
                    errMessage: 'Chưa nhập đầy đủ thông tin !!'
                })
            }
            else {
                await db.Dao_tao.create({
                    fkMaBac: data.fkMaBac,
                    fkMaHeDaoTao: data.fkMaHeDaoTao,
                    fkMaCanBo: data.fkMaCanBo,
                    nganhDaoTao: data.nganhDaoTao,
                    noiDaoTao: data.noiDaoTao,
                    quocGia: data.quocGia,
                    tenLuanAn: data.tenLuanAn,
                    thoiGianBD: data.thoiGianBD,
                    thoiGianKT: data.thoiGianKT
                })
                resolve({
                    errCode: 0,
                    errMessage: 'Thêm mục đào tạo thành công'
                })
            }


        } catch (e) {
            reject(e)
        }
    })
}
let updateTraining = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.fkMaBac || !data.fkMaHeDaoTao || !data.fkMaCanBo || !data.nganhDaoTao || !data.quocGia
                || !data.tenLuanAn || !data.thoiGianBD || !data.thoiGianKT) {
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
                let training = await db.Dao_tao.findOne({
                    where: { id: data.id },
                    raw: false
                })
                if (training) {
                    training.fkMaBac = data.fkMaBac;
                    training.fkMaHeDaoTao = data.fkMaHeDaoTao;
                    training.nganhDaoTao = data.nganhDaoTao;
                    training.noiDaoTao = data.noiDaoTao;
                    training.quocGia = data.quocGia;
                    training.tenLuanAn = data.tenLuanAn;
                    training.thoiGianBD = data.thoiGianBD;
                    training.thoiGianKT = data.thoiGianKT;
                    await training.save();
                    resolve({
                        errCode: 0,
                        errMessage: 'Cập nhật thành công'
                    })
                }
                else {
                    resolve({
                        errCode: 2,
                        errMessage: 'Mục đào tạo này không tồn tại !!'
                    })
                }
            }
        } catch (e) {
            reject(e);
        }
    })
}
let deleteTraining = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let training = await db.Dao_tao.findOne({
                where: {
                    id: id
                }
            });
            if (!training) {
                resolve({
                    errCode: 2,
                    errMessage: 'Phần khen thưởng này không tồn tại'
                })
            }
            else {
                await db.Dao_tao.destroy({
                    where: { id: id }
                })
                resolve({
                    errCode: 0,
                    errMessage: 'Xóa Thành Công'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}
let getAllTrainingOfUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Dao_tao.findAll({
                where: { fkMaCanBo: id },
                include: [
                    { model: db.Bac_dao_tao },
                    { model: db.DM_he_dao_tao }
                ],
                raw: true,
                nest: true
            })
            if (data) {
                resolve(data)
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
    getAllTraining,
    getTrainingById,
    createNewTraining,
    updateTraining,
    deleteTraining,
    getAllTrainingOfUser
}