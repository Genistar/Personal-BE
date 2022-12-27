const db = require("../models")
let checkId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let check = await db.Boi_duong.findOne({
                where: { id: id }
            })
            if (check) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (e) {
            reject(e)
        }
    })
}
let getAllCultivation = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Boi_duong.findAll({
                include: [
                    { model: db.DM_Hinh_Thuc_BD }
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
let getCultivationById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let curtivation = await db.Boi_duong.findOne({
                where: { id: id },
                include: [
                    { model: db.DM_Hinh_Thuc_BD }
                ],
                raw: true,
                nest: true
            })
            if (!curtivation) {
                resolve({
                    errCode: 1,
                    errMessage: 'Không tồn tại id này !!'
                })
            } else {
                resolve(curtivation)
            }
        } catch (e) {
            reject(e)
        }
    })
}
let createNewCultivation = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.noiBoiDuong || !data.boiDuongTuNgay || !data.boiDuongDenNgay || !data.fkMaHinhThucBD || !data.noiDungBoiDuong
                || !data.fkMaCanBo || !data.chungChiBoiDuong) {
                resolve({
                    errCode: 1,
                    errMessage: 'Chưa nhập đầy đủ thông tin !!'
                })
            } else {
                await db.Boi_duong.create({
                    id: data.id,
                    noiBoiDuong: data.noiBoiDuong,
                    boiDuongTuNgay: data.boiDuongTuNgay,
                    boiDuongDenNgay: data.boiDuongDenNgay,
                    fkMaHinhThucBD: data.fkMaHinhThucBD,
                    noiDungBoiDuong: data.noiDungBoiDuong,
                    chungChiBoiDuong: data.chungChiBoiDuong,
                    fkMaCanBo: data.fkMaCanBo,
                    ghiChu: data.ghiChu
                })
                resolve({
                    errCode: 0,
                    errMessage: 'Thêm quá trình bồi dưỡng thành công'
                })
            }


        } catch (e) {
            reject(e);
        }
    })
}
let updateCultivation = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.noiBoiDuong || !data.boiDuongTuNgay || !data.boiDuongDenNgay || !data.fkMaHinhThucBD || !data.noiDungBoiDuong
                || !data.fkMaCanBo || !data.chungChiBoiDuong) {
                resolve({
                    errCode: 1,
                    errMessage: 'Chưa nhập đầy đủ thông tin !!'
                })
            }
            if (!data.id) {
                resolve({
                    errCode: 1,
                    errMessage: 'Không tìm thấy mục bồi dưỡng này!!'
                })
            } else {
                let cultivation = await db.Boi_duong.findOne({
                    where: { id: data.id },
                    raw: false
                })
                if (cultivation) {
                    cultivation.noiBoiDuong = data.noiBoiDuong;
                    cultivation.boiDuongTuNgay = data.boiDuongTuNgay;
                    cultivation.boiDuongDenNgay = data.boiDuongDenNgay;
                    cultivation.fkMaHinhThucBD = data.fkMaHinhThucBD;
                    cultivation.noiDungBoiDuong = data.noiDungBoiDuong;
                    cultivation.chungChiBoiDuong = data.chungChiBoiDuong;
                    cultivation.fkMaCanBo = data.fkMaCanBo;
                    cultivation.ghiChu = data.ghiChu;
                    await cultivation.save();
                    resolve({
                        errCode: 0,
                        errMessage: 'Cập nhật thành công'
                    })
                } else {
                    resolve({
                        errCode: 2,
                        errMessage: 'Mục bồi dưỡng này không tồn tại !!'
                    })
                }
            }
        } catch (e) {
            reject(e);
        }
    })
}
let deleteCultivation = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let cultivation = await db.Boi_duong.findOne({
                where: { id: id }
            });
            if (!cultivation) {
                resolve({
                    errCode: 2,
                    errMessage: 'Mục bồi dưỡng này không tồn tại'
                })
            } else {
                await db.Boi_duong.destroy({
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
let getAllCultivationOfUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Boi_duong.findAll({
                where: { fkMaCanBo: id },
                include: [
                    { model: db.DM_Hinh_Thuc_BD }
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

module.exports = {
    getAllCultivation,
    getCultivationById,
    createNewCultivation,
    updateCultivation,
    deleteCultivation,
    getAllCultivationOfUser
}