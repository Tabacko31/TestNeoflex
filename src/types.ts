export interface Item {
    id: number;
    name: string;
    price: number;
    image: string;
    rating: number;
}

export interface CartItem extends Item {
    count: number
}