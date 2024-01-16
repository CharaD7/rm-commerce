export interface Product {
  name: string;
  price: number;
  slug: { current: string };
  description: string;
  imageUrl: string;
}

export interface ProductId {
  name: string;
  price: number;
  stripeProductId: string;
  description: string;
  slug: { current: string };
  quantity: number;
  image: {
    _key: string;
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  }[];
}
