import {IBlob} from './Iblob';

export interface ICar {
  id?: number;
  immat: string;
  marque: string;
  model: string;
  blobId?: number;
  image?: IBlob;
}
export const DUMMY_CAR: ICar = {
  immat: '',
  marque: '',
  model: '',
};
