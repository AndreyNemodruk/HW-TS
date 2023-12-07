import { products } from "./productsData";

interface IProduct {
  id: number;
  name: string;
  price: number;
}

class Product {
  public id: number;
  public name: string;
  public price: number;

  constructor({ id, name, price }: IProduct) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  printProductInfo() {
    console.log(
      `Product info: id: ${this.id}, name: ${this.name}, price: ${this.price}`
    );
  }
}

class ProductCollection {
  private products: Product[] = [];

  add(product: Product) {
    this.products.push(product);
  }

  createIterator() {
    return new ProductIterator(this.products);
  }
}

interface IIterator {
  next(): Product;
  hasNext(): boolean;
}

class ProductIterator implements IIterator {
  private index: number = 0;
  collection: Product[];

  constructor(collection: Product[]) {
    this.collection = collection;
  }

  next(): Product {
    return this.collection[this.index++];
  }
  hasNext(): boolean {
    return this.index < this.collection.length;
  }
}

const productCollection = new ProductCollection();
products.forEach((i) => productCollection.add(new Product(i)));

const iterator = productCollection.createIterator();

while (iterator.hasNext()) {
  iterator.next().printProductInfo();
}
