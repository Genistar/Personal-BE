const db = require("../models");
let checkUser = (BenB) => {
    return new Promise(async (resolve, reject) => {
        try {
            let check = await db.Hop_dong_lao_dong.findOne({
                where: { BenB: BenB }
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
let getAllContract = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Hop_dong_lao_dong.findAll({
                include: [
                    { model: db.Loai_hop_dong },
                    { model: db.Ngach_cong_chuc },
                    { model: db.Chuc_vu },
                    { model: db.Bo_mon },
                    { model: db.Bac_luong },
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
let getContractById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let curtivation = await db.Hop_dong_lao_dong.findOne({
                where: { id: id },
                include: [
                    { model: db.Loai_hop_dong },
                    { model: db.Ngach_cong_chuc },
                    { model: db.Chuc_vu },
                    { model: db.Bo_mon },
                    { model: db.Bac_luong },
                    { model: db.Can_bo_giang_day }
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
let getContractByUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let curtivation = await db.Hop_dong_lao_dong.findOne({
                where: { BenB: id },
                include: [
                    { model: db.Loai_hop_dong },
                    { model: db.Ngach_cong_chuc },
                    { model: db.Chuc_vu },
                    { model: db.Bo_mon },
                    { model: db.Bac_luong },
                    { model: db.Can_bo_giang_day }
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
let createNewContract = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data) {
                resolve({
                    errCode: 1,
                    errMessage: 'Chưa nhập đầy đủ thông tin !!'
                })
            } else {
                let checkU = await checkUser(data.BenB);
                if (checkU === true) {
                    resolve({
                        errCode: 2,
                        errMessage: 'Cán bộ này đã có hợp đồng'
                    })
                } else if (/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(data.benADienThoai) !== true) {
                    resolve({
                        errCode: 3,
                        errMessage: 'Số điện thoại không hợp lệ'
                    })
                } else {
                    await db.Hop_dong_lao_dong.create({
                        benA: data.benA,
                        benAQuocTich: data.benAQuocTich,
                        benAChucVu: data.benAChucVu,
                        benADienThoai: data.benADienThoai,
                        benADaiDienCho: data.benADaiDienCho,
                        BenB: data.BenB,
                        ngheNghiep: data.ngheNghiep,
                        fkMaLoaiHD: data.fkMaLoaiHD,
                        hdTuNgay: data.hdTuNgay,
                        hdDenNgay: data.hdDenNgay,
                        hdFkMaBoMon: data.hdFkMaBoMon,
                        chucDanhChuyenMon: data.chucDanhChuyenMon,
                        fkMaChucVu: data.fkMaChucVu,
                        cvPhaiLam: data.cvPhaiLam,
                        thoiGianLamViec: data.thoiGianLamViec,
                        dCuLamViecCapPhat: data.dCuLamViecCapPhat,
                        phuongTienDiLai: data.phuongTienDiLai,
                        fkIdNgach: data.fkIdNgach,
                        fkIdBac: data.fkIdBac,
                        heSoLuong: data.heSoLuong,
                        hinhThucTraLuong: data.hinhThucTraLuong,
                        phuCapGom: data.phuCapGom,
                        thoiGianTraLuong: data.thoiGianTraLuong,
                        tienThuong: data.tienThuong,
                        cheDoNangLuong: data.cheDoNangLuong,
                        baoHoLDong: data.baoHoLDong,
                        cheDoNghiNgoio: data.cheDoNghiNgoio,
                        bhxhbhyt: data.bhxhbhyt,
                        cheDoDaoTao: data.cheDoDaoTao,
                        quyenLoiDuocHuong: data.quyenLoiDuocHuong,
                        nhungThoaThuanKhac: data.nhungThoaThuanKhac,
                        boiThuong: data.boiThuong,
                        hDLDLamTai: data.hDLDLamTai,
                        ghiChu: data.ghiChu,
                        ngayKy: data.ngayKy,
                        thuViecTuNgay: data.thuViecTuNgay,
                        thuViecDenNgay: data.thuViecDenNgay,
                        c85PhanTram: data.c85PhanTram,
                        soHopDong: data.soHopDong,
                        noiDangKyBHYT: data.noiDangKyBHYT,
                        heSoLuongIn: data.heSoLuongIn,
                        canCu1: data.canCu1,
                        canCu2: data.canCu2,
                        huongKhoanThuong: data.huongKhoanThuong,
                        bhytHDLV: data.bhytHDLV,
                        donViLamViecIn: data.donViLam,
                        giaHan: data.giaHan
                    })
                    resolve({
                        errCode: 0,
                        errMessage: 'Thêm quá trình bồi dưỡng thành công'
                    })
                }
            }


        } catch (e) {
            reject(e);
        }
    })
}
let updateContract = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data) {
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
                let contract = await db.Hop_dong_lao_dong.findOne({
                    where: { id: data.id },
                    raw: false
                })
                if (contract) {
                    contract.benA = data.benA;
                    contract.benAQuocTich = data.benAQuocTich;
                    contract.benAChucVu = data.benAChucVu;
                    contract.benADienThoai = data.benADienThoai;
                    contract.benADaiDienCho = data.benADaiDienCho;
                    contract.benB = data.benB;
                    contract.ngheNghiep = data.ngheNghiep;
                    contract.fkMaLoaiHD = data.fkMaLoaiHD;
                    contract.hdTuNgay = data.hdTuNgay;
                    contract.hdDenNgay = data.hdDenNgay;
                    contract.hdFkMaBoMon = data.hdFkMaBoMon;
                    contract.chucDanhChuyenMon = data.chucDanhChuyenMon;
                    contract.fkMaChucVu = data.fkMaChucVu;
                    contract.cvPhaiLam = data.cvPhaiLam;
                    contract.thoiGianLamViec = data.thoiGianLamViec;
                    contract.dCuLamViecCapPhat = data.dCuLamViecCapPhat;
                    contract.phuongTienDiLai = data.phuongTienDiLai;
                    contract.fkIdNgach = data.fkIdNgach;
                    contract.fkIdBac = data.fkIdBac;
                    contract.heSoLuong = data.heSoLuong;
                    contract.hinhThucTraLuong = data.hinhThucTraLuong;
                    contract.phuCapGom = data.phuCapGom;
                    contract.thoiGianTraLuong = data.thoiGianTraLuong;
                    contract.tienThuong = data.tienThuong;
                    contract.cheDoNangLuong = data.cheDoNangLuong;
                    contract.baoHoLDong = data.baoHoLDong;
                    contract.cheDoNghiNgoio = data.cheDoNghiNgoio;
                    contract.bhxhbhyt = data.bhxhbhyt;
                    contract.cheDoDaoTao = data.cheDoDaoTao;
                    contract.quyenLoiDuocHuong = data.quyenLoiDuocHuong;
                    contract.nhungThoaThuanKhac = data.nhungThoaThuanKhac;
                    contract.boiThuong = data.boiThuong;
                    contract.hDLDLamTai = data.hDLDLamTai;
                    contract.ghiChu = data.ghiChu;
                    contract.ngayKy = data.ngayKy;
                    contract.thuViecTuNgay = data.thuViecTuNgay;
                    contract.thuViecDenNgay = data.thuViecDenNgay;
                    contract.c85PhanTram = data.c85PhanTram;
                    contract.soHopDong = data.soHopDong;
                    contract.noiDangKyBHYT = data.noiDangKyBHYT;
                    contract.heSoLuongIn = data.heSoLuongIn;
                    contract.canCu1 = data.canCu1;
                    contract.canCu2 = data.canCu2;
                    contract.huongKhoanThuong = data.huongKhoanThuong;
                    contract.bhytHDLV = data.bhytHDLV;
                    contract.donViLamViecIn = data.donViLam
                    await contract.save();
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
let updateGiaHan = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.BenB) {
                resolve({
                    errCode: 1,
                    errMessage: 'Không tìm thấy mục hoop dong này!!'
                })
            } else {
                let contract = await db.Hop_dong_lao_dong.findOne({
                    where: { BenB: data.BenB },
                    raw: false
                })
                if (contract) {
                    contract.giaHan = data.giaHan;
                    await contract.save();
                    resolve({
                        errCode: 0,
                        errMessage: 'Gia hạn thành công chờ Admin xác nhận'
                    })
                } else {
                    resolve({
                        errCode: 2,
                        errMessage: 'Mục hợp đồng này không tồn tại !!'
                    })
                }
            }
        } catch (e) {
            reject(e);
        }
    })
}
let updateDateContract = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data) {
                resolve({
                    errCode: 1,
                    errMessage: 'Chưa nhập đầy đủ thông tin !!'
                })
            }
            if (!data.id) {
                resolve({
                    errCode: 1,
                    errMessage: 'Không tìm thấy mục hợp đồng này!!'
                })
            } else {
                let contract = await db.Hop_dong_lao_dong.findOne({
                    where: { id: data.id },
                    raw: false
                })
                if (contract) {
                    contract.giaHan = data.giaHan;
                    contract.hdTuNgay = data.hdTuNgay;
                    contract.hdDenNgay = data.hdDenNgay;
                    contract.ngayKy = data.ngayKy
                    await contract.save();
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
let deleteContract = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let Contract = await db.Hop_dong_lao_dong.findOne({
                where: { id: id }
            });
            if (!Contract) {
                resolve({
                    errCode: 2,
                    errMessage: 'Mục bồi dưỡng này không tồn tại'
                })
            } else {
                await db.Hop_dong_lao_dong.destroy({
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
    getAllContract,
    getContractById,
    createNewContract,
    updateContract,
    deleteContract,
    getContractByUser,
    updateGiaHan,
    updateDateContract

}