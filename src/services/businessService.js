const db = require("../models");
let checkId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let check = await db.Cong_tac.findOne({
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
let getAllBusiness = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Cong_tac.findAll({
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
let getBusinessById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let business = await db.Cong_tac.findOne({
                where: { id: id },
                raw: true,
                nest: true
            })
            if (!business) {
                resolve({
                    errCode: 1,
                    errMessage: 'Không tồn tại id này !!'
                })
            } else {
                resolve(business)
            }
        } catch (e) {
            reject(e)
        }
    })
}
let createNewBusiness = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.thoiGianCT || !data.chucDanh || !data.chucDanh || !data.donViCT || !data.chuyenMon
                || !data.fkMaCanBo) {
                resolve({
                    errCode: 1,
                    errMessage: 'Chưa nhập đầy đủ thông tin !!'
                })
            } else {
                await db.Cong_tac.create({
                    thoiGianCT: data.thoiGianCT,
                    chucDanh: data.chucDanh,
                    chucVu: data.chucVu,
                    donViCT: data.donViCT,
                    chuyenMon: data.chuyenMon,
                    fkMaCanBo: data.fkMaCanBo
                })
                resolve({
                    errCode: 0,
                    errMessage: 'Thêm quá trình công tác thành công'
                })
            }



        } catch (e) {
            reject(e);
        }
    })
}
let updateBusiness = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.thoiGianCT || !data.chucDanh || !data.chucDanh || !data.donViCT || !data.chuyenMon
                || !data.fkMaCanBo) {
                resolve({
                    errCode: 1,
                    errMessage: 'Chưa nhập đầy đủ thông tin !!'
                })
            }
            if (!data.id) {
                resolve({
                    errCode: 1,
                    errMessage: 'Không tìm thấy mục công tác này!!'
                })
            } else {
                let business = await db.Cong_tac.findOne({
                    where: { id: data.id },
                    raw: false
                })
                if (business) {
                    business.thoiGianCT = data.thoiGianCT;
                    business.chucDanh = data.chucDanh;
                    business.chucVu = data.chucVu;
                    business.donViCT = data.donViCT;
                    business.chuyenMon = data.chuyenMon;
                    business.fkMaCanBo = data.fkMaCanBo;
                    await business.save();
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
let deleteBusiness = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let business = await db.Cong_tac.findOne({
                where: { id: id }
            });
            if (!business) {
                resolve({
                    errCode: 2,
                    errMessage: 'Mục công tác này không tồn tại'
                })
            } else {
                await db.Cong_tac.destroy({
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
let getAllBusinessOfUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Cong_tac.findAll({
                where: { fkMaCanBo: id },
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
    getAllBusiness,
    getBusinessById,
    createNewBusiness,
    updateBusiness,
    deleteBusiness,
    getAllBusinessOfUser
}