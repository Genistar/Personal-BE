var db = require('../models/index');
const bcrypt = require('bcryptjs/dist/bcrypt');
var salt = bcrypt.genSaltSync(10);
let checkUserEmail = (officerEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let officer = await db.Can_bo_giang_day.findOne({
                where: { email: officerEmail }
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
let checkUserPhoneNumber = (officerPhone) => {
    return new Promise(async (resolve, reject) => {
        try {
            let officer = await db.Can_bo_giang_day.findOne({
                where: { dien_thoai: officerPhone }
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
let checkId = (officerId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let officer = await db.Can_bo_giang_day.findOne({
                where: { id: officerId }
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
let getAllOfficer = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Can_bo_giang_day.findAll({
                attributes: {
                    exclude: ['password', 'image']
                },
                include: [
                    { model: db.Hoc_vi },
                    { model: db.Hoc_ham },
                    { model: db.DM_dan_toc },
                    { model: db.DM_ton_giao },
                    { model: db.Nganh },
                    { model: db.Loai_can_bo },
                    { model: db.Bo_mon }
                ],
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
let getOfficerById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Can_bo_giang_day.findOne({
                where: {
                    id: id
                },
                attributes: {
                    exclude: ['password', 'image']
                },
                include: [
                    { model: db.Hoc_vi },
                    { model: db.Hoc_ham },
                    { model: db.DM_dan_toc },
                    { model: db.DM_ton_giao },
                    { model: db.Nganh },
                    { model: db.Loai_can_bo },
                    { model: db.Bo_mon }
                ],
                raw: true,
                nest: true
            })
            if (data) {
                resolve(data)
            } else {
                resolve('Cán bộ không tồn tại')
            }
        } catch (error) {
            reject(error)
        }
    })
}
let createNewOfficer = (data, file) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.ho || !data.ten || !data.id || !data.dien_thoai || !data.dia_chi) {
                resolve({
                    errCode: 4,
                    errMessage: 'Không nhập đầy đủ',
                })
            } else if (/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(data.dien_thoai) !== true) {
                resolve({
                    errCode: 5,
                    errMessage: 'Không đúng định dạng số điện thoại',
                })
            } else if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(data.email) !== true) {
                resolve({
                    errCode: 6,
                    errMessage: 'Không đúng định dạng email',
                })
            } else {
                let isExistEmail = await checkUserEmail(data.email);
                let isExistPhone = await checkUserPhoneNumber(data.dien_thoai);
                if (isExistEmail) {
                    resolve({
                        errCode: 1,
                        errMessage: 'Your email has exist. Pls try again',
                    })
                } else if (isExistPhone) {
                    resolve({
                        errCode: 2,
                        errMessage: 'Your phone has exist. Pls try different phone number!'
                    })
                } else if (!file.originalname.match(/\.(png|jpg)$/)) {
                    resolve({
                        errCode: 3,
                        errMessage: 'Đây không phải file hình ảnh'
                    })
                } else {
                    await db.Can_bo_giang_day.create({
                        id: data.id,
                        ho: data.ho,
                        ten: data.ten,
                        dia_chi: data.dia_chi,
                        dien_thoai: data.dien_thoai,
                        email: data.email,
                        ma_hoc_vi: data.ma_hoc_vi,
                        ma_hoc_ham: data.ma_hoc_ham,
                        phai: data.phai,
                        fk_loai_can_bo: data.loai_can_bo,
                        ma_bo_mon: data.ma_bo_mon,
                        ngay_sinh: data.ngay_sinh,
                        fk_nganh: data.fk_nganh,
                        noi_sinh: data.noi_sinh,
                        que_quan: data.que_quan,
                        fk_ma_dan_toc: data.ma_dan_toc,
                        fk_ma_ton_giao: data.ma_ton_giao,
                        so_cmnd: data.so_cmnd,
                        ngay_cap: data.ngay_cap,
                        noi_cap: data.noi_cap,
                        chuyen_mon: data.chuyen_mon,
                        hinh_anh: 'src/public/assets/' + file.filename,
                        ngay_vao_truong: data.ngay_vao_truong,
                        tinh_tp: data.tinh_tp,
                        xa_phuong: data.xa_phuong,
                        quan_huyen: data.quan_huyen,
                        co_quan_cong_tac: data.co_quan_cong_tac,
                        shcc: data.shcc,
                        fk_id_ngach: data.fk_id_ngach,
                        quoc_tich: data.quoc_tich,
                        chieu_cao: data.chieu_cao,
                        can_nang: data.can_nang,
                        nhom_mau: data.nhom_mau,
                        tinh_trang_suc_khoe: data.tinh_trang_suc_khoe,
                        fk_chuc_vu: data.fk_chuc_vu,
                        nghe_nghiep_tuyen_dung: data.nghe_nghiep_tuyen_dung,
                        cong_viec_chinh: data.cong_viec_chinh,
                        nang_luc_so_truong_nk: data.nang_luc_so_truong_nk,
                        ngay_vao_dang_chinh_thuc: data.ngay_vao_dang_chinh_thuc,
                        ngay_xuat_ngu: data.ngay_xuat_ngu,
                        ngay_nhap_ngu: data.ngay_nhap_ngu,
                        quan_ham_cao_nhat: data.quan_ham_cao_nhat,
                        nam_dat_hoc_vi: data.nam_dat_hoc_vi,
                        noi_dat_hoc_vi: data.noi_dat_hoc_vi,
                        qg_dat_hoc_vi: data.qg_dat_hoc_vi,
                        nam_phong_hoc_ham: data.nam_phong_hoc_ham,
                        fk_ma_trinh_do_llct: data.fk_ma_trinh_do_llct,
                        fk_td_pho_thong: data.fk_td_pho_thong,
                        fk_ma_trinh_do_qlnn: data.fk_ma_trinh_do_qlnn,
                        fk_ma_trinh_do_qlgd: data.fk_ma_trinh_do_qlgd,
                        hvpt_lop: data.hvpt_lop,
                        hvpt_he: data.hvpt_he,
                        fk_ma_tdo_tin_hoc: data.fk_ma_tdo_tin_hoc,
                        chung_chi_tieng_dan_toc: data.chung_chi_tieng_dan_toc
                    })

                    resolve({
                        errCode: 0,
                        errMessage: 'Thêm cán bộ thành công',
                    })
                }
            }

        } catch (e) {
            reject(e)
        }
    })
}
let deleteOfficer = (officerId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let officer = await db.Can_bo_giang_day.findOne({
                where: {
                    id: officerId
                }
            });
            if (!officer) {
                resolve({
                    errCode: 2,
                    errMessage: `This officer isn't exist!`
                })
            } else {
                await db.Can_bo_giang_day.destroy({
                    where: {
                        id: officerId
                    }
                })
                resolve({
                    errCode: 0,
                    errMessage: 'Officer is deleted'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}
let updateOfficer = (data, file) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 1,
                    errMessage: `Missing required parameter!`
                })
            } else {
                let officer = await db.Can_bo_giang_day.findOne({
                    where: { id: data.id },
                    raw: false
                })
                if (officer) {
                    officer.ho = data.ho;
                    officer.ten = data.ten;
                    officer.dia_chi = data.dia_chi;
                    officer.noi_sinh = data.noi_sinh;
                    officer.tinh_tp = data.tinh_tp;
                    officer.xa_phuong = data.xa_phuong ? data.xa_phuong : officer.xa_phuong;
                    officer.quan_huyen = data.quan_huyen ? data.quan_huyen : officer.quan_huyen;
                    officer.que_quan = data.que_quan ? data.que_quan : officer.que_quan;
                    officer.hinh_anh = !file ? officer.hinh_anh : 'src/public/assets/' + file.filename;
                    officer.dien_thoai = data.dien_thoai;
                    officer.email = data.email;
                    officer.ma_hoc_vi = data.ma_hoc_vi;
                    officer.ma_hoc_ham = data.ma_hoc_ham;
                    officer.phai = data.phai;
                    officer.fk_loai_can_bo = data.loai_can_bo;
                    officer.ma_bo_mon = data.ma_bo_mon;
                    officer.ngay_sinh = data.ngay_sinh;
                    officer.fk_nganh = data.fk_nganh;
                    officer.fk_ma_dan_toc = data.fk_ma_dan_toc;
                    officer.fk_ma_ton_giao = data.fk_ma_ton_giao;
                    officer.so_cmnd = data.so_cmnd;
                    officer.ngay_cap = data.ngay_cap;
                    officer.noi_cap = data.noi_cap;
                    officer.chuyen_mon = data.chuyen_mon;
                    officer.ngay_vao_truong = data.ngay_vao_truong;
                    officer.co_quan_cong_tac = data.co_quan_cong_tac;
                    officer.shcc = data.shcc;
                    officer.fk_id_ngach = data.fk_id_ngach;
                    officer.quoc_tich = data.quoc_tich;
                    officer.chieu_cao = data.chieu_cao;
                    officer.can_nang = data.can_nang;
                    officer.nhom_mau = data.nhom_mau;
                    officer.tinh_trang_suc_khoe = data.tinh_trang_suc_khoe;
                    officer.fk_chuc_vu = data.fk_chuc_vu;
                    officer.nghe_nghiep_tuyen_dung = data.nghe_nghiep_tuyen_dung;
                    officer.cong_viec_chinh = data.cong_viec_chinh;
                    officer.nang_luc_so_truong_nk = data.nang_luc_so_truong_nk;
                    officer.ngay_vao_dang_chinh_thuc = data.ngay_vao_dang_chinh_thuc;
                    officer.ngay_vao_dang = data.ngay_vao_dang;
                    officer.ngay_vao_doan = data.ngay_vao_doan;
                    officer.ngay_xuat_ngu = data.ngay_xuat_ngu;
                    officer.ngay_nhap_ngu = data.ngay_nhap_ngu;
                    officer.quan_ham_cao_nhat = data.quan_ham_cao_nhat;
                    officer.nam_dat_hoc_vi = data.nam_dat_hoc_vi;
                    officer.noi_dat_hoc_vi = data.noi_dat_hoc_vi;
                    officer.qg_dat_hoc_vi = data.qg_dat_hoc_vi;
                    officer.nam_phong_hoc_ham = data.nam_phong_hoc_ham;
                    officer.fk_ma_trinh_do_llct = data.fk_ma_trinh_do_llct;
                    officer.fk_td_pho_thong = data.fk_td_pho_thong;
                    officer.fk_ma_trinh_do_qlnn = data.fk_ma_trinh_do_qlnn;
                    officer.fk_ma_trinh_do_qlgd = data.fk_ma_trinh_do_qlgd;
                    officer.hvpt_lop = data.hvpt_lop;
                    officer.hvpt_he = data.hvpt_he;
                    officer.fk_ma_tdo_tin_hoc = data.fk_ma_tdo_tin_hoc;
                    officer.chung_chi_tieng_dan_toc = data.chung_chi_tieng_dan_toc
                    await officer.save();
                    resolve({
                        errCode: 0,
                        errMessage: 'Update successed'
                    })
                } else {
                    resolve({
                        errCode: 2,
                        errMessage: `Officer isn't exist!`
                    })
                }
            }


        }
        catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    getAllOfficer: getAllOfficer,
    createNewOfficer: createNewOfficer,
    deleteOfficer: deleteOfficer,
    updateOfficer: updateOfficer,
    getOfficerById: getOfficerById

}