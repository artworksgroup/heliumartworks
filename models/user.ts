export default class User {
  public firebase_uid: String;
  public email: String;

  constructor(uid: String, email: String) {
    this.firebase_uid = uid;
    this.email = email;
  }
}
