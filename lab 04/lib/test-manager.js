const Student = require('./student');

module.exports = class TestManager {

  constructor() {
    this._listSinhVien = [];
  }

  /**
   * Nhập điểm sinh viên
   */
  nhapDiem(name, diem) {
    var sv = new Student(name);
    sv.diem = diem;
    this._listSinhVien.push(sv);
  }

  /**
   * Hiển thị danh sách sv điểm cao
   * @param {number} diem
   */
  printDiemCao(diem = 5) {
    for (const sv of this._listSinhVien) {
      if (sv.diem >= diem) {
        console.log(`Sinh vien: ${sv.name}, diem: ${sv.diem}`);
      }
    }
  }

  getListDiemCao(diem = 5) {
    return this._listSinhVien.filter(x => x.diem >= diem);
  }

}
