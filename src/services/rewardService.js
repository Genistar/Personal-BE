const db = require("../models")

let getAllReward = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Khen_thuong.findAll({
                include: [
                    { model: db.DM_khen_thuong }
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
let getAllRewardById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Khen_thuong.findOne({
                where: {
                    id: id
                },
                include: [
                    { model: db.DM_khen_thuong }
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
let checkId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let officer = await db.Khen_thuong.findOne({
                where: { id: id }
            })
            if (officer) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (e) {
            reject(e)
        }
    })
}
let createNewReward = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.namKhenThuong || !data.fkMaKhenThuong || !data.coQuan || !data.soCongVan
                || !data.fkMaCanBo) {
                resolve({
                    errCode: 1,
                    errMessage: 'Chưa nhập đầy đủ thông tin !!'
                })
            } else {
                await db.Khen_thuong.create({
                    namKhenThuong: data.namKhenThuong,
                    fkMaKhenThuong: data.fkMaKhenThuong,
                    hinhThucKhenThuongKhac: data.hinhThucKhenThuongKhac,
                    coQuan: data.coQuan,
                    coQuanKhac: data.coQuanKhac,
                    ghiChu: data.ghiChu,
                    fkMaCanBo: data.fkMaCanBo,
                    soCongVan: data.soCongVan
                })
                resolve({
                    errCode: 0,
                    errMessage: 'Thêm mục khen thưởng thành công'
                })
            }


        } catch (e) {
            reject(e)
        }
    })
}
let updateReward = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.namKhenThuong || !data.fkMaKhenThuong || !data.coQuan || !data.soCongVan
                || !data.fkMaCanBo) {
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
                let reward = await db.Khen_thuong.findOne({
                    where: { id: data.id },
                    raw: false
                })
                if (reward) {
                    reward.namKhenThuong = data.namKhenThuong;
                    reward.hinhThucKhenThuongKhac = data.hinhThucKhenThuongKhac;
                    reward.coQuan = data.coQuan;
                    reward.coQuanKhac = data.coQuanKhac;
                    reward.ghiChu = data.ghiChu;
                    await reward.save();
                    resolve({
                        errCode: 0,
                        errMessage: 'Cập nhật khen thưởng thành công '
                    })
                } else {
                    resolve({
                        errCode: 2,
                        errMessage: `Khen thưởng không tồn tại!`
                    })
                }

            }
        } catch (e) {
            reject(e)
        }
    })
}
let deleteReward = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let reward = await db.Khen_thuong.findOne({
                where: {
                    id: id
                }
            });
            if (!reward) {
                resolve({
                    errCode: 2,
                    errMessage: 'Phần khen thưởng này không tồn tại'
                })
            }
            else {
                await db.Khen_thuong.destroy({
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
let getAllRewardOfUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Khen_thuong.findAll({
                where: {
                    fkMaCanBo: id
                },
                include: [
                    { model: db.DM_khen_thuong }
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
module.exports = {
    getAllReward,
    getAllRewardById,
    createNewReward,
    updateReward,
    deleteReward,
    getAllRewardOfUser
}