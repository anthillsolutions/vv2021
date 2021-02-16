import { Type } from './type';

export interface Asset {
  id: string;
  title: string;
  slug: string;
  tall?: boolean;
  large?: boolean;
  type: Type;
  work: {
    slug: string;
    title: string;
  };
  asset: {
    alternativeText: string;
    caption: string;
    ext: string;
    height: number;
    width: number;
    url: string;
    formats: {
      large: {
        url: string;
      },
      medium: {
        url: string;
      }
      small: {
        url: string;
      }
      thumbnail: {
        url: string;
      }
    };
  }
}
