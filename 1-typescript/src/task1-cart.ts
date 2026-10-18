type Product = {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
};

const product1: Product = {
    id: 1,
    name: 'Книга «Чистый код»',
    price: 1200,
    inStock: true,
};

const cartItems: Product[] = [];

function addToCart(product: Product): void {
    cartItems.push(product);
}

addToCart(product1);
console.log('Корзина:', cartItems);

export {};