interface IProduct {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  offer_price: string;
}

export class Product {
  constructor(public products: IProduct) {}
}
