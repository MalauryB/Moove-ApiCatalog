import { ShopDto } from "src/dto/ShopDto";
import { Type } from 'class-transformer';

export class ShopEntity{

    @Type(() => ShopDto)
    shops : ShopDto[];
}