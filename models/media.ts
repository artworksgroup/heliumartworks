import { AxiosError, AxiosProgressEvent } from "axios";
import { decodeHttpError, http } from "~/plugins/http";

type FileUploadCallback = (uploadPercentage: number) => void;

type MediaAttributes = {
  username: string;
  name: string;
  item_attributes: {};
  categories: Array<string>;
  tags: Array<string>;
  excerpt: string;
  description: string;
  is_currently_free: boolean;
  is_premium: boolean;
  licences: Array<{
    type: string;
    price: number;
  }>;
  type_name: string;
  human_id: string;
  owner_username: string;
  owner_id: number;
  slug: string;
  type: string;
  unique_id: string;
  status: string;
  created_at: string;
  updated_at: string;
  published_at: string;
  deleted_at: string;
  posted_at: string;
  approved_at: string;
  file_size: number;
  cover_image: string;
  thumbnail: string;
  cover_image_urls: Array<string>;
  is_video: boolean;
  cover_video: string;
  is_audio: boolean;
  cover_audio: string;
  made_available_at: string;
  no_of_downloads: number;
  no_of_views: number;
  no_of_likes: number;
  no_of_shares: number;
};

enum MediaTypes {
  Photos,
}

class UploadedMedia {
  public name: string;
  public type: MediaTypes;
  public file?: File;
  public covers?: Array<File>;

  constructor(
    name: string,
    type: MediaTypes,
    file?: File,
    covers?: Array<File>
  ) {
    this.name = name;
    this.type = type;
    this.file = file;
    this.covers = covers;
  }

  /**
   * Upload this media to [helium artworks](https://heliumartworks.com/) server
   */
  up(onUploadProgress?: FileUploadCallback): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.file) {
        const form = new FormData();

        form.append("name", this.name);
        form.append("type", MediaTypes[this.type]);
        form.append("file", this.file);

        // if (this.covers) form.append("covers", this.covers!);

        http
          .post("/medias/upload", form, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            onUploadProgress: (progressEvent: AxiosProgressEvent) =>
              onUploadProgress?.call(
                this,
                Math.round(
                  (progressEvent.loaded /
                    (progressEvent?.total ?? this.file!.size)) *
                    100
                )
              ),
          })
          .then((res) => {
            console.log("🚀 ~ file: media.ts:44 ~ Media ~ .then ~ res:", res);
            resolve();
          })
          .catch((err) => {
            reject(decodeHttpError(err));
          });
      } else
        reject(
          decodeHttpError(
            new AxiosError("A file is required for upload", "INVALID_File")
          )
        );
    });
  }
}

class Media {
  public id: string;
  public attributes: MediaAttributes;

  constructor(id: string, attributes: MediaAttributes) {
    this.id = id;
    this.attributes = attributes;
  }

  /**
   * Feed json raw data in `Media` properties.
   * @param json
   */
  static fromJson(json: Record<string, any>): Media {
    return new Media(json._id, {
      username: json.username,
      name: json.name,
      item_attributes: json.item_attributes,
      categories: json.categories,
      tags: json.tags,
      excerpt: json.excerpt,
      description: json.description,
      is_currently_free: json.is_currently_free,
      is_premium: json.is_premium,
      licences: json.licences,
      type_name: json.type_name,
      human_id: json.human_id,
      owner_username: json.owner_username,
      owner_id: json.owner_id,
      slug: json.slug,
      type: json.type,
      unique_id: json.unique_id,
      status: json.status,
      created_at: json.created_at,
      updated_at: json.updated_at,
      published_at: json.published_at,
      deleted_at: json.deleted_at,
      posted_at: json.posted_at,
      approved_at: json.approved_at,
      file_size: json.file_size,
      cover_image: json.cover_image,
      thumbnail: json.thumbnail,
      cover_image_urls: json.cover_image_urls,
      is_video: json.is_video,
      cover_video: json.cover_video,
      is_audio: json.is_audio,
      cover_audio: json.cover_audio,
      made_available_at: json.made_available_at,
      no_of_downloads: json.no_of_downloads,
      no_of_views: json.no_of_views,
      no_of_likes: json.no_of_likes,
      no_of_shares: json.no_of_shares,
    });
  }

  /**
   * retrieve user medias
   */
  static getAll(): Promise<Array<Media>> {
    return new Promise((resolve, reject) =>
      http
        .get("/medias/")
        .then((res) => {
          resolve(
            (res.data as Array<Record<string, any>>).map((d) =>
              this.fromJson(d)
            )
          );
        })
        .catch((err) => reject(decodeHttpError(err)))
    );
  }
}

export type { FileUploadCallback, MediaAttributes };
export { MediaTypes, UploadedMedia, Media };
