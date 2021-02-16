import { Asset } from './asset';

export interface Work {
  id: string;
  slug: string;
  assets: Asset[];
  description: string;
  title: string;
}
