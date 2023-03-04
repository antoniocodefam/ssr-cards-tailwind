import { Response } from ".";
import { Photo } from "../interfaces/photos";

export interface PhotosReponse extends Response<Photo[]> {}
