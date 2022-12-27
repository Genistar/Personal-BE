const db = require("../models");

let getAllNationD = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.DM_dan_toc.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                raw: true,
                nest: true
            });
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
let getAllTypeOfTrainingD = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.DM_he_dao_tao.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                raw: true,
                nest: true
            });
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
let getAllCultivationFormD = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.DM_Hinh_Thuc_BD.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                raw: true,
                nest: true
            });
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
let getAllDisciplineD = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.DM_ky_luat.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                raw: true,
                nest: true
            });
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
let getAllReligionD = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.DM_ton_giao.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                raw: true,
                nest: true
            });
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
let getAllRewardD = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.DM_khen_thuong.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                raw: true,
                nest: true
            });
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
let getAllAcademicRank = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Hoc_ham.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                raw: true,
                nest: true
            });
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
let getAllDegree = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Hoc_vi.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                raw: true,
                nest: true
            });
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
let getAllMajors = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Nganh.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                raw: true,
                nest: true
            });
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
let getAllSubject = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Bo_mon.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                raw: true,
                nest: true
            });
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
let getTrainingLevel = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Bac_dao_tao.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                raw: true,
                nest: true
            });
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
let getAllContractType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Loai_hop_dong.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                raw: true,
                nest: true
            });
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
let getAllCivilServantRank = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Ngach_cong_chuc.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                raw: true,
                nest: true
            });
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
let getAllSalaryScale = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Bac_luong.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                raw: true,
                nest: true
            });
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
let getAllPosition = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Chuc_vu.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                raw: true,
                nest: true
            });
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

let getAllRelationShip = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Quan_he.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                raw: true,
                nest: true
            });
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
let getAllTypeOfOfficer = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Loai_can_bo.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                raw: true,
                nest: true
            });
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
    getAllNationD,
    getAllTypeOfTrainingD,
    getAllCultivationFormD,
    getAllRewardD,
    getAllDisciplineD,
    getAllReligionD,
    getAllAcademicRank,
    getAllDegree,
    getAllMajors,
    getAllSubject,
    getTrainingLevel,
    getAllContractType,
    getAllCivilServantRank,
    getAllSalaryScale,
    getAllPosition,
    getAllRelationShip,
    getAllTypeOfOfficer
}