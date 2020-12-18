import type { Image } from "./image.type";

export type Course = {
    name: string;
    description: string;
    image: Image;
    price: number;
}