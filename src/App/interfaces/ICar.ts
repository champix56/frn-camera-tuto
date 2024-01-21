import {IBlob} from './Iblob';

export interface ICar {
  id: 1;
  immat: string;
  marque: string;
  model: string;
  blobId?: number;
  image?: IBlob;
}
