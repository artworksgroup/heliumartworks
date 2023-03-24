import { AxiosResponse } from "axios";
import { decodeHttpError, http } from "~/plugins/http";

export default class User {
  public firebase_uid: string;
  public email: string;
  public attributes: {
    id: string;
    full_name: string;
    username: string;
    role: string;
    profile_image?: string;
    background_image?: string;
    balance: number;
    credits: number;
    is_active: boolean;
    is_verified: boolean;
  } | null;

  constructor(uid: string, email: string) {
    this.firebase_uid = uid;
    this.email = email;
    this.attributes = null;
  }

  /**
   * Since this `Firebase.onAuthStateChanged` event is triggered when user login or register,
   * we check if user exist in order to know how to refresh its data.
   * - Creation request if user doesn't exist.
   * - Access user data if user is already registered.
   */
  refresh({ createIfNotFound = false }): Promise<void> {
    return new Promise((resolve, reject) =>
      this.existAtHelium()
        .then((res) => {
          this.fromJson(res.data);
          resolve();
        })
        .catch((err) => {
          // Create a new user
          if (createIfNotFound) {
            this.register().catch((err) => reject(decodeHttpError(err)));
          } else reject(decodeHttpError(err));
        })
    );
  }

  /**
   * Generate unique username
   */
  private generateUsername(): string {
    // Retrieve name from email address
    const nameParts = this.email.replace(/@.+/, "");
    // Replace all special characters like "@ . _ ";
    const name = nameParts.replace(/[&/\\#,+()$~%._@'":*?<>{}]/g, "");
    // Create and return unique username
    return `${name}_${Math.floor(Math.random() * 90000) + 10000}`;
  }

  /**
   * Check if user exist at [helium artworks](https://heliumartworks.com/)
   */
  private existAtHelium(): Promise<AxiosResponse> {
    return new Promise((resolve, reject) =>
      http
        .get(`/users/email/${this.email}`)
        .then((res) => resolve(res))
        .catch((err) => {
          reject(decodeHttpError(err));
        })
    );
  }

  /**
   * Create [helium artworks](https://heliumartworks.com/) account
   */
  private register(): Promise<void> {
    const username = this.generateUsername();

    return new Promise((resolve, reject) =>
      http
        .post("/users/", {
          username,
          full_name: username,
          email: this.email,
          uid: this.firebase_uid,
        })
        .then((res) => {
          this.fromJson(res.data);
          resolve();
        })
        .catch((err) => reject(err))
    );
  }

  /**
   * Feed json raw data in user properties.
   * @param json
   */
  private fromJson(json: Record<string, any>) {
    this.attributes = {
      id: json._id,
      full_name: json.full_name,
      username: json.username,
      role: json.role,
      profile_image: json.profile_image,
      background_image: json.background_image,
      balance: json.balance,
      credits: json.credits,
      is_active: json.is_active,
      is_verified: json.is_verified,
    };
  }
}
