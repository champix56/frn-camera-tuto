import {IBlob} from './IBlob';

export interface IClient {
  id?: number;
  nom: string;
  prenom: string;
  blobId?: number;
  image?: IBlob;
}
