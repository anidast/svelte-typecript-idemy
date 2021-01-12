import type { Image } from "./image.type";
import type { Material } from "./material.type";

export type Course = {
    id: string;
    name: string;
    description: string;
    image: Image;
    price: number;
    material: Material[];
}