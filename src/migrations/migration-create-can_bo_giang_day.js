'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Can_bo_giang_days', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING(6)
            },
            ho: {
                type: Sequelize.STRING(100)
            },
            ten: {
                type: Sequelize.STRING(50)
            },
            dia_chi: {
                type: Sequelize.STRING(200)
            },
            dien_thoai: {
                type: Sequelize.STRING(40)
            },
            email: {
                type: Sequelize.STRING(100)
            },
            password: {
                type: Sequelize.STRING(20)
            },
            ma_hoc_vi: {
                type: Sequelize.STRING(6)
            },
            ma_hoc_ham: {
                type: Sequelize.STRING(6)
            },
            phai: {
                type: Sequelize.BOOLEAN
            },
            fk_loai_can_bo: {
                type: Sequelize.STRING(10)
            },
            he_so_luong: {
                type: Sequelize.STRING(100)
            },
            ma_bo_mon: {
                type: Sequelize.STRING(10)
            },
            ho_eng: {
                type: Sequelize.STRING(100)
            },
            ten_eng: {
                type: Sequelize.STRING(50)
            },
            co_quan_cong_tac: {
                type: Sequelize.STRING(200)
            },
            chuyen_mon: {
                type: Sequelize.STRING(400)
            },
            so_cmnd: {
                type: Sequelize.STRING(12)
            },
            shcc: {
                type: Sequelize.STRING(6)
            },
            ma_truong: {
                type: Sequelize.STRING(6)
            },
            ngay_cap: {
                type: Sequelize.DATE
            },
            noi_cap: {
                type: Sequelize.STRING(3)
            },
            so_tai_khoan: {
                type: Sequelize.STRING(30)
            },
            ngan_hang_mo_tk: {
                type: Sequelize.STRING(200)
            },
            ngay_cap_nhat: {
                type: Sequelize.DATE
            },
            nam_dat_hoc_vi: {
                type: Sequelize.INTEGER
            },//real
            noi_dat_hoc_vi: {
                type: Sequelize.STRING(200)
            },
            nam_phong_hoc_ham: {
                type: Sequelize.INTEGER
            },//real
            qg_dat_hoc_vi: {
                type: Sequelize.STRING(3)
            },
            ngay_sinh: {
                type: Sequelize.DATE
            },
            email_2: {
                type: Sequelize.STRING(100)
            },
            dien_thoai_cn: {
                type: Sequelize.STRING(20)
            },
            fk_nganh: {
                type: Sequelize.STRING(8)
            },
            chuyen_nganh: {
                type: Sequelize.STRING(200)
            },
            ma_so_thue: {
                type: Sequelize.STRING(10)
            },
            fk_quoc_gia_tk: {
                type: Sequelize.STRING(3)
            },
            chi_nhanh_ngan_hang: {
                type: Sequelize.STRING(100)
            },
            fk_tinh_cap_tk: {
                type: Sequelize.STRING(2)
            },
            nganh_khac: {
                type: Sequelize.STRING(200)
            },
            trang_thai: {
                type: Sequelize.BOOLEAN
            },
            ma_bo_mon_ql: {
                type: Sequelize.STRING(10)
            },
            nam_nghi_huu: {
                type: Sequelize.INTEGER
            },
            nam_bd_cong_tac: {
                type: Sequelize.INTEGER
            },
            fk_chuc_vu: {
                type: Sequelize.STRING(3)
            },
            noi_sinh: {
                type: Sequelize.STRING
            },
            que_quan: {
                type: Sequelize.STRING(200)
            },
            chuyen_nganh_tchc: {
                type: Sequelize.STRING(200)
            },
            nganh_bc_gddt: {
                type: Sequelize.STRING(200)
            },
            dia_chi_rieng: {
                type: Sequelize.STRING(400)
            },
            chuyen_mon_bc_bo_gddt: {
                type: Sequelize.STRING(200)
            },
            fax: {
                type: Sequelize.STRING(20)
            },
            ten_nguoi_lanh_dao_cq: {
                type: Sequelize.STRING(100)
            },
            dien_thoai_lanh_dao_cq: {
                type: Sequelize.STRING(50)
            },
            chuc_danh_nghiem_cuu: {
                type: Sequelize.STRING(200)
            },
            time_strap: {
                type: Sequelize.DATE
            },
            website_co_quan: {
                type: Sequelize.STRING(200)
            },
            ngach: {
                type: Sequelize.STRING(10)
            },
            hinh_anh: {
                type: Sequelize.STRING(100)
            },
            hinh_anh_chu_ky: {
                type: Sequelize.STRING(100)
            },
            ma_can_bo_dao_tao: {
                type: Sequelize.STRING(6)
            },
            ngay_duyet: {
                type: Sequelize.DATE
            },
            fk_ma_can_bo_update: {
                type: Sequelize.STRING(60)
            },
            ngay_insert: {
                type: Sequelize.DATE
            },
            fk_ma_tinh_trang: {
                type: Sequelize.STRING(5)
            },
            nuoc_ngoai: {
                type: Sequelize.INTEGER
            },//Real
            dien_thoai_nr: {
                type: Sequelize.STRING(30)
            },
            fk_ma_khoi_nganh: {
                type: Sequelize.STRING(5)
            },
            tk_hh_hv_sdh: {
                type: Sequelize.STRING(50)
            },
            khcn_da_create: {
                type: Sequelize.INTEGER
            },//real
            fk_ma_dan_toc: {
                type: Sequelize.STRING(2)
            },
            quoc_tich: {
                type: Sequelize.STRING(3)
            },
            ngay_vao_truong: {
                type: Sequelize.DATE
            },
            ngay_bien_che: {
                type: Sequelize.DATE
            },
            so_qs_tuyen_dung_bc: {
                type: Sequelize.STRING(500)
            },
            fk_ngang_bo_gd: {
                type: Sequelize.STRING(10)
            },
            fk_ma_ngan_hang: {
                type: Sequelize.STRING(5)
            },
            ngan_hang_mo_tk_khac: {
                type: Sequelize.STRING(500)
            },
            moc_tinh_nluong_lan_sau: {
                type: Sequelize.DATE
            },
            ma_ngang_ts: {
                type: Sequelize.STRING(12)
            },
            ma_ngang_th: {
                type: Sequelize.STRING(12)
            },
            ho_ten_thuong_goi: {
                type: Sequelize.STRING(100)
            },
            nghe_nghiep_tuyen_dung: {
                type: Sequelize.STRING(200)
            },
            cong_viec_chinh: {
                type: Sequelize.STRING(500)
            },
            ngay_vao_dang_chinh_thuc: {
                type: Sequelize.STRING(12)
            },
            ngay_nhap_ngu: {
                type: Sequelize.STRING(10)
            },
            ngay_xuat_ngu: {
                type: Sequelize.STRING(10)
            },
            quan_ham_cao_nhat: {
                type: Sequelize.STRING(200)
            },
            nang_luc_so_truong_nk: {
                type: Sequelize.STRING(200)
            },
            tinh_trang_suc_khoe: {
                type: Sequelize.STRING(200)
            },
            chieu_cao: {
                type: Sequelize.STRING(100)
            },
            can_nang: {
                type: Sequelize.STRING(50)
            },
            nhom_mau: {
                type: Sequelize.STRING(20)
            },
            tgia_qhe_tc_nuoc_ngoai: {
                type: Sequelize.STRING(400)
            },
            than_nhan_nuoc_ngoai: {
                type: Sequelize.STRING(400)
            },
            bi_dich_bat_ket_an_tu: {
                type: Sequelize.STRING(400)
            },
            lam_viec_trong_che_do_cu: {
                type: Sequelize.STRING(400)
            },
            fk_t_tp_noi_sinh: {
                type: Sequelize.STRING(3)
            },
            fk_p_x_que_quan: {
                type: Sequelize.STRING(7)
            },
            fk_p_x_thuong_tru: {
                type: Sequelize.STRING(7)
            },
            ho_khau_thuong_tru: {
                type: Sequelize.STRING(200)
            },
            fk_ma_ton_giao: {
                type: Sequelize.STRING(2)
            },
            fk_ma_tphan_xuat_than: {
                type: Sequelize.STRING(2)
            },
            fk_ma_dien_utien_gdinh: {
                type: Sequelize.STRING(2)
            },
            fk_ma_dien_utien_bthan: {
                type: Sequelize.STRING(2)
            },
            ngay_vao_cqnn: {
                type: Sequelize.DATE
            },
            ngay_vao_bien_che: {
                type: Sequelize.DATE
            },
            fk_td_pho_thong: {
                type: Sequelize.STRING(2)
            },
            hvpt_lop: {
                type: Sequelize.INTEGER
            },//real
            hvpt_he: {
                type: Sequelize.INTEGER
            },//real
            fk_ma_trinh_do_llct: {
                type: Sequelize.STRING(2)
            },
            fk_ma_trinh_do_qlnn: {
                type: Sequelize.STRING(2)
            },
            fk_ma_trinh_do_qlgd: {
                type: Sequelize.STRING(2)
            },
            fk_ma_tdo_tin_hoc: {
                type: Sequelize.STRING(2)
            },
            so_so_bao_hiem_xa_hoi: {
                type: Sequelize.STRING(12)
            },
            ngay_bat_dau_dong: {
                type: Sequelize.DATE
            },
            ngay_cap_so_bhxh: {
                type: Sequelize.DATE
            },
            ten_benh: {
                type: Sequelize.STRING(100)
            },
            fk_ma_loai_suc_khoe: {
                type: Sequelize.STRING(1)
            },
            fk_p_x_noi_sinh: {
                type: Sequelize.STRING(7)
            },
            thuong_binh_hang: {
                type: Sequelize.STRING(3)
            },
            ngay_vao_dang: {
                type: Sequelize.STRING(12)
            },
            ngay_vao_doan: {
                type: Sequelize.STRING(12)
            },
            chung_chi_tieng_dan_toc: {
                type: Sequelize.STRING(50)
            },
            ngay_nghi_huu: {
                type: Sequelize.DATE
            },
            fk_maloai_can_bo: {
                type: Sequelize.STRING(2)
            },
            fk_nganh_bo_gd_ts: {
                type: Sequelize.STRING(15)
            },
            noi_cap_cmnd_BLOB: {
                type: Sequelize.STRING(300)
            },
            lich_su_ban_than: {
                type: Sequelize.BLOB
            },
            hoan_canh_gia_dinh: {
                type: Sequelize.BLOB
            },
            noi_vao_doan: {
                type: Sequelize.STRING(200)
            },
            fk_id_ngach: {
                type: Sequelize.STRING(10)
            },
            tinh_tp: { type: Sequelize.STRING(200) },
            xa_phuong: { type: Sequelize.STRING(200) },
            quan_huyen: { type: Sequelize.STRING(200) },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },

            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Can_bo_giang_days');
    }
};