module.exports = class Student {
  constructor(name) {
    this._name = name;
    this._diem = 0;
  }

  /**
   * Get tên sinh viên
   */
  get name() {
    return this._name;
  }

  get diem() {
    return this._diem;
  }

  set diem(value) {
    this._diem = value;
  }
}
