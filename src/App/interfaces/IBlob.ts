export interface IBlob {
  id?: number;
  data: string;
  parentRessourceName: string;
  idParent: number;
  ressourceMIME?: 'image/png' | 'image/jpg' | 'text/plain';
}
