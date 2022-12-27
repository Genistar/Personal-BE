const db = require("../models")

let getAllDaily = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Dairy.findAll({
                include: [
                    { model: db.Can_bo_giang_day }
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
let getAllDailyById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Dairy.findOne({
                where: {
                    id: id
                },
                include: [
                    { model: db.Can_bo_giang_day }
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
let createNewDaily = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.ten_hoat_dong || !data.fkMaCanBo || !data.noiDung) {
                resolve({
                    errCode: 1,
                })
            } else {
                await db.Dairy.create({
                    ten_hoat_dong: data.ten_hoat_dong,
                    fkMaCanBo: data.fkMaCanBo,
                    noiDung: data.noiDung
                })
                resolve({
                    errCode: 0,
                })
            }


        } catch (e) {
            reject(e)
        }
    })
}
let updateDaily = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.ten_hoat_dong || !data.fkMaCanBo || !data.noiDung) {
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
                let Daily = await db.Dairy.findOne({
                    where: { id: data.id },
                    raw: false
                })
                if (Daily) {
                    Daily.ten_hoat_dong = data.ten_hoat_dong;
                    Daily.noiDung = data.noiDung;
                    await Daily.save();
                    resolve({
                        errCode: 0,
                        errMessage: 'Cập nhật nhật ký thành công '
                    })
                } else {
                    resolve({
                        errCode: 2,
                        errMessage: `Nhật ký không tồn tại!`
                    })
                }

            }
        } catch (e) {
            reject(e)
        }
    })
}
let deleteDaily = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let Daily = await db.Dairy.findOne({
                where: {
                    id: id
                }
            });
            if (!Daily) {
                resolve({
                    errCode: 2,
                    errMessage: 'Hoạt động này không tồn tại'
                })
            }
            else {
                await db.Dairy.destroy({
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
    getAllDaily,
    getAllDailyById,
    createNewDaily,
    updateDaily,
    deleteDaily
}