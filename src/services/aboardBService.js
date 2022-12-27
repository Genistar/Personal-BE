const db = require("../models");
let checkId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let check = await db.Cong_tac_nuoc_ngoai.findOne({
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
let getAllAboardB = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Cong_tac_nuoc_ngoai.findAll({
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
let getAboardBById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let aboardB = await db.Cong_tac_nuoc_ngoai.findOne({
                where: { id: id },
                raw: true,
                nest: true
            })
            if (!aboardB) {
                resolve({
                    errCode: 1,
                    errMessage: 'Không tồn tại id này !!'
                })
            } else {
                resolve(aboardB)
            }
        } catch (e) {
            reject(e)
        }
    })
}
let createNewAboardB = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.fkMaCanBo || !data.ngayDi || !data.ngayVe || !data.quocGia || !data.noiden
                || !data.soPassport || !data.nganhHoc || !data.chiPhiCT || !data.phanTramHuongLuong) {
                resolve({
                    errCode: 1,
                    errMessage: 'Chưa nhập đầy đủ thông tin !!'
                })
            } else {
                await db.Cong_tac_nuoc_ngoai.create({
                    fkMaCanBo: data.fkMaCanBo,
                    ngayDi: data.ngayDi,
                    ngayVe: data.ngayVe,
                    quocGia: data.quocGia,
                    noiden: data.noiden,
                    soPassport: data.soPassport,
                    nganhHoc: data.nganhHoc,
                    chiPhiCT: data.chiPhiCT,
                    phanTramHuongLuong: data.phanTramHuongLuong
                })
                resolve({
                    errCode: 0,
                    errMessage: 'Thêm quá trình công tác nước ngoài thành công'
                })
            }


        } catch (e) {
            reject(e);
        }
    })
}
let updateAboardB = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.fkMaCanBo || !data.ngayDi || !data.ngayVe || !data.quocGia || !data.noiden
                || !data.soPassport || !data.nganhHoc || !data.chiPhiCT || !data.phanTramHuongLuong) {
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
                let aboardB = await db.Cong_tac_nuoc_ngoai.findOne({
                    where: { id: data.id },
                    raw: false
                })
                if (aboardB) {
                    aboardB.fkMaCanBo = data.fkMaCanBo;
                    aboardB.ngayDi = data.ngayDi;
                    aboardB.ngayVe = data.ngayVe;
                    aboardB.quocGia = data.quocGia;
                    aboardB.noiden = data.noiden;
                    aboardB.soPassport = data.soPassport;
                    aboardB.nganhHoc = data.nganhHoc;
                    aboardB.chiPhiCT = data.chiPhiCT;
                    aboardB.phanTramHuongLuong = data.phanTramHuongLuong
                    await aboardB.save();
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
let deleteAboardB = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let AboardB = await db.Cong_tac_nuoc_ngoai.findOne({
                where: { id: id }
            });
            if (!AboardB) {
                resolve({
                    errCode: 2,
                    errMessage: 'Mục công tác này không tồn tại'
                })
            } else {
                await db.Cong_tac_nuoc_ngoai.destroy({
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
let getAllAboardBOfUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Cong_tac_nuoc_ngoai.findAll({
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
    getAllAboardB,
    getAboardBById,
    createNewAboardB,
    updateAboardB,
    deleteAboardB,
    getAllAboardBOfUser
}