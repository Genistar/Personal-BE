'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Can_bo_giang_day extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Can_bo_giang_day.belongsTo(models.Hoc_vi, { foreignKey: 'ma_hoc_vi' })
            Can_bo_giang_day.belongsTo(models.Hoc_ham, { foreignKey: 'ma_hoc_ham' })
            Can_bo_giang_day.belongsTo(models.DM_ton_giao, { foreignKey: 'fk_ma_ton_giao' })
            Can_bo_giang_day.belongsTo(models.DM_dan_toc, { foreignKey: 'fk_ma_dan_toc' })
            Can_bo_giang_day.belongsTo(models.Bo_mon, { foreignKey: 'ma_bo_mon' })
            Can_bo_giang_day.belongsTo(models.Loai_can_bo, { foreignKey: 'fk_loai_can_bo' })
            Can_bo_giang_day.belongsTo(models.Chuc_vu, { foreignKey: 'fk_chuc_vu' })
            Can_bo_giang_day.belongsTo(models.Nganh, { foreignKey: 'fk_nganh' })
            Can_bo_giang_day.hasOne(models.User, { foreignKey: 'cbId' })
            Can_bo_giang_day.hasOne(models.Dairy, { foreignKey: 'fkMaCanBo' })
            Can_bo_giang_day.hasOne(models.Qhe_gia_dinh, { foreignKey: 'fkMaCanBo' })
            Can_bo_giang_day.hasOne(models.Hop_dong_lao_dong, { foreignKey: 'BenB' })
        }
    };
    Can_bo_giang_day.init({
        ho: DataTypes.STRING(100),
        ten: DataTypes.STRING(50),
        dia_chi: DataTypes.STRING(200),
        dien_thoai: DataTypes.STRING(40),
        email: DataTypes.STRING(100),
        password: DataTypes.STRING(20),
        ma_hoc_vi: DataTypes.STRING(6),
        ma_hoc_ham: DataTypes.STRING(6),
        phai: DataTypes.BOOLEAN,
        fk_loai_can_bo: DataTypes.STRING(10),
        he_so_luong: DataTypes.STRING(100),
        ma_bo_mon: DataTypes.STRING(10),
        ho_eng: DataTypes.STRING(100),
        ten_eng: DataTypes.STRING(50),
        co_quan_cong_tac: DataTypes.STRING(200),
        chuyen_mon: DataTypes.STRING(400),
        so_cmnd: DataTypes.STRING(12),
        shcc: DataTypes.STRING(6),
        ma_truong: DataTypes.STRING(6),
        ngay_cap: DataTypes.DATE,
        noi_cap: DataTypes.STRING(3),
        so_tai_khoan: DataTypes.STRING(30),
        ngan_hang_mo_tk: DataTypes.STRING(200),
        ngay_cap_nhat: DataTypes.DATE,
        nam_dat_hoc_vi: DataTypes.INTEGER,//real
        noi_dat_hoc_vi: DataTypes.STRING(200),
        nam_phong_hoc_ham: DataTypes.INTEGER,//real
        qg_dat_hoc_vi: DataTypes.STRING(3),
        ngay_sinh: DataTypes.DATE,
        email_2: DataTypes.STRING(100),
        dien_thoai_cn: DataTypes.STRING(20),
        fk_nganh: DataTypes.STRING(8),
        chuyen_nganh: DataTypes.STRING(200),
        ma_so_thue: DataTypes.STRING(10),
        fk_quoc_gia_tk: DataTypes.STRING(3),
        chi_nhanh_ngan_hang: DataTypes.STRING(100),
        fk_tinh_cap_tk: DataTypes.STRING(2),
        nganh_khac: DataTypes.STRING(200),
        trang_thai: DataTypes.BOOLEAN,
        ma_bo_mon_ql: DataTypes.STRING(10),
        nam_nghi_huu: DataTypes.INTEGER,
        nam_bd_cong_tac: DataTypes.INTEGER,
        fk_chuc_vu: DataTypes.STRING(3),
        noi_sinh: DataTypes.STRING(200),
        que_quan: DataTypes.STRING(200),
        chuyen_nganh_tchc: DataTypes.STRING(200),
        nganh_bc_gddt: DataTypes.STRING(200),
        dia_chi_rieng: DataTypes.STRING(400),
        chuyen_mon_bc_bo_gddt: DataTypes.STRING(200),
        fax: DataTypes.STRING(20),
        ten_nguoi_lanh_dao_cq: DataTypes.STRING(100),
        dien_thoai_lanh_dao_cq: DataTypes.STRING(50),
        chuc_danh_nghiem_cuu: DataTypes.STRING(200),
        time_strap: DataTypes.DATE,
        website_co_quan: DataTypes.STRING(200),
        ngach: DataTypes.STRING(10),
        hinh_anh: DataTypes.STRING(200),
        hinh_anh_chu_ky: DataTypes.STRING(100),
        ma_can_bo_dao_tao: DataTypes.STRING(6),
        ngay_duyet: DataTypes.DATE,
        fk_ma_can_bo_update: DataTypes.STRING(60),
        ngay_insert: DataTypes.DATE,
        fk_ma_tinh_trang: DataTypes.STRING(5),
        nuoc_ngoai: DataTypes.INTEGER,//Real
        dien_thoai_nr: DataTypes.STRING(30),
        fk_ma_khoi_nganh: DataTypes.STRING(5),
        tk_hh_hv_sdh: DataTypes.STRING(50),
        khcn_da_create: DataTypes.INTEGER,//real
        fk_ma_dan_toc: DataTypes.STRING(2),
        quoc_tich: DataTypes.STRING(3),
        ngay_vao_truong: DataTypes.DATE,
        ngay_bien_che: DataTypes.DATE,
        so_qs_tuyen_dung_bc: DataTypes.STRING(500),
        fk_ngang_bo_gd: DataTypes.STRING(10),
        fk_ma_ngan_hang: DataTypes.STRING(5),
        ngan_hang_mo_tk_khac: DataTypes.STRING(500),
        moc_tinh_nluong_lan_sau: DataTypes.DATE,
        ma_ngang_ts: DataTypes.STRING(12),
        ma_ngang_th: DataTypes.STRING(12),
        ho_ten_thuong_goi: DataTypes.STRING(100),
        nghe_nghiep_tuyen_dung: DataTypes.STRING(200),
        cong_viec_chinh: DataTypes.STRING(500),
        ngay_vao_dang_chinh_thuc: DataTypes.STRING(12),
        ngay_nhap_ngu: DataTypes.STRING(10),
        ngay_xuat_ngu: DataTypes.STRING(10),
        quan_ham_cao_nhat: DataTypes.STRING(200),
        nang_luc_so_truong_nk: DataTypes.STRING(200),
        tinh_trang_suc_khoe: DataTypes.STRING(200),
        chieu_cao: DataTypes.STRING(100),
        can_nang: DataTypes.STRING(50),
        nhom_mau: DataTypes.STRING(20),
        tgia_qhe_tc_nuoc_ngoai: DataTypes.STRING(400),
        than_nhan_nuoc_ngoai: DataTypes.STRING(400),
        bi_dich_bat_ket_an_tu: DataTypes.STRING(400),
        lam_viec_trong_che_do_cu: DataTypes.STRING(400),
        fk_t_tp_noi_sinh: DataTypes.STRING(3),
        fk_p_x_que_quan: DataTypes.STRING(7),
        fk_p_x_thuong_tru: DataTypes.STRING(7),
        ho_khau_thuong_tru: DataTypes.STRING(200),
        fk_ma_ton_giao: DataTypes.STRING(2),
        fk_ma_tphan_xuat_than: DataTypes.STRING(2),
        fk_ma_dien_utien_gdinh: DataTypes.STRING(2),
        fk_ma_dien_utien_bthan: DataTypes.STRING(2),
        ngay_vao_cqnn: DataTypes.DATE,
        ngay_vao_bien_che: DataTypes.DATE,
        fk_td_pho_thong: DataTypes.STRING(2),
        hvpt_lop: DataTypes.INTEGER,//real
        hvpt_he: DataTypes.INTEGER,//real
        fk_ma_trinh_do_llct: DataTypes.STRING(2),
        fk_ma_trinh_do_qlnn: DataTypes.STRING(2),
        fk_ma_trinh_do_qlgd: DataTypes.STRING(2),
        fk_ma_tdo_tin_hoc: DataTypes.STRING(2),
        so_so_bao_hiem_xa_hoi: DataTypes.STRING(12),
        ngay_bat_dau_dong: DataTypes.DATE,
        ngay_cap_so_bhxh: DataTypes.DATE,
        ten_benh: DataTypes.STRING(100),
        fk_ma_loai_suc_khoe: DataTypes.STRING(1),
        fk_p_x_noi_sinh: DataTypes.STRING(7),
        thuong_binh_hang: DataTypes.STRING(3),
        ngay_vao_dang: DataTypes.STRING(12),
        ngay_vao_doan: DataTypes.STRING(12),
        chung_chi_tieng_dan_toc: DataTypes.STRING(50),
        ngay_nghi_huu: DataTypes.DATE,
        fk_maloai_can_bo: DataTypes.STRING(2),
        fk_nganh_bo_gd_ts: DataTypes.STRING(15),
        noi_cap_cmnd_BLOB: DataTypes.STRING(300),
        lich_su_ban_than: DataTypes.BLOB,
        hoan_canh_gia_dinh: DataTypes.BLOB,
        noi_vao_doan: DataTypes.STRING(200),
        fk_id_ngach: DataTypes.STRING(10),
        tinh_tp: DataTypes.STRING(200),
        xa_phuong: DataTypes.STRING(200),
        quan_huyen: DataTypes.STRING(200)
    }, {
        sequelize,
        modelName: 'Can_bo_giang_day',
    });
    return Can_bo_giang_day;
};